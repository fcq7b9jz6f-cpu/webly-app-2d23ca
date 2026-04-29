import React from 'react';

const SizeGuide = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black mb-12 text-center">دليل المقاسات</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-800 text-center">
            <thead>
              <tr className="bg-zinc-900">
                <th className="p-4 border border-zinc-800">المقاس</th>
                <th className="p-4 border border-zinc-800">الصدر (سم)</th>
                <th className="p-4 border border-zinc-800">الخصر (سم)</th>
                <th className="p-4 border border-zinc-800">الأرداف (سم)</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr>
                <td className="p-4 border border-zinc-800 font-bold text-white">S</td>
                <td className="p-4 border border-zinc-800">86-90</td>
                <td className="p-4 border border-zinc-800">66-70</td>
                <td className="p-4 border border-zinc-800">92-96</td>
              </tr>
              <tr className="bg-zinc-900/30">
                <td className="p-4 border border-zinc-800 font-bold text-white">M</td>
                <td className="p-4 border border-zinc-800">91-95</td>
                <td className="p-4 border border-zinc-800">71-75</td>
                <td className="p-4 border border-zinc-800">97-101</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-800 font-bold text-white">L</td>
                <td className="p-4 border border-zinc-800">96-102</td>
                <td className="p-4 border border-zinc-800">76-82</td>
                <td className="p-4 border border-zinc-800">102-108</td>
              </tr>
              <tr className="bg-zinc-900/30">
                <td className="p-4 border border-zinc-800 font-bold text-white">XL</td>
                <td className="p-4 border border-zinc-800">103-110</td>
                <td className="p-4 border border-zinc-800">83-90</td>
                <td className="p-4 border border-zinc-800">109-116</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-center text-zinc-500 italic">
          * هذه القياسات تقريبية وقد تختلف قليلاً حسب نوع الخامة والتصميم.
        </p>
      </div>
    </div>
  );
};

export default SizeGuide;
