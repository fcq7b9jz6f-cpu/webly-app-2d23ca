import { create } from "zustand";

const useAuthStore = create((set) => {
  // Check default session from window.__SUPABASE__
  let initUser = null;
  if (window.__SUPABASE__) {
    // Sync blocking fetch or rely on listener
    window.__SUPABASE__.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        set({ user: data.session.user, isAuthenticated: true, isLoading: false });
      } else {
        set({ isLoading: false });
      }
    });
  }

  return {
    user: initUser,
    isAuthenticated: !!initUser,
    isLoading: true, // initial state while checking session
    setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
    signOut: async () => {
      if (window.__SUPABASE__) {
        await window.__SUPABASE__.auth.signOut();
      }
      set({ user: null, isAuthenticated: false });
    },
  };
});

// Setup listener
if (window.__SUPABASE__) {
  window.__SUPABASE__.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      useAuthStore.getState().setUser(session.user);
    } else {
      useAuthStore.getState().setUser(null);
    }
  });
}

export default useAuthStore;
