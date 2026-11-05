import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Logo } from './ui/Shared';

export default function Navbar({ scrollTo }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Scroll detection for navbar background transition (emerald -> white)
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

  // Automatically close mobile menu on scroll, touch-drag, resize, or escape key
  useEffect(() => {
    if (!navOpen) return;

    // Immediately close menu as soon as visitor starts scrolling or dragging
    const handleDismissOnInteraction = () => {
      setNavOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNavOpen(false);
      }
    };

    window.addEventListener('scroll', handleDismissOnInteraction, { passive: true });
    window.addEventListener('touchmove', handleDismissOnInteraction, { passive: true });
    window.addEventListener('wheel', handleDismissOnInteraction, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleDismissOnInteraction);
      window.removeEventListener('touchmove', handleDismissOnInteraction);
      window.removeEventListener('wheel', handleDismissOnInteraction);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navOpen]);

  // Ensure menu is closed on route navigation or path change
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

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

      {/* Mobile Backdrop Overlay - closes menu on tap outside */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNavOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Dropdown Drawer (Sleek, Non-Obstructive, Auto-Closing) */}
      <div
        id="mobile-navigation"
        className={`fixed top-[62px] sm:top-[70px] left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-in-out transform ${
          navOpen
            ? "translate-y-0 opacity-100 pointer-events-auto shadow-2xl"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="bg-[#062D1C] border-b border-white/10 px-4 sm:px-6 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Section Navigation Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white/95 bg-white/5 hover:bg-white/10 active:bg-white/15 hover:text-brand-gold-light border border-white/10 transition-colors text-left"
              >
                <span>{item.label}</span>
                <span className="text-brand-gold-light/60 text-[11px] font-normal">→</span>
              </button>
            ))}
          </div>

          {/* Quick Action: Donate & Direct Contact */}
          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <button
              type="button"
              onClick={() => handleNavClick("donations")}
              className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold text-brand-emerald-dark flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
            >
              <Heart size={15} className="fill-brand-emerald-dark" />
              <span>Donate to Our Causes</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-white/70 px-1 pt-1">
              <span>Mombasa, Kenya</span>
              <a
                href="https://wa.me/254721376922"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold-light hover:underline font-semibold"
                onClick={() => setNavOpen(false)}
              >
                WhatsApp: +254 721 376 922
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
