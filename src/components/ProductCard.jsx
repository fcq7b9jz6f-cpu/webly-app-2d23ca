import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // للتعامل مع المنتجات القادمة من الباك إند أو الـ Mock المبكر
  const pId = product.id || product._id;
  const pTitle = product.title || product.name;
  const pPrice = product.price;
  const pCat = product.category;
  const pImg = product.image_url || product.image;

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-violet-500/50 transition-colors flex flex-col h-full">
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img
          src={pImg}
          alt={pTitle}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
          {pCat}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
          {pTitle}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description || "وصف المنتج يظهر هنا بشكل مفصل."}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-black text-white">
            {typeof pPrice === "number" ? `$${pPrice}` : pPrice}
          </span>
          <Link
            to={`/product/${pId}`}
            className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-violet-500 hover:text-white transition-colors"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
