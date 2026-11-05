import React from 'react';
import { Heart, Baby, Utensils, Droplets, Building2, BookOpen } from 'lucide-react';

export default function ImpactStats() {
  const focusAreas = [
    {
      icon: Heart,
      title: "Vulnerable Families",
      desc: "Emergency relief, staple food hampers, and direct assistance for widows and impoverished households."
    },
    {
      icon: Baby,
      title: "Orphan Support",
      desc: "Nutritional support, school essentials, and community mentorship for orphaned children."
    },
    {
      icon: Utensils,
      title: "Food Security",
      desc: "Ramadan Iftar packages and seasonal nutritional distributions across underserved communities."
    },
    {
      icon: Droplets,
      title: "Clean Water Access",
      desc: "Facilitating sustainable deep-well boreholes to supply safe drinking water in drought-affected areas."
    },
    {
      icon: Building2,
      title: "Mosque Construction",
      desc: "Supporting the building and rehabilitation of community masajid and prayer spaces."
    },
    {
      icon: BookOpen,
      title: "Education & Quran",
      desc: "Promoting Islamic knowledge, Quranic literacy, and moral guidance for youth and children."
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-brand-emerald-dark text-white border-t border-brand-emerald/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-brand-gold-light" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Humanitarian Impact
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Serving Communities in <span className="gold-text">Kenya</span>
          </h2>
          <p className="text-xs sm:text-base text-white/80 leading-relaxed">
            Every contribution directly supports our community-focused programs, fulfilling our mission of bringing hope, peace, and tangible relief.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 bg-brand-gold/15 text-brand-gold-light">
                <Icon size={22} />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
