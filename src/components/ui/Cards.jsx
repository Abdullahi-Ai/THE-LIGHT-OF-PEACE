import React, { useState, useId } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export const FAQCard = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="border-b border-brand-emerald/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full py-4 sm:py-5 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`font-heading font-bold text-base sm:text-lg transition-colors pr-4 ${open ? "text-brand-gold-dark" : "text-brand-emerald-dark group-hover:text-brand-emerald"}`}>
          {q}
        </span>
        <div className={`p-2 rounded-xl shrink-0 transition-all ${open ? "bg-brand-gold text-white" : "bg-brand-emerald/5 text-brand-emerald group-hover:bg-brand-emerald/10"}`}>
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-normal">
          {a}
        </p>
      </div>
    </div>
  );
};

export const ProgramCard = ({ icon: Icon, title, desc, onAction, actionLabel = "Learn More" }) => (
  <div
    className="group p-7 sm:p-8 rounded-3xl bg-white border border-brand-emerald/15 hover:border-brand-emerald/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
  >
    <div>
      <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-emerald/10 flex items-center justify-center mb-5 text-brand-emerald shadow-xs group-hover:scale-105 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300">
        <Icon size={22} className="group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-heading font-bold text-lg sm:text-xl mb-2.5 text-brand-emerald-dark group-hover:text-brand-emerald transition-colors">
        {title}
      </h3>
      <p className="text-xs sm:text-sm leading-relaxed text-brand-muted font-normal mb-5">
        {desc}
      </p>
    </div>
    {onAction && (
      <button
        type="button"
        onClick={onAction}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-emerald group-hover:text-brand-gold-dark transition-colors self-start"
      >
        <span>{actionLabel}</span>
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
      </button>
    )}
  </div>
);

export const BlogCard = ({ img, category, title, desc, onClick }) => {
  const webpSrc = img.endsWith('.png') ? img.replace('.png', '.webp') : img;

  return (
    <article className="group bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-brand-emerald/15 flex flex-col justify-between">
      <div>
        <div className="h-52 bg-brand-emerald-dark relative overflow-hidden">
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={img}
              alt={title}
              width={600}
              height={350}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-brand-emerald-dark shadow-xs">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-lg mb-2 leading-snug text-brand-emerald-dark group-hover:text-brand-emerald transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-brand-muted text-xs leading-relaxed mb-4 line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 pt-0">
        <button
          type="button"
          onClick={onClick}
          className="text-xs font-bold uppercase tracking-wider text-brand-emerald hover:text-brand-gold-dark transition-colors flex items-center gap-1.5"
        >
          <span>Read Full Story</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </article>
  );
};
