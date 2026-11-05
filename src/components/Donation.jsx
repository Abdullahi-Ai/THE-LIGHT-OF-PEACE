import React, { useState } from 'react';
import {
  Heart,
  Smartphone,
  Building2,
  Copy,
  Check,
  CheckCircle2,
  Info,
  HelpCircle
} from 'lucide-react';

export default function Donation() {
  const [copiedPaybill, setCopiedPaybill] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);
  const [selectedCause, setSelectedCause] = useState("General Sadaqah");

  const causes = [
    "General Sadaqah",
    "Orphan Support",
    "Clean Water Boreholes",
    "Mosque Construction",
    "Zakah Distribution",
    "Ramadan Food Relief",
    "Youth Support"
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'paybill') {
      setCopiedPaybill(true);
      setTimeout(() => setCopiedPaybill(false), 2500);
    } else if (type === 'account') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2500);
    } else if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2500);
    }
  };

  return (
    <section
      id="donations"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-brand-cream border-t border-brand-emerald/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Context & Intent Selector */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 bg-brand-emerald/10 border border-brand-emerald/20">
              <Heart size={14} className="text-brand-emerald" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
                Official Giving Channels
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 text-brand-emerald-dark leading-tight">
              Support Our <span className="gold-text-dark">Humanitarian Mission</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-6 text-brand-muted">
              Your charitable contributions enable us to provide clean drinking water, feed families in need, care for orphans, and sustain community learning spaces in Kenya.
            </p>

            {/* Purpose Selector */}
            <div className="p-6 rounded-3xl bg-white border border-brand-emerald/15 shadow-sm mb-6">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-emerald-dark mb-3">
                Select Your Intended Cause:
              </label>
              <div className="flex flex-wrap gap-2">
                {causes.map((cause) => (
                  <button
                    key={cause}
                    type="button"
                    onClick={() => setSelectedCause(cause)}
                    className={`px-3.5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-full text-xs font-semibold transition-all ${
                      selectedCause === cause
                        ? 'bg-brand-emerald text-white shadow-xs'
                        : 'bg-brand-cream text-brand-text hover:bg-brand-emerald/10'
                    }`}
                  >
                    {cause}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-brand-muted mt-3 font-medium flex items-center gap-1.5">
                <Info size={13} className="text-brand-gold-dark shrink-0" />
                <span>You can specify <strong>{selectedCause}</strong> as the Account reference in M-Pesa.</span>
              </p>
            </div>

            {/* Direct Commitments */}
            <div className="space-y-3 pt-2">
              {[
                "Direct support for food aid, orphan care, clean water, and community programs",
                "Field distribution by local volunteers and community coordinators",
                "Original photograph and video documentation of relief activities",
                "Official Safaricom M-Pesa Paybill (985050) and Gulf African Bank channels"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text/90 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={13} className="text-brand-emerald" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Channels */}
          <div className="lg:col-span-7 space-y-6">

            {/* M-PESA PAYBILL CARD */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-brand-emerald/15 shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-emerald/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A859]/10 flex items-center justify-center text-[#00A859]">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-emerald-dark">M-Pesa Paybill</h3>
                    <p className="text-xs text-brand-muted">Local mobile donation via Safaricom in Kenya</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-[11px] font-bold uppercase tracking-wider">
                  Official Paybill
                </span>
              </div>

              {/* Paybill Numbers Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-emerald/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Business Number</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-emerald-dark tracking-tight">985050</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("985050", "paybill")}
                    aria-label="Copy M-Pesa Business Number"
                    className="p-3 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center bg-white border border-brand-emerald/20 text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors"
                  >
                    {copiedPaybill ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-brand-cream border border-brand-emerald/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Account Number</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-brand-emerald-dark tracking-tight">0800066201</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("0800066201", "account")}
                    aria-label="Copy M-Pesa Account Number"
                    className="p-3 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center bg-white border border-brand-emerald/20 text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors"
                  >
                    {copiedAccount ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="p-4 rounded-2xl bg-brand-cream/60 border border-brand-emerald/10 text-xs text-brand-muted leading-relaxed">
                <div className="flex items-center gap-2 mb-2 font-bold text-brand-emerald-dark">
                  <HelpCircle size={14} className="text-brand-emerald" />
                  <span>How to transfer via M-Pesa:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Open M-Pesa and select <strong>Lipa na M-Pesa</strong> &rarr; <strong>Paybill</strong>.</li>
                  <li>Enter Business Number: <strong>985050</strong>.</li>
                  <li>Enter Account Number: <strong>0800066201</strong> (or specify <em>{selectedCause}</em>).</li>
                  <li>Enter your amount and confirm with your <strong>M-Pesa PIN</strong>.</li>
                </ol>
              </div>
            </div>

            {/* GULF AFRICAN BANK CARD */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-brand-emerald/15 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 flex items-center justify-center text-brand-gold-dark">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-emerald-dark">Gulf African Bank</h3>
                    <p className="text-xs text-brand-muted">Bank transfers &amp; institutional support</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("0800066201", "bank")}
                  aria-label="Copy Bank Account Number"
                  className="px-3.5 py-2.5 min-h-[44px] rounded-xl bg-brand-cream border border-brand-emerald/20 text-xs font-bold text-brand-emerald-dark hover:bg-brand-emerald hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {copiedBank ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{copiedBank ? "Copied" : "Copy Account"}</span>
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-brand-emerald/10 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Account Number</span>
                  <span className="text-lg font-extrabold text-brand-emerald-dark tracking-tight">0800066201</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">Account Name</span>
                  <span className="text-xs font-bold text-brand-emerald-dark uppercase tracking-wider">THE LIGHT OF PEACE</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-brand-muted font-medium pt-1">
              May Allah reward your generosity and bless your charitable support. <em>JazakAllah Khairan.</em>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
