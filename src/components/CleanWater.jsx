import React from 'react';
import { Droplets, CheckCircle2, Waves, MapPin, Users, Heart } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function CleanWater() {
  return (
    <section id="water" className="relative py-24 overflow-hidden bg-brand-cream">
      <GeometricPattern opacity={0.05}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
              <Droplets size={14} className="text-brand-emerald" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Clean Water Initiative</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-brand-emerald-dark leading-tight">
              Giving the <span className="gold-text">Gift of Life</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-brand-muted font-medium">
              Water is a fundamental right. We build sustainable boreholes and water systems that provide entire communities with access to safe, clean drinking water for decades to come.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: MapPin, val: "3+", label: "Communities Reached" },
                { icon: Users, val: "1k+", label: "Families Served" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white shadow-soft border border-brand-emerald/5">
                  <item.icon size={24} className="text-brand-gold mb-3" />
                  <div className="text-3xl font-black text-brand-emerald-dark mb-1">{item.val}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-[3rem] blur-xl group-hover:bg-brand-gold/20 transition-all" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-brand-emerald-dark aspect-square flex flex-col items-center justify-center p-12 text-center text-white">
              <GeometricPattern opacity={0.15} color="white" />
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 mx-auto animate-pulse">
                  <Waves size={48} className="text-brand-gold-light" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">Sustainable Boreholes</h3>
                <p className="text-white/60 mb-8 font-medium">We specialize in building deep-well borehole systems that provide permanent clean water access to drought-affected regions across East Africa.</p>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-gold text-white font-black uppercase tracking-widest text-[10px]">
                  <Droplets size={14} /> Support Clean Water
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
