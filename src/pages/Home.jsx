import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, TrendingUp, ShieldCheck } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch("/api/data/products");
        if (response.ok) {
          const data = await response.json();
          // عرض أول 4 منتجات كمنتجات مميزة
          setFeaturedProducts(data.slice(0, 4));
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Hero Fashion"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-wider mb-6 backdrop-blur-md">
            اكتشف أحدث صيحات الموضة
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-8 leading-tight">
            تألق بأسلوبك{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
              الفريد
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            علامة "أناقة" توفر لك أفضل تشكيلات الملابس العصرية للرجال والنساء
            والأطفال. جودة عالية وتصاميم تواكب أحدث خطوط الموضة العالمية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              تسوق الآن <ArrowLeft size={20} />
            </Link>
            <Link
              to="/about"
              className="px-10 py-4 bg-zinc-900 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-colors"
            >
              اكتشف قصتنا
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 sm:py-32 bg-zinc-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              تسوق حسب الفئة
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              اختر من بين تشكيلتنا الواسعة المصنفة لتسهيل تجربة تسوقك.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Category 1 */}
            <div className="relative aspect-[3/4] group overflow-hidden rounded-3xl">
              <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" alt="تشكيلة الرجال" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">تشكيلة الرجال</h3>
                <Link to="/products" className="text-violet-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  عرض المنتجات <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
            {/* Category 2 */}
            <div className="relative aspect-[3/4] group overflow-hidden rounded-3xl">
              <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" alt="تشكيلة النساء" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">تشكيلة النساء</h3>
                <Link to="/products" className="text-violet-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  عرض المنتجات <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
            {/* Category 3 */}
            <div className="relative aspect-[3/4] group overflow-hidden rounded-3xl">
              <img src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg" alt="تشكيلة الأطفال" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">تشكيلة الأطفال</h3>
                <Link to="/products" className="text-violet-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  عرض المنتجات <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-32 bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-4 flex items-center gap-4">
                الأكثر مبيعاً <TrendingUp className="text-violet-500" size={40} />
              </h2>
              <p className="text-gray-400">القطع المفضلة لدى عملائنا هذا الأسبوع.</p>
            </div>
            <Link to="/products" className="text-white hover:text-violet-400 font-bold flex items-center gap-2">
              عرض الكل <ArrowLeft size={20} />
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id || product._id} product={product} />
              ))}
            </div>
          ) : (
             <div className="text-center py-10 text-gray-500">جاري تحميل المنتجات...</div>
          )}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-y border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
             <ShieldCheck size={40} className="text-violet-400" />
             <h4 className="font-bold text-lg">جودة مضمونة</h4>
             <p className="text-sm text-gray-400">ملابس مصنعة من أفضل الخامات</p>
          </div>
          <div className="flex flex-col items-center gap-3">
             <Star size={40} className="text-fuchsia-400" />
             <h4 className="font-bold text-lg">تقييمات ممتازة</h4>
             <p className="text-sm text-gray-400">+10,000 عميل سعيد</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
