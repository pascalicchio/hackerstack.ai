"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Sample tools data - in production, this would come from an API
  const tools = [
    { name: 'Cursor', category: 'Code & Development', url: '/tools/cursor' },
    { name: 'Claude', category: 'Code & Development', url: '/tools/claude' },
    { name: 'ChatGPT', category: 'Code & Development', url: '/tools/chatgpt' },
    { name: 'Bolt.new', category: 'Code & Development', url: '/tools/bolt' },
    { name: 'Midjourney', category: 'Design & Creative', url: '/tools/midjourney' },
    { name: 'Runway', category: 'Design & Creative', url: '/tools/runway' },
    { name: 'ElevenLabs', category: 'Design & Creative', url: '/tools/elevenlabs' },
    { name: 'Gamma', category: 'Design & Creative', url: '/tools/gamma' },
    { name: 'Jasper', category: 'Writing & Content', url: '/tools/jasper' },
    { name: 'Copy.ai', category: 'Writing & Content', url: '/tools/copy-ai' },
    { name: 'Perplexity', category: 'Marketing & Growth', url: '/tools/perplexity' },
    { name: 'Raycast', category: 'Productivity', url: '/tools/raycast' },
    { name: 'Notion', category: 'Productivity', url: '/tools/notion' },
  ]

  const posts = [
    { title: 'Best Developer Gear on Amazon', url: '/blog/best-developer-gear-amazon' },
    { title: 'Best Books for Indie Hackers', url: '/blog/best-books-indie-hackers-amazon' },
    { title: 'Claude vs ChatGPT', url: '/blog/claude-vs-chatgpt-indie-hackers' },
    { title: 'Build a SaaS in 30 Days', url: '/blog/build-saas-30-days-ai' },
  ]

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const toolResults = tools.filter(tool =>
      tool.name.toLowerCase().includes(query.toLowerCase())
    )

    const postResults = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )

    setResults([...toolResults, ...postResults].slice(0, 6))
  }, [query])

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tools, posts..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="w-64 px-4 py-2 bg-[#141414] border border-[#333] rounded-lg text-[#fafafa] placeholder-[#666] focus:outline-none focus:border-[#8B5CF6] text-sm"
        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-[#141414] border border-[#222] rounded-xl shadow-xl z-50 overflow-hidden">
            {results.map((result, index) => (
              <Link
                key={index}
                href={result.url || result.category?.toLowerCase().replace(' & ', '-').replace(' ', '-')}
                className="block px-4 py-3 hover:bg-[#1a1a1a] border-b border-[#222] last:border-0"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  {result.url?.includes('/tools') ? (
                    <svg className="w-4 h-4 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-[#EC4899]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  )}
                  <div>
                    <p className="text-[#fafafa] font-medium text-sm">{result.name || result.title}</p>
                    <p className="text-[#666] text-xs">{result.category || 'Blog Post'}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
