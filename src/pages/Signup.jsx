import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Loader2, AlertCircle } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = window.__SUPABASE__;
    if (!supabase) {
      setError("الرجاء ربط Supabase من إعدادات المشروع أولاً");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("كلمات المرور غير متطابقة");
      setLoading(false);
      return;
    }

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
          }
        }
      });

      if (authError) throw authError;
      
      alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-fuchsia-500/10 rounded-2xl mb-4 text-fuchsia-400">
              <UserPlus size={32} />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">عضوية جديدة</h1>
            <p className="text-zinc-400">انضم لعالم الأناقة واستمتع بمزايا حصرية</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3 text-red-400 text-sm">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-zinc-300 mb-2 mr-1">الاسم الكامل</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                  placeholder="اكتب اسمك هنا"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-300 mb-2 mr-1">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 mr-1">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-300 mb-2 mr-1">تأكيد الكلمة</label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-black py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'إنشاء الحساب'}
            </button>
          </form>

          <div className="mt-8 text-center text-zinc-400 text-sm">
            بإنشائك حساباً، أنت توافق على{' '}
            <Link to="/legal/terms" className="text-fuchsia-400 hover:text-fuchsia-300 underline font-bold">شروط الخدمة</Link>
          </div>

          <div className="mt-6 text-center text-zinc-400">
            لديك حساب بالفعل؟{' '}
            <Link to="/login" className="text-white font-black hover:text-fuchsia-400 transition-colors">تسجيل دخول</Link>
          </div>
        </div>
      </div>
    </div>
  );
}