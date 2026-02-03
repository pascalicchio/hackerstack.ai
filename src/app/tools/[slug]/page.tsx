import { Metadata } from 'next'
import Link from 'next/link'
import { tools } from '../data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = tools.find((t) => t.id === slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found | HackerStack.dev',
    }
  }
  
  return {
    title: `${tool.name} - AI Tool Review | HackerStack.dev`,
    description: tool.description,
    keywords: tool.tags.join(', '),
    openGraph: {
      title: `${tool.name} - AI Tool Review`,
      description: tool.description,
      type: 'website',
    },
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = tools.find((t) => t.id === slug)
  
  if (!tool) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <Link href="/tools" className="text-[#8B5CF6] hover:underline">
            ← Back to Tools
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Navigation */}
      <nav className="border-b border-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">
              Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
            </Link>
            <Link href="/tools" className="text-[#a1a1a1] hover:text-[#fafafa]">
              ← Back to Tools
            </Link>
          </div>
        </div>
      </nav>

      {/* Tool Header */}
      <header className="py-16 border-b border-[#222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm px-3 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full">
              {tool.category}
            </span>
            {tool.affiliate && (
              <span className="text-sm px-3 py-1 bg-[#EC4899]/20 text-[#EC4899] rounded-full">
                Affiliate Link
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{tool.name}</h1>
          <p className="text-xl text-[#a1a1a1] mb-6">{tool.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Visit {tool.name}
              <span className="text-sm">↗</span>
            </a>
            <span className="px-4 py-3 bg-[#141414] border border-[#222] rounded-lg">
              💰 {tool.pricing}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <p className="text-[#a1a1a1] mb-8">{tool.fullDescription}</p>

          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            {tool.description.split('. ').map((sentence, i) => (
              <li key={i}>{sentence}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-6">Rating</h2>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-2xl">
                  {star <= tool.rating ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-[#a1a1a1]">{tool.rating}/5 stars</span>
          </div>

          <h2 className="text-2xl font-bold mb-6">Tags</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {tool.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#141414] border border-[#222] rounded-full text-sm text-[#a1a1a1]">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Get Started</h2>
          <div className="p-6 bg-[#8B5CF6]/10 border border-[#8B5CF6] rounded-xl">
            <p className="text-[#a1a1a1] mb-4">
              Ready to try {tool.name}? Click the button below to visit their website and get started.
            </p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Using {tool.name}
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#222] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#666]">
          <p>© 2026 HackerStack.dev — Curated AI tools for indie hackers</p>
        </div>
      </footer>
    </div>
  )
}
