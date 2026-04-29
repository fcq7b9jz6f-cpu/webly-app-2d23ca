import React from 'react';

const LegalLayout = ({ title, children }) => (
  <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black mb-12 bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent uppercase tracking-tighter">
        {title}
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed space-y-8">
        {children}
      </div>
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy">
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
      <p>
        At ANAQA, we collect personal information that you provide to us, such as your name, shipping address, 
        email address, and payment information when you make a purchase. We also collect device information 
        using cookies to improve your browsing experience.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
      <p>
        Your data is used solely to process your orders, communicate with you regarding your purchase, 
        and provide you with personalized marketing updates if you have opted in. Your information is 
        processed through secure third-party gateways and is never sold to third parties.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal data. All payment 
        transactions are encrypted using SSL technology to ensure maximum safety.
      </p>
    </section>
  </LegalLayout>
);

export const TermsOfService = () => (
  <LegalLayout title="Terms of Service">
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
      <p>
        By accessing and using the ANAQA store, you agree to comply with and be bound by the following terms 
        and conditions. We reserve the right to update these terms at any time without prior notice.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. Product Accuracy</h2>
      <p>
        While we strive for 100% accuracy, we cannot guarantee that product descriptions, colors, or prices 
        are entirely error-free. In the event of an error, we reserve the right to cancel orders and 
        issue a full refund.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
      <p>
        Illegal use of the site or any attempt to compromise its security is strictly prohibited and will 
        result in immediate termination of access and possible legal action.
      </p>
    </section>
  </LegalLayout>
);

export const RefundPolicy = () => (
  <LegalLayout title="Refund Policy">
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. 30-Day Returns</h2>
      <p>
        We offer a 30-day return policy for all unworn and unwashed clothing items in their original 
        packaging with tags attached.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. Refund Process</h2>
      <p>
        Once we receive and inspect your returned item, we will notify you of the approval or rejection 
        of your refund. If approved, the refund will be processed to your original payment method 
        within 5-10 business days.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. Return Shipping</h2>
      <p>
        Customers are responsible for paying their own shipping costs for returning items. Shipping 
        costs are non-refundable.
      </p>
    </section>
  </LegalLayout>
);

export const ShippingPolicy = () => (
  <LegalLayout title="Shipping Policy">
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. Shipping Destinations</h2>
      <p>
        ANAQA ships globally. We partner with the best logistics providers to ensure your fashion 
        pieces arrive safely, wherever you are.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. Processing & Delivery Times</h2>
      <p>
        Orders are typically processed within 2-4 business days. Due to the high demand for our 
        unique pieces and our international logistics model, delivery typically takes 7-15 
        business days depending on your location.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. Tracking Your Order</h2>
      <p>
        Once your order has shipped, you will receive an email with a tracking number so you can 
        follow your package every step of the way.
      </p>
    </section>
  </LegalLayout>
);
