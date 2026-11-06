import React from 'react';
import { Heart, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero({ scrollTo }) {
  return (
    <header
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#062D1C] via-[#0B5D3B] to-[#073D26] text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 border-b border-white/10"
    >
      {/* Subtle Atmospheric Lighting (Constrained to prevent mobile sub-pixel overflow) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full w-[600px] h-[400px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 right-0 max-w-full w-[450px] h-[450px] bg-brand-emerald-light/20 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Authoritative Editorial Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Location & Organization Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-xs">
              <MapPin size={13} className="text-brand-gold-light shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-white/95">
                The Light of Peace Organization · Mombasa, Kenya
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] mb-6">
              Bringing Hope, <br />
              <span className="gold-text">Peace &amp; Support</span> <br />
              to Communities
            </h1>

            {/* Editorial Mission Statement */}
            <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed font-normal mb-8">
              The Light of Peace is an organization based in Mombasa, Kenya, working through humanitarian initiatives including clean water boreholes, orphan support, food distribution, mosque construction, and community empowerment through faith and compassion.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("donations")}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold text-brand-emerald-dark shadow-lg shadow-brand-gold/25 flex items-center justify-center gap-2.5"
              >
                <Heart size={16} className="fill-brand-emerald-dark" />
                <span>Donate to Our Programs</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("programs")}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-white/15 bg-white/10 border border-white/25 text-white backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Program Anchors */}
            <div className="pt-6 border-t border-white/15 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-brand-gold-light shrink-0" />
                <span>Orphan Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-brand-gold-light shrink-0" />
                <span>Clean Water Boreholes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-brand-gold-light shrink-0" />
                <span>Food &amp; Relief Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Authentic Field Photograph Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-brand-emerald-dark group">
                <picture className="block w-full">
                  <source srcSet="/gallery/ramadan-1.webp" type="image/webp" />
                  <img
                    src="/gallery/ramadan-1.png"
                    alt="The Light of Peace humanitarian food relief packages staging and distribution in Kenya"
                    width={640}
                    height={480}
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 block"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-emerald-dark/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>Food Distribution Staging · Kenya</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base sm:text-lg leading-snug mb-1">
                    Direct Community Food Relief
                  </p>
                  <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                    Delivering essential food staples and relief hampers directly to vulnerable families in Kenya.
                  </p>
                </div>
              </div>

              {/* Supporting Secondary Card (Placed neatly below without covering caption) */}
              <div className="mt-4 sm:mt-5 relative z-20 rounded-2xl bg-white text-brand-emerald-dark p-4 shadow-xl border border-brand-emerald/10 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-brand-gold/30 bg-brand-emerald-dark">
                  <picture className="block w-full h-full">
                    <source srcSet="/gallery/udhiya-1.webp" type="image/webp" />
                    <img
                      src="/gallery/udhiya-1.png"
                      alt="Udhhiya community preparations"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold-dark block">
                    Verified Field Records
                  </span>
                  <p className="text-xs font-bold text-brand-emerald-dark leading-snug">
                    Original photographs &amp; video documentation from ground operations in Kenya
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
