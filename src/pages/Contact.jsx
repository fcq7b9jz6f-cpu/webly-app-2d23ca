import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-black mb-16 text-center">تواصل معنا</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold">نحن هنا للمساعدة</h2>
            <p className="text-zinc-400 text-lg">
              هل لديك استفسار عن طلبك أو حول منتجاتنا؟ فريق الدعم متاح طوال أيام الأسبوع للرد عليك.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">البريد الإلكتروني</h4>
                  <p className="text-zinc-400">support@anaqa.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">الهاتف</h4>
                  <p className="text-zinc-400">+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">الموقع</h4>
                  <p className="text-zinc-400">دبي، الإمارات العربية المتحدة</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">الاسم بالكامل</label>
                <input type="text" className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">الموضوع</label>
              <input type="text" className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:ring-2 focus:ring-violet-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">الرسالة</label>
              <textarea rows="4" className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:ring-2 focus:ring-violet-500 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <Send size={20} />
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
