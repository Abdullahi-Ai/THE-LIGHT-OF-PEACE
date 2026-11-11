import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const allowedSubjects = [
    'General Inquiry',
    'Water Borehole Sponsorship',
    'Mosque Construction Contribution',
    'Orphan Support Sponsoring',
    'Volunteer Coordination'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Input Sanitization & Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const selectedSubject = allowedSubjects.includes(formData.subject) ? formData.subject : 'General Inquiry';

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      setErrorMessage('Please provide a valid name (2 to 100 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 120) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (trimmedMessage.length < 5 || trimmedMessage.length > 1500) {
      setErrorMessage('Please provide a message between 5 and 1,500 characters.');
      return;
    }

    const formatted = `*Website Inquiry - The Light of Peace*\n\n*Name:* ${trimmedName}\n*Email:* ${trimmedEmail}\n*Subject:* ${selectedSubject}\n\n*Message:*\n${trimmedMessage}`;
    const whatsappUrl = `https://wa.me/254113966669?text=${encodeURIComponent(formatted)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormState('success');
    setTimeout(() => {
      setFormState('idle');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setErrorMessage('');
    }, 5000);
  };

  const contacts = [
    {
      icon: MapPin,
      title: "Organization Base",
      info: "Mombasa, Kenya",
      sub: "Serving communities across Kenya",
      action: "https://maps.google.com/?q=Mombasa,Kenya",
      actionText: "View on Map"
    },
    {
      icon: MessageSquare,
      title: "Dr. Mahmoud Edhwa",
      info: "+254 113 966 669",
      sub: "Telephone & WhatsApp",
      action: "https://wa.me/254113966669",
      actionText: "Message on WhatsApp"
    },
    {
      icon: Phone,
      title: "Telephone / WhatsApp",
      info: "+254 721 376 922",
      sub: "Direct inquiries & information",
      action: "https://wa.me/254721376922",
      actionText: "Message on WhatsApp"
    },
    {
      icon: Phone,
      title: "Telephone Line",
      info: "+254 725 393 639",
      sub: "Direct phone contact",
      action: "tel:+254725393639",
      actionText: "Call Phone"
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-white border-t border-brand-emerald/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <MessageSquare size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Get in Touch
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Contact <span className="gold-text-dark">The Light of Peace</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            Have questions about donating, borehole sponsorship, or volunteer initiatives? Reach out to our leadership and ground team directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Contact Cards Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {contacts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-brand-cream border border-brand-emerald/10 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-emerald/15 flex items-center justify-center text-brand-emerald shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">
                        {item.title}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-brand-emerald-dark block mt-0.5">
                        {item.info}
                      </span>
                      <span className="text-xs text-brand-muted block mt-0.5">
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  <a
                    href={item.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto shrink-0 px-3.5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded-lg bg-white border border-brand-emerald/20 text-xs font-bold text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors"
                  >
                    {item.actionText}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-cream border border-brand-emerald/15 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-brand-emerald-dark mb-1">
                Send Us a Direct Inquiry
              </h3>
              <p className="text-xs text-brand-muted mb-6">
                Fill out the details below to dispatch your message directly to our coordination phone via WhatsApp.
              </p>

              {formState === 'success' ? (
                <div className="p-5 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span>JazakAllah Khairan. Opening WhatsApp to connect with our coordinator...</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-brand-emerald-dark mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Brother Omar"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-brand-emerald-dark mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        maxLength={120}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. omar@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-brand-emerald-dark mb-1.5">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Water Borehole Sponsorship">Water Borehole Sponsorship</option>
                      <option value="Mosque Construction Contribution">Mosque Construction Contribution</option>
                      <option value="Orphan Support Sponsoring">Orphan Support Sponsoring</option>
                      <option value="Volunteer Coordination">Volunteer Coordination</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-brand-emerald-dark mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      aria-required="true"
                      maxLength={1500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your question or request here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-emerald/20 focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/20 text-xs bg-white"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <Send size={15} />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
