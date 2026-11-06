import React, { useState } from 'react';
import { Users, CheckCircle2, Send, MessageSquare } from 'lucide-react';

export default function Volunteer() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Food Distribution & Logistics',
    location: 'Mombasa'
  });
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    "Food Distribution & Logistics",
    "Quran & Arabic Teaching",
    "Youth Mentorship & Drug Awareness",
    "Media & Photography",
    "Coordination & Volunteer Support",
    "Community Outreach"
  ];

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    const text = `*Volunteer Inquiry - The Light of Peace*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Area of Interest:* ${formData.role}\n*Location:* ${formData.location}\n\nAssalamu Alaikum. I would like to volunteer and support your community humanitarian work in Kenya.`;
    const url = `https://wa.me/254113966669?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: '', phone: '', role: 'Food Distribution & Logistics', location: 'Mombasa' });
    }, 5000);
  };

  return (
    <section
      id="volunteer"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-brand-cream border-t border-brand-emerald/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 bg-brand-emerald/10 border border-brand-emerald/20">
          <Users size={14} className="text-brand-emerald" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
            Community Service
          </span>
        </div>

        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
          Become A <span className="gold-text-dark">Volunteer</span> With Us
        </h2>

        <p className="text-xs sm:text-base mb-8 max-w-2xl mx-auto text-brand-muted leading-relaxed">
          Join our community volunteers in Kenya. Giving your time and skills to serve vulnerable people is a noble deed and an investment in your <em>Akhirah</em>.
        </p>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left">
          {roles.map((role, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white border border-brand-emerald/10 shadow-xs flex items-center gap-2.5"
            >
              <CheckCircle2 size={16} className="text-brand-emerald shrink-0" />
              <span className="text-xs font-semibold text-brand-emerald-dark">{role}</span>
            </div>
          ))}
        </div>

        {/* Action Toggle */}
        {!showForm ? (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] bg-brand-emerald text-white hover:bg-brand-emerald-dark shadow-md inline-flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span>Apply to Volunteer</span>
          </button>
        ) : (
          <form
            onSubmit={handleVolunteerSubmit}
            className="mt-6 p-6 sm:p-8 rounded-3xl bg-white text-brand-text max-w-lg mx-auto shadow-xl text-left border border-brand-emerald/15"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-emerald/10">
              <h3 className="font-heading font-bold text-lg text-brand-emerald-dark">Volunteer Application</h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-xs text-brand-muted hover:text-brand-emerald font-semibold"
              >
                Close
              </button>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold text-center">
                JazakAllah Khairan. Opening WhatsApp to connect directly with our coordination team...
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="volunteer-name" className="block text-xs font-bold text-brand-emerald-dark mb-1">Your Full Name</label>
                  <input
                    id="volunteer-name"
                    type="text"
                    required
                    aria-required="true"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Fatima Ali"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-brand-cream/50"
                  />
                </div>

                <div>
                  <label htmlFor="volunteer-phone" className="block text-xs font-bold text-brand-emerald-dark mb-1">Phone / WhatsApp Number</label>
                  <input
                    id="volunteer-phone"
                    type="tel"
                    required
                    aria-required="true"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-brand-cream/50"
                  />
                </div>

                <div>
                  <label htmlFor="volunteer-role" className="block text-xs font-bold text-brand-emerald-dark mb-1">Preferred Role</label>
                  <select
                    id="volunteer-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-brand-cream/50"
                  >
                    {roles.map((r, idx) => (
                      <option key={idx} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="volunteer-location" className="block text-xs font-bold text-brand-emerald-dark mb-1">Your Location in Kenya</label>
                  <input
                    id="volunteer-location"
                    type="text"
                    required
                    aria-required="true"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Mombasa, Kilifi, Nairobi"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-brand-cream/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 mt-2 shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  <Send size={15} />
                  <span>Submit via WhatsApp</span>
                </button>
              </div>
            )}
          </form>
        )}

      </div>
    </section>
  );
}
