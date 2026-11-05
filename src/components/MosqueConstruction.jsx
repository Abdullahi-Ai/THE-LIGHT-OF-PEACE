import React, { useState } from 'react';
import { Building2, Play, X, Heart } from 'lucide-react';

export default function MosqueConstruction({ scrollTo }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Foundation & Groundwork",
      stage: "Field Video 01",
      desc: "Video documentation of ground preparation, concrete trench work, and foundation laying.",
      src: "/gallery/mosque-video-1.mp4",
      poster: "/gallery/mosque-poster-1.webp"
    },
    {
      id: 2,
      title: "Masonry & Structural Columns",
      stage: "Field Video 02",
      desc: "Video documentation of pillar construction and block masonry for the community prayer space.",
      src: "/gallery/mosque-video-2.mp4",
      poster: "/gallery/mosque-poster-2.webp"
    },
    {
      id: 3,
      title: "Roofing & Construction Progress",
      stage: "Field Video 03",
      desc: "Video documentation showing structural roofing progress and ongoing site work.",
      src: "/gallery/mosque-video-3.mp4",
      poster: "/gallery/mosque-poster-3.webp"
    },
  ];

  return (
    <section
      id="mosque"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-white border-t border-brand-emerald/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <Building2 size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Houses of Allah
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Mosque Construction <span className="gold-text-dark">Field Video Documentation</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            <em>"Whoever builds a mosque for Allah, Allah will build for him a house in Paradise."</em> (Sahih al-Bukhari).
            Watch genuine, unedited on-site video documentation of our ongoing community mosque projects in Kenya.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="group bg-brand-cream rounded-3xl overflow-hidden border border-brand-emerald/15 hover:border-brand-emerald/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Video Preview Container */}
                <div className="relative aspect-[16/10] bg-brand-emerald-dark overflow-hidden flex items-center justify-center">
                  <video
                    src={`${vid.src}#t=0.5`}
                    poster={vid.poster}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    preload="metadata"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-brand-emerald-dark/25 group-hover:bg-transparent transition-colors" />

                  {/* Play Button */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(vid)}
                    aria-label={`Play video update: ${vid.title}`}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md text-brand-emerald flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-emerald-dark transition-all duration-300"
                  >
                    <Play size={20} className="ml-0.5 fill-current" />
                  </button>

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-brand-emerald-dark/85 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
                    {vid.stage}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 text-brand-emerald-dark group-hover:text-brand-emerald transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {vid.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveVideo(vid)}
                  className="w-full py-3 min-h-[44px] rounded-xl bg-white border border-brand-emerald/20 hover:bg-brand-emerald hover:text-white text-brand-emerald-dark font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Play size={14} className="fill-current" />
                  <span>Watch Video Update</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-brand-emerald-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-heading font-bold text-lg sm:text-xl text-brand-gold-light mb-1">
              Contribute to Ongoing Mosque Projects
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Your Sadaqah Jariyah helps purchase cement, roofing materials, and water ablution facilities for worshipping communities.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollTo ? scrollTo("donations") : null}
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-emerald-dark shadow-md flex items-center gap-2"
          >
            <Heart size={15} className="fill-brand-emerald-dark" />
            <span>Support Mosque Build</span>
          </button>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="aspect-[16/9] bg-black">
              <video
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 bg-brand-emerald-dark text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold-light block mb-1">
                {activeVideo.stage}
              </span>
              <h3 className="font-heading font-bold text-lg text-white">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-white/75 mt-1">
                {activeVideo.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
