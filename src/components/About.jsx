import React from 'react';
import { Users, BookOpen, GraduationCap, Home, Star, Globe, Heart, Sparkles } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function About({ scrollTo }) {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-brand-cream">
      <GeometricPattern opacity={0.04}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-56 bg-gradient-to-br from-brand-emerald to-brand-emerald-dark col-span-2">
                <div className="w-full h-full flex items-center justify-center relative">
                  <GeometricPattern opacity={0.15} color="#e8c45a"/>
                  <div className="relative z-10 text-center text-white">
                    <Users size={48} className="mx-auto mb-2 opacity-80"/>
                    <p className="font-bold opacity-80 uppercase tracking-widest text-xs">Community Support</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-40 bg-gradient-to-br from-brand-gold to-[#8b6914]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen size={36} className="mx-auto mb-1.5 opacity-80"/>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Quran Learning</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-40 bg-gradient-to-br from-[#2d5a2d] to-[#1a3a1a]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <GraduationCap size={36} className="mx-auto mb-1.5 opacity-80"/>
                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Islamic Education</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-gold to-brand-gold-light shadow-brand-gold/40 shadow-xl border-4 border-white/20">
              <div className="font-black text-3xl text-white leading-none">5+</div>
              <div className="text-[10px] text-white/90 font-bold text-center leading-tight uppercase mt-1">Years of<br/>Service</div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
              <Sparkles size={14} className="text-brand-emerald"/>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">About Our Organization</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 leading-tight text-brand-emerald-dark">
              A Light of Faith.<br/>
              <span className="gold-text">A Legacy of Mercy.</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-brand-muted font-medium">
              The Light of Peace is an Islamic charity organization dedicated to serving humanity with compassion, dignity and faith. We believe every act of kindness brings light to someone's life — fulfilling the Prophetic tradition of caring for orphans, the poor and our communities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: GraduationCap, label: "Education Support" },
                { icon: Home, label: "Shelter Programs" },
                { icon: BookOpen, label: "Arabic Classes" },
                { icon: Star, label: "Quran Recitation" },
                { icon: Globe, label: "Community Outreach" },
                { icon: Heart, label: "Zakah Support" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-brand-emerald/5 border border-brand-emerald/10 hover:bg-brand-emerald/10 transition-colors">
                  <Icon size={16} className="text-brand-emerald shrink-0"/>
                  <span className="text-[11px] font-bold text-brand-emerald-dark">{label}</span>
                </div>
              ))}
            </div>
            <button onClick={() => scrollTo("programs")} className="px-8 py-4 rounded-full font-bold transition-all hover:scale-105 bg-gradient-to-r from-brand-emerald to-brand-emerald-light text-white shadow-brand-emerald/20 shadow-lg">
              Explore Our Programs →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
