import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Use Cursor for Indie Hacking: A Complete Guide',
  description: 'Master Cursor, the AI-powered code editor. Learn shortcuts, commands, and advanced techniques to speed up your indie hacking workflow.',
  openGraph: {
    title: 'How to Use Cursor for Indie Hacking: A Complete Guide',
    description: 'Master Cursor, the AI-powered code editor for indie hackers.',
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
              Guides
            </span>
            <span className="text-xs text-[#666]">February 3, 2026</span>
            <span className="text-xs text-[#666]">10 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            How to Use Cursor for Indie Hacking: A Complete Guide
          </h1>
          <p className="text-xl text-[#a1a1a1] leading-relaxed">
            Cursor isn't just another code editor—it's your AI pair programmer. Here's how to use it effectively.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="mb-8">
            Cursor has revolutionized how indie hackers write code. As an AI-first code editor built on VS Code, 
            it offers powerful features that can dramatically speed up your development workflow. In this guide, 
            I'll share the techniques I use every day.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Getting Started with Cursor</h2>
          <p className="mb-6">
            If you're coming from VS Code, Cursor will feel familiar—but with superpowers. Download it from 
            cursor.sh and sign in with your GitHub account.
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#8B5CF6]">First-Time Setup</h3>
            <ul className="space-y-2 text-[#a1a1a1]">
              <li>1. Download Cursor from <strong>cursor.sh</strong></li>
              <li>2. Sign in with GitHub (syncs your extensions)</li>
              <li>3. Install the <strong>Cursor</strong> extension in VS Code for migrations</li>
              <li>4. Open your first project and let AI index it</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Essential Cursor Shortcuts</h2>
          <p className="mb-6">
            Cursor has keyboard shortcuts that will change how you code. Memorize these:
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-2">Shortcut</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-[#a1a1a1]">
                <tr className="border-b border-[#222]">
                  <td className="py-2 font-mono text-[#8B5CF6]">Cmd/Ctrl + K</td>
                  <td className="py-2">Generate code (inline)</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2 font-mono text-[#8B5CF6]">Cmd/Ctrl + L</td>
                  <td className="py-2">Chat with AI about your code</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2 font-mono text-[#8B5CF6]">Cmd/Ctrl + I</td>
                  <td className="py-2">Edit highlighted code</td>
                </tr>
                <tr className="border-b border-[#222]">
                  <td className="py-2 font-mono text-[#8B5CF6]">Cmd/Ctrl + Shift + L</td>
                  <td className="py-2">Apply AI suggestion to all occurrences</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-[#8B5CF6]">Cmd/Ctrl + Enter</td>
                  <td className="py-2">Accept AI autocomplete</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Using Cmd+K for Code Generation</h2>
          <p className="mb-6">
            <strong>Cmd+K</strong> is Cursor's superpower. Select code or place your cursor where you want code, 
            press Cmd+K, and describe what you want in natural language.
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <h3 className="font-bold mb-4 text-[#EC4899]">Example Prompts</h3>
            <ul className="space-y-2 text-[#a1a1a1] font-mono text-sm">
              <li>"Create a React component for a login form"</li>
              <li>"Write a function to validate email addresses"</li>
              <li>"Add error handling to this API call"</li>
              <li>"Convert this class component to functional"</li>
              <li>"Add TypeScript types to this function"</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Using Cmd+L for AI Chat</h2>
          <p className="mb-6">
            <strong>Cmd+L</strong> opens Cursor's chat interface. This is perfect for:
          </p>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li>Understanding unfamiliar code</li>
            <li>Debugging issues step by step</li>
            <li>Getting architecture advice</li>
            <li>Generating test cases</li>
            <li>Refactoring suggestions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Context Awareness</h2>
          <p className="mb-6">
            Cursor reads your entire codebase, so it understands your project's structure. You can ask:
          </p>
          <div className="p-6 bg-[#141414] border border-[#222] rounded-xl mb-8">
            <ul className="space-y-2 text-[#a1a1a1]">
              <li>"Where is the authentication logic in this project?"</li>
              <li>"How does the payment flow work?"</li>
              <li>"What database schema are we using?"</li>
              <li>"Find all places where we call the API"</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Tab Feature</h2>
          <p className="mb-6">
            Cursor's autocomplete goes beyond simple suggestions. It predicts your next edit based on context. 
            Press <strong>Tab</strong> to accept, or keep typing to ignore.
          </p>
          <div className="p-6 bg-[#8B5CF6]/10 border border-[#8B5CF6] rounded-xl mb-8">
            <h3 className="font-bold mb-2">💡 Pro Tip</h3>
            <p className="text-[#a1a1a1]">
              When Cursor suggests code that spans multiple lines, press <strong>Cmd+Shift+Enter</strong> 
              to accept the entire suggestion at once.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Privacy Settings</h2>
          <p className="mb-6">
            Cursor offers privacy modes if you're working on sensitive code:
          </p>
          <ul className="list-disc pl-6 mb-8 text-[#a1a1a1] space-y-2">
            <li><strong>Default:</strong> Code is used to improve AI (opt-out available)</li>
            <li><strong>Local Mode:</strong> All processing happens locally (requires local models)</li>
            <li><strong>Enterprise:</strong> No data leaves your organization</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Cursor for Indie Hackers</h2>
          <p className="mb-6">
            As an indie hacker, Cursor is a game-changer because:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Speed</h3>
              <p className="text-[#a1a1a1]">Generate boilerplate, tests, and migrations in seconds.</p>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Learning</h3>
              <p className="text-[#a1a1a1]">Understand any codebase quickly with AI explanations.</p>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Quality</h3>
              <p className="text-[#a1a1a1]">Get cleaner, more consistent code with AI suggestions.</p>
            </div>
            <div className="p-6 bg-[#141414] border border-[#222] rounded-xl">
              <h3 className="font-bold mb-2 text-[#8B5CF6]">Cost</h3>
              <p className="text-[#a1a1a1]">The free tier is generous enough for side projects.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Resources</h2>
          <ul className="space-y-4 text-[#a1a1a1]">
            <li>
              <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">
                Download Cursor →
              </a>
            </li>
            <li>
              <a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">
                Official Documentation →
              </a>
            </li>
          </ul>
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
