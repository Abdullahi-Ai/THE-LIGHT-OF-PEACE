import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function SuccessStories() {
  const stories = [
    { title: "Empowering Orphans", desc: "Aisha, a young orphan, is now attending school thanks to your generous support.", img: "/gallery/ramadan-1.png" },
    { title: "Clean Water Success", desc: "A remote village now has access to safe drinking water through our borehole project.", img: "/gallery/udhiya-1.png" },
    { title: "Ramadan Food Distribution", desc: "We reached over 500 families this Ramadan with essential food packages.", img: "/gallery/ramadan-3.png" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-brand-cream">
      <GeometricPattern opacity={0.04}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <Sparkles size={14} className="text-brand-emerald"/>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Our Impact Stories</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark leading-tight">
            Real Change, <span className="gold-text">Real People</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(({ title, desc, img }, i) => (
            <div key={i} className="rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-glow transition-all hover:-translate-y-2 border border-brand-emerald/5 group">
              <div className="h-48 bg-brand-emerald/5 relative flex items-center justify-center">
                <Quote size={48} className="text-brand-emerald/10 transition-transform group-hover:scale-125" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-heading text-xl font-bold mb-3 text-brand-emerald-dark">{title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted font-medium">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
