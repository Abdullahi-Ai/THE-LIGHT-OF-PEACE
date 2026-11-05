import React from 'react';
import { Droplets, MapPin, Users, Waves, ArrowRight } from 'lucide-react';

export default function CleanWater({ scrollTo }) {
  const boreholeSteps = [
    { step: "01", title: "Site Assessment", desc: "Identifying community locations with acute, long-term drinking water needs." },
    { step: "02", title: "Borehole Drilling", desc: "Drilling through ground strata to reach natural groundwater aquifers." },
    { step: "03", title: "Pumping & Storage", desc: "Installing reliable pumping systems and elevated hygienic water tanks." },
    { step: "04", title: "Community Distribution", desc: "Constructing accessible communal tap stands for local families and livestock." },
  ];

  return (
    <section
      id="water"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-brand-cream border-t border-brand-emerald/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Context & The Gift of Water */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 bg-brand-emerald/10 border border-brand-emerald/20">
              <Droplets size={14} className="text-brand-emerald" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
                Clean Water Initiative
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 text-brand-emerald-dark leading-tight">
              Giving the <span className="gold-text-dark">Gift of Life</span> Through Sustainable Boreholes
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-6 text-brand-text/90 font-medium">
              Water is the foundation of human survival and an ongoing charity (<em>Sadaqah Jariyah</em>). In drought-prone regions in Kenya, women and children frequently walk long distances each day searching for water.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed mb-8 text-brand-muted">
              The Light of Peace facilitates borehole construction and community water points designed to supply rural communities, schools, and local residents with accessible drinking water.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-brand-emerald/10 shadow-xs">
                <MapPin size={20} className="text-brand-gold-dark mb-1.5" />
                <div className="text-base font-bold text-brand-emerald-dark">Targeted Need</div>
                <div className="text-xs text-brand-muted mt-0.5">Rural communities facing water scarcity</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-emerald/10 shadow-xs">
                <Users size={20} className="text-brand-emerald mb-1.5" />
                <div className="text-base font-bold text-brand-emerald-dark">Sadaqah Jariyah</div>
                <div className="text-xs text-brand-muted mt-0.5">Continuous charitable reward for donors</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollTo ? scrollTo("donations") : null}
              className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] bg-brand-emerald text-white hover:bg-brand-emerald-dark shadow-md flex items-center gap-2"
            >
              <span>Support Clean Water Projects</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right Column: Borehole Engineering Architecture */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-8 sm:p-10 bg-white border border-brand-emerald/15 shadow-xl relative">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-emerald/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                    <Waves size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-brand-emerald-dark">
                      Borehole Setup Stages
                    </h3>
                    <p className="text-xs text-brand-muted">Steps involved in community water provision</p>
                  </div>
                </div>
              </div>

              {/* Step Sequence */}
              <div className="space-y-4 mb-6">
                {boreholeSteps.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-brand-cream/60 border border-brand-emerald/5">
                    <span className="font-heading font-extrabold text-sm text-brand-gold-dark shrink-0 pt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-emerald-dark">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-muted leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Islamic Quote Callout */}
              <div className="p-4 rounded-xl bg-brand-emerald-dark text-white text-xs leading-relaxed">
                <p className="italic text-brand-gold-light mb-1">
                  "The best charity is to give water to drink."
                </p>
                <p className="text-white/70 text-[11px]">
                  Prophetic Hadith (Sunan an-Nasa'i). Providing clean drinking water is a blessed continuous charity.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
