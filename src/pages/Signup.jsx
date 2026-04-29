
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, User, KeyRound } from 'lucide-react';

// 仮にsupabaseオブジェクトがあると仮定します。Webly環境では `window.__SUPABASE__` として提供されます。
const supabase = window.__SUPABASE__;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!supabase) {
        setError("Supabase is not available. Please connect your Supabase account.");
        return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
          }
        }
      });

      if (error) {
        throw error;
      }
      
      // On Supabase, a confirmation email is sent by default.
      // We can navigate the user to a page telling them to check their email.
      // For this example, we'll just navigate to login with a success message.
      navigate('/login?status=signup_success');

    } catch (error) {
      setError(error.message || "An error occurred during sign up.");
      console.error("Signup Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-black border border-violet-500/30 rounded-3xl shadow-lg shadow-violet-500/10 p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
               <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">أناقة</h1>
          </Link>
          <h2 className="text-4xl font-extrabold tracking-tight">أنشئ حساباً جديداً</h2>
          <p className="mt-3 text-zinc-400">انضم إلى عالم الأناقة وابدأ رحلة تسوق فريدة.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
           {error && <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded-lg text-center">{error}</div>}

          <div className="relative">
            <User className="absolute top-1/2 -translate-y-1/2 right-4 text-zinc-500" size={20} />
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              required
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute top-1/2 -translate-y-1/2 right-4 text-zinc-500" size={20} />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              required
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition-all"
            />
          </div>

          <div className="relative">
            <KeyRound className="absolute top-1/2 -translate-y-1/2 right-4 text-zinc-500" size={20} />
            <input
              type="password"
              name="password"
              placeholder="كلمة المرور"
              required
              minLength="6"
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition-all"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-lg font-bold rounded-full px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-fuchsia-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'جاري الإنشاء...' : 'إنشاء حساب'}
            </button>
          </div>
        </form>
        
        <p className="mt-8 text-center text-zinc-400">
          لديك حساب بالفعل؟{' '}
          <Link to="/login" className="font-semibold text-violet-400 hover:text-violet-300 transition-colors">
            سجل الدخول من هنا
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
