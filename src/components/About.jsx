import React from 'react';
import { MapPin, ArrowRight, HeartHandshake } from 'lucide-react';

export default function About({ scrollTo }) {
  const focusPillars = [
    "Orphan Support",
    "Clean Water Boreholes",
    "Food Relief & Ramadan",
    "Mosque Construction",
    "Youth Empowerment",
    "Quran & Arabic Education",
    "Zakah Distribution",
    "New Muslim Support"
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-brand-cream border-t border-brand-emerald/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Authentic Field Photographic Composition (Balanced height) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">

              {/* Primary Field Photograph */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-emerald/15 bg-brand-emerald-dark">
                <picture className="block w-full">
                  <source srcSet="/gallery/ramadan-3.webp" type="image/webp" />
                  <img
                    src="/gallery/ramadan-3.png"
                    alt="The Light of Peace community outreach and food parcel distribution in Kenya"
                    width={640}
                    height={480}
                    className="w-full h-72 sm:h-80 lg:h-92 object-cover object-center block"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-emerald/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white mb-1.5 shadow-xs">
                    <MapPin size={12} className="text-brand-gold-light" />
                    <span>Mombasa, Kenya</span>
                  </div>
                  <p className="font-heading font-bold text-sm sm:text-base leading-snug">
                    Direct Community Relief Handover
                  </p>
                </div>
              </div>

              {/* Supporting Secondary Field Photograph */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-brand-emerald/15 bg-white p-3">
                <div className="grid grid-cols-12 gap-3.5 items-center">
                  <div className="col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-brand-emerald-dark">
                    <picture className="block w-full h-full">
                      <source srcSet="/gallery/ramadan-2.webp" type="image/webp" />
                      <img
                        src="/gallery/ramadan-2.png"
                        alt="The Light of Peace volunteer ground coordination in Kenya"
                        width={240}
                        height={180}
                        className="w-full h-full object-cover object-center block"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className="col-span-7 pr-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block">
                      Local Volunteer Team
                    </span>
                    <p className="text-xs text-brand-muted font-medium mt-1 leading-relaxed">
                      Community members and volunteer coordinators organizing direct on-the-ground distributions across Kenya.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative & Institutional Identity */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 bg-brand-emerald/10 border border-brand-emerald/20">
              <HeartHandshake size={14} className="text-brand-emerald" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
                About The Light of Peace
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 text-brand-emerald-dark leading-tight">
              Compassion, Faith &amp; <span className="gold-text-dark">Community Development</span>
            </h2>

            {/* Approved Editorial Narrative */}
            <div className="text-brand-muted text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              <p className="text-brand-text font-semibold leading-relaxed">
                The Light of Peace is an Islamic humanitarian charity organization based in Mombasa, Kenya, dedicated to improving lives and supporting vulnerable communities through compassion, faith and community development.
              </p>
              <p>
                The organization works to support orphans, empower vulnerable youth through education and drug abuse prevention initiatives, assist new Muslim converts, provide food to disadvantaged families, distribute Zakah, promote Quran and Arabic education, and support sustainable clean water and mosque construction projects.
              </p>
              <p>
                Through its humanitarian and Islamic charitable programs, The Light of Peace seeks to bring hope, dignity and meaningful opportunities to individuals and families in need.
              </p>
              <p className="italic text-brand-emerald-dark font-medium border-l-2 border-brand-gold pl-4 py-1.5 bg-brand-gold/5 rounded-r-xl">
                Based in Mombasa and serving communities in Kenya, the organization believes that every act of generosity can make a lasting difference.
              </p>
            </div>

            {/* Strategic Pillars (Subtle, Clean Text Pills — Zero Giant Icon Boxes) */}
            <div className="mb-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-emerald-dark block mb-3">
                Key Initiatives &amp; Focus Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {focusPillars.map((pillar, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white border border-brand-emerald/15 text-xs font-semibold text-brand-emerald-dark shadow-xs"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo ? scrollTo("programs") : null}
                className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] bg-brand-emerald text-white hover:bg-brand-emerald-dark shadow-md flex items-center gap-2"
              >
                <span>Explore Our Programs</span>
                <ArrowRight size={15} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo ? scrollTo("donations") : null}
                className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:bg-brand-emerald/5 bg-white border border-brand-emerald/20 text-brand-emerald-dark flex items-center gap-2"
              >
                <span>Support Our Causes</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
