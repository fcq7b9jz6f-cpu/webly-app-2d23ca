import { create } from 'zustand';

// تصدير باسم محدد لتجنب مشاكل default export في بعض البيئات
export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  
  init: async () => {
    // التأكد من وجود Supabase في النافذة
    const supabase = window.__SUPABASE__;
    if (!supabase) {
      console.warn("Supabase is not initialized. Please connect Supabase in the dashboard.");
      set({ loading: false });
      return;
    }

    try {
      // الحصول على الجلسة الحالية
      const { data: { session } } = await supabase.auth.getSession();
      set({ user: session?.user ?? null, loading: false });

      // الاستماع لتغييرات حالة تسجيل الدخول
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ user: session?.user ?? null, loading: false });
      });
    } catch (error) {
      console.error("Auth initialization error:", error);
      set({ loading: false });
    }
  },

  signOut: async () => {
    const supabase = window.__SUPABASE__;
    if (supabase) {
      await supabase.auth.signOut();
      set({ user: null });
    }
  }
}));