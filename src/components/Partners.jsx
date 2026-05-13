import React from 'react';
import { GeometricPattern } from './ui/Shared';

export default function Partners() {
  const partners = [
    { name: "Global Relief", logo: "/partners/p1.png" },
    { name: "Islamic Aid", logo: "/partners/p2.png" },
    { name: "Mercy Hands", logo: "/partners/p3.png" },
    { name: "Peace Foundation", logo: "/partners/p4.png" },
    { name: "Humanity First", logo: "/partners/p5.png" },
    { name: "Hope Charity", logo: "/partners/p6.png" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-brand-cream/50">
      <GeometricPattern opacity={0.02} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="mb-12">
          <h2 className="font-heading text-3xl mb-2 text-brand-emerald-dark">Our Partners & Supporters</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p, i) => (
            <div key={i} className="text-xl font-heading font-black text-brand-emerald-dark tracking-tighter">
              {p.name.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
