import React from 'react';
import { Ruler, Info, AlertTriangle } from 'lucide-react';

const SizeGuide = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <div className="text-center mb-16">
                    <Ruler className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                    <h1 className="text-5xl font-black mb-4 uppercase italic">دليل المقاسات</h1>
                    <p className="text-zinc-400 text-lg">احصل على المقاس المثالي لك من المرة الأولى لتجنب عناء الإرجاع.</p>
                </div>

                <div className="space-y-16">
                    {/* Measurement Tips */}
                    <div className="bg-zinc-950 p-8 rounded-[40px] border border-white/10">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-purple-400">
                            <Info className="w-6 h-6" /> كيف تأخذ قياساتك؟
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold mb-2">1. الصدر</h4>
                                <p className="text-sm text-zinc-500">قم بقياس محيط الصدر من أعرض منطقة، مع إبقاء شريط القياس أفقياً ومريحاً.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">2. الخصر</h4>
                                <p className="text-sm text-zinc-500">قم بقياس محيط الخصر من أضيق منطقة (عادة فوق السرة مباشرة).</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">3. الأرداف</h4>
                                <p className="text-sm text-zinc-500">قف مع ضم قدميك ببعضهما وقم بقياس محيط الأرداف من أعرض منطقة.</p>
                            </div>
                        </div>
                    </div>

                    {/* Size Tables */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black">جدول مقاسات الملابس العلوية</h2>
                        <div className="overflow-x-auto rounded-3xl border border-white/5">
                            <table className="w-full text-right bg-zinc-900/40">
                                <thead>
                                    <tr className="bg-white/5 border-b border-white/10">
                                        <th className="px-6 py-4 font-black">المقاس</th>
                                        <th className="px-6 py-4 font-black text-zinc-400">الصدر (سم)</th>
                                        <th className="px-6 py-4 font-black text-zinc-400">الخصر (سم)</th>
                                        <th className="px-6 py-4 font-black text-zinc-400">الأكتاف (سم)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { s: "Small", b: "86-91", w: "71-76", sh: "43" },
                                        { s: "Medium", b: "96-101", w: "81-86", sh: "45" },
                                        { s: "Large", b: "106-111", w: "91-97", sh: "47" },
                                        { s: "X-Large", b: "116-121", w: "102-107", sh: "49" },
                                        { s: "XX-Large", b: "127-132", w: "112-117", sh: "51" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-purple-500/5 transition-colors">
                                            <td className="px-6 py-5 font-bold text-white">{row.s}</td>
                                            <td className="px-6 py-5 text-zinc-400">{row.b}</td>
                                            <td className="px-6 py-5 text-zinc-400">{row.w}</td>
                                            <td className="px-6 py-5 text-zinc-400">{row.sh}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex gap-4">
                        <AlertTriangle className="text-amber-500 w-6 h-6 shrink-0" />
                        <p className="text-sm text-amber-200/80 leading-relaxed">
                            <strong>ملاحظة هامة:</strong> القياسات الموضحة أعلاه هي قياسات الجسم وليست قياسات الملابس. قد تختلف المقاسات بنسبة بسيطة (1-2 سم) بناءً على نوع القماش وستايل الموديل (Oversize أو Slim Fit).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;
