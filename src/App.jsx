import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import SizeGuide from './pages/SizeGuide';
import Contact from './pages/Contact';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white text-center px-4">
    <h1 className="text-9xl font-black text-white/20">404</h1>
    <h2 className="text-4xl font-bold mt-4">الصفحة غير موجودة</h2>
    <p className="text-zinc-400 mt-2 max-w-md">
      عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم حذفها أو أن الرابط غير صحيح.
    </p>
    <a href="/" className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-full hover:scale-105 transition-transform">
      العودة للرئيسية
    </a>
  </div>
);

function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden" dir="rtl">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
