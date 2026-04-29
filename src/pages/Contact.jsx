import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('جارٍ الإرسال...');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const resp = await fetch('/api/data/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, date: new Date().toISOString() })
            });
            if (resp.ok) {
                setStatus('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
                e.target.reset();
            }
        } catch (error) {
            setStatus('حدث خطأ، يرجى المحاولة مرة أخرى.');
        }
    };

    return (
        <div className="bg-black text-white min-h-screen pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-6xl md:text-7xl font-black mb-8 italic tracking-tighter">
                                لنتحدث <span className="text-purple-500">موضة.</span>
                            </h1>
                            <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
                                هل لديك استفسار عن مقاس معين؟ أو ترغب في تتبع طلبك؟ فريقنا جاهز لمساعدتك في أي وقت.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-purple-400 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-500 font-bold uppercase text-xs tracking-widest mb-1">راسلنا</h4>
                                    <p className="text-xl font-bold">support@anaqa-shop.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-purple-400 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-500 font-bold uppercase text-xs tracking-widest mb-1">اتصل بنا</h4>
                                    <p className="text-xl font-bold">+20 100 000 0000</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-purple-400 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-zinc-500 font-bold uppercase text-xs tracking-widest mb-1">المقر الرئيسي</h4>
                                    <p className="text-xl font-bold">حي المعادي، القاهرة، مصر</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 space-y-4">
                            <h4 className="font-bold text-zinc-300">تابعنا على المنصات</h4>
                            <div className="flex gap-4">
                                {[Instagram, Twitter, Facebook, MessageCircle].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-950 p-8 sm:p-12 rounded-[40px] border border-white/10 relative">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/20 blur-3xl rounded-full"></div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">الاسم بالكامل</label>
                                    <input 
                                        required
                                        name="name"
                                        type="text" 
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                        placeholder="محمد أحمد..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">البريد الإلكتروني</label>
                                    <input 
                                        required
                                        name="email"
                                        type="email" 
                                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                        placeholder="user@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">الموضوع</label>
                                <select 
                                    name="subject"
                                    className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none"
                                >
                                    <option>استفسار عام</option>
                                    <option>تتبع طلب</option>
                                    <option>مشكلة في المقاس</option>
                                    <option>عمليات الإرجاع</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-1">رسالتك</label>
                                <textarea 
                                    required
                                    name="message"
                                    rows="5"
                                    className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    placeholder="اكتب ما يدور في ذهنك..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-purple-500 hover:text-white transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <Send className="w-5 h-5" /> إرسال الرسالة
                            </button>
                            {status && (
                                <p className={`text-center mt-4 font-bold ${status.includes('بنجاح') ? 'text-emerald-400' : 'text-zinc-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
