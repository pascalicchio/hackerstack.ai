import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HackerStack.ai - Best AI Tools for Indie Hackers',
  description: 'Discover the best AI tools for building, growing, and scaling your indie hacker business. Curated reviews, comparisons, and guides.',
  keywords: 'AI tools, indie hacker, SaaS tools, AI software, developer tools, AI directory',
  openGraph: {
    title: 'HackerStack.ai - Best AI Tools for Indie Hackers',
    description: 'Discover the best AI tools for building, growing, and scaling your indie hacker business.',
    type: 'website',
  },
}

const categories = [
  { name: 'Code & Development', count: 12, icon: '💻', slug: 'code-development' },
  { name: 'Design & Creative', count: 8, icon: '🎨', slug: 'design-creative' },
  { name: 'Writing & Content', count: 10, icon: '✍️', slug: 'writing-content' },
  { name: 'Marketing & Growth', count: 9, icon: '📈', slug: 'marketing-growth' },
  { name: 'Productivity', count: 7, icon: '⚡', slug: 'productivity' },
  { name: 'Data & Analytics', count: 4, icon: '📊', slug: 'data-analytics' },
]

const featuredTools = [
  {
    name: 'Claude',
    description: 'Anthropic\'s AI assistant excels at coding, analysis, and creative work with a focus on helpfulness and safety.',
    pricing: 'Free / Pro $20/mo',
    category: 'Code & Development',
    affiliate: false,
    url: 'https://claude.ai',
  },
  {
    name: 'Cursor',
    description: 'AI-first code editor built on VS Code. Features intelligent autocomplete and AI-powered refactoring.',
    pricing: 'Free / Pro $20/mo',
    category: 'Code & Development',
    affiliate: false,
    url: 'https://cursor.sh',
  },
  {
    name: 'Midjourney',
    description: 'AI image generation tool known for high-quality, artistic outputs. Best for creative projects.',
    pricing: '$10/mo',
    category: 'Design & Creative',
    affiliate: false,
    url: 'https://midjourney.com',
  },
  {
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI assistant. Versatile for writing, coding, analysis, and brainstorming.',
    pricing: 'Free / Plus $20/mo',
    category: 'Writing & Content',
    affiliate: true,
    url: 'https://chatgpt.com',
  },
]

const recentPosts = [
  {
    title: 'Claude vs ChatGPT: Which AI Assistant is Best for Indie Hackers?',
    excerpt: 'A comprehensive comparison of the two leading AI assistants for building software businesses.',
    date: '2026-02-02',
    category: 'Comparisons',
    slug: 'claude-vs-chatgpt-indie-hackers',
  },
  {
    title: 'How to Use AI to Build a SaaS in 30 Days',
    excerpt: 'Step-by-step guide to leveraging AI tools to launch your SaaS faster than ever before.',
    date: '2026-01-28',
    category: 'Guides',
    slug: 'build-saas-30-days-ai',
  },
  {
    title: 'Top 10 AI Tools for Indie Hackers in 2026',
    excerpt: 'Our curated list of the best AI tools that actually move the needle for solo founders.',
    date: '2026-01-25',
    category: 'Tool Reviews',
    slug: 'top-10-ai-tools-indie-hackers-2026',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Hacker<span className="text-[#ff6b35]">Stack</span>.ai
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tools" className="text-[#a1a1a1] hover:text-[#fafafa] transition-colors">
                Tools
              </Link>
              <Link href="/blog" className="text-[#a1a1a1] hover:text-[#fafafa] transition-colors">
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
                className="px-4 py-2 bg-[#ff6b35] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#ff8555] transition-colors"
              >
                Submit a Tool
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-6">
            <span className="mr-2">🚀</span>
            50+ Curated AI Tools for Indie Hackers
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            Build Faster with<br />
            <span className="text-[#ff6b35]">AI Tools That Work</span>
          </h1>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Curated directory of the best AI tools for indie hackers, solo founders, and bootstrappers. 
            Honest reviews, comparisons, and guides to help you ship faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tools"
              className="px-8 py-4 bg-[#ff6b35] text-[#0a0a0a] font-bold text-lg rounded-lg hover:bg-[#ff8555] transition-all transform hover:scale-105"
            >
              Explore Tools
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 border border-[#333] text-[#fafafa] font-semibold text-lg rounded-lg hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#ff6b35]">50+</div>
              <div className="text-[#a1a1a1] mt-1">AI Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6b35]">6</div>
              <div className="text-[#a1a1a1] mt-1">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6b35]">25+</div>
              <div className="text-[#a1a1a1] mt-1">Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6b35]">10K+</div>
              <div className="text-[#a1a1a1] mt-1">Monthly Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-[#a1a1a1] text-lg">Find the perfect AI tool for your needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="p-6 bg-[#141414] border border-[#222] rounded-xl hover:border-[#ff6b35] transition-all group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-[#ff6b35] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[#a1a1a1] text-sm">{category.count} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Featured Tools</h2>
              <p className="text-[#a1a1a1]">Our top picks for indie hackers</p>
            </div>
            <Link
              href="/tools"
              className="text-[#ff6b35] hover:text-[#ff8555] font-semibold transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredTools.map((tool, index) => (
              <div
                key={index}
                className="p-6 bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#ff6b35] transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{tool.name}</h3>
                    <span className="text-xs px-2 py-1 bg-[#222] text-[#a1a1a1] rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  {tool.affiliate && (
                    <span className="text-xs px-2 py-1 bg-[#ff6b35]/20 text-[#ff6b35] rounded-full">
                      Affiliate
                    </span>
                  )}
                </div>
                <p className="text-[#a1a1a1] mb-4">{tool.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#666]">{tool.pricing}</span>
                  <Link
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#222] text-[#fafafa] font-semibold rounded-lg hover:bg-[#333] transition-colors"
                  >
                    Visit →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Latest from the Blog</h2>
              <p className="text-[#a1a1a1]">Reviews, guides, and indie hacker stories</p>
            </div>
            <Link
              href="/blog"
              className="text-[#ff6b35] hover:text-[#ff8555] font-semibold transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="p-6 bg-[#141414] border border-[#222] rounded-xl hover:border-[#ff6b35] transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-[#ff6b35]/20 text-[#ff6b35] rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#666]">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#a1a1a1] text-sm">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Updated with AI Tools
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto mb-8">
            Get weekly updates on the best AI tools, new arrivals, and indie hacker insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-[#333] rounded-lg text-[#fafafa] placeholder-[#666] focus:outline-none focus:border-[#ff6b35]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#ff6b35] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#ff8555] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Hacker<span className="text-[#ff6b35]">Stack</span>.ai
              </h3>
              <p className="text-[#a1a1a1] text-sm">
                Curated AI tools for indie hackers, solo founders, and bootstrappers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-[#a1a1a1]">
                <li><Link href="/category/code-development" className="hover:text-[#fafafa]">Code & Development</Link></li>
                <li><Link href="/category/design-creative" className="hover:text-[#fafafa]">Design & Creative</Link></li>
                <li><Link href="/category/writing-content" className="hover:text-[#fafafa]">Writing & Content</Link></li>
                <li><Link href="/category/marketing-growth" className="hover:text-[#fafafa]">Marketing & Growth</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-[#a1a1a1]">
                <li><Link href="/blog" className="hover:text-[#fafafa]">Blog</Link></li>
                <li><Link href="/about" className="hover:text-[#fafafa]">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#fafafa]">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-[#fafafa]">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-[#a1a1a1]">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fafafa]">Twitter</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fafafa]">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fafafa]">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#222] text-center text-sm text-[#666]">
            © 2026 HackerStack.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
