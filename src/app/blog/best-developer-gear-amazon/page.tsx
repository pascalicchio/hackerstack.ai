import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Developer Gear on Amazon for Indie Hackers | HackerStack.dev',
  description: 'Discover the best developer gear on Amazon for indie hackers. Laptops, monitors, keyboards, ergonomic chairs, and productivity tools to level up your setup.',
  keywords: 'developer gear, amazon, indie hacker, setup, laptop stand, ergonomic chair, mechanical keyboard',
}

export default function BestDeveloperGearAmazon() {
  const products = [
    {
      category: '💻 Laptops & Monitors',
      items: [
        { 
          name: 'MacBook Pro 14" M3', 
          why: 'Best laptop for developers, excellent battery life, M3 chip crushes compilation times', 
          price: '$1,999+',
          affiliate: 'https://amzn.to/4ag7CYf'
        },
        { name: 'MacBook Pro 16" M3', why: 'Bigger screen for coding, still portable enough to carry', price: '$2,499+', affiliate: 'https://amzn.to/4ag7CYf' },
        { name: 'Dell XPS 15', why: 'Best Windows alternative, OLED display option, developer-friendly', price: '$1,499+', affiliate: null },
        { name: 'LG UltraFine 4K', why: 'USB-C hub built-in, Apple-certified, perfect for Mac setups', price: '$699+', affiliate: null },
        { name: 'Samsung Odyssey G9', why: '49" ultrawide curved, zero bezels, incredible for multi-monitor setups', price: '$1,099+', affiliate: null },
      ]
    },
    {
      category: '⌨️ Keyboards & Mice',
      items: [
        { 
          name: 'Keychron Q1 Pro', 
          why: 'Mechanical, wireless, fully customizable, hot-swappable switches', 
          price: '$199',
          affiliate: 'https://amzn.to/45UuwmQ'
        },
        { name: 'Logitech MX Master 3S', why: 'Ergonomic, multi-device pairing, incredible scroll wheel', price: '$99', affiliate: null },
        { name: 'Apple Magic Keyboard', why: 'Sleek, minimal, fingerprint-resistant, seamless Mac integration', price: '$99', affiliate: null },
      ]
    },
    {
      category: '🎤 Microphones & Webcams',
      items: [
        { 
          name: 'Shure MV7', 
          why: 'USB/XLR combo, podcast-quality, excellent for coding streams', 
          price: '$349',
          affiliate: 'https://amzn.to/3Md3JLS'
        },
        { name: 'Blue Yeti X', why: 'Studio quality USB mic, multiple polar patterns', price: '$170', affiliate: null },
        { name: 'Logitech Brio 4K', why: 'Professional webcam, HDR, Windows Hello support', price: '$199', affiliate: null },
        { name: 'Sony ZV-1', why: 'YouTube camera, excellent low light, flip-out screen', price: '$748', affiliate: null },
      ]
    },
    {
      category: '☕ Coffee & Productivity',
      items: [
        { 
          name: 'Fellow Stagg EKG', 
          why: 'Electric pour-over kettle, precise temperature control', 
          price: '$65',
          affiliate: 'https://amzn.to/4tncK5N'
        },
        { name: 'AeroPress', why: 'Portable, makes amazing coffee, virtually unbreakable', price: '$38', affiliate: null },
        { name: 'Timemore Chestnut C3', why: 'Hand grinder, consistent grind quality, portable', price: '$75', affiliate: null },
      ]
    },
    {
      category: '🪑 Ergonomics',
      items: [
        { 
          name: 'Herman Miller Aeron', 
          why: 'Legendary comfort, adjustable everything, 12-year warranty', 
          price: '$1,395+',
          affiliate: 'https://amzn.to/3ZnQtXS'
        },
        { name: 'Secretlab Titan', why: 'Gaming chair but great for devs, magnetic memory foam', price: '$499+', affiliate: null },
        { name: 'Fully Jarvis', why: 'Electric standing desk, memory presets, excellent stability', price: '$699+', affiliate: null },
        { name: 'Ergotron LX Dual Monitor Arm', why: 'Free up desk space, smooth adjustments, clamp mount', price: '$359', affiliate: null },
        { name: 'Rain Design mStand', why: 'Aluminum laptop stand, passive cooling, sleek design', price: '$49', affiliate: null },
      ]
    },
    {
      category: '👓 Blue Light Glasses',
      items: [
        { 
          name: 'Gunnar Optiks', 
          why: 'Original tech glasses, reduce eye strain during long sessions', 
          price: '$95+',
          affiliate: 'https://amzn.to/4toZMnW'
        },
        { name: 'Felix Gray', why: 'Stylish modern design, multiple frame options', price: '$89+', affiliate: null },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold">
            Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-3 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full">
              Amazon Favorites
            </span>
            <span className="text-xs text-[#666]">February 8, 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Best Developer Gear on Amazon for Indie Hackers
          </h1>
          <p className="text-xl text-[#a1a1a1]">
            Curated list of the best gear to level up your development setup. 
            From ergonomic chairs to mechanical keyboards, these tools help you code longer and better.
          </p>
        </header>

        {/* Disclaimer */}
        <div className="bg-[#141414] border border-[#222] rounded-xl p-6 mb-12">
          <p className="text-[#a1a1a1] text-sm">
            <strong>Affiliate Disclosure:</strong> HackerStack.dev is a participant in the Amazon Associates Program, 
            an affiliate advertising program designed to provide a means for sites to earn advertising fees by 
            advertising and linking to Amazon.com. When you purchase through our links, we may earn a commission.
          </p>
        </div>

        {/* Products by Category */}
        {products.map((section) => (
          <section key={section.category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b border-[#222] pb-2">
              {section.category}
            </h2>
            <div className="grid gap-4">
              {section.items.map((item) => (
                <div key={item.name} className="bg-[#141414] border border-[#222] rounded-xl p-6 hover:border-[#8B5CF6] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-[#a1a1a1]">{item.why}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[#8B5CF6] font-semibold">{item.price}</span>
                      {item.affiliate ? (
                        <a 
                          href={item.affiliate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-2 px-3 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] text-sm rounded hover:bg-[#8B5CF6]/30 transition-colors"
                        >
                          View on Amazon →
                        </a>
                      ) : (
                        <a 
                          href={`https://www.amazon.com/s?k=${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mt-2 text-sm text-[#666] hover:text-[#8B5CF6]"
                        >
                          Search on Amazon →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Why Amazon? */}
        <section className="bg-[#141414] border border-[#222] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Amazon for Developer Gear?</h2>
          <ul className="space-y-3 text-[#a1a1a1]">
            <li>✅ <strong>Fast shipping:</strong> Prime delivery gets your gear in 2 days</li>
            <li>✅ <strong>Easy returns:</strong> No hassle returns if something doesn't work</li>
            <li>✅ <strong>Reviews:</strong> Thousands of real user reviews help you decide</li>
            <li>✅ <strong>Prices:</strong> Competitive pricing, especially with Prime discounts</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Upgrade Your Setup?</h2>
          <p className="text-[#a1a1a1] mb-6">
            Start with the essentials: a great chair, proper monitor, and quality keyboard.
          </p>
          <a 
            href="https://www.amazon.com/s?k=developer+desk+setup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#8B5CF6] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#A78BFA] transition-colors"
          >
            Browse All Developer Gear on Amazon
          </a>
        </section>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t border-[#222] text-center text-[#666] text-sm">
        <p>© 2026 HackerStack.dev • <Link href="/blog" className="hover:text-[#8B5CF6]">Back to Blog</Link></p>
      </footer>
    </div>
  )
}
