import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Heart } from 'lucide-react';
import { posts } from '../data/posts';
import { GeometricPattern } from './ui/Shared';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 pt-32">
        <h2 className="text-3xl font-heading font-bold text-brand-emerald-dark mb-4">Story Not Found</h2>
        <p className="text-brand-muted mb-8">The impact story you are looking for does not exist.</p>
        <button onClick={() => navigate('/')} className="px-8 py-3 bg-brand-emerald-dark text-white rounded-full font-bold uppercase tracking-widest text-xs">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <article className="relative bg-white min-h-screen pt-24 pb-24">
      <GeometricPattern opacity={0.03} />
      
      {/* Header Image Section */}
      <div className="relative h-[40vh] sm:h-[60vh] w-full max-w-7xl mx-auto px-4 sm:px-6 mb-16 z-10">
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl relative">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-16">
            <div className="flex items-center gap-4 mb-4 text-brand-gold">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-brand-emerald-dark/80 px-4 py-2 rounded-full backdrop-blur-sm text-white">
                <Heart size={14} className="text-brand-gold" />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white leading-tight max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-soft border border-brand-emerald/5 -mt-32 relative z-20">
          <div className="prose prose-lg text-brand-muted font-medium leading-loose">
            <p className="text-2xl text-brand-emerald-dark font-heading font-bold leading-relaxed mb-8 italic">
              {post.desc}
            </p>
            <p>
              {post.fullText}
            </p>
            
            <div className="my-12 p-8 bg-brand-cream rounded-3xl border border-brand-emerald/10 text-center">
              <Heart size={32} className="mx-auto text-brand-emerald mb-4" />
              <h3 className="text-2xl font-heading font-bold text-brand-emerald-dark mb-4">Support Our Impact</h3>
              <p className="text-sm font-medium text-brand-muted mb-6">
                Your continued generosity makes stories like these possible. Help us reach more communities in need.
              </p>
              <Link to="/#donations" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-brand-gold/20">
                Donate Now <Heart size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-emerald/10 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-brand-muted">Share this story</span>
            <div className="flex gap-3">
              {/* WhatsApp Share */}
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(post.title + " - Read more at: " + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                title="Share on WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>

              {/* Facebook Share */}
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                title="Share on Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>

              {/* Native / Copy Link Share */}
              <button 
                onClick={async () => {
                  const shareData = {
                    title: post.title,
                    text: post.desc,
                    url: window.location.href,
                  };
                  if (navigator.share) {
                    try {
                      await navigator.share(shareData);
                    } catch (err) {
                      console.log('Share cancelled');
                    }
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Story link copied to clipboard!');
                  }
                }}
                className="w-10 h-10 rounded-full bg-brand-emerald/5 flex items-center justify-center text-brand-emerald hover:bg-brand-emerald hover:text-white transition-colors"
                title="Copy Link"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
