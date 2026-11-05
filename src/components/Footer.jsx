import React, { useState } from 'react';
import { Phone, MapPin, Shield, X } from 'lucide-react';
import { Logo } from './ui/Shared';

export default function Footer({ scrollTo }) {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  return (
    <footer className="relative bg-[#062d1c] text-white pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-brand-emerald/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-5 cursor-pointer" onClick={() => scrollTo("home")}>
              <Logo size={52} />
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-tight text-white leading-none">
                  The Light
                </span>
                <span className="text-[10px] font-black tracking-[0.45em] text-brand-gold-light uppercase mt-1 leading-none">
                  OF PEACE
                </span>
              </div>
            </div>

            <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-5 max-w-md">
              The Light of Peace is an Islamic humanitarian charity organization based in Mombasa, Kenya, dedicated to improving lives and supporting vulnerable communities across Kenya through compassion, faith and community development.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold-light">
              <MapPin size={14} />
              <span>Mombasa, Kenya</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-gold-light mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", target: "about" },
                { label: "Humanitarian Programs", target: "programs" },
                { label: "Clean Water Wells", target: "water" },
                { label: "Mosque Projects", target: "mosque" },
                { label: "Udhhiya / Qurbani", target: "udhhiya" },
                { label: "Donation Portal", target: "donations" },
                { label: "Volunteer With Us", target: "volunteer" },
                { label: "Contact Us", target: "contact" }
              ].map((item, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.target)}
                    className="text-white/70 hover:text-brand-gold-light text-xs font-semibold transition-colors flex items-center gap-2 text-left py-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-gold-light mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>Direct Contacts</span>
            </h4>

            <div className="space-y-3">
              <a
                href="https://wa.me/254113966669"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold-light shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold block">Dr. Mahmoud Edhwa</span>
                    <span className="text-xs font-bold text-white">+254 113 966 669</span>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/254721376922"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold block">Telephone &amp; WhatsApp</span>
                    <span className="text-xs font-bold text-white">+254 721 376 922</span>
                  </div>
                </div>
              </a>

              <a
                href="tel:+254725393639"
                className="block p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold block">Telephone Line</span>
                    <span className="text-xs font-bold text-white">+254 725 393 639</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Modals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <p>© {currentYear} The Light of Peace. Mombasa, Kenya.</p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-brand-gold-light transition-colors underline-offset-4 hover:underline py-2"
            >
              Website Privacy Notice
            </button>
            <span className="text-white/20">•</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-brand-gold-light transition-colors underline-offset-4 hover:underline py-2"
            >
              Donation &amp; Website Terms
            </button>
          </div>
        </div>

      </div>

      {/* PRIVACY NOTICE MODAL */}
      {activeModal === 'privacy' && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-brand-text max-w-lg w-full rounded-3xl p-7 sm:p-8 shadow-2xl relative border border-brand-emerald/15 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-brand-cream text-brand-emerald-dark hover:bg-brand-emerald hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <Shield size={22} className="text-brand-emerald" />
              <h3 className="font-heading font-bold text-xl text-brand-emerald-dark">Website Privacy Notice</h3>
            </div>

            <div className="text-xs text-brand-muted leading-relaxed space-y-3 font-normal">
              <p>
                This notice explains how information is handled on <strong>thelightofpeace.org</strong>.
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">1. Static Informational Architecture</h4>
              <p>
                This website is a static informational platform. We do not maintain a user account database, we do not store credit card numbers on our servers, and we do not track visitors across external websites.
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">2. Contact &amp; Volunteer Inquiries</h4>
              <p>
                When you use the Contact or Volunteer forms, the text is pre-formatted in your browser and sent directly through WhatsApp to our direct contact number (+254 113 966 669). Any details you share are used solely to answer your questions or coordinate volunteer opportunities.
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">3. Direct Donations</h4>
              <p>
                Donations made via Safaricom M-Pesa (Paybill 985050) or Gulf African Bank are processed through those respective regulated financial institutions. We receive standard bank/M-Pesa transaction statements for accounting and verification purposes.
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">4. Contact Information</h4>
              <p>
                If you have questions regarding your communications with us, please reach out directly at +254 113 966 669.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DONATION & WEBSITE TERMS MODAL */}
      {activeModal === 'terms' && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-brand-text max-w-lg w-full rounded-3xl p-7 sm:p-8 shadow-2xl relative border border-brand-emerald/15 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-brand-cream text-brand-emerald-dark hover:bg-brand-emerald hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <Shield size={22} className="text-brand-emerald" />
              <h3 className="font-heading font-bold text-xl text-brand-emerald-dark">Donation &amp; Website Terms</h3>
            </div>

            <div className="text-xs text-brand-muted leading-relaxed space-y-3 font-normal">
              <p>
                By visiting <strong>https://www.thelightofpeace.org/</strong>, you agree to these operational terms:
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">1. Voluntary Charitable Contributions</h4>
              <p>
                All funds contributed via M-Pesa Paybill 985050 (Account: 0800066201) or Gulf African Bank are voluntary charitable contributions to support The Light of Peace's humanitarian activities in Kenya.
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">2. Donor Intent &amp; Allocation</h4>
              <p>
                When a donor specifies a designated purpose (e.g. Clean Water, Orphan Support, Zakah, Mosque Project, Ramadan Food), funds are allocated toward that intended relief effort.
              </p>
              <h4 className="font-bold text-brand-emerald-dark pt-1">3. Authentic Content &amp; Media</h4>
              <p>
                The photographs, video updates, and official descriptions on this website represent genuine humanitarian work carried out by The Light of Peace in Kenya. Unapproved reproduction or misuse of organizational media is prohibited.
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
