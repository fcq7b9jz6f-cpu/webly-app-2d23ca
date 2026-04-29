import React from 'react';
import useAuthStore from '../stores/authStore';
import { User, Mail, Package, MapPin, Calendar, Clock } from 'lucide-react';

const Profile = () => {
    const { user, signOut } = useAuthStore();

    if (!user) return null; // يتم التعامل معها في ProtectedRoute

    return (
        <div className="min-h-screen bg-black pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
                            حسابي
                        </h1>
                        <p className="mt-2 text-gray-400">مرحباً بك، أدر بياناتك وتتبع طلباتك من هنا.</p>
                    </div>
                    <button 
                        onClick={signOut}
                        className="bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-2 rounded-full font-bold hover:bg-red-500 hover:text-white transition-colors"
                    >
                        تسجيل الخروج
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* User Info Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8">
                            <div className="w-24 h-24 bg-zinc-900 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-violet-500/30">
                                <User size={40} className="text-violet-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-center text-white mb-6">
                                {user.user_metadata?.full_name || 'مستخدم'}
                            </h2>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-400">
                                    <Mail className="text-violet-500" size={20} />
                                    <span dir="ltr">{user.email}</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <MapPin className="text-violet-500" size={20} />
                                    <span>لم يتم إضافة عنوان</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <Calendar className="text-violet-500" size={20} />
                                    <span>تاريخ الانضمام: {new Date(user.created_at).toLocaleDateString('ar-EG')}</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                                تعديل البيانات
                            </button>
                        </div>
                    </div>

                    {/* Orders Status */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold flex items-center gap-3">
                                    <Package className="text-fuchsia-500" /> طلباتي الأخيرة
                                </h3>
                            </div>
                            
                            {/* Placeholder for orders */}
                            <div className="text-center py-12 px-4 border-2 border-dashed border-white/10 rounded-2xl">
                                <Package className="mx-auto text-gray-600 mb-4" size={48} />
                                <h4 className="text-xl font-bold text-gray-300 mb-2">لا توجد طلبات بعد</h4>
                                <p className="text-gray-500 mb-6">يبدو أنك لم تقم بأي عملية شراء حتى الآن.</p>
                                <Link to="/products" className="inline-block bg-violet-600 text-white px-8 py-3 rounded-full font-bold hover:bg-violet-700 transition-colors">
                                    ابدأ التسوق
                                </Link>
                            </div>
                        </div>

                        {/* Addresses/Settings */}
                        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8">
                             <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                 <Clock className="text-sky-500" /> نشاط الحساب
                             </h3>
                             <p className="text-gray-400">آخر تسجيل دخول تم بنجاح من هذا الجهاز.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// We handle Link import inside the component
import { Link } from 'react-router-dom';

export default Profile;
