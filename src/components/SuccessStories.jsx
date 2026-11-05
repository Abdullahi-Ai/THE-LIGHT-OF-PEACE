import React from 'react';
import { Camera, MapPin } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      title: "Direct Food Parcel Delivery",
      tag: "Food Distribution",
      desc: "Field coordinators handing over 25kg staple food hampers directly to households in need during community relief drives.",
      img: "/gallery/ramadan-6.png",
      alt: "Food package handover to family in Kenya"
    },
    {
      title: "Community Distribution Coordination",
      tag: "Relief Logistics",
      desc: "Local volunteer teams staging and organizing food packages alongside area community members for orderly distribution.",
      img: "/gallery/ramadan-5.png",
      alt: "Community relief coordination and parcel staging in Kenya"
    },
    {
      title: "Udhhiya / Qurbani Field Preparations",
      tag: "Eid al-Adha",
      desc: "Ground team overseeing livestock health inspection and logistics for seasonal Eid al-Adha fresh meat distribution.",
      img: "/gallery/udhiya-1.png",
      alt: "Field team preparing for Udhhiya distribution in Kenya"
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-brand-cream border-t border-brand-emerald/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <Camera size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Field Reports
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Original Field Activities &amp; <span className="gold-text-dark">Relief Updates</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            Direct photographic records of community food distributions, local volunteer operations, and seasonal humanitarian initiatives in Kenya.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map(({ title, tag, desc, img, alt }, i) => {
            const webpSrc = img.replace('.png', '.webp');
            return (
              <article
                key={i}
                className="rounded-3xl overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 border border-brand-emerald/15 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-brand-emerald-dark relative overflow-hidden">
                    <picture className="block w-full h-full">
                      <source srcSet={webpSrc} type="image/webp" />
                      <img
                        src={img}
                        alt={alt}
                        width={640}
                        height={400}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </picture>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-emerald-dark/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      {tag}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-2.5 text-brand-emerald-dark group-hover:text-brand-emerald transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-brand-muted">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:p-7 pb-6 pt-0">
                  <div className="pt-4 border-t border-brand-emerald/10 flex items-center gap-2 text-xs font-semibold text-brand-emerald">
                    <MapPin size={13} className="text-brand-gold-dark" />
                    <span>Mombasa &amp; Coastal Kenya</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
