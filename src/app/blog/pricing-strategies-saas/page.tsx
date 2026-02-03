import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing Strategies for Indie Hacker SaaS',
  description: 'Learn pricing strategies that maximize revenue while keeping customers happy. From free to enterprise tiers.',
  openGraph: {
    title: 'Pricing Strategies for Indie Hacker SaaS',
    description: 'Pricing strategies that maximize revenue for indie hackers.',
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
            <span className="text-xs text-[#666]">10 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Pricing Strategies for Indie Hacker SaaS
          </h1>
          <p className="text-xl text-[#a1a1a1] leading-relaxed">
            Your pricing can make or break your SaaS. Here's how to get it right.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="mb-8">
            Pricing is where indie hackers often stumble. Too low, and you can't sustain. 
            Too high, and no one buys. Here's a framework for getting it right.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Pricing Models Compared</h2>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-2">Model</th>
                  <th className="text-left py-2">Best For</th>
                  <th className="text-left py-2">Pros</th>
                </tr>
              </thead>
              <tbody className="text-[#a1a1a1]">
                <tr className="border-b border-[#222]">
                  <td className="py-2 text-[#8B5CF6]">Flat-rate</td>
                  <td className="py-2">Simple tools</td>
                  <td className="py-2">Predictable, simple</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2 text-[#8B5CF6]">Usage-based</td>
                  <td className="py-2">API products</td>
                  <td className="py-2">Scales with value</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2 text-[#8B5CF6]">Per-seat</td>
                  <td className="py-2">Team tools</td>
                  <td className="py-2">Grows with teams</td>
                </tr>
                <tr>
                  <td className="py-2 text-[#8B5CF6]">Tiered</td>
                  <td className="py-2">Most SaaS</td>
                  <td className="py-2">Capture more value</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Sweet Spot for Indie Hackers</h2>
          <p className="mb-6">
            For most indie hacker SaaS, a 3-tier pricing structure works best:
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#EC4899]">Recommended Structure</h3>
            <ul className="space-y-3 text-[#a1a1a1]">
              <li><strong>Free:</strong> $0 - Forever, limited features (gets users)</li>
              <li><strong>Pro:</strong> $15-29/mo - Full individual features (revenue)</li>
              <li><strong>Team:</strong> $49-99/mo - Collaboration features (growth)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Psychological Pricing Tactics</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Anchoring</h3>
              <p className="text-[#a1a1a1] text-sm">Show the highest price first. $99 looks cheap after $299.</p>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Decoy Effect</h3>
              <p className="text-[#a1a1a1] text-sm">Add a tier that makes another tier look like a deal.</p>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Tier Naming</h3>
              <p className="text-[#a1a1a1] text-sm">"Pro" or "Starter" beats "Basic" or "Cheap".</p>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Annual Discount</h3>
              <p className="text-[#a1a1a1] text-sm">Offer 20% off for annual. Improves cash flow.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">What to Charge</h2>
          <p className="mb-6">
            A rule of thumb: Charge based on the value you provide, not your costs.
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-2">Value Delivered</th>
                  <th className="text-left py-2">Recommended Price</th>
                </tr>
              </thead>
              <tbody className="text-[#a1a1a1]">
                <tr className="border-b border-[#222]">
                  <td className="py-2">Saves 1 hour/week</td>
                  <td className="py-2 text-[#8B5CF6]">$5-10/mo</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2">Saves 5 hours/week</td>
                  <td className="py-2 text-[#8B5CF6]">$29-49/mo</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2">Saves 20 hours/week</td>
                  <td className="py-2 text-[#8B5CF6]">$99-199/mo</td>
                </tr>
                <tr>
                  <td className="py-2">Makes $1000+/month</td>
                  <td className="py-2 text-[#EC4899]">$199-499/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Free Tier Considerations</h2>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li><strong>Do offer free tier</strong> - Lowers friction to try</li>
            <li><strong>Set clear limits</strong> - Users, features, or usage</li>
            <li><strong>Make it useful</strong> - Not a "crippled" version</li>
            <li><strong>Have an upgrade path</strong> - Clear value in Pro</li>
            <li><strong>Limit support</strong> - Free users get documentation, not email support</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Testing Your Pricing</h2>
          <div className="p-6 bg-[#8B5CF6]/10 border border-[#8B5CF6] rounded-xl mb-8">
            <h3 className="font-bold mb-2">💡 Pro Tip</h3>
            <p className="text-[#a1a1a1]">
              Start higher than you think. It's easier to lower prices than raise them. 
              If people aren't buying at $29, try $19. But if they're buying at $29, 
              you might have priced too low.
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
