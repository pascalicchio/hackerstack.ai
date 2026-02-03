import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO for Indie Hackers: A Practical Guide',
  description: 'Learn practical SEO strategies that indie hackers can implement without a big budget. Get organic traffic.',
  openGraph: {
    title: 'SEO for Indie Hackers: A Practical Guide',
    description: 'Practical SEO strategies for indie hackers on a budget.',
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
            <span className="text-xs text-[#666]">12 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            SEO for Indie Hackers: A Practical Guide
          </h1>
          <p className="text-xl text-[#a1a1a1] leading-relaxed">
            You don't need a big budget to get organic traffic. Here's how indie hackers do SEO.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="mb-8">
            SEO is the gift that keeps on giving. Unlike paid ads, organic traffic compounds over time. 
            As an indie hacker, you can compete with bigger companies by focusing on the right strategies.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The 80/20 of SEO</h2>
          <p className="mb-6">
            Focus on the 20% of efforts that deliver 80% of results:
          </p>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li><strong>Content quality</strong> - Solve real problems</li>
            <li><strong>Keyword research</strong> - Find underserved queries</li>
            <li><strong>Technical SEO</strong> - Fast loading, mobile-friendly</li>
            <li><strong>Backlinks</strong> - Earn through great content</li>
            <li><strong>User signals</strong> - Low bounce rate, high time on page</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Keyword Research on a Budget</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-4 text-[#8B5CF6]">Free Tools</h3>
              <ul className="space-y-2 text-[#a1a1a1]">
                <li>Google Keyword Planner</li>
                <li>AnswerThePublic</li>
                <li>AlsoAsked</li>
                <li>Google Search suggestions</li>
                <li>Reddit and forums</li>
              </ul>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-4 text-[#EC4899]">Paid Tools (Worth It)</h3>
              <ul className="space-y-2 text-[#a1a1a1]">
                <li>Ahrefs ($99/mo)</li>
                <li>Semrush ($120/mo)</li>
                <li>Ubersuggest ($29/mo)</li>
                <li>Mangools ($49/mo)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Content Strategy for Indie Hackers</h2>
          <p className="mb-6">
            Don't compete on head terms. Go for long-tail keywords with lower competition:
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-2">Bad Keyword (High Competition)</th>
                  <th className="text-left py-2">Good Keyword (Low Competition)</th>
                </tr>
              </thead>
              <tbody className="text-[#a1a1a1]">
                <tr className="border-b border-[#222]">
                  <td className="py-2">"project management software"</td>
                  <td className="py-2 text-[#8B5CF6]">"project management for solo developers"</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2">"AI writing tool"</td>
                  <td className="py-2 text-[#8B5CF6]">"AI writing tool for technical bloggers"</td>
                </tr>
                <tr>
                  <td className="py-2">"SaaS analytics"</td>
                  <td className="py-2 text-[#8B5CF6]">"analytics for early stage SaaS"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Technical SEO Checklist</h2>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <ul className="space-y-3 text-[#a1a1a1]">
              <li>✅ <strong>Speed:</strong> Use Vercel/Netlify, optimize images</li>
              <li>✅ <strong>Mobile:</strong> Test with Google Mobile-Friendly Test</li>
              <li>✅ <strong>SSL:</strong> Free HTTPS with Vercel</li>
              <li>✅ <strong>Sitemap:</strong> Auto-generate with next-sitemap</li>
              <li>✅ <strong>Robots.txt:</strong> Allow all important pages</li>
              <li>✅ <strong>Structured data:</strong> Add JSON-LD for rich snippets</li>
              <li>✅ <strong>Meta tags:</strong> Unique title and description per page</li>
              <li>✅ <strong>Internal linking:</strong> Connect related content</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Link Building Without Big Budgets</h2>
          <p className="mb-6">
            Earn backlinks through these legitimate strategies:
          </p>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li><strong>Create original research</strong> - Data others want to cite</li>
            <li><strong>Build free tools</strong> - Utilities that solve problems</li>
            <li><strong>Write detailed guides</strong> - Be the go-to resource</li>
            <li><strong>Engage in communities</strong> - Reddit, Hacker News, Discord</li>
            <li><strong>Interview creators</strong> - People usually link back</li>
            <li><strong>Broken link building</strong> - Find broken links, offer your content</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Track Your Progress</h2>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#8B5CF6]">Metrics to Track</h3>
            <ul className="space-y-2 text-[#a1a1a1]">
              <li><strong>Organic traffic:</strong> Google Analytics</li>
              <li><strong>Keyword rankings:</strong> Ahrefs or Semrush</li>
              <li><strong>Backlinks:</strong> Ahrefs Backlink Checker (free)</li>
              <li><strong>Indexed pages:</strong> Google Search Console</li>
              <li><strong>Click-through rate:</strong> Google Search Console</li>
            </ul>
          </div>

          <div className="p-6 bg-[#8B5CF6]/10 border border-[#8B5CF6] rounded-xl mb-8">
            <h3 className="font-bold mb-2">💡 Pro Tip</h3>
            <p className="text-[#a1a1a1]">
              Start with 10-15 target keywords. Create dedicated pages for each. 
              Update and improve those pages monthly. SEO is a marathon, not a sprint.
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
