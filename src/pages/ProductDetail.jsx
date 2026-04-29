import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart, Share2, Check, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    // Simulated Product Data
    const product = {
        id: id,
        name: "طقم جاكيت شتوي فاخر - صوف إيطالي",
        price: 2450,
        oldPrice: 3200,
        description: "تمتع بأناقة لا مثيل لها مع هذا الجاكيت المصنوع من أجود أنواع الصوف الإيطالي. يتميز بتصميم عصري 'Oversize' يوفر الراحة والتدفئة في آن واحد. البطانة الداخلية من الساتان الفاخر تضمن لك ملمساً ناعماً على الجلد لسهولة التحرك.",
        features: [
            "خامات مضادة للرياح والماء الخفيف",
            "خياطة يدوية دقيقة للمتانة والقوة",
            "تصميم عصري يناسب المناسبات الرسمية والكاجوال",
            "جيوب داخلية إضافية لحفظ المقتنيات الثمينة"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["أسود ملكي", "رمادي فحمي", "أزرق ليلي"],
        rating: 4.8,
        reviewsCount: 124,
        images: [
            "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    };

    const handleAddToCart = () => {
        if(!selectedSize) {
            alert("الرجاء اختيار المقاس أولاً");
            return;
        }
        alert("تمت إضافة المنتج إلى السلة بنجاح!");
    };

    return (
        <div className="bg-black text-white min-h-screen pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex mb-8 text-sm text-zinc-500">
                    <Link to="/" className="hover:text-white">الرئيسية</Link>
                    <span className="mx-2">/</span>
                    <Link to="/products" className="hover:text-white">المنتجات</Link>
                    <span className="mx-2">/</span>
                    <span className="text-zinc-300">تفاصيل المنتج</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 group">
                            <img 
                                src={product.images[activeImage]} 
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {product.images.map((img, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                                        activeImage === index ? 'border-purple-500' : 'border-transparent hover:border-white/20'
                                    }`}
                                >
                                    <img src={img} className="w-full h-full object-cover" alt="" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                تشكيلة الشتاء الجديدة
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-black mt-4 mb-2 leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 text-sm mt-3">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                                    ))}
                                </div>
                                <span className="text-zinc-400">({product.reviewsCount} تقييم حقيقي)</span>
                            </div>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-black text-white">{product.price.toLocaleString()} ج.م</span>
                            <span className="text-xl text-zinc-500 line-through">{product.oldPrice.toLocaleString()} ج.م</span>
                            <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-1 rounded">خصم 25%</span>
                        </div>

                        <p className="text-zinc-400 text-lg leading-relaxed border-r-4 border-purple-500 pr-4">
                            {product.description}
                        </p>

                        {/* Size Selection */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold">اختر المقاس:</h3>
                                <Link to="/size-guide" className="text-sm text-purple-400 underline underline-offset-4">دليل المقاسات</Link>
                            </div>
                            <div className="grid grid-cols-5 gap-3">
                                {product.sizes.map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 rounded-xl font-bold transition-all border ${
                                            selectedSize === size 
                                            ? 'bg-white text-black border-white' 
                                            : 'border-white/10 hover:border-white/40'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & CTA */}
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center bg-zinc-900 border border-white/10 rounded-2xl p-1">
                                <button 
                                    disabled={quantity <= 1}
                                    onClick={() => setQuantity(q => q - 1)}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl disabled:opacity-30"
                                >-</button>
                                <span className="w-12 text-center font-bold">{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl"
                                >+</button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-purple-500/20 transform transition active:scale-95 flex items-center justify-center gap-3"
                            >
                                <ShoppingCart className="w-6 h-6" /> إضافة للسلة
                            </button>
                            <button className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 hover:bg-white/5 transition-all">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-2 pt-8 border-t border-white/10">
                            <div className="text-center p-3 rounded-2xl bg-white/[0.02]">
                                <Truck className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                                <span className="text-[10px] sm:text-xs">توصيل سريع</span>
                            </div>
                            <div className="text-center p-3 rounded-2xl bg-white/[0.02]">
                                <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                                <span className="text-[10px] sm:text-xs">ضمان الأصالة</span>
                            </div>
                            <div className="text-center p-3 rounded-2xl bg-white/[0.02]">
                                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                                <span className="text-[10px] sm:text-xs">استبدال 14 يوم</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Specs Tab (Full Content) */}
                <div className="mt-24 space-y-12">
                    <section className="bg-zinc-950 p-8 sm:p-12 rounded-[40px] border border-white/5">
                        <h2 className="text-3xl font-black mb-8">لماذا تختار هذا المنتج؟</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {product.features.map((feature, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-purple-500/20 p-1 rounded-lg">
                                        <Check className="text-purple-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">الميزة الـ {i + 1}</h4>
                                        <p className="text-zinc-500">{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
