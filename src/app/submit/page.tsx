'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SubmitTool() {
  const [formData, setFormData] = useState({
    toolName: '',
    toolUrl: '',
    category: 'Code & Development',
    email: '',
    reason: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submit-tool', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit')
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
        <nav className="border-b border-[#222]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/" className="text-xl font-bold">
              Hacker<span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Stack</span>.dev
            </Link>
          </div>
        </nav>

        <main className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-bold mb-4">Submission Received!</h1>
          <p className="text-[#a1a1a1] text-lg mb-8">
            Thanks for suggesting <strong>{formData.toolName}</strong>! 
            We&apos;ll review it and add it to the directory if it fits.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-[#141414] border border-[#222] rounded-lg hover:border-[#8B5CF6] transition-colors">
              Back to Home
            </Link>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-[#8B5CF6] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#A78BFA] transition-colors"
            >
              Submit Another
            </button>
          </div>
        </main>
      </div>
    )
  }

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
          We&apos;ll review it and add it if it&apos;s a good fit for indie hackers.
        </p>

        {error && (
          <div className="p-4 bg-[#EC4899]/20 border border-[#EC4899] rounded-lg mb-6 text-[#EC4899]">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Tool Name *</label>
            <input
              type="text"
              required
              value={formData.toolName}
              onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
              className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none"
              placeholder="e.g., Cursor"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tool URL *</label>
            <input
              type="url"
              required
              value={formData.toolUrl}
              onChange={(e) => setFormData({ ...formData, toolUrl: e.target.value })}
              className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category *</label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none"
            >
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
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Why should we feature this tool?</label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-3 bg-[#141414] border border-[#222] rounded-lg text-[#fafafa] focus:border-[#8B5CF6] focus:outline-none h-32"
              placeholder="Tell us why this tool is worth featuring for indie hackers..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#8B5CF6] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#A78BFA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit Tool'}
          </button>
        </form>
      </main>
    </div>
  )
}
