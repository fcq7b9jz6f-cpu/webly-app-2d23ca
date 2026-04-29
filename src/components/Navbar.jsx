import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import useAuthStore from '../stores/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { isAuthenticated, signOut } = useAuthStore();

  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'منتجاتنا', path: '/products' },
    { name: 'دليل المقاسات', path: '/size-guide' },
    { name: 'عن المتجر', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-black tracking-tighter text-white">
              أناقة<span className="text-violet-500">.</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 space-x-reverse">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold transition-colors ${
                    location.pathname === link.path
                      ? 'text-violet-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             {isAuthenticated ? (
                <>
                  <Link to="/profile" className="flex items-center gap-2 text-gray-300 hover:text-white font-bold text-sm transition-colors">
                     <User size={18} /> حسابي
                  </Link>
                  <button onClick={signOut} className="text-sm font-bold text-red-400 hover:text-red-300 transition-colors">
                     خروج
                  </button>
                </>
             ) : (
                <>
                  <Link to="/login" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">
                     دخول
                  </Link>
                  <Link to="/signup" className="text-sm font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                     حساب جديد
                  </Link>
                </>
             )}
            <button className="text-white relative p-2">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 bg-violet-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button className="text-white relative p-2">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 bg-violet-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold rounded-md ${
                  location.pathname === link.path
                    ? 'bg-zinc-900 text-violet-400'
                    : 'text-gray-300 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10 flex flex-col gap-2 px-3">
                {isAuthenticated ? (
                    <>
                      <Link to="/profile" onClick={() => setIsOpen(false)} className="text-center w-full bg-zinc-900 text-white font-bold py-3 rounded-xl">ملفي الشخصي</Link>
                      <button onClick={() => { signOut(); setIsOpen(false); }} className="text-center w-full text-red-500 font-bold py-3">تسجيل الخروج</button>
                    </>
                ) : (
                    <>
                       <Link to="/login" onClick={() => setIsOpen(false)} className="text-center w-full bg-zinc-900 text-white font-bold py-3 rounded-xl">تسجيل الدخول</Link>
                       <Link to="/signup" onClick={() => setIsOpen(false)} className="text-center w-full bg-violet-600 text-white font-bold py-3 rounded-xl">حساب جديد</Link>
                    </>
                )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
