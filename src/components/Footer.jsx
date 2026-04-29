import React from 'react';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-4">
              أناقة
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              متجر "أناقة" هو وجهتك الأولى لأحدث صيحات الموضة. نقدم ملابس عالية الجودة للرجال والنساء والأطفال، مختارة بعناية لتجمع بين الراحة والأناقة العصرية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-6">
              <a href="#" className="hover:text-violet-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-violet-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-violet-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-violet-400"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
              <li><a href="/size-guide" className="hover:text-white transition-colors">دليل المقاسات</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">كل المنتجات</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">قانوني</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">شروط الخدمة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الإرجاع</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">النشرة البريدية</h4>
            <p className="text-zinc-400 text-sm mb-4">اشترك ليصلك كل جديد وعروض حصرية.</p>
            <form className="flex items-center">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-r-full py-2 px-4 text-sm focus:ring-violet-500 focus:border-violet-500 transition-colors"
              />
              <button type="submit" className="bg-violet-600 hover:bg-violet-700 p-2 rounded-l-full">
                <Send size={20} className="text-white" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} متجر أناقة. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
