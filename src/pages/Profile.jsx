import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { User, Mail, LogOut, ShoppingBag, Settings } from 'lucide-react';

const Profile = () => {
  const { user, session, loading, signOut } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // If loading is finished and there is no user, redirect to login
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await signOut();
    navigate('/'); // Redirect to home page after logout
  };

  // Display a loading state while session is being fetched
  if (loading) {
    return (
      <div className="bg-zinc-950 text-white min-h-screen flex items-center justify-center">
        <p className="text-2xl animate-pulse">جاري تحميل ملفك الشخصي...</p>
      </div>
    );
  }

  // This should theoretically not be reached if the useEffect redirect works,
  // but it's a good fallback.
  if (!user) {
    return null;
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              ملفي الشخصي
            </h1>
            <p className="mt-4 text-xl text-zinc-400">مرحباً بك مجدداً، {user.user_metadata?.full_name || user.email}!</p>
          </div>

          <div className="bg-black border border-violet-500/30 rounded-3xl shadow-lg shadow-violet-500/10 p-8 space-y-8">
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-zinc-800 p-3 rounded-full">
                   <User className="text-violet-400" size={24} />
                </div>
                <div>
                    <p className="text-zinc-500">الاسم الكامل</p>
                    <p className="text-lg font-semibold">{user.user_metadata?.full_name || 'N/A'}</p>
                </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-zinc-800 p-3 rounded-full">
                    <Mail className="text-violet-400" size={24} />
                </div>
                <div>
                    <p className="text-zinc-500">البريد الإلكتروني</p>
                    <p className="text-lg font-semibold">{user.email}</p>
                </div>
            </div>
            
             <div className="border-t border-zinc-700/50"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800/70 transition-colors cursor-pointer">
                    <ShoppingBag className="mx-auto mb-2 text-fuchsia-400" size={32}/>
                    <h3 className="text-lg font-bold">طلباتي</h3>
                    <p className="text-zinc-400 text-sm">عرض سجل الطلبات</p>
                </div>
                 <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800/70 transition-colors cursor-pointer">
                    <Settings className="mx-auto mb-2 text-fuchsia-400" size={32}/>
                    <h3 className="text-lg font-bold">إعدادات الحساب</h3>
                    <p className="text-zinc-400 text-sm">تعديل بيانات الحساب</p>
                </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 text-lg font-bold rounded-full px-8 py-4 bg-red-600/20 border border-red-500/50 text-red-300 hover:bg-red-500/40 hover:text-white transition-all duration-300">
                <LogOut size={22} />
                <span>تسجيل الخروج</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
