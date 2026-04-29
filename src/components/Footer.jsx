import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Social */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter text-white uppercase italic">
            Anaqa<span className="text-violet-500">.</span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            أناقة هي وجهتك الأولى للموضة العصرية والقطع الفريدة. نحن نجمع بين الجودة والتصميم والراحة لنقدم لك تجربة تسوق استثنائية.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-violet-500 transition-colors text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-violet-500 transition-colors text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-violet-500 transition-colors text-white">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/products" className="hover:text-violet-400 transition-colors">كل المنتجات</Link></li>
            <li><Link to="/about" className="hover:text-violet-400 transition-colors">عن المتجر</Link></li>
            <li><Link to="/size-guide" className="hover:text-violet-400 transition-colors">دليل المقاسات</Link></li>
            <li><Link to="/contact" className="hover:text-violet-400 transition-colors">اتصل بنا</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-white font-bold mb-6">قانوني</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link to="/privacy" className="hover:text-violet-400 transition-colors">سياسة الخصوصية</Link></li>
            <li><Link to="/terms" className="hover:text-violet-400 transition-colors">شروط الخدمة</Link></li>
            <li><Link to="/refund" className="hover:text-violet-400 transition-colors">سياسة الاستبدال والاسترجاع</Link></li>
            <li><Link to="/shipping" className="hover:text-violet-400 transition-colors">سياسة الشحن والتوصيل</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">النشرة البريدية</h4>
          <p className="text-zinc-400 text-sm mb-4">اشترك للحصول على آخر العروض والخصومات الحصرية.</p>
          <form className="space-y-2">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
            />
            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-violet-500/20">
              اشترك الآن
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-zinc-500 text-xs text-center">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر أناقة للتجارة الإلكترونية.
        </p>
        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-4" />
          <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-4" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="Paypal" className="h-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
