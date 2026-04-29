import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingBag, Wind } from 'lucide-react';

// This will be moved to its own component file later.
const ProductCard = ({ product }) => (
  <div className="bg-zinc-950/50 border border-white/10 rounded-2xl overflow-hidden group">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-3 left-3 bg-black/50 rounded-full p-2">
        <Star className="text-yellow-400 w-5 h-5" fill="currentColor" />
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-lg text-white truncate">{product.name}</h3>
      <p className="text-zinc-400 text-sm mt-1">{product.category}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold text-white">{product.price}</span>
        <button className="bg-violet-600 text-white rounded-full p-3 hover:bg-violet-700 transition-colors">
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  </div>
);


const Home = () => {

  const featuredProducts = [
    {
      id: 1,
      name: 'جاكيت أنوراك عصري',
      price: '349 د.إ',
      category: 'ملابس رجالية',
      image: 'https://images.pexels.com/photos/5592261/pexels-photo-5592261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 2,
      name: 'فستان سهرة حريري',
      price: '799 د.إ',
      category: 'ملابس نسائية',
      image: 'https://images.pexels.com/photos/19236217/pexels-photo-19236217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 3,
      name: 'كنزة بغطاء للرأس للأطفال',
      price: '199 د.إ',
      category: 'ملابس أطفال',
      image: 'https://images.pexels.com/photos/4715314/pexels-photo-4715314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 4,
      name: 'بدلة رجالية أنيقة',
      price: '1,200 د.إ',
      category: 'ملابس رجالية',
      image: 'https://images.pexels.com/photos/4975756/pexels-photo-4975756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.pexels.com/photos/2911207/pexels-photo-2911207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Elegant fashion model"
          className="absolute inset-0 w-full h-full object-cover object-top animate-pan-and-zoom"
        />
        <style>{`
          @keyframes pan-and-zoom {
            0% { transform: scale(1.05) translateX(-2%); }
            100% { transform: scale(1.15) translateX(2%); }
          }
          .animate-pan-and-zoom { animation: pan-and-zoom 20s ease-in-out infinite alternate; }
        `}</style>
        
        <div className="relative z-20 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase"
          >
            أطلق العنان
            <br />
            لـ<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">أناقتك</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl max-w-2xl text-zinc-200"
          >
           اكتشف مجموعتنا الحصرية من الملابس المصممة لتعكس شخصيتك الفريدة. جودة استثنائية وتصاميم تواكب آخر صيحات الموضة العالمية.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full transition-transform hover:scale-105 shadow-lg shadow-fuchsia-500/30">
              تسوق الآن
              <ArrowLeft className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a href="/about" className="px-8 py-4 text-lg font-bold text-white bg-black/50 border border-white/20 rounded-full transition-colors hover:bg-white/10">
              قصتنا
            </a>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              لكل <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">فرد</span> في العائلة
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-zinc-400">
              نقدم أزياءً عصرية تلبي جميع الأذواق والأعمار. من التصاميم الكلاسيكية إلى أحدث الصيحات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Women Category */}
            <a href="/products?category=women" className="relative rounded-2xl overflow-hidden h-96 group block">
                <img src="https://images.pexels.com/photos/7642305/pexels-photo-7642305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Women's Fashion" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                    <h3 className="text-3xl font-bold">ملابس نسائية</h3>
                    <p className="mt-1">الأناقة والأنوثة في كل قطعة</p>
                </div>
            </a>
            {/* Men Category */}
            <a href="/products?category=men" className="relative rounded-2xl overflow-hidden h-96 group block">
                <img src="https://images.pexels.com/photos/6766361/pexels-photo-6766361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Men's Fashion" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                    <h3 className="text-3xl font-bold">ملابس رجالية</h3>
                    <p className="mt-1">تصاميم عصرية للرجل الأنيق</p>
                </div>
            </a>
            {/* Kids Category */}
            <a href="/products?category=kids" className="relative rounded-2xl overflow-hidden h-96 group block">
                <img src="https://images.pexels.com/photos/6261898/pexels-photo-6261898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kids' Fashion" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                    <h3 className="text-3xl font-bold">ملابس أطفال</h3>
                    <p className="mt-1">راحة ومرح في كل تصميم</p>
                </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              الأكثر <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">مبيعاً</span> هذا الأسبوع
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-zinc-400">
              قطع فريدة لاقت إعجاب عملائنا. كن أول من يقتنيها.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
           <div className="text-center mt-16">
            <a href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border border-zinc-700 rounded-full transition-colors hover:bg-zinc-800 hover:border-zinc-800">
                عرض كل المنتجات
                <ArrowLeft className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              ماذا يقول <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">عملاؤنا</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-2xl">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
              </div>
              <p className="text-zinc-300">"الجودة مذهلة والتوصيل كان سريعاً جداً. الفستان أجمل من الصور! سأعود للشراء بالتأكيد."</p>
              <h4 className="font-bold text-white mt-6">- سارة أحمد</h4>
            </div>
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-2xl transform md:scale-105">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
              </div>
              <p className="text-zinc-300">"أفضل متجر ملابس أونلاين تعاملت معه. خدمة العملاء رائعة والمنتجات فريدة من نوعها."</p>
              <h4 className="font-bold text-white mt-6">- محمد العبدالله</h4>
            </div>
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-2xl">
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
              </div>
              <p className="text-zinc-300">"اشتريت ملابس لأطفالي وكانوا سعداء جداً بها. الأقمشة ناعمة ومريحة ومناسبة للعب."</p>
              <h4 className="font-bold text-white mt-6">- فاطمة الزهراء</h4>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wind className="w-16 h-16 mx-auto text-violet-400" />
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mt-6">
            جاهز لتجديد خزانتك؟
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-zinc-400">
            انضم إلى الآلاف من العملاء السعداء وعبّر عن أسلوبك الخاص مع تشكيلتنا الجديدة. الجودة والأناقة تنتظرك.
          </p>
          <div className="mt-10">
            <a href="/products" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full transition-transform hover:scale-105 shadow-lg shadow-fuchsia-500/40">
              ابدأ التسوق الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
