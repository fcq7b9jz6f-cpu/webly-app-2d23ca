import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingBag, Loader2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/data/products');
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === 'all' || p.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 space-y-8">
        <header>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-6xl font-black mb-4 tracking-tight"
          >
            استعرض <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">مجموعتنا</span>
          </motion.h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            كل قطعة نختارها بعناية لتناسب ذوقك الرفيع. ابحث عن النمط الذي يمثلك في مجموعتنا المتنوعة والمحدثة باستمرار.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="ابحث عن موديل، لون، أو مقاس..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-violet-500 outline-none transition-all"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
            {['all', 'men', 'women', 'kids'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  filter === cat 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/20'
                }`}
              >
                {cat === 'all' ? 'الكل' : cat === 'men' ? 'رجال' : cat === 'women' ? 'نساء' : 'أطفال'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-12 h-12 text-violet-500 animate-spin" />
            <p className="text-zinc-500">جاري اختيار أجمل القطع لك...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id || i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-3xl">
            <ShoppingBag className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-300">لم نجد ما تبحث عنه</h3>
            <p className="text-zinc-500 mt-2">جرب تعديل كلمات البحث أو الفلاتر</p>
          </div>
        )}
      </div>

      {/* SEO Content Section */}
      <div className="max-w-4xl mx-auto mt-32 space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">لماذا تختار ملابس "أناقة"؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 leading-relaxed">
            <p>
              نحن نؤمن في متجر "أناقة" أن الملابس ليست مجرد أقمشة نرتديها، بل هي وسيلة للتعبير عن الذات والثقة. لذلك، نقوم بالتعاون مع أفضل المصنعين حول العالم لنوفر لك قطعاً تجمع بين جودة الخامات وأحدث صيحات الموضة العالمية. سواء كنت تبحث عن إطلالة رسمية للعمل، أو ملابس مريحة ليوم كاجوال، فإن تشكيلتنا تغطي كافة احتياجاتك.
            </p>
            <p>
              نتميز بنظام دروبشيبينج متطور يضمن لك وصول المنتجات بأمان وسرعة. نهتم بأدق التفاصيل من أول خيط في القماش وحتى تغليف المنتج ووصوله إلى باب منزلك. استكشف مجموعتنا اليوم واستمتع بتجربة تسوق لا مثيل لها مع توفير دليل مقاسات دقيق يقلل من احتمالية الخطأ في الاختيار.
            </p>
          </div>
        </section>

        <section className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 space-y-6">
          <h3 className="text-2xl font-bold text-white">نصائح لتسوق الموضة عبر الإنترنت</h3>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex gap-4">
              <span className="text-violet-500 font-black">01</span>
              <span>تأكد دائماً من مراجعة **دليل المقاسات** الخاص بكل منتج، فالمقاسات قد تختلف بين الماركات العالمية والمحلية.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-500 font-black">02</span>
              <span>اقرأ تفاصيل الخامة بعناية؛ إذا كنت تبحث عن الراحة ابحث عن القطن، وإذا كنت تبحث عن الأناقة في الشتاء فالصوف والجلد هما الخيار الأمثل.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-500 font-black">03</span>
              <span>تابع مجموعاتنا الموسمية باستمرار، فنحن نوفر تخفيضات هائلة عند تغيير المواسم تصل إلى 50%.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
