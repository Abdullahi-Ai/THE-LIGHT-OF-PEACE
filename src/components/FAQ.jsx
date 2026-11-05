import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FAQCard } from './ui/Cards';

export default function FAQ() {
  const faqs = [
    {
      q: "Where is The Light of Peace based, and what regions do you serve?",
      a: "The Light of Peace is an Islamic humanitarian charity organization based in Mombasa, Kenya. While headquartered on the coast, our humanitarian programs, clean water boreholes, and relief distributions actively serve communities in need across Kenya."
    },
    {
      q: "Can I designate my donation to a specific cause (e.g. Orphans, Water, Mosque, Zakah)?",
      a: "Yes, absolutely. When donating via M-Pesa Paybill (985050), simply enter your intended purpose (such as 'Water', 'Orphans', 'Zakah', 'Mosque', or 'Ramadan') in the Account Number field. Our finance coordinators ensure funds are allocated according to your designation."
    },
    {
      q: "How can I verify that my donation has been put to work?",
      a: "We prioritize direct field accountability. We regularly publish field photographs and video records in our Verified Media Gallery, provide direct WhatsApp updates for sponsored borehole and mosque builds, and welcome direct inquiries from donors."
    },
    {
      q: "How do I make a donation via M-Pesa Paybill?",
      a: "Go to your M-Pesa menu, select Lipa na M-Pesa, choose Paybill, enter Business Number 985050, enter Account Number 0800066201 (or your intended cause), enter the amount, and confirm with your M-Pesa PIN."
    },
    {
      q: "Can international donors or diaspora members contribute?",
      a: "Yes. Donors outside Kenya can contribute directly to our Gulf African Bank account (Account: 0800066201, Name: THE LIGHT OF PEACE) or contact our primary coordinator on WhatsApp (+254 113 966 669) for direct guidance."
    },
    {
      q: "How can I volunteer or partner with The Light of Peace?",
      a: "We welcome passionate volunteers in education, food logistics, media, and youth mentorship. You can apply directly through our Volunteer section on this website or reach out via our official WhatsApp line."
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-brand-cream border-t border-brand-emerald/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <HelpCircle size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Answers to Common <span className="gold-text-dark">Questions</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            Everything you need to know about our organization, donation channels, and community initiatives in Kenya.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-brand-emerald/15">
          {faqs.map((faq, i) => (
            <FAQCard key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

      </div>
    </section>
  );
}
