import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQCard = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-emerald/10 last:border-0">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`font-heading font-bold text-lg transition-colors ${open ? "text-brand-gold" : "text-brand-emerald-dark group-hover:text-brand-emerald"}`}>{q}</span>
        <div className={`p-2 rounded-lg transition-all ${open ? "bg-brand-gold text-white" : "bg-brand-emerald/5 text-brand-emerald"}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-brand-muted leading-relaxed font-medium">{a}</p>
      </div>
    </div>
  );
};

export const ProgramCard = ({ icon: Icon, title, desc, delay }) => (
  <div 
    className="group p-8 rounded-[2.5rem] bg-brand-cream border border-brand-emerald/5 hover:bg-white hover:shadow-glow transition-all hover:-translate-y-2 duration-500"
    style={{ animationDelay: `${delay}ms`, animation: 'fadeInUp 0.8s ease-out forwards' }}
  >
    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500">
      <Icon size={28} className="text-brand-gold-light group-hover:text-white transition-colors" />
    </div>
    <h3 className="font-heading font-bold text-xl mb-3 text-brand-emerald-dark transition-colors group-hover:text-brand-emerald">{title}</h3>
    <p className="text-sm leading-relaxed text-brand-muted font-medium">{desc}</p>
  </div>
);

export const BlogCard = ({ img, category, title, desc, onClick }) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-glow transition-all hover:-translate-y-2 border border-brand-emerald/5">
    <div className="h-56 bg-brand-emerald/5 relative overflow-hidden">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-brand-emerald-dark/10 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-brand-emerald-dark">
        {category}
      </div>
    </div>
    <div className="p-8">
      <h3 className="font-heading font-bold text-xl mb-3 leading-snug text-brand-emerald-dark group-hover:text-brand-emerald transition-colors line-clamp-2">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-2 font-medium">{desc}</p>
      <button onClick={onClick} className="text-xs font-black uppercase tracking-widest text-brand-gold hover:text-brand-emerald transition-colors flex items-center gap-2 group/btn">
        Read Full Story <span className="transition-transform group-hover/btn:translate-x-1">→</span>
      </button>
    </div>
  </div>
);
