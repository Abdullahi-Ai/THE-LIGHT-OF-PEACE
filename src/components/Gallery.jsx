import React, { useState } from 'react';
import { Camera, Play, X, Eye } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Media' },
  { id: 'ramadan', name: 'Ramadan Relief' },
  { id: 'udhiya', name: 'Eid Udhhiya / Qurbani' },
  { id: 'mosque', name: 'Mosque Construction' },
];

const galleryItems = [
  {
    id: 1,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-1.png',
    title: 'Food Parcel Handover',
    desc: 'Direct delivery of essential food staples to families in need in Kenya.'
  },
  {
    id: 2,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-2.png',
    title: 'Community Coordination',
    desc: 'Working with local community members to coordinate relief drives.'
  },
  {
    id: 3,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-3.png',
    title: 'Relief Distribution Gathering',
    desc: 'Distributing food packages to community members.'
  },
  {
    id: 4,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-4.png',
    title: 'Assembled Food Hampers',
    desc: 'Relief parcels prepared with rice, flour, cooking oil, and essential staples.'
  },
  {
    id: 5,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-5.png',
    title: 'Distribution Staging',
    desc: 'Organizing logistics for community relief distribution.'
  },
  {
    id: 6,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-6.png',
    title: 'Volunteer Operations Team',
    desc: 'Community volunteers assisting with relief parcel handling.'
  },
  {
    id: 7,
    category: 'ramadan',
    type: 'image',
    src: '/gallery/ramadan-7.png',
    title: 'Food Relief Handover',
    desc: 'Providing food security to households during relief campaigns.'
  },
  {
    id: 8,
    category: 'udhiya',
    type: 'image',
    src: '/gallery/udhiya-1.png',
    title: 'Udhhiya Field Preparations',
    desc: 'Field team organizing livestock handling for Eid al-Adha.'
  },
  {
    id: 9,
    category: 'udhiya',
    type: 'image',
    src: '/gallery/udhiya-2.png',
    title: 'Sacrificial Meat Packaging',
    desc: 'Hygienic parceling of fresh meat ready for distribution to needy families.'
  },
  {
    id: 10,
    category: 'mosque',
    type: 'video',
    src: '/gallery/mosque-video-1.mp4',
    poster: '/gallery/mosque-poster-1.webp',
    title: 'Mosque Foundation & Groundwork',
    desc: 'Site groundwork and concrete pouring for community prayer space.'
  },
  {
    id: 11,
    category: 'mosque',
    type: 'video',
    src: '/gallery/mosque-video-2.mp4',
    poster: '/gallery/mosque-poster-2.webp',
    title: 'Structural Columns & Blockwork',
    desc: 'Pillar construction and perimeter walls for worship and education.'
  },
  {
    id: 12,
    category: 'mosque',
    type: 'video',
    src: '/gallery/mosque-video-3.mp4',
    poster: '/gallery/mosque-poster-3.webp',
    title: 'Roof Framing Progress',
    desc: 'Structural roofing progress on the community mosque building.'
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeMedia, setActiveMedia] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-white border-t border-brand-emerald/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <Camera size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Field Gallery
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Field Photographs &amp; <span className="gold-text-dark">Video Records</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            Every photograph and video represents original field work carried out by The Light of Peace in Kenya.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeFilter === cat.id
                  ? 'bg-brand-emerald text-white border-brand-emerald shadow-sm'
                  : 'bg-brand-cream text-brand-emerald-dark border-brand-emerald/10 hover:bg-brand-emerald/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isVideo = item.type === 'video';
            const webpSrc = !isVideo && item.src.endsWith('.png') ? item.src.replace('.png', '.webp') : item.src;

            return (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className="group relative rounded-2xl overflow-hidden shadow-xs aspect-[16/10] bg-brand-emerald-dark cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-brand-emerald/15"
              >
                {isVideo ? (
                  <div className="w-full h-full relative flex items-center justify-center bg-brand-emerald-dark">
                    <video
                      src={`${item.src}#t=0.5`}
                      poster={item.poster}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      preload="metadata"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                    <div className="absolute w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-brand-emerald flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-emerald-dark transition-all">
                      <Play size={18} className="ml-0.5 fill-current" />
                    </div>
                  </div>
                ) : (
                  <picture className="block w-full h-full">
                    <source srcSet={webpSrc} type="image/webp" />
                    <img
                      src={item.src}
                      alt={item.title}
                      width={640}
                      height={400}
                      className="w-full h-full object-cover object-center block opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-500"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </picture>
                )}

                {/* Subtle bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Badge top-left */}
                <div className="absolute top-3.5 left-3.5 pointer-events-none">
                  {isVideo ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold text-brand-emerald-dark text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      <Play size={10} className="fill-current" /> Video Record
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-emerald-dark text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      <Eye size={10} /> Field Photo
                    </span>
                  )}
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                  <h3 className="font-heading font-bold text-sm sm:text-base leading-snug mb-0.5 group-hover:text-brand-gold-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/80 line-clamp-1 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveMedia(null)}
              aria-label="Close media view"
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[16/10] bg-black flex items-center justify-center">
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.src}
                  poster={activeMedia.poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={activeMedia.src.replace('.png', '.webp')} type="image/webp" />
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="max-w-full max-h-[75vh] object-contain"
                  />
                </picture>
              )}
            </div>

            <div className="p-5 bg-[#073D26] text-white border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-base text-brand-gold-light">
                  {activeMedia.title}
                </h4>
                <p className="text-xs text-white/80 mt-0.5">
                  {activeMedia.desc}
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-white/80">
                Kenya Field Archive
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
