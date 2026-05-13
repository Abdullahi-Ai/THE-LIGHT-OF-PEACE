import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, TrendingUp, Lock, Users, Camera } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function Transparency() {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 overflow-hidden bg-brand-cream">
      <GeometricPattern opacity={0.04}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <Shield size={14} className="text-brand-emerald"/>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald">Transparency & Trust</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark">
            You Can <span className="gold-text">Trust Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "100% Transparent", desc: "Every donation is tracked and reported with full accountability and quarterly impact reports." },
            { icon: TrendingUp, title: "Direct Impact", desc: "Funds go directly to programs, with no unnecessary overhead or administrative waste." },
            { icon: Lock, title: "Secure Donations", desc: "Your donations are processed securely through M-Pesa with full transaction records." },
            { icon: Users, title: "Trusted Community", desc: "Thousands of families and donors across Kenya trust us with their charitable giving." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="rounded-3xl p-8 text-center transition-all hover:-translate-y-2 bg-white border border-brand-emerald/5 shadow-soft hover:shadow-glow group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-brand-emerald/5 border-2 border-brand-emerald/10 transition-colors group-hover:bg-brand-emerald group-hover:border-brand-emerald">
                <Icon size={28} className="text-brand-emerald group-hover:text-white transition-colors"/>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-brand-emerald-dark">{title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted font-medium">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/gallery')}
            className="px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto bg-brand-emerald-dark text-white shadow-brand-emerald/20 shadow-lg" 
          >
            <Camera size={20} />
            View Our Impact Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
