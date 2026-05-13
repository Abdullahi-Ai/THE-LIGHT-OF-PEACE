import React from 'react';
import { HandHeart, Baby, Star, BookOpen, Utensils, Heart, Gift, Users, AlertTriangle, Droplets, Building2, Globe } from 'lucide-react';
import { ProgramCard } from './ui/Cards';
import { GeometricPattern } from './ui/Shared';

export default function Programs() {
  const programs = [
    { icon: HandHeart, title: "Zakat & Sadaqah", desc: "Transparent distribution of Zakat to the most vulnerable families and individuals in our community." },
    { icon: Baby, title: "Orphan Support", desc: "Providing education, healthcare, and daily essentials to orphans, ensuring they have a bright future." },
    { icon: Utensils, title: "Food Security", desc: "Regular food distribution and community kitchens to combat hunger and malnutrition." },
    { icon: BookOpen, title: "Education", desc: "Islamic and secular education programs, including Quranic studies and vocational training." },
    { icon: Droplets, title: "Clean Water", desc: "Building boreholes and water systems to provide safe drinking water to remote villages." },
    { icon: Building2, title: "Mosque Projects", desc: "Constructing and renovating mosques to provide spiritual homes for communities." },
    { icon: Users, title: "Youth Empowerment", desc: "Guiding and empowering the youth through mentorship, education, and addressing drug abuse issues." },
  ];

  return (
    <section id="programs" className="relative py-24 overflow-hidden bg-white">
      <GeometricPattern opacity={0.03} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
            <Heart size={14} className="text-brand-emerald" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Our Core Programs</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark">
            How We <span className="gold-text">Serve</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-brand-muted font-medium">
            Through your generous support, we implement sustainable programs that address the immediate and long-term needs of our brothers and sisters.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => <ProgramCard key={i} {...p} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
