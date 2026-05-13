import React from 'react';
import { Users } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function Volunteer({ scrollTo }) {
  return (
    <section id="volunteer" className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-gold/10 via-brand-emerald/10 to-brand-gold/5">
      <GeometricPattern opacity={0.06}/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-gold/20 border border-brand-gold/40">
          <Users size={14} className="text-brand-gold"/>
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Volunteer With Us</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-brand-emerald-dark leading-tight">
          Become A <span className="gold-text">Volunteer</span>
        </h2>
        <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-brand-muted font-medium">
          Join our team of dedicated volunteers and help bring hope to more lives. Every hour you give is an act of worship and an investment in your Akhirah.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {["Teaching & Education", "Community Outreach", "Food Distribution", "Administration", "Fundraising", "Media & Design"].map((role, i) => (
            <div key={i} className="p-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-white/60 backdrop-blur-md border border-brand-emerald/10 text-brand-emerald-dark shadow-soft">
              ✓ {role}
            </div>
          ))}
        </div>
        <button onClick={() => scrollTo("contact")} className="px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 bg-gradient-to-r from-brand-emerald to-brand-emerald-light text-white shadow-brand-emerald/20 shadow-xl">
          🤝 Join Our Mission
        </button>
      </div>
    </section>
  );
}
