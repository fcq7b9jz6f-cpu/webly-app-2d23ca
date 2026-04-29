import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (!window.__SUPABASE__) {
                throw new Error("لم يتم تكوين قاعدة البيانات (Supabase). يرجى ربط الخدمة من 'اتصالات'.");
            }
            
            const { error: signInError } = await window.__SUPABASE__.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) throw signInError;
            
            navigate('/profile');
        } catch (err) {
            setError(err.message || 'حدث خطأ أثناء تسجيل الدخول');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pt-28 pb-20 px-4 flex items-center justify-center">
            <div className="max-w-md w-full bg-zinc-950 p-8 rounded-3xl border border-white/10 shadow-2xl">
                <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                    <ArrowRight size={20} className="ml-2" /> العودة للرئيسية
                </Link>
                
                <h2 className="text-3xl font-black text-white mb-2">تسجيل الدخول</h2>
                <p className="text-gray-400 mb-8">مرحباً بعودتك! أدخل بياناتك للوصول لحسابك.</p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">البريد الإلكتروني</label>
                        <div className="relative">
                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:border-violet-500 outline-none transition-colors"
                                placeholder="name@example.com"
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-300 mb-2">كلمة المرور</label>
                        <div className="relative">
                            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pr-12 pl-4 text-white focus:border-violet-500 outline-none transition-colors"
                                placeholder="••••••••"
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center items-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : 'دخول'}
                    </button>
                </form>

                <p className="mt-8 text-center text-gray-400">
                    ليس لديك حساب؟{' '}
                    <Link to="/signup" className="text-violet-400 hover:text-violet-300 font-bold">
                        إنشاء حساب جديد
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
