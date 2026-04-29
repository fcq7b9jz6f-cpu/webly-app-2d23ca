import React from 'react';
import { ShoppingBag, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'جاكيت أنوراك عصري', price: '349 د.إ', category: 'ملابس رجالية', rating: 4.8, image: 'https://images.pexels.com/photos/5592261/pexels-photo-5592261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 2, name: 'فستان سهرة حريري', price: '799 د.إ', category: 'ملابس نسائية', rating: 4.9, image: 'https://images.pexels.com/photos/19236217/pexels-photo-19236217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 3, name: 'كنزة بغطاء للرأس للأطفال', price: '199 د.إ', category: 'ملابس أطفال', rating: 4.7, image: 'https://images.pexels.com/photos/4715314/pexels-photo-4715314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 4, name: 'بدلة رجالية أنيقة', price: '1,200 د.إ', category: 'ملابس رجالية', rating: 5.0, image: 'https://images.pexels.com/photos/4975756/pexels-photo-4975756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
];

const Products = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white px-4 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h1 className="text-4xl font-black">جميع المنتجات</h1>
        <button className="flex items-center gap-2 bg-zinc-900 border border-white/10 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors">
          <Filter size={20} />
          <span>تصفية النتائج</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
