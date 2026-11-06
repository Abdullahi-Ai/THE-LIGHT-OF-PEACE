import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Phone,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Droplets,
  Utensils,
  BookOpen,
  Users,
  ArrowRight
} from 'lucide-react';
import { Logo } from './ui/Shared';

export default function AboutOrganization({ scrollTo }) {
  useEffect(() => {
    document.title = "About The Organization | The Light of Peace — Mombasa, Kenya";

    // Manage independent canonical URL for the organization profile page
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute("href") : "https://www.thelightofpeace.org/";
    if (canonical) {
      canonical.setAttribute("href", "https://www.thelightofpeace.org/about-the-organization/");
    }

    // Manage dynamic meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute("content") : "";
    if (metaDesc) {
      metaDesc.setAttribute("content", "Official organization profile for The Light of Peace in Mombasa, Kenya. Discover our verified humanitarian initiatives, community mission, contacts, and operations across Kenya.");
    }
    window.scrollTo(0, 0);
    return () => {
      if (canonical) {
        canonical.setAttribute("href", originalCanonical);
      }
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute("content", originalDesc);
      }
    };
  }, []);

  const programs = [
    {
      title: "Clean Water Borehole Projects",
      desc: "Drilling sustainable deep-water boreholes and community wells in water-scarce areas of the Kenyan Coast.",
      icon: Droplets
    },
    {
      title: "Orphan Care & Sponsorship",
      desc: "Comprehensive support for vulnerable orphans in Mombasa and surrounding regions, covering food, education, and health.",
      icon: Heart
    },
    {
      title: "Ramadan & Emergency Food Relief",
      desc: "Distributing essential food hampers and staple rations directly to underprivileged families and widows.",
      icon: Utensils
    },
    {
      title: "Mosque Construction & Renovation",
      desc: "Constructing and maintaining community mosques to serve as centers of worship, community learning, and peace.",
      icon: Building2
    },
    {
      title: "Zakat & Sadaqah Direct Handover",
      desc: "Facilitating 100% verified, direct distribution of Islamic charitable obligations to eligible recipients in Kenya.",
      icon: ShieldCheck
    },
    {
      title: "Youth Empowerment & Drug Prevention",
      desc: "Community guidance, educational initiatives, and active youth rehabilitation across Mombasa.",
      icon: Users
    },
    {
      title: "Quran & Arabic Literacy",
      desc: "Supporting madrasas and Islamic educational centers with learning materials and qualified teachers.",
      icon: BookOpen
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-24 sm:pt-28 pb-20">

      {/* Editorial Profile Header */}
      <section className="bg-gradient-to-br from-[#062D1C] via-[#0B5D3B] to-[#073D26] text-white py-16 sm:py-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-brand-gold-light">
            <Building2 size={13} className="shrink-0" />
            <span>Official Organization Profile · Entity Record</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            The Light of Peace <br />
            <span className="gold-text">Organization</span> — Mombasa, Kenya
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed font-normal">
            The Light of Peace is an Islamic humanitarian charity organization based in Mombasa, Kenya, dedicated to improving lives and supporting vulnerable communities across Kenya through clean water, orphan support, food relief, mosque construction, and community empowerment.
          </p>

        </div>
      </section>

      {/* Main Profile Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column: Organization Details & Narrative */}
          <div className="lg:col-span-8 space-y-12">

            {/* 1. Identity & Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-emerald/10">
              <div className="flex items-center gap-3 mb-6">
                <Logo size={42} />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-brand-emerald-dark">
                    Organizational Identity &amp; Mission
                  </h2>
                  <p className="text-xs text-brand-emerald font-semibold uppercase tracking-wider">
                    Official Entity Overview
                  </p>
                </div>
              </div>

              <div className="prose prose-sm text-brand-muted space-y-4 leading-relaxed">
                <p className="text-brand-text font-semibold text-base">
                  <strong>The Light of Peace</strong> is an Islamic humanitarian charity organization based in Mombasa, Kenya, dedicated to improving lives and supporting vulnerable communities through compassion, faith and community development.
                </p>
                <p>
                  Serving communities in Mombasa County, coastal areas, and wider Kenya, the organization delivers direct relief and sustainable community infrastructure. Core initiatives include drilling deep clean-water boreholes, supporting vulnerable orphans, distributing seasonal Ramadan food packages, constructing and maintaining community mosques, facilitating direct Zakat and Sadaqah distribution, and promoting youth empowerment and educational programs.
                </p>
                <p>
                  Our work is firmly anchored in the principles of compassion, transparency, faith, and grassroots engagement. All charitable distributions are coordinated directly on the ground with verified local community beneficiaries.
                </p>
              </div>
            </div>

            {/* 2. Key Verified Organizational Facts */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-emerald/10">
              <h2 className="font-heading text-2xl font-bold text-brand-emerald-dark mb-6 flex items-center gap-2">
                <ShieldCheck className="text-brand-gold-dark" size={24} />
                <span>Verified Organizational Information</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block mb-1">
                    Official Entity Name
                  </span>
                  <span className="font-bold text-brand-emerald-dark text-sm block">
                    The Light of Peace
                  </span>
                  <span className="text-brand-muted text-[11px] mt-0.5 block">
                    Also referenced as: The Light of Peace Organization
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block mb-1">
                    Organizational Purpose
                  </span>
                  <span className="font-bold text-brand-emerald-dark text-sm block">
                    Islamic Humanitarian Charity &amp; Community Welfare
                  </span>
                  <span className="text-brand-muted text-[11px] mt-0.5 block">
                    Community Development &amp; Direct Relief
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block mb-1">
                    Headquarters &amp; Operations Base
                  </span>
                  <span className="font-bold text-brand-emerald-dark text-sm block flex items-center gap-1.5">
                    <MapPin size={14} className="text-brand-emerald" />
                    <span>Mombasa, Kenya</span>
                  </span>
                  <span className="text-brand-muted text-[11px] mt-0.5 block">
                    Serving communities across Kenya
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block mb-1">
                    Official Web Domain
                  </span>
                  <span className="font-bold text-brand-emerald-dark text-sm block flex items-center gap-1.5">
                    <Globe size={14} className="text-brand-emerald" />
                    <span>https://www.thelightofpeace.org/</span>
                  </span>
                  <span className="text-brand-muted text-[11px] mt-0.5 block">
                    Primary authoritative web presence
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block mb-1">
                    Direct Contact Representative
                  </span>
                  <span className="font-bold text-brand-emerald-dark text-sm block">
                    Dr. Mahmoud Edhwa
                  </span>
                  <span className="text-brand-muted text-[11px] mt-0.5 block">
                    Inquiries &amp; WhatsApp: +254 113 966 669
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald block mb-1">
                    Community Coordination Lines
                  </span>
                  <span className="font-bold text-brand-emerald-dark text-sm block">
                    +254 721 376 922 / +254 725 393 639
                  </span>
                  <span className="text-brand-muted text-[11px] mt-0.5 block">
                    Direct Telephone &amp; Volunteer Inquiries
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Humanitarian Programs Directory */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-emerald/10">
              <h2 className="font-heading text-2xl font-bold text-brand-emerald-dark mb-4">
                Active Humanitarian Programs in Kenya
              </h2>
              <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                The Light of Peace conducts verified ground initiatives designed to address chronic water shortages, food insecurity, vulnerable orphan welfare, and educational access in Kenya.
              </p>

              <div className="space-y-4">
                {programs.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-brand-emerald/10 bg-brand-cream/30 hover:bg-brand-cream/60 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-brand-emerald-dark mb-1">
                          {p.title}
                        </h3>
                        <p className="text-xs text-brand-muted leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Genuine Field Photography */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-brand-emerald/10">
              <h2 className="font-heading text-2xl font-bold text-brand-emerald-dark mb-4">
                Authentic Community Documentation
              </h2>
              <p className="text-xs text-brand-muted mb-6">
                Genuine field photographs taken during relief handovers, clean water boreholes, and Ramadan food packaging in Mombasa, Kenya.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-brand-emerald/10 bg-brand-emerald-dark aspect-[4/3]">
                  <picture>
                    <source srcSet="/gallery/ramadan-1.webp" type="image/webp" />
                    <img
                      src="/gallery/ramadan-1.png"
                      alt="The Light of Peace humanitarian food parcels staging in Mombasa Kenya"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-brand-emerald/10 bg-brand-emerald-dark aspect-[4/3]">
                  <picture>
                    <source srcSet="/gallery/ramadan-2.webp" type="image/webp" />
                    <img
                      src="/gallery/ramadan-2.png"
                      alt="The Light of Peace community relief distribution team in Kenya"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-brand-emerald/10 bg-brand-emerald-dark aspect-[4/3]">
                  <picture>
                    <source srcSet="/gallery/ramadan-3.webp" type="image/webp" />
                    <img
                      src="/gallery/ramadan-3.png"
                      alt="The Light of Peace direct handovers to vulnerable families in Kenya"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact & Verification Sidecard */}
          <div className="lg:col-span-4 space-y-6">

            {/* Contact Card */}
            <div className="bg-brand-emerald-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-gold/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Contact The Organization
              </h3>
              <p className="text-xs text-white/75 mb-6">
                Official communication channels for inquiries, partnership, and direct community support.
              </p>

              <div className="space-y-4 text-xs">
                <a
                  href="https://wa.me/254113966669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/15"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold-light shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/60 font-bold block">Dr. Mahmoud Edhwa</span>
                    <span className="font-bold text-white">+254 113 966 669</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/254721376922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/15"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/60 font-bold block">Community Line</span>
                    <span className="font-bold text-white">+254 721 376 922</span>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mt-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold-light block mb-1">
                    Official M-Pesa Donation Coordinates
                  </span>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/70">Paybill Number:</span>
                    <span className="font-mono font-bold text-brand-gold-light">985050</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/70">Account Number:</span>
                    <span className="font-mono font-bold text-brand-gold-light">0800066201</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  to="/#donations"
                  onClick={() => scrollTo ? scrollTo("donations") : null}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold text-brand-emerald-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform"
                >
                  <Heart size={14} className="fill-brand-emerald-dark" />
                  <span>Support Our Initiatives</span>
                </Link>
              </div>

            </div>

            {/* Entity Disambiguation Notice Box */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-brand-emerald/10 text-xs">
              <h4 className="font-bold text-brand-emerald-dark mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-emerald" />
                <span>Search &amp; Entity Notice</span>
              </h4>
              <p className="text-brand-muted leading-relaxed">
                This official profile establishes <strong>The Light of Peace</strong> as a humanitarian community organization based in Mombasa, Kenya, operating via its authoritative website <code className="text-brand-emerald font-semibold">thelightofpeace.org</code>. This entity is distinct from any artworks, paintings, or unrelated commercial publications.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
