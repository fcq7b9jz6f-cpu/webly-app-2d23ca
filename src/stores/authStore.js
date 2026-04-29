import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  
  init: async () => {
    const supabase = window.__SUPABASE__;
    if (!supabase) return set({ loading: false });

    // Get current session
    const { data: { session } } = await supabase.auth.getSession();
    set({ user: session?.user ?? null, loading: false });

    // Listen for changes
    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null, loading: false });
    });
  },

  signOut: async () => {
    const supabase = window.__SUPABASE__;
    if (supabase) {
      await supabase.auth.signOut();
      set({ user: null });
    }
  }
}));
