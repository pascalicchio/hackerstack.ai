import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Minimum Lovable Product: Build What People Actually Want',
  description: 'Learn how to build a Minimum Lovable Product (MLP) instead of MVP. Create products people genuinely love.',
  openGraph: {
    title: 'Minimum Lovable Product: Build What People Actually Want',
    description: 'Build products people love, not just products that work.',
    type: 'article',
    publishedTime: '2026-02-03',
    authors: ['HackerStack'],
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
            </Link>
            <Link href="/blog" className="text-[#a1a1a1] hover:text-[#fafafa]">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full">
              Strategy
            </span>
            <span className="text-xs text-[#666]">February 3, 2026</span>
            <span className="text-xs text-[#666]">8 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Minimum Lovable Product: Build What People Actually Want
          </h1>
          <p className="text-xl text-[#a1a1a1] leading-relaxed">
            Stop building products that work. Start building products that people love.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="mb-8">
            The MVP (Minimum Viable Product) approach has a flaw: viable doesn't mean valuable. 
            The MLP (Minimum Lovable Product) focuses on creating genuine delight from day one.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">MVP vs MLP: What's the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-4 text-[#EC4899]">MVP</h3>
              <ul className="space-y-2 text-[#a1a1a1]">
                <li>Focus: Does it work?</li>
                <li>Goal: Launch quickly</li>
                <li>User reaction: "It works"</li>
                <li>Retention: Low</li>
                <li>Growth: Slow</li>
              </ul>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-4 text-[#8B5CF6]">MLP</h3>
              <ul className="space-y-2 text-[#a1a1a1]">
                <li>Focus: Do they love it?</li>
                <li>Goal: Delight users</li>
                <li>User reaction: "I love this!"</li>
                <li>Retention: High</li>
                <li>Growth: Viral</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The 3 Pillars of an MLP</h2>

          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#8B5CF6]">1. Emotional Connection</h3>
            <p className="text-[#a1a1a1] mb-4">
              People don't buy products; they buy feelings. Your product should make users feel:
            </p>
            <ul className="space-y-2 text-[#a1a1a1]">
              <li>🎉 <strong>Empowered</strong> - "I can do this"</li>
              <li>😌 <strong>Relieved</strong> - "This solves my problem"</li>
              <li>🤩 <strong>Delighted</strong> - "This is unexpected"</li>
              <li>💪 <strong>Confident</strong> - "I'm making progress"</li>
            </ul>
          </div>

          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#8B5CF6]">2. Polish Over Features</h3>
            <p className="text-[#a1a1a1] mb-4">
              Instead of 10 half-baked features, ship 2 features that are beautifully crafted:
            </p>
            <ul className="space-y-2 text-[#a1a1a1]">
              <li>Perfect micro-interactions</li>
              <li>Thoughtful copy and text</li>
              <li>Smooth animations and transitions</li>
              <li>Attention to detail in every pixel</li>
              <li>Delightful error messages</li>
            </ul>
          </div>

          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#8B5CF6]">3. Instant Value</h3>
            <p className="text-[#a1a1a1] mb-4">
              Users should feel the value within seconds:
            </p>
            <ul className="space-y-2 text-[#a1a1a1]">
              <li><strong>Onboarding:</strong> Less than 30 seconds to first value</li>
              <li><strong>Activation:</strong> First "aha moment" in under 2 minutes</li>
              <li><strong>Retention:</strong> They remember you the next day</li>
              <li><strong>Referral:</strong> They want to tell their friends</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">How to Build an MLP</h2>

          <h3 className="text-xl font-bold mt-8 mb-4">Phase 1: Research</h3>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li>Talk to 10-20 potential customers</li>
            <li>Find their actual pain points (not what they say)</li>
            <li>Identify the emotion behind the problem</li>
            <li>Discover what "love" looks like for them</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Phase 2: Design</h3>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li>Design for emotion first, functionality second</li>
            <li>Create a "love map" - all touchpoints where users feel delight</li>
            <li>Prototype with real users, not just stakeholders</li>
            <li>Iterate until you see genuine excitement</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Phase 3: Build</h3>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li>Build the smallest thing that creates love</li>
            <li>Polish every detail obsessively</li>
            <li>Test with fresh eyes (people who've never seen it)</li>
            <li>Launch when you hear "wow" or "I love this"</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Examples of MLPs</h2>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">MLP Approach</th>
                </tr>
              </thead>
              <tbody className="text-[#a1a1a1]">
                <tr className="border-b border-[#222]">
                  <td className="py-2">Notion</td>
                  <td className="py-2">Block-based editing that feels magical</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2">Linear</td>
                  <td className="py-2">Keyboard-first experience with beautiful UI</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2">Loom</td>
                  <td className="py-2">Record and share in one click</td>
                </tr>
                <tr>
                  <td className="py-2">Arc Browser</td>
                  <td className="py-2">Tab organization as a feature, not a bug</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-[#8B5CF6]/10 border border-[#8B5CF6] rounded-xl mb-8">
            <h3 className="font-bold mb-2">💡 Pro Tip</h3>
            <p className="text-[#a1a1a1]">
              Before launching, show your product to 5 people who fit your target audience. 
              If 3 of them don't say something positive unprompted, keep iterating.
            </p>
          </div>
        </div>

        {/* Author */}
        <div className="mt-16 pt-8 border-t border-[#222]">
          <p className="text-[#a1a1a1]">
            Written by <strong className="text-[#fafafa]">HackerStack</strong> - Curating the best AI tools for indie hackers.
          </p>
        </div>
      </article>
    </div>
  )
}
