import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Submit a Tool - HackerStack.dev',
  description: 'Submit an AI tool to be reviewed on HackerStack',
}

export default function SubmitTool() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <nav className="border-b border-[#222]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold">
            Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Submit a Tool</h1>
        <p className="text-[#a1a1a1] mb-8">
          Know an AI tool that should be on HackerStack? Submit it!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Tool Name *</label>
            <input type="text" className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none" placeholder="e.g., Cursor" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tool URL *</label>
            <input type="url" className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none" placeholder="https://..." />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category *</label>
            <select className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none">
              <option>Code & Development</option>
              <option>Design & Creative</option>
              <option>Writing & Content</option>
              <option>Marketing & Growth</option>
              <option>Productivity</option>
              <option>Data & Analytics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Your Email *</label>
            <input type="email" className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Why should we feature this tool?</label>
            <textarea className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none h-32" placeholder="Tell us why this tool is worth featuring..."></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-[#8B5CF6] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#A78BFA] transition-colors">
            Submit Tool
          </button>
        </form>
      </main>
    </div>
  )
}
