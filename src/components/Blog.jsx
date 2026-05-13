import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { BlogCard } from './ui/Cards';
import { GeometricPattern } from './ui/Shared';
import { posts } from '../data/posts';

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="relative py-24 overflow-hidden bg-white">
      <GeometricPattern opacity={0.03} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-brand-emerald/10 border border-brand-emerald/20">
            <BookOpen size={14} className="text-brand-emerald" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">Our Impact Stories</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl mb-4 text-brand-emerald-dark">
            Real Change, <span className="gold-text">Real People</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <BlogCard 
              key={i} 
              {...post} 
              onClick={() => navigate(`/blog/${post.id}`)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
