import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SizeGuide from './pages/SizeGuide';
import Legal from './pages/Legal';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useAuthStore } from './stores/authStore';
import { seedProducts } from './lib/seed';

export default function App() {
  const initializeAuth = useAuthStore(state => state.initialize);

  useEffect(() => {
    initializeAuth();
    seedProducts();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white font-['Cairo'] selection:bg-violet-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-500 underline underline-offset-8">404</h1>
                <p className="text-xl text-zinc-400 max-w-md mx-auto mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة في خزائننا. ربما تم استبدال الموديل!</p>
                <a href="/" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">العودة للرئيسية</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </BrowserRouter>
  );
}
