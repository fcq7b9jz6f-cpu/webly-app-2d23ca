
import { create } from 'zustand';

// Assume supabase object is available. In Webly env, it's `window.__SUPABASE__`
const supabase = window.__SUPABASE__;

const useAuthStore = create((set, get) => ({
  user: null,
  session: null,
  loading: true,

  // Fetch user session on initialization
  initialize: () => {
    if (!supabase) {
      console.warn("Supabase is not available. Auth features will be disabled.");
      set({ loading: false });
      return;
    }
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      set({ session, user: session?.user ?? null, loading: false });
    });

    // Listen for auth state changes (login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        set({ session, user: session?.user ?? null });
      }
    );

    // Return the unsubscribe function for cleanup
    return () => {
      subscription?.unsubscribe();
    };
  },

  // signOut function
  signOut: async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    } else {
      // The onAuthStateChange listener will handle setting user to null
    }
  },

  // Helper to check if user is logged in
  isLoggedIn: () => {
    return get().user !== null;
  }
}));

// Initialize the store and listener immediately when this file is imported
useAuthStore.getState().initialize();

export default useAuthStore;
