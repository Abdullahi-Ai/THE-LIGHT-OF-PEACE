import React from 'react';
import { ShieldCheck, Eye, FileCheck, Users, Camera } from 'lucide-react';

export default function Transparency({ onOpenGallery, scrollTo }) {
  const pillars = [
    {
      icon: Eye,
      title: "Field Documentation",
      desc: "Community distributions and construction milestones are documented with original photographs and videos."
    },
    {
      icon: Users,
      title: "Direct Handover",
      desc: "Relief parcels and seasonal sacrificial meat packages are delivered directly to families in need."
    },
    {
      icon: FileCheck,
      title: "Designated Allocation",
      desc: "Zakah, Sadaqah, and borehole funds are allocated strictly according to donor intention and Islamic principles."
    },
    {
      icon: ShieldCheck,
      title: "Direct Contact",
      desc: "Donors can contact our coordinators directly via telephone or WhatsApp for project inquiries and updates."
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-brand-cream border-t border-brand-emerald/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <ShieldCheck size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Accountability &amp; Integrity
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Our Commitment to <span className="gold-text-dark">Trust</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            Charity in Islam is an <em>Amanah</em> (sacred trust). We are dedicated to ensuring that your generous donations reach genuine beneficiaries with sincerity and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-brand-emerald/15 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-brand-emerald/5 border border-brand-emerald/10 text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-emerald-dark mb-2">
                  {title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-normal">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-brand-emerald-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="font-heading font-bold text-lg sm:text-xl text-brand-gold-light mb-1">
              Field Documentation Archive
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Browse our media archive containing genuine field photographs and video records of relief distributions in Kenya.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenGallery}
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] bg-white text-brand-emerald-dark hover:bg-brand-cream shadow-sm flex items-center gap-2"
          >
            <Camera size={15} />
            <span>Open Field Media Archive</span>
          </button>
        </div>

      </div>
    </section>
  );
}
