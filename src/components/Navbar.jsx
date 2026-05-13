import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './ui/Shared';

export default function Navbar({ scrollTo }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState(64);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (navOpen) setNavOpen(false);
    };
    
    const handleResize = () => {
      setLogoSize(window.innerWidth < 640 ? 54 : 64);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navOpen]);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [navOpen]);

  const navLinks = ["Home", "About", "Programs", "Gallery", "Blog", "Volunteer", "Contact"];

  const handleNavClick = (link) => {
    const id = link.toLowerCase().replace(" ", "");
    if (id === "gallery") {
      navigate('/gallery');
    } else {
      scrollTo(id);
    }
    setNavOpen(false);
  };

  const isHomePage = pathname === '/';
  const showScrolledStyle = scrolled || !isHomePage;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showScrolledStyle 
            ? "bg-white shadow-glow border-b border-brand-emerald/10 py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-28 transition-all duration-500">
            <div className="flex items-center gap-4 sm:gap-6 group cursor-pointer" onClick={() => handleNavClick("Home")}>
              <div className="transition-transform duration-700 group-hover:rotate-[360deg]">
                <Logo size={logoSize}/>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading font-black text-2xl sm:text-4xl leading-[0.75] tracking-tight transition-colors drop-shadow-sm ${showScrolledStyle ? "text-brand-emerald-dark" : "text-white"}`}>
                  The Light
                </span>
                <span className="text-[10px] sm:text-[14px] font-black tracking-[0.55em] text-brand-gold uppercase mt-1.5 leading-none ml-0.5 drop-shadow-sm">
                  OF PEACE
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button 
                  key={link} 
                  onClick={() => handleNavClick(link)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all hover:bg-brand-emerald/5 ${
                    showScrolledStyle ? "text-brand-emerald-dark" : "text-white hover:text-brand-gold-light drop-shadow-sm"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => handleNavClick("donations")} 
                className={`hidden sm:flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-xl ${
                  showScrolledStyle ? "bg-brand-emerald-dark text-white" : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 drop-shadow-sm"
                }`}
              >
                Donate Now <ArrowRight size={14} />
              </button>
              <button 
                className={`lg:hidden p-3 rounded-2xl transition-all ${
                  showScrolledStyle ? "bg-brand-emerald/5 text-brand-emerald-dark" : "bg-white/10 text-white backdrop-blur-md"
                }`}
                onClick={() => setNavOpen(!navOpen)}
              >
                {navOpen ? <X size={32}/> : <Menu size={32}/>}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-700 ease-in-out ${
          navOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-brand-emerald-dark" />
        
        <div className="relative h-full flex flex-col p-8 z-10">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-5">
              <Logo size={70}/>
              <div className="flex flex-col text-left">
                <span className="font-heading font-black text-3xl text-white leading-[0.75] tracking-tight">The Light</span>
                <span className="text-[12px] font-black tracking-[0.55em] text-brand-gold uppercase mt-2 ml-0.5">OF PEACE</span>
              </div>
            </div>
            <button 
              onClick={() => setNavOpen(false)}
              className="p-3 rounded-2xl bg-white/10 text-white transition-transform hover:scale-110 active:scale-95"
            >
              <X size={36}/>
            </button>
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto pb-12">
            {navLinks.map((link, i) => (
              <button 
                key={link} 
                onClick={() => handleNavClick(link)}
                className="group flex items-center justify-between w-full text-left px-6 py-5 rounded-[2rem] transition-all hover:bg-white/5 active:bg-white/10"
                style={{ 
                  animationDelay: `${i * 50}ms`,
                  animation: navOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                }}
              >
                <span className="text-3xl font-heading font-bold text-white group-hover:text-brand-gold transition-colors">{link}</span>
                <ArrowRight size={24} className="text-brand-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <button 
              onClick={() => handleNavClick("donations")} 
              className="w-full py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-2xl shadow-brand-gold/20"
            >
              Make A Donation
            </button>
            <p className="text-center mt-6 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              Serving Humanity Since 2014
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
