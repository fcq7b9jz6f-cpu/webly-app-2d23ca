import React from 'react';
import { Target, Shield, Users, Globe, Award, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
                        قصة <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">أناقــة</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        نحن لا نبيع الملابس فحسب، بل نصمم الهوية. انطلقنا من شغف عميق بالموضة لنضع بين يديك أجمل التصاميم العالمية بجودة لا تُضاهى.
                    </p>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-20 bg-zinc-950 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "عميل سعيد", value: "50K+" },
                            { label: "قطعة مباعة", value: "120K+" },
                            { label: "مصمم عالمي", value: "15+" },
                            { label: "دولة نشحن لها", value: "30+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group p-6 transition-all hover:bg-white/[0.02] rounded-3xl">
                                <div className="text-4xl sm:text-6xl font-black text-white mb-2 transition-transform group-hover:scale-110">{stat.value}</div>
                                <div className="text-zinc-500 uppercase tracking-widest text-sm font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <img 
                                src="https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="ورشة عمل" 
                                className="rounded-[40px] shadow-2xl border border-white/10"
                            />
                        </div>
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-purple-400 font-bold uppercase tracking-widest text-sm">
                                    <Target className="w-5 h-5" /> رؤيتنا
                                </div>
                                <h2 className="text-4xl font-black">نسعى لتكون "أناقة" الوجهة الأولى لرواد الموضة.</h2>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    نهدف إلى كسر الحواجز التقليدية في تجارة التجزئة عبر توفير قطع فنية تعبر عن شخصية مرتديها، مع الالتزام الكامل بمعايير الاستدامة البيئية في كافة مراحل التصنيع والشحن.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-pink-400 font-bold uppercase tracking-widest text-sm">
                                    <Shield className="w-5 h-5" /> قيمنا
                                </div>
                                <h2 className="text-4xl font-black">الجودة والشفافية هي أساس عملنا.</h2>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    نحن نؤمن بأن الثقة هي أغلى ما نملك. لذلك، نعمل بشفافية مطلقة حول مصادر خاماتنا وعمليات الإنتاج، ونبذل قصارى جهدنا لضمان وصول المنتج إليكم بأفضل صورة ممكنة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us? */}
            <section className="py-32 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">لماذا يختارنا الآلاف؟</h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "تصاميم حصرية", desc: "قطعنا ليست موجودة في أي مكان آخر، حيث يعمل فريقنا مع مصممين مستقلين من حول العالم.", icon: <Sparkles /> },
                            { title: "خامات متميزة", desc: "نستخدم أفضل أنواع القطن العضوي والأقمشة المعاد تدويرها لنجمع بين الفخامة والمسؤولية.", icon: <Award /> },
                            { title: "خدمة ما بعد البيع", desc: "فريق دعمنا متاح على مدار الساعة للإجابة على استفساراتكم وضمان رضاءكم التام.", icon: <Users /> }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[40px] border border-white/5 bg-black hover:border-purple-500/30 transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
