import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - HackerStack.dev',
  description: 'Reviews, guides, and stories about AI tools for indie hackers.',
}

const posts = [
  {
    title: 'Claude vs ChatGPT: Which AI Assistant is Best for Indie Hackers?',
    excerpt: 'A comprehensive comparison of the two leading AI assistants for building software businesses. We test coding, writing, analysis, and pricing to help you choose.',
    date: '2026-02-02',
    category: 'Comparisons',
    slug: 'claude-vs-chatgpt-indie-hackers',
    readTime: '8 min read',
  },
  {
    title: 'How to Use AI to Build a SaaS in 30 Days',
    excerpt: 'Step-by-step guide to leveraging AI tools to launch your SaaS faster than ever before. From idea to launch with zero coding experience.',
    date: '2026-01-28',
    category: 'Guides',
    slug: 'build-saas-30-days-ai',
    readTime: '12 min read',
  },
  {
    title: 'Top 10 AI Tools for Indie Hackers in 2026',
    excerpt: 'Our curated list of the best AI tools that actually move the needle for solo founders. Includes pricing, features, and honest reviews.',
    date: '2026-01-25',
    category: 'Tool Reviews',
    slug: 'top-10-ai-tools-indie-hackers-2026',
    readTime: '10 min read',
  },
  {
    title: 'Building in Public: The Ultimate Guide for Indie Hackers',
    excerpt: 'Why building in public is the most powerful growth strategy for solo founders, and how to do it effectively using AI tools.',
    date: '2026-01-20',
    category: 'Strategy',
    slug: 'building-in-public-guide',
    readTime: '7 min read',
  },
  {
    title: 'AI-Powered MVP: 5 Tools to Ship Your Idea in a Weekend',
    excerpt: 'Stop waiting months to validate your idea. These AI tools can help you build and launch an MVP in 48 hours.',
    date: '2026-01-15',
    category: 'Guides',
    slug: 'ai-powered-mvp-weekend',
    readTime: '9 min read',
  },
  {
    title: 'The Indie Hacker Stack: Tools That Actually Make Money',
    excerpt: 'Analysis of the tools and services successful indie hackers use to build, market, and grow their software businesses.',
    date: '2026-01-10',
    category: 'Tool Reviews',
    slug: 'indie-hacker-stack-make-money',
    readTime: '11 min read',
  },
]

const categories = ['All', 'Tool Reviews', 'Comparisons', 'Guides', 'Strategy']

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tools" className="text-[#a1a1a1] hover:text-[#fafafa] transition-colors">
                Tools
              </Link>
              <Link href="/blog" className="text-[#fafafa] transition-colors">
                Blog
              </Link>
              <Link href="/categories" className="text-[#a1a1a1] hover:text-[#fafafa] transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-[#a1a1a1] hover:text-[#fafafa] transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/submit"
                className="px-4 py-2 bg-[#8B5CF6] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#A78BFA] transition-colors"
              >
                Submit a Tool
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="py-20 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-[#a1a1a1] max-w-2xl">
            Reviews, guides, and stories about building and growing your indie hacker business with AI.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  index === 0
                    ? 'bg-[#8B5CF6] text-[#0a0a0a]'
                    : 'bg-[#141414] text-[#a1a1a1] hover:text-[#fafafa] border border-[#222] hover:border-[#8B5CF6]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="p-6 bg-[#141414] border border-[#222] rounded-xl hover:border-[#8B5CF6] transition-all group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#666]">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-[#8B5CF6] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#a1a1a1] text-sm mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                  <span className="text-xs text-[#666]">{post.date}</span>
                  <span className="text-[#8B5CF6] text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Never Miss a Post
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto mb-8">
            Get the latest AI tools, guides, and indie hacker insights delivered weekly.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-[#fafafa] placeholder-[#666] focus:outline-none focus:border-[#8B5CF6]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#8B5CF6] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#A78BFA] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-[#666]">
          © 2026 HackerStack.dev. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
