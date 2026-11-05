import React from 'react';
import { Moon, CheckCircle, Sparkles, Image as ImageIcon, Heart, ArrowRight } from 'lucide-react';

export default function Udhhiya({ scrollTo, onOpenGallery }) {
  const options = [
    {
      type: "Small Ruminant (Goat / Sheep)",
      impact: "Provides fresh meat packages for 3 to 5 needy households",
      features: [
        "Shariah-compliant health inspection",
        "Hygienic local slaughter and ethical handling",
        "Hand-to-hand distribution to impoverished families"
      ]
    },
    {
      type: "Communal Cattle Share (1/7 Share)",
      impact: "Serves 15 to 20 vulnerable households in remote villages",
      features: [
        "Collective sacrifice on behalf of multiple donors",
        "Wider community reach in drought areas",
        "Prioritizing widows, orphans, and elderly"
      ]
    },
    {
      type: "Full Cow / Cattle Distribution",
      impact: "Large-scale community relief reaching over 100 families",
      features: [
        "Major meat distribution to entire village settlements",
        "Direct delivery to orphan centers and madrasahs",
        "Comprehensive photo & video verification"
      ]
    },
  ];

  return (
    <section
      id="udhhiya"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-brand-emerald-dark text-white border-t border-brand-emerald/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-white/10 border border-white/20">
            <Moon size={14} className="text-brand-gold-light" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-light">
              Annual Eid al-Adha Qurbani
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Our Udhhiya Sacrifice &amp; <span className="gold-text">Distribution</span> in Kenya
          </h2>

          <p className="italic text-base sm:text-lg font-heading text-brand-gold-light mb-3">
            "Neither their meat nor their blood reaches Allah, but it is your piety that reaches Him." (Surah Al-Hajj 22:37)
          </p>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            During Eid al-Adha, The Light of Peace oversees the purchase of healthy livestock and coordinates direct meat parcel delivery to thousands of vulnerable families who rarely enjoy nutritious meat.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {options.map((opt, i) => (
            <div
              key={i}
              className="p-7 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-300 hover:bg-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 text-brand-gold-light">
                  {opt.type}
                </h3>
                <div className="text-xs font-semibold mb-6 text-white/90">
                  {opt.impact}
                </div>
                <div className="space-y-2.5 mb-6">
                  {opt.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-white/75">
                      <CheckCircle size={15} className="text-brand-gold-light shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollTo ? scrollTo("donations") : null}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-brand-gold hover:text-brand-emerald-dark text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <span>Support This Program</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Verification & Gallery Preview Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white text-brand-emerald-dark text-center relative shadow-xl">
          <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3">
            Shariah-Compliant &amp; Directly Verified
          </h3>

          <p className="text-brand-muted text-xs sm:text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
            Our volunteers personally oversee the selection of healthy animals, humane slaughter procedures, and hygienic packaging. We ensure the meat is received by genuine widows, orphans, and needy families across Kenya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollTo ? scrollTo("donations") : null}
              className="px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:scale-[1.02] bg-brand-emerald text-white hover:bg-brand-emerald-dark shadow-sm flex items-center gap-2"
            >
              <Heart size={15} className="fill-white" />
              <span>Donate to Udhhiya Fund</span>
            </button>

            <button
              type="button"
              onClick={onOpenGallery}
              className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:bg-brand-emerald/5 bg-brand-cream border border-brand-emerald/20 text-brand-emerald-dark flex items-center gap-2"
            >
              <ImageIcon size={15} className="text-brand-emerald" />
              <span>View Field Photographs</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
