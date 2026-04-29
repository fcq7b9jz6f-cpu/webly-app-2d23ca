import React from 'react';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">من نحن</h1>
        <div className="space-y-8 text-lg text-zinc-300 leading-relaxed text-center">
          <p>
            بدأنا "أناقة" برؤية بسيطة: جعل الموضة الراقية في متناول الجميع. نحن نؤمن بأن الثياب ليست مجرد مظهر، بل هي تعبير عن الشخصية.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">مهمتنا</h3>
              <p>توفير قطع فريدة بأعلى جودة ممكنة مع ضمان تجربة تسوق سهلة وممتعة.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">قيمنا</h3>
              <p>الشفافية، الجودة، ووضع العميل دائماً في قلب كل ما نقوم به.</p>
            </div>
          </div>
          <p>
            نعمل مع نخبة من المصممين العالميين والموردين لضمان وصول أحدث صيحات الموضة العالمية إلى باب منزلك في أسرع وقت.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
