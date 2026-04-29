import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, UserCircle, LogOut } from 'lucide-react';
import useAuthStore from '../stores/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuthStore();

  const handleLogout = async () => {
    await signOut();
    // Navigate or show a message if needed. The store will handle the state.
  };

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/products', label: 'منتجاتنا' },
    { href: '/about', label: 'عن المتجر' },
    { href: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-lg sticky top-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              أناقة
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-violet-400' : 'text-zinc-300 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Icons and Auth section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/profile" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
                  <UserCircle size={22} />
                  <span>ملفي الشخصي</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 text-zinc-300 hover:text-red-400 transition-colors">
                  <LogOut size={22} />
                  <span>خروج</span>
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                 <Link to="/login" className="text-lg font-medium text-zinc-300 hover:text-white transition-colors px-4 py-2 rounded-lg">
                  دخول
                </Link>
                 <Link to="/signup" className="text-lg font-bold rounded-full px-6 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 transition-opacity">
                   حساب جديد
                </Link>
              </div>
            )}
            
            <Link to="/cart" className="text-zinc-300 hover:text-white transition-colors">
              <ShoppingBag size={24} />
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({isActive}) => `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-zinc-900 text-violet-400' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'}`}
              >
                {link.label}
              </NavLink>
            ))}
             <div className="border-t border-zinc-700 my-4" />
             {user ? (
                <div className="px-2 space-y-3">
                    <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
                        <UserCircle size={22} />
                        <span>ملفي الشخصي</span>
                    </Link>
                    <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-red-400">
                        <LogOut size={22} />
                        <span>تسجيل الخروج</span>
                    </button>
                </div>
            ) : (
                <div className="px-2 space-y-3">
                    <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
                        تسجيل الدخول
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="block text-center text-base font-bold rounded-full px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 transition-opacity">
                        إنشاء حساب جديد
                    </Link>
                </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
