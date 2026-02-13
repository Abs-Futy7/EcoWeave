import type { Metadata } from 'next';
import { blogPosts } from '@/lib/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources & Insights - EcoWeave Blog',
  description: 'Learn about compliance risk management, textile pollution prevention, and environmental technology for Bangladesh\'s RMG sector.',
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl text-foreground/70">
            Deep dives on compliance technology, environmental impact, and industry best practices
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground/70 text-sm mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read Time */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/60">{post.readTime}</span>
                      <button className="text-primary text-sm font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">No Posts Yet</h3>
              <p className="text-foreground/70">Check back soon for insights on compliance technology and environmental impact.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Technology', 'Methodology', 'Industry', 'Analysis', 'Environment', 'Implementation'].map((category) => {
              const count = blogPosts.filter(p => p.category === category).length;
              return (
                <button
                  key={category}
                  className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-foreground/60 text-sm">{count} {count === 1 ? 'article' : 'articles'}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get insights on compliance technology, environmental regulations, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
