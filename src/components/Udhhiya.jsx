import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, CheckCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function Udhhiya() {
  const navigate = useNavigate();
  
  const options = [
    { type: "Goat / Sheep Distribution", metric: "3-5 Families Served", features: ["Fresh Meat Portions", "Distributed to the Needy", "Brings Joy on Eid"] },
    { type: "Communal Cow (1/7 Share)", metric: "20+ Families Served", features: ["Shared Sacrifice", "Wide Community Reach", "Orphan Centers Supported"] },
    { type: "Full Cow Distribution", metric: "150+ Families Served", features: ["Large Scale Feeding", "Multiple Villages Reached", "Maximum Impact"] },
  ];

  return (
    <section id="udhhiya" className="relative py-24 overflow-hidden bg-brand-emerald-dark text-white">
      <GeometricPattern opacity={0.1} color="white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/10 border border-white/20">
            <Moon size={14} className="text-brand-gold-light"/>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-light">Annual Eid al-Adha Program</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-6 leading-tight">
            Our Udhhiya <span className="gold-text">Impact</span><br/>
            Across Kenya
          </h2>
          <p className="italic text-xl sm:text-2xl font-heading text-brand-gold-light mb-10">
            "Neither their meat nor their blood reaches Allah, but it is your piety that reaches Him."
          </p>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-white/80 font-medium">
            Every year during Eid al-Adha, we facilitate the sacrifice and distribution of meat to thousands of vulnerable families, orphans, and widows who rarely have access to nutritious meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {options.map(({ type, metric, features }, i) => (
            <div key={i} className="group p-8 rounded-[3rem] bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:-translate-y-2 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-2 text-brand-gold-light">{type}</h3>
                <div className="text-xl font-black mb-6 text-white">{metric}</div>
                <div className="space-y-4">
                  {features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={16} className="text-brand-gold" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-12 rounded-[3.5rem] bg-white text-brand-emerald-dark text-center relative shadow-2xl">
          <Sparkles size={24} className="text-brand-gold-light absolute top-8 right-12 animate-pulse" />
          <h3 className="text-3xl font-heading font-bold mb-6 italic">100% Verified Distribution</h3>
          <p className="text-brand-muted mb-10 font-medium leading-relaxed">
            Every sacrifice is carried out according to strict Shariah principles. We personally oversee the selection of healthy animals, the ethical sacrifice, and the transparent distribution to those who truly need it in Kenya's poorest regions.
          </p>
          
          <button onClick={() => navigate('/gallery')} className="px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-brand-gold/40 shadow-xl inline-flex items-center gap-3">
            <ImageIcon size={18} /> View Our Udhhiya Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
