import React, { useState } from 'react';
import { Camera, Sparkles, CheckCircle2, Play, X } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

const categories = [
  { id: 'all', name: 'All Impact' },
  { id: 'ramadan', name: 'Ramadan 2023' },
  { id: 'udhiya', name: 'Udhiya Program' },
  { id: 'mosque', name: 'Mosque Construction' },
];

const galleryImages = [
  { id: 1, category: 'ramadan', src: '/gallery/ramadan-1.png', title: 'Iftar Distribution', desc: 'Direct food package delivery to families in need.' },
  { id: 2, category: 'ramadan', src: '/gallery/ramadan-2.png', title: 'Community Leaders', desc: 'Local coordination for transparent distribution.' },
  { id: 3, category: 'ramadan', src: '/gallery/ramadan-3.png', title: 'Hand-to-Hand Support', desc: 'Ensuring every donation reaches the recipient personally.' },
  { id: 5, category: 'ramadan', src: '/gallery/ramadan-5.png', title: 'Iftar Supplies', desc: 'Essential food items for the holy month.' },
  { id: 6, category: 'ramadan', src: '/gallery/ramadan-6.png', title: 'Logistics Team', desc: 'Our dedicated team on the ground.' },
  { id: 7, category: 'ramadan', src: '/gallery/ramadan-7.png', title: 'Distribution Complete', desc: 'Success in reaching the target families.' },
  { id: 8, category: 'udhiya', src: '/gallery/udhiya-1.png', title: 'Community Preparation', desc: 'The team preparing for the 1442/2021 Udhiya distribution.' },
  { id: 9, category: 'udhiya', src: '/gallery/udhiya-2.png', title: 'Package Ready', desc: 'Fresh meat and food packages organized for local families.' },
  { id: 15, category: 'mosque', src: '/gallery/mosque-video-1.mp4', type: 'video', title: 'Foundation Video', desc: 'Groundwork and initial foundation layers.' },
  { id: 16, category: 'mosque', src: '/gallery/mosque-video-2.mp4', type: 'video', title: 'Construction Progress', desc: 'Walls and structure development.' },
  { id: 17, category: 'mosque', src: '/gallery/mosque-video-3.mp4', type: 'video', title: 'Site Tour', desc: 'A walkthrough of the current construction site.' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null);

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-white">
      <GeometricPattern opacity={0.03} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-gold/10 border border-brand-gold/20">
            <Camera size={14} className="text-brand-gold" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Transparency Gallery</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark leading-tight">
            Impact <span className="gold-text">In Action</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-brand-muted font-medium">
            See exactly how your contributions are transforming lives. We believe in 100% transparency through every stage of our programs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat.id
                  ? 'bg-brand-emerald-dark text-white border-brand-emerald-dark shadow-xl scale-105'
                  : 'bg-white text-brand-emerald-dark border-brand-emerald/10 hover:border-brand-gold/50 hover:bg-brand-emerald/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative rounded-[2.5rem] overflow-hidden shadow-soft aspect-[4/3] bg-brand-emerald/5 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              {img.type === 'video' && playingVideo === img.id ? (
                <div className="absolute inset-0 bg-black">
                  <video 
                    src={img.src} 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay 
                    muted
                    playsInline
                    onEnded={() => setPlayingVideo(null)}
                  />
                  <button 
                    onClick={() => setPlayingVideo(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 text-white z-20"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <>
                  {img.type === 'video' ? (
                    <video 
                      src={`${img.src}#t=0.1`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      preload="metadata"
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = '#083d2610';
                      }}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 pointer-events-none">
                    <div className="flex items-center gap-2 mb-3 text-brand-gold">
                      <CheckCircle2 size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Verified {img.type === 'video' ? 'Progress' : 'Impact'}</span>
                    </div>
                    <h4 className="text-white font-bold text-2xl mb-1">{img.title}</h4>
                    <p className="text-white/70 text-sm font-medium line-clamp-2 leading-relaxed">{img.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-brand-gold-light text-[10px] font-black uppercase tracking-widest">
                      <Sparkles size={12} />
                      {categories.find(c => c.id === img.category)?.name}
                    </div>
                  </div>

                  <div 
                    onClick={() => img.type === 'video' && setPlayingVideo(img.id)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all"
                  >
                    <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                      {img.type === 'video' ? (
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500">
                          <Play size={32} />
                        </div>
                      ) : (
                        <Camera size={48} className="text-white" />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-24 bg-brand-emerald/5 rounded-[3rem] border border-dashed border-brand-emerald/20">
            <p className="text-brand-muted font-bold uppercase tracking-widest text-sm">No impact records found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
