import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-zinc-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
            أناقة
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <NavLink href="/">الرئيسية</NavLink>
            <NavLink href="/products">المتجر</NavLink>
            <NavLink href="/about">من نحن</NavLink>
            <NavLink href="/contact">تواصل</NavLink>
          </nav>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Cart Icon */}
            <a href="/cart" className="relative text-zinc-300 hover:text-white transition-colors">
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-violet-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </a>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-4 border-t border-white/10">
            <NavLink href="/">الرئيسية</NavLink>
            <NavLink href="/products">المتجر</NavLink>
            <NavLink href="/about">من نحن</NavLink>
            <NavLink href="/contact">تواصل</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
