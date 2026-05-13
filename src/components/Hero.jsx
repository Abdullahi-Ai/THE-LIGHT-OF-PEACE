import React, { useMemo } from 'react';
import { Heart, Baby, Utensils, Star, Globe, Gift, Moon } from 'lucide-react';
import { GeometricPattern, MosqueSilhouette } from './ui/Shared';

export default function Hero({ scrollTo }) {
  const stars = useMemo(() => [...Array(30)].map((_, i) => ({
    width: Math.random() * 3 + 1,
    height: Math.random() * 3 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 60}%`,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 3
  })), []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-emerald-dark via-brand-emerald to-brand-emerald-light">
      <GeometricPattern opacity={0.08} color="#e8c45a" />

      {stars.map((star, i) => (
        <div key={i} className="absolute rounded-full bg-brand-gold-light animate-pulse pointer-events-none" style={{
          width: star.width, height: star.height,
          opacity: star.opacity,
          left: star.left, top: star.top,
          animation: `float ${star.duration}s ease-in-out infinite`,
          animationDelay: `${star.delay}s`
        }} />
      ))}

      <div className="absolute top-28 right-16 opacity-20 hidden md:block pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="#e8c45a" />
          <circle cx="85" cy="45" r="42" fill="#0d5c3a" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <MosqueSilhouette />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-gold/20 border border-brand-gold/40 animate-fade-in-up">
            <Moon size={14} className="text-brand-gold-light" />
            <span className="text-sm font-bold text-brand-gold-light">Islamic Humanitarian Organization · Kenya</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Bringing Hope,<br />
            <span className="gold-text">Peace & Support</span><br />
            to Communities
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Supporting orphans, empowering the youth against drug abuse, feeding vulnerable families and spreading compassion through dedicated Islamic humanitarian programs.
          </p>

          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => scrollTo("donations")}
              className="px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-brand-gold/40 shadow-lg"
            >
              🤲 Donate Now
            </button>
            <button
              onClick={() => scrollTo("programs")}
              className="px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:bg-white/20 bg-white/10 border-2 border-white/40 text-white"
            >
              Explore Programs →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
