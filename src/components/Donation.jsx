import React from 'react';
import { Heart, Shield, Check, Building2, Smartphone } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function Donation() {
  return (
    <section id="donations" className="relative py-24 overflow-hidden bg-brand-cream">
      <GeometricPattern opacity={0.06} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
              <Heart size={14} className="text-brand-emerald" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Donation & Support</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-brand-emerald-dark leading-tight">
              Support Our <span className="gold-text">Noble Cause</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-brand-muted font-medium">
              Your donations are the lifeblood of our organization. Every shilling you contribute goes directly to programs that provide food, shelter, and education to those in need. We ensure 100% transparency in every transaction.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "100% Transparent Donation Process",
                "Direct Impact on Kenyan Communities",
                "Regular Progress Reports & Updates",
                "Secure Transactions via M-Pesa & Bank"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-emerald/10 flex items-center justify-center">
                    <Check size={14} className="text-brand-emerald" />
                  </div>
                  <span className="text-sm font-bold text-brand-emerald-dark">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold to-brand-emerald opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500 rounded-[3rem]" />
            <div className="relative p-10 sm:p-12 rounded-[3rem] bg-white shadow-2xl border border-brand-emerald/5">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-brand-emerald/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Shield size={32} className="text-brand-emerald" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-brand-emerald-dark mb-2">Make Your Contribution</h3>
                <p className="text-brand-muted text-sm font-medium">Safe, Secure & Instant</p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-[2rem] bg-brand-cream border border-brand-emerald/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
                      <Smartphone size={20} className="text-brand-emerald" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-black">M-Pesa Paybill</p>
                  </div>
                  <p className="text-4xl font-black text-brand-emerald-dark tracking-tight mb-4">985050</p>
                  <div className="space-y-2 mt-4 pt-4 border-t border-brand-emerald/10">
                    <p className="text-xs font-bold text-brand-emerald-dark mb-2">How to pay via M-Pesa:</p>
                    <ol className="text-xs text-brand-muted font-medium space-y-1.5 list-decimal list-inside">
                      <li>Go to M-Pesa menu & select <strong>Lipa na M-Pesa</strong></li>
                      <li>Select <strong>Paybill</strong></li>
                      <li>Enter Business Number: <strong>985050</strong></li>
                      <li>Enter Account Number: <strong>0800066201</strong></li>
                      <li>Enter your Amount and M-Pesa PIN</li>
                    </ol>
                  </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-brand-cream border border-brand-emerald/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center">
                      <Building2 size={20} className="text-brand-emerald" />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-black">Gulf African Bank Account</p>
                  </div>
                  <p className="text-3xl font-black text-brand-emerald-dark tracking-tight">0800066201</p>
                  <p className="text-xs font-bold text-brand-muted mt-1 uppercase tracking-wider">THE LIGHT OF PEACE</p>
                </div>
              </div>

              <p className="text-center mt-10 text-[10px] text-brand-muted font-bold leading-relaxed">
                May Allah bless your generosity and multiply your rewards in this life and the hereafter. JazakAllah Khairan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
