import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Logo, MosqueSilhouette, GeometricPattern } from './ui/Shared';

export default function Footer({ scrollTo }) {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    if (id === "gallery") {
      navigate('/gallery');
    } else {
      scrollTo(id);
    }
  };

  return (
    <footer className="relative bg-brand-emerald-dark text-white pt-24 overflow-hidden">
      <GeometricPattern opacity={0.05} color="white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer mb-2" onClick={() => handleLinkClick("home")}>
              <Logo size={70} />
              <div className="flex flex-col">
                <div className="font-heading font-black text-4xl leading-[0.75] tracking-tight">The Light</div>
                <div className="text-[12px] font-black tracking-[0.55em] text-brand-gold uppercase mt-2.5 ml-1">OF PEACE</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Spreading compassion and hope across Kenya through Islamic humanitarian programs and community support since 2014.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Youtube, link: "#" }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all hover:-translate-y-1">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-6 h-1 bg-brand-gold rounded-full" /> Quick Links
            </h4>
            <ul className="space-y-4">
              {["About", "Programs", "Udhhiya", "Gallery", "Blog", "Volunteer", "Donations"].map(link => (
                <li key={link}>
                  <button 
                    onClick={() => handleLinkClick(link.toLowerCase())} 
                    className="text-white/60 hover:text-brand-gold transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/30 group-hover:bg-brand-gold transition-colors" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-6 h-1 bg-brand-gold rounded-full" /> Programs
            </h4>
            <ul className="space-y-4">
              {["Orphan Care", "Zakat Distribution", "Food Security", "Water Boreholes", "Mosque Projects", "Education Support"].map(item => (
                <li key={item} className="text-white/60 text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-6 h-1 bg-brand-gold rounded-full" /> Contact Info
            </h4>
            <div className="space-y-6">
              {[
                { label: "Dr. Mahmoud Edhwa", num: "+254 113 966 669" },
                { label: "WhatsApp Support", num: "+254 721 376 922" },
                { label: "Call Us", num: "+254 725 393 639" }
              ].map((num, i) => (
                <a 
                  key={i}
                  href={`https://wa.me/${num.num.replace(/\D/g, "")}`} 
                  className="block group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{num.label}</p>
                      <p className="text-sm font-bold group-hover:text-brand-gold transition-colors">{num.num}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] text-center md:text-left">
              © {currentYear} THE LIGHT OF PEACE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <button className="text-white/40 hover:text-brand-gold text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</button>
              <button className="text-white/40 hover:text-brand-gold text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</button>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-2 group">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest group-hover:text-brand-gold transition-colors">Created by Osman</p>
            <div className="flex gap-6">
              <a 
                href="https://wa.me/254781764187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                <span className="text-[9px] font-black uppercase tracking-widest">WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/osmanibrahim5181" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                <span className="text-[9px] font-black uppercase tracking-widest">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 opacity-30 pointer-events-none">
        <MosqueSilhouette />
      </div>
    </footer>
  );
}
