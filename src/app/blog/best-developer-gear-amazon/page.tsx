import { Metadata } from 'next'
import Link from 'next/link'
import { generateBlogPostSchema } from '../../../lib/schema'

export const metadata: Metadata = {
  title: 'Best Developer Gear on Amazon for Indie Hackers | HackerStack.dev',
  description: 'Discover the best developer gear on Amazon for indie hackers. Laptops, monitors, keyboards, ergonomic chairs, and productivity tools to level up your setup.',
  keywords: 'developer gear, amazon, indie hacker, setup, laptop stand, ergonomic chair, mechanical keyboard',
  openGraph: {
    title: 'Best Developer Gear on Amazon for Indie Hackers',
    description: 'Curated list of the best gear to level up your development setup.',
    type: 'article',
    publishedTime: '2026-02-08T00:00:00Z',
    authors: ['HackerStack.dev'],
  },
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
          affiliate: 'https://amzn.to/4ag7CYf',
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400&h=300&fit=crop',
        },
        { 
          name: 'MacBook Pro 16" M3', 
          why: 'Bigger screen for coding, still portable enough to carry', 
          price: '$2,499+',
          affiliate: 'https://amzn.to/4ag7CYf',
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400&h=300&fit=crop',
        },
        { 
          name: 'Dell XPS 15', 
          why: 'Best Windows alternative, OLED display option, developer-friendly', 
          price: '$1,499+',
          affiliate: null,
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
        },
      ]
    },
    {
      category: '⌨️ Keyboards & Mice',
      items: [
        { 
          name: 'Keychron Q1 Pro', 
          why: 'Mechanical, wireless, fully customizable, hot-swappable switches', 
          price: '$199',
          affiliate: 'https://amzn.to/45UuwmQ',
          image: 'https://images.unsplash.com/photo-1587829741301-dc798b91add1?w=400&h=300&fit=crop',
        },
        { 
          name: 'Logitech MX Master 3S', 
          why: 'Ergonomic, multi-device pairing, incredible scroll wheel', 
          price: '$99',
          affiliate: null,
          image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a2b?w=400&h=300&fit=crop',
        },
      ]
    },
    {
      category: '🎤 Microphones & Webcams',
      items: [
        { 
          name: 'Shure MV7', 
          why: 'USB/XLR combo, podcast-quality, excellent for coding streams', 
          price: '$349',
          affiliate: 'https://amzn.to/3Md3JLS',
          image: 'https://images.unsplash.com/photo-1590602847861-e35969d963e1?w=400&h=300&fit=crop',
        },
      ]
    },
    {
      category: '🪑 Ergonomics',
      items: [
        { 
          name: 'Herman Miller Aeron', 
          why: 'Legendary comfort, adjustable everything, 12-year warranty', 
          price: '$1,395+',
          affiliate: 'https://amzn.to/3ZnQtXS',
          image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&h=300&fit=crop',
        },
      ]
    },
  ]

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Amazon Favorites' },
  ]

  const postSchema = generateBlogPostSchema({
    title: 'Best Developer Gear on Amazon for Indie Hackers',
    description: 'Curated list of the best developer gear to level up your development setup.',
    date: '2026-02-08',
    author: 'HackerStack.dev',
    url: 'https://hackerstack.dev/blog/best-developer-gear-amazon',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#666] hover:text-[#8B5CF6]">Home</Link>
            <svg className="w-4 h-4 text-[#666]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href="/blog" className="text-[#666] hover:text-[#8B5CF6]">Blog</Link>
            <svg className="w-4 h-4 text-[#666]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[#fafafa]">Amazon Favorites</span>
          </nav>

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

          {/* Featured Product Image */}
          <div className="mb-12 rounded-xl overflow-hidden bg-[#141414] border border-[#222]">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop" 
              alt="Developer workspace setup"
              className="w-full h-64 object-cover"
            />
          </div>

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
                    <div className="flex flex-col sm:flex-row gap-6">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full sm:w-32 h-32 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-[#a1a1a1]">{item.why}</p>
                          </div>
                          <span className="text-[#8B5CF6] font-semibold whitespace-nowrap">{item.price}</span>
                        </div>
                        <div className="mt-4">
                          {item.affiliate ? (
                            <a 
                              href={item.affiliate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-4 py-2 bg-[#8B5CF6]/20 text-[#8B5CF6] text-sm rounded hover:bg-[#8B5CF6]/30 transition-colors"
                            >
                              View on Amazon →
                            </a>
                          ) : (
                            <a 
                              href={`https://www.amazon.com/s?k=${encodeURIComponent(item.name)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-4 py-2 bg-[#222] text-[#a1a1a1] text-sm rounded hover:bg-[#333] transition-colors"
                            >
                              Search on Amazon →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="text-center py-8 bg-[#141414] rounded-xl border border-[#222]">
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
    </>
  )
}
