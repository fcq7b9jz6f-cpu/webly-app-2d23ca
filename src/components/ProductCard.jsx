import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => (
  <div className="bg-zinc-950/50 border border-white/10 rounded-2xl overflow-hidden group">
    <a href={`/products/${product.id}`} className="block">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
        {product.isNew && (
            <span className="absolute top-3 right-3 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">جديد</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-white truncate">{product.name}</h3>
        <p className="text-zinc-400 text-sm mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-white">{product.price}</span>
          <div className="flex items-center">
            <Star className="text-yellow-400 w-5 h-5 ml-1" fill="currentColor" />
            <span className="text-zinc-300">{product.rating}</span>
          </div>
        </div>
      </div>
    </a>
    <div className="p-5 pt-0">
        <button className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white rounded-full p-3 hover:bg-violet-700 transition-colors">
          <ShoppingBag size={20} />
          <span>أضف للسلة</span>
        </button>
    </div>
  </div>
);

export default ProductCard;
