import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50">
          <img 
            src="https://images.pexels.com/photos/5592261/pexels-photo-5592261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="Product" 
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-violet-400 font-bold mb-2">وصلنا حديثاً</span>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">جاكيت أنوراك عصري</h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-zinc-400">(4.8 من تقييمات العملاء)</span>
          </div>
          <p className="text-3xl font-bold mb-8">349 د.إ</p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            تصميم عصري يجمع بين الراحة والأداء. هذا الجاكيت مصنوع من مواد مقاومة للرياح، مثالي للأجواء الباردة والمغامرات اليومية.
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-zinc-300">
              <Truck className="text-violet-400" />
              <span>شحن سريع خلال 3-5 أيام عمل</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <ShieldCheck className="text-violet-400" />
              <span>ضمان جودة لمدة سنة كاملة</span>
            </div>
          </div>

          <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-5 rounded-2xl hover:scale-[1.02] transition-transform shadow-xl shadow-violet-500/20">
            <ShoppingBag size={24} />
            إضافة إلى سلة التسوق
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
