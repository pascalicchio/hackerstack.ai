import { Metadata } from 'next'
import Link from 'next/link'
import { tools, categories } from './data'

export const metadata: Metadata = {
  title: 'AI Tools Directory | HackerStack.dev',
  description: 'Browse 31+ curated AI tools for indie hackers. Find the best tools for coding, design, writing, marketing, and productivity.',
  keywords: 'AI tools, AI directory, indie hacker tools, software tools, AI software',
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
            </Link>
            <Link href="/blog" className="text-[#a1a1a1] hover:text-[#fafafa]">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-20 border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI Tools <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Directory</span>
          </h1>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-8">
            Discover {tools.length} curated AI tools for indie hackers. Filter by category and find the perfect tool for your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`#${cat.slug}`}
                className="px-4 py-2 bg-[#141414] border border-[#222] rounded-full hover:border-[#8B5CF6] transition-colors"
              >
                {cat.icon} {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => {
          const categoryTools = tools.filter(t => t.category === category.name)
          if (categoryTools.length === 0) return null

          return (
            <section key={category.slug} id={category.slug} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <span className="text-[#666]">({categoryTools.length})</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group p-6 bg-[#141414] border border-[#222] rounded-xl hover:border-[#8B5CF6] transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-[#8B5CF6] transition-colors">
                        {tool.name}
                      </h3>
                      {tool.affiliate && (
                        <span className="text-xs px-2 py-1 bg-[#EC4899]/20 text-[#EC4899] rounded-full">
                          Affiliate
                        </span>
                      )}
                    </div>
                    <p className="text-[#a1a1a1] text-sm mb-4 line-clamp-2">
                      {tool.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#666]">{tool.pricing}</span>
                      <span className="text-[#8B5CF6] text-sm group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#666]">
          <p>© 2026 HackerStack.dev — Curated AI tools for indie hackers</p>
        </div>
      </footer>
    </div>
  )
}
