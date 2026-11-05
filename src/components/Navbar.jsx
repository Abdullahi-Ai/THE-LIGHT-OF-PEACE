import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Logo } from './ui/Shared';

export default function Navbar({ scrollTo }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home');
      if (hero && pathname === '/') {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 80);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [navOpen]);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Programs", target: "programs" },
    { label: "Water", target: "water" },
    { label: "Mosques", target: "mosque" },
    { label: "Gallery", target: "gallery" },
    { label: "Volunteer", target: "volunteer" },
    { label: "Contact", target: "contact" },
  ];

  const handleNavClick = (target) => {
    setNavOpen(false);
    if (target === "gallery" && pathname !== '/') {
      navigate('/gallery');
      return;
    }
    if (scrollTo) {
      scrollTo(target);
    }
  };

  const isHomePage = pathname === '/';
  const isSolid = scrolled || !isHomePage;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isSolid
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-brand-emerald/10 py-3"
            : "bg-[#062D1C]/85 backdrop-blur-md border-b border-white/10 py-3.5"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo & Name */}
            <div
              className="flex items-center gap-3.5 sm:gap-4 cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <Logo size={46} className="group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className={`font-heading font-black text-xl sm:text-2xl leading-none tracking-tight transition-colors ${
                  isSolid ? "text-brand-emerald-dark" : "text-white"
                }`}>
                  The Light
                </span>
                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.45em] text-brand-gold uppercase mt-1 leading-none ml-0.5">
                  OF PEACE
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => handleNavClick(item.target)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                    isSolid
                      ? "text-brand-emerald-dark hover:text-brand-emerald hover:bg-brand-emerald/5"
                      : "text-white/90 hover:text-brand-gold-light hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Donation Button & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNavClick("donations")}
                className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md ${
                  isSolid
                    ? "bg-brand-emerald text-white hover:bg-brand-emerald-dark"
                    : "bg-brand-gold text-brand-emerald-dark hover:bg-brand-gold-light"
                }`}
              >
                <Heart size={14} className={isSolid ? "fill-white" : "fill-brand-emerald-dark"} />
                <span>Donate Now</span>
              </button>

              <button
                type="button"
                aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={navOpen}
                className={`lg:hidden p-2.5 rounded-2xl transition-colors ${
                  isSolid
                    ? "bg-brand-emerald/5 text-brand-emerald-dark"
                    : "bg-white/10 text-white backdrop-blur-md"
                }`}
                onClick={() => setNavOpen(!navOpen)}
              >
                {navOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      {navOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-brand-emerald-dark/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 text-white animate-fade-in-up">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <Logo size={40} />
                <span className="font-heading font-black text-xl text-white">The Light of Peace</span>
              </div>
              <button
                type="button"
                onClick={() => setNavOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-xl bg-white/10 text-white"
              >
                <X size={22} />
              </button>
            </div>

            {navLinks.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white/90 hover:bg-white/10 hover:text-brand-gold-light transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              type="button"
              onClick={() => handleNavClick("donations")}
              className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-brand-gold text-brand-emerald-dark flex items-center justify-center gap-2 shadow-lg"
            >
              <Heart size={16} className="fill-brand-emerald-dark" />
              <span>Donate to Causes</span>
            </button>
            <p className="text-center text-[11px] text-white/60">
              Mombasa, Kenya · Islamic Humanitarian Charity
            </p>
          </div>
        </div>
      )}
    </>
  );
}
