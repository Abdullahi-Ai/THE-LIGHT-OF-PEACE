import React from 'react';
import { Heart, Baby, Utensils, Star, Droplets, Building2, TrendingUp } from 'lucide-react';
import { Counter, GeometricPattern } from './ui/Shared';

export default function ImpactStats() {
  const stats = [
    { icon: Heart, val: 500, label: "Families Supported", suffix: "+" },
    { icon: Baby, val: 200, label: "Orphans Cared For", suffix: "+" },
    { icon: Utensils, val: 1000, label: "Meals Provided", suffix: "+" },
    { icon: Star, val: 50, label: "New Converts", suffix: "+" },
    { icon: Droplets, val: 2, label: "Active Water Projects", suffix: "" },
    { icon: Building2, val: 5, label: "Mosques Built", suffix: "" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-brand-emerald-dark">
      <GeometricPattern opacity={0.1} color="white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10 border border-white/20">
            <TrendingUp size={14} className="text-brand-gold-light" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-light">Our Global Impact</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 leading-tight">
            The Power of Your <span className="gold-text">Generosity</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map(({ icon: Icon, val, label, suffix }, i) => (
            <div key={i} className="group relative p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 bg-brand-gold/20 transition-transform group-hover:scale-110">
                <Icon size={28} className="sm:size-32 text-brand-gold-light" />
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-black text-white mb-2">
                <Counter target={val} suffix={suffix} />
              </div>
              <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-white/50 leading-relaxed">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
