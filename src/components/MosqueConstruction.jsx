import React, { useState } from 'react';
import { Building2, CheckCircle2, Play, Users, MapPin, Calendar, Clock, X, Heart } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function MosqueConstruction({ scrollTo }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { id: 1, title: "Foundation Stage", date: "Jan 2024", phase: "Completed", progress: 100, src: "/gallery/mosque-video-1.mp4" },
    { id: 2, title: "Structure Build", date: "Mar 2024", phase: "In Progress", progress: 65, src: "/gallery/mosque-video-2.mp4" },
    { id: 3, title: "Roofing & Finishing", date: "Expected Jun 2024", phase: "Planning", progress: 0, src: "/gallery/mosque-video-3.mp4" },
  ];

  return (
    <section id="mosque" className="relative py-24 overflow-hidden bg-white">
      <GeometricPattern opacity={0.03} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
            <Building2 size={14} className="text-brand-emerald" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Building Houses of Allah</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark leading-tight">
            Mosque <span className="gold-text">Construction</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-brand-muted font-medium">
            Providing a spiritual home and educational hub for communities in remote areas. See the real-time progress of our latest project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-brand-emerald-dark aspect-[9/16]">
              {activeVideo === video.id ? (
                <div className="absolute inset-0 bg-black">
                  <video 
                    src={video.src} 
                    className="w-full h-full object-cover" 
                    controls 
                    autoPlay 
                    muted
                    playsInline
                    onEnded={() => setActiveVideo(null)}
                  />
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 text-white z-20"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-brand-emerald/10 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(video.id)}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500 cursor-pointer z-20"
                    >
                      <Play size={32} />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-emerald-dark/95 via-brand-emerald-dark/60 to-transparent pointer-events-none transition-transform duration-500 group-hover:translate-y-[-10px]">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${video.phase === 'Completed' ? 'bg-brand-emerald text-white' : 'bg-brand-gold text-white'}`}>
                        {video.phase}
                      </div>
                      <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{video.date}</span>
                    </div>
                    <h4 className="text-white font-bold text-2xl">{video.title}</h4>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[3rem] p-10 sm:p-16 relative overflow-hidden bg-brand-emerald-dark text-white shadow-2xl">
          <GeometricPattern opacity={0.1} color="white" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-4xl font-bold mb-6 italic">Sustainable<br/><span className="gold-text">Masjid Building</span></h3>
              <p className="text-white/70 mb-8 font-medium leading-relaxed">We construct beautiful, durable mosques that serve as centers for prayer, education, and community support in underserved regions.</p>
              <div className="space-y-6">
                {[
                  { icon: Building2, label: "Capacity", val: "200 - 500 Worshipers" },
                  { icon: Users, label: "Services", val: "Prayer, Madrasa, Community Center" },
                  { icon: Heart, label: "Goal", val: "Establishing Spiritual Hubs" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold-light">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                      <p className="font-bold">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10">
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-light font-black mb-2">Charity Impact</p>
                <h4 className="text-3xl font-black tracking-tight text-white">Sadaqah Jariyah</h4>
                <p className="text-white/60 mt-4 text-sm leading-relaxed">Building a mosque is one of the best forms of continuous charity. Your donation provides a legacy of faith for generations.</p>
              </div>
              <button onClick={() => scrollTo("donations")} className="w-full py-5 rounded-2xl bg-gradient-to-r from-brand-gold to-brand-gold-light text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl shadow-brand-gold/20">
                Support a Mosque Build
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
