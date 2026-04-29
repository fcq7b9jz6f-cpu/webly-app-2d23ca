import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import SizeGuide from './pages/SizeGuide';
import Legal from './pages/Legal';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useAuthStore } from './stores/authStore';

function App() {
  const { init } = useAuthStore();

  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="bg-zinc-950 text-white min-h-screen selection:bg-fuchsia-500 selection:text-white flex flex-col font-['Cairo']" dir="rtl">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/legal/:page" element={<Legal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-10">
              <h1 className="text-9xl font-black text-white/10 shrink-0">404</h1>
              <p className="text-2xl font-bold mt-[-40px] text-fuchsia-400">عذراً، هذه الصفحة غير موجودة</p>
              <a href="/" className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-fuchsia-500 hover:text-white transition-all">العودة للرئيسية</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
