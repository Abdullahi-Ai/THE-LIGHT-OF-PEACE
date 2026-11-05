import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { BlogCard } from './ui/Cards';
import { posts } from '../data/posts';

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section
      id="blog"
      className="relative py-20 sm:py-28 scroll-mt-20 sm:scroll-mt-24 overflow-hidden bg-white border-t border-brand-emerald/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-brand-emerald/10 border border-brand-emerald/20">
            <BookOpen size={14} className="text-brand-emerald" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-emerald">
              Articles &amp; Field Updates
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-emerald-dark leading-tight">
            Latest Stories from the <span className="gold-text-dark">Field</span>
          </h2>

          <p className="text-xs sm:text-base text-brand-muted leading-relaxed">
            Read inspiring reports on how your Zakah, Sadaqah, and continuous charity transform lives across Kenyan communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              img={post.img}
              category={post.category}
              title={post.title}
              desc={post.desc}
              onClick={() => navigate(`/blog/${post.id}`)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
