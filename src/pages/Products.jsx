import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ["الكل", "رجالي", "حريمي", "أطفال", "إكسسوارات"];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("الكل");
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([
        { id: 1, name: "جاكيت منفوخ عصري", price: 1200, category: "رجالي", image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "جاكيت شتوي أنيق ومريح يوفر الدفء اللازم في الأجواء الباردة مع لمسة عصرية تناسب كل الأوقات." },
        { id: 2, name: "فستان سهرة كلاسيكي", price: 2500, category: "حريمي", image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "فستان سهرة بتصميم راقٍ من الحرير الطبيعي، مثالي للمناسبات الخاصة والحفلات الرسمية." },
        { id: 3, name: "تيشرت قطني أساسي", price: 450, category: "رجالي", image: "https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "تيشرت مصنوع من قطن 100% عالي الجودة، مريح جداً للاستخدام اليومي وبألوان متعددة." },
        { id: 4, name: "طقم أطفال قطعتين", price: 850, category: "أطفال", image: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "طقم أنيق للأطفال يجمع بين الراحة والأناقة، مناسب للنزهات اليومية واللعب." },
        { id: 5, name: "ساعة يد فاخرة", price: 3200, category: "إكسسوارات", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "ساعة يد بتصميم كلاسيكي ومينا واضحة، مقاومة للماء وتضيف لمسة من الرقي لإطلالتك." },
        { id: 6, name: "كنزة صوفية ناعمة", price: 950, category: "حريمي", image: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "كنزة من الصوف الناعم بتصميم واسع مريح، مثالية للأيام الخريفية الباردة." },
        { id: 7, name: "حذاء رياضي متطور", price: 1800, category: "رجالي", image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "حذاء رياضي خفيف الوزن مع وسادة هوائية لراحة قصوى أثناء الجري والمشي لمسافات طويلة." },
        { id: 8, name: "حقيبة يد جلدية", price: 2100, category: "إكسسوارات", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "حقيبة يد مصنوعة من الجلد الطبيعي الفاخر، تتميز بمساحة واسعة وتصميم يحاكي أحدث صيحات الموضة العالمية." },
    ]);

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "الكل" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-black text-white min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 text-center md:text-right">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                        كل القطع، كل الأناقة
                    </h1>
                    <p className="text-zinc-400 max-w-2xl md:ml-0 md:mr-auto text-lg leading-relaxed">
                        استكشف مجموعتنا المختارة بعناية لأحدث صيحات الموضة العالمية. من الملابس اليومية المريحة إلى أطقم السهرات الفاخرة، نوفر لك كل ما تحتاجه للتميز.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 bg-zinc-900/50 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
                    {/* Categories UI */}
                    <div className="flex gap-2 p-1 bg-black/40 rounded-full overflow-x-auto no-scrollbar max-w-full">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                    activeCategory === cat 
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' 
                                    : 'text-zinc-400 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="ابحث عن منتج..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/60 border border-white/10 rounded-full py-2.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-zinc-600"
                        />
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 flex flex-col items-center">
                        <ShoppingBag className="w-16 h-16 text-zinc-700 mb-4" />
                        <h3 className="text-2xl font-bold text-zinc-300">لم نجد ما تبحث عنه</h3>
                        <p className="text-zinc-500 mt-2">جرب تغيير كلمات البحث أو التصنيف</p>
                        <button 
                            onClick={() => {setActiveCategory("الكل"); setSearchQuery("")}}
                            className="mt-6 text-purple-400 hover:text-purple-300 flex items-center gap-2"
                        >
                            مسح جميع الفلاتر <ArrowRight className="w-4 h-4 rotate-180" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
