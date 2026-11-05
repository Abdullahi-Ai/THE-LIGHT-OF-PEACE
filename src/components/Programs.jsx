import React from 'react';
import {
  Droplets,
  Utensils,
  Sparkles,
  Baby,
  Building2,
  Users,
  BookOpen,
  HandHeart,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function Programs({ scrollTo }) {
  const communityPrograms = [
    {
      icon: Baby,
      title: "Orphan Support & Care",
      desc: "Providing school fees, nutritional support, emotional mentorship, and essential medical assistance to orphaned children.",
      actionLabel: "Support An Orphan",
      target: "donations"
    },
    {
      icon: Building2,
      title: "Mosque Construction",
      desc: "Constructing and renovating community masajid and prayer spaces to provide spiritual focal points and learning centers.",
      actionLabel: "Video Documentation",
      target: "mosque"
    },
    {
      icon: Users,
      title: "Youth Empowerment & Drug Recovery",
      desc: "Mentorship workshops, vocational skill guidance, and drug abuse awareness initiatives protecting youth in coastal Kenya.",
      actionLabel: "Support Youth",
      target: "donations"
    },
    {
      icon: HandHeart,
      title: "Zakah & Sadaqah Distribution",
      desc: "Faithful distribution of Zakat-ul-Mal and voluntary Sadaqah directly to eligible recipients in accordance with Islamic principles.",
      actionLabel: "Give Zakah",
      target: "donations"
    },
    {
      icon: BookOpen,
      title: "Quran & Arabic Education",
      desc: "Promoting Islamic literacy, Quran memorization, and moral mentorship for children and community members.",
      actionLabel: "Support Classes",
      target: "donations"
    },
    {
      icon: Compass,
      title: "New Muslim Convert Support",
      desc: "Welcoming and guiding new converts with foundational education, brotherhood/sisterhood networks, and transitional assistance.",
      actionLabel: "Support Converts",
      target: "donations"
    }
  ];

  return (
    <section
      id="programs"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-white border-t border-brand-emerald/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <span className="w-2 h-2 rounded-full bg-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Humanitarian Programs
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-emerald-dark leading-tight mb-4">
            Serving Communities with <span className="gold-text-dark">Compassion &amp; Dignity</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            From clean water boreholes and orphan welfare to seasonal food relief and mosque construction, our programs deliver direct, observable assistance across Kenyan communities.
          </p>
        </div>

        {/* Major Visual Programs Showcase (Editorial Photographic Layout) */}
        <div className="space-y-8 mb-16">

          {/* Featured Row 1: Ramadan Food Relief (Photographic Feature) */}
          <div className="rounded-3xl overflow-hidden bg-brand-cream border border-brand-emerald/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full bg-brand-emerald-dark overflow-hidden">
                <picture className="block w-full h-full">
                  <source srcSet="/gallery/ramadan-4.webp" type="image/webp" />
                  <img
                    src="/gallery/ramadan-4.png"
                    alt="The Light of Peace assembled food relief parcels"
                    width={640}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-emerald-dark/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                  Food Security
                </div>
              </div>

              <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-dark mb-2">
                    <Utensils size={14} />
                    <span>Seasonal &amp; Emergency Aid</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-brand-emerald-dark mb-3">
                    Ramadan &amp; Community Food Distribution
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal mb-6">
                    Delivering nutritious, staple food hampers directly to widows, elderly, and vulnerable households facing severe food insecurity. Each parcel is packed with rice, flour, cooking oil, and nutritious essentials to support families in dignity.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-brand-emerald/10">
                  <button
                    type="button"
                    onClick={() => scrollTo ? scrollTo("donations") : null}
                    className="px-6 py-3 rounded-full bg-brand-emerald text-white hover:bg-brand-emerald-dark font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Donate Food Relief</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo ? scrollTo("gallery") : null}
                    className="text-xs font-bold uppercase tracking-wider text-brand-emerald hover:text-brand-emerald-dark transition-colors"
                  >
                    View Field Photos
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Row 2: Two Asymmetric Cards (Clean Water + Udhhiya Qurbani) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Clean Water Feature (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-brand-emerald-dark text-white border border-brand-emerald/20 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold-light">
                    <Droplets size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-gold text-brand-emerald-dark text-[10px] font-extrabold uppercase tracking-wider">
                    Sadaqah Jariyah
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 text-white">
                  Clean Water Borehole Projects
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
                  Drilling deep-well community boreholes and constructing accessible communal water points across drought-prone areas in Kenya. Providing clean, reliable drinking water for families, livestock, and local schools.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10 mb-6 text-center text-xs">
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="font-bold text-brand-gold-light block">01</span>
                    <span className="text-[11px] text-white/70">Assessment</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="font-bold text-brand-gold-light block">02</span>
                    <span className="text-[11px] text-white/70">Drilling</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="font-bold text-brand-gold-light block">03</span>
                    <span className="text-[11px] text-white/70">Pumping</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="font-bold text-brand-gold-light block">04</span>
                    <span className="text-[11px] text-white/70">Distribution</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollTo ? scrollTo("water") : null}
                className="self-start px-6 py-3 rounded-full bg-brand-gold text-brand-emerald-dark hover:bg-brand-gold-light font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Explore Clean Water Initiative</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Udhhiya / Qurbani Feature (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-brand-cream border border-brand-emerald/15 shadow-sm flex flex-col justify-between">
              <div className="relative aspect-[16/10] bg-brand-emerald-dark overflow-hidden">
                <picture className="block w-full h-full">
                  <source srcSet="/gallery/udhiya-2.webp" type="image/webp" />
                  <img
                    src="/gallery/udhiya-2.png"
                    alt="Udhhiya meat parceling in Kenya"
                    width={480}
                    height={300}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-brand-emerald-dark/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  Eid al-Adha
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-emerald-dark mb-2">
                    Udhhiya / Qurbani Sacrifices
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-normal mb-5">
                    Shariah-compliant livestock selection, hygienic preparation, and direct meat distribution ensuring vulnerable families receive nutritious fresh meat during Eid al-Adha.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => scrollTo ? scrollTo("udhhiya") : null}
                  className="self-start inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-emerald hover:text-brand-gold-dark transition-colors pt-2"
                >
                  <span>View Qurbani Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Core Community & Spiritual Initiatives (Structured Editorial Grid) */}
        <div className="border-t border-brand-emerald/10 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-emerald-dark">
              Core Community &amp; Spiritual Programs
            </h3>
            <span className="text-xs text-brand-muted font-medium">
              Faith · Education · Community Welfare
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {communityPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-cream/50 border border-brand-emerald/10 hover:border-brand-emerald/25 hover:bg-brand-cream transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <h4 className="font-heading font-bold text-base text-brand-emerald-dark">
                        {prog.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed font-normal mb-4">
                      {prog.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollTo ? scrollTo(prog.target) : null}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-emerald hover:text-brand-gold-dark transition-colors self-start"
                  >
                    <span>{prog.actionLabel}</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
