import React, { useState } from 'react';
import { MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { GeometricPattern } from './ui/Shared';

export default function Contact() {
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Light of Peace,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254113966669?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormState('success');
    setTimeout(() => setFormState('idle'), 5000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-white">
      <GeometricPattern opacity={0.03} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
            <MessageSquare size={14} className="text-brand-emerald" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Contact Us</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark">
            Get In <span className="gold-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-brand-muted font-medium">
            Have questions about our programs or want to volunteer? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "Location", info: "Mombasa, Kenya", sub: "Serving communities across Kenya", color: "#0d5c3a", link: "https://maps.google.com/?q=Mombasa,Kenya" },
              { icon: MessageSquare, title: "Dr. Mahmoud Edhwa", info: "+254 113 966 669", sub: "Primary Contact & WhatsApp", color: "#25D366", link: "https://wa.me/254113966669" },
              { icon: MessageSquare, title: "WhatsApp Support", info: "+254 721 376 922", sub: "General Inquiries", color: "#25D366", link: "https://wa.me/254721376922" },
              { icon: MessageSquare, title: "Call Us", info: "+254 725 393 639", sub: "Direct Line", color: "#25D366", link: "tel:+254725393639" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-6 p-8 rounded-[2.5rem] bg-brand-cream border border-brand-emerald/5 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: `${item.color}15` }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-emerald-dark mb-1">{item.title}</h4>
                  <p className="text-brand-emerald-dark font-black text-lg leading-none mb-1.5">{item.info}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">{item.sub}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 sm:p-12 rounded-[3rem] bg-brand-emerald-dark text-white shadow-2xl relative overflow-hidden">
              <GeometricPattern opacity={0.1} color="white" />
              <div className="relative z-10">
                <h3 className="font-heading text-3xl font-bold mb-8">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {[
                    { label: "Full Name", key: "name", type: "text", placeholder: "Your Name" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "your@email.com" }
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 ml-4">{field.label}</label>
                      <input
                        required
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key]}
                        onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-brand-gold focus:bg-white/15 outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 ml-4">Subject</label>
                  <input
                    required
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-brand-gold focus:bg-white/15 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2 ml-4">Message</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:border-brand-gold focus:bg-white/15 outline-none transition-all placeholder:text-white/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'success'}
                  className="w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-[1.02] bg-gradient-to-r from-brand-gold to-brand-gold-light text-white shadow-xl shadow-brand-gold/20 flex items-center justify-center gap-3"
                >
                  {formState === 'success' ? (
                    <><CheckCircle size={18} /> Message Sent Successfully!</>
                  ) : (
                    <><Send size={18} /> Send via WhatsApp</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
