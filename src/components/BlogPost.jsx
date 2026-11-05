import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, Check, ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center text-center p-8 pt-36 bg-brand-cream">
        <h2 className="text-2xl font-heading font-bold text-brand-emerald-dark mb-3">Story Not Found</h2>
        <p className="text-brand-muted text-xs sm:text-sm mb-6 max-w-md">The humanitarian update you are looking for does not exist or may have been relocated.</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="px-7 py-3 bg-brand-emerald text-white rounded-full font-bold uppercase tracking-wider text-xs shadow-sm"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  const webpSrc = post.img.endsWith('.png') ? post.img.replace('.png', '.webp') : post.img;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="relative bg-brand-cream min-h-screen pt-28 pb-20">
      {/* Header Image Hero */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 mb-10 z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-emerald/15 text-brand-emerald-dark rounded-full hover:bg-brand-emerald hover:text-white transition-colors font-bold text-xs uppercase tracking-wider mb-6 shadow-xs"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="w-full rounded-3xl overflow-hidden shadow-md relative aspect-[16/9] max-h-[460px] bg-brand-emerald-dark">
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={post.img}
              alt={post.alt || post.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-brand-emerald-dark/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider shadow-sm">
            {post.category}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-brand-emerald/10">

          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-brand-emerald-dark mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg text-brand-muted leading-relaxed font-normal mb-10 space-y-5 text-sm sm:text-base">
            <p className="text-brand-text font-semibold text-base sm:text-lg leading-relaxed">
              {post.desc}
            </p>
            <p>
              {post.fullText}
            </p>
          </div>

          {/* Social Share & Direct CTA */}
          <div className="pt-8 border-t border-brand-emerald/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-brand-emerald-dark uppercase tracking-wider">Share:</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - The Light of Peace: ${window.location.href}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors text-xs font-bold"
              >
                WhatsApp Share
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-full bg-brand-cream hover:bg-brand-emerald hover:text-white text-brand-emerald-dark transition-colors text-xs font-bold flex items-center gap-1.5"
              >
                {copied ? <Check size={13} className="text-green-600" /> : <Share2 size={13} />}
                <span>{copied ? "Link Copied" : "Copy Link"}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => navigate('/#donations')}
              className="px-6 py-3 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <Heart size={14} className="fill-white" />
              <span>Donate to This Cause</span>
            </button>
          </div>

        </div>
      </div>
    </article>
  );
}
