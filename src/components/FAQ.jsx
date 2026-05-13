import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQCard } from './ui/Cards';
import { GeometricPattern } from './ui/Shared';

export default function FAQ() {
  const faqs = [
    { q: "How are my donations used?", a: "100% of your public donations go directly to our programs. We cover our administrative costs through separate private grants and dedicated operational funding." },
    { q: "Is my donation tax-deductible?", a: "Yes, The Light of Peace is a registered NGO in Kenya, and we provide tax receipts for all contributions." },
    { q: "Can I choose which project to support?", a: "Absolutely. When you donate via M-Pesa, you can specify the project (e.g., 'Water', 'Orphans', 'Mosque') in the account name or reference." },
    { q: "How do you verify the impact?", a: "We provide regular photo and video updates in our Transparency Gallery and send quarterly impact reports to our recurring donors." },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-brand-cream">
      <GeometricPattern opacity={0.04} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
            <HelpCircle size={14} className="text-brand-emerald" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Common Questions</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark">
            Everything You <span className="gold-text">Need to Know</span>
          </h2>
        </div>
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-soft border border-brand-emerald/5">
          {faqs.map((faq, i) => <FAQCard key={i} {...faq} />)}
        </div>
      </div>
    </section>
  );
}
