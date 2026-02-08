import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Books for Indie Hackers on Amazon | HackerStack.dev',
  description: 'Essential books for indie hackers, developers, and startup founders. From coding best practices to entrepreneurship, these books will level up your skills.',
  keywords: 'books, indie hackers, programming books, startup books, business books, developer books',
}

export default function BestBooksIndieHackersAmazon() {
  const books = [
    {
      category: '🖥️ Programming & Code Quality',
      items: [
        { 
          name: 'The Pragmatic Programmer', 
          authors: 'Andrew Hunt & David Thomas',
          why: 'The classic that shaped generations of developers. Practical advice on coding, debugging, and professional habits that stand the test of time.',
          level: 'All levels'
        },
        { 
          name: 'Clean Code', 
          authors: 'Robert C. Martin',
          why: 'Write maintainable, readable code. Uncle Bob\'s definitive guide to writing software that humans can understand.',
          level: 'Intermediate+'
        },
        { 
          name: 'Refactoring', 
          authors: 'Martin Fowler',
          why: 'Improve existing code without breaking it. Essential techniques for legacy codebases.',
          level: 'Intermediate'
        },
        { 
          name: 'Design Patterns', 
          authors: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
          why: 'The Gang of Four classic. Reusable solutions to common programming problems.',
          level: 'Intermediate'
        },
      ]
    },
    {
      category: '🚀 Startups & Entrepreneurship',
      items: [
        { 
          name: 'Zero to One', 
          authors: 'Peter Thiel',
          why: 'Contrarian thinking about startups. How to create something truly new rather than copying what exists.',
          level: 'Founders'
        },
        { 
          name: 'The Lean Startup', 
          authors: 'Eric Ries',
          why: 'Build-measure-learn loop. Scientific approach to building products customers actually want.',
          level: 'All levels'
        },
        { 
          name: 'The Mom Test', 
          authors: 'Rob Fitzpatrick',
          why: 'How to talk to customers without getting biased answers. Essential for validating ideas.',
          level: 'Idea stage'
        },
        { 
          name: 'Founders at Work', 
          authors: 'Jessica Livingston',
          why: 'Stories from real startup founders. Learn from their mistakes and wins.',
          level: 'All levels'
        },
      ]
    },
    {
      category: '🧠 Productivity & Mindset',
      items: [
        { 
          name: 'Atomic Habits', 
          authors: 'James Clear',
          why: 'Small habits compound into remarkable results. Practical system for building good habits.',
          level: 'All levels'
        },
        { 
          name: 'Deep Work', 
          authors: 'Cal Newport',
          why: 'Focused work in a distracted world. How to concentrate on hard problems.',
          level: 'All levels'
        },
        { 
          name: 'Thinking, Fast and Slow', 
          authors: 'Daniel Kahneman',
          why: 'Understand your own biases and decision-making. Essential for better judgment.',
          level: 'All levels'
        },
        { 
          name: 'The Psychology of Money', 
          authors: 'Morgan Housel',
          why: 'Timeless lessons on wealth and happiness. How money works in the real world.',
          level: 'All levels'
        },
      ]
    },
    {
      category: '💡 Indie Hacking Specific',
      items: [
        { 
          name: 'Hackers & Painters', 
          authors: 'Paul Graham',
          why: 'Essays from Y Combinator co-founder. Philosophy of building things and startups.',
          level: 'All levels'
        },
        { 
          name: 'Shape Up', 
          authors: 'Ryan Singer (Basecamp)',
          why: 'How to ship products without endless backlogs. Practical project management.',
          level: 'Product + Dev'
        },
        { 
          name: 'It Doesn\'t Have to Be Crazy at Work', 
          authors: 'Jason Fried & David Heinemeier Hansson',
          why: 'Calm companies ship better products. Sustainable pace over burnout.',
          level: 'Founders'
        },
        { 
          name: 'Rework', 
          authors: 'Jason Fried & David Heinemeier Hansson',
          why: 'Contrarian startup advice. Less is more when building products.',
          level: 'All levels'
        },
      ]
    },
    {
      category: '📊 Marketing & Growth',
      items: [
        { 
          name: 'Obviously Awesome', 
          authors: 'April Dunford',
          why: 'Positioning your product. How to stand out in a crowded market.',
          level: 'Founders'
        },
        { 
          name: 'Hacking Growth', 
          authors: 'Sean Ellis & Morgan Brown',
          why: 'Growth hacking techniques. How to acquire and retain users fast.',
          level: 'Growth teams'
        },
        { 
          name: 'Building a StoryBrand', 
          authors: 'Donald Miller',
          why: 'Clarify your message. Better marketing through storytelling.',
          level: 'Marketers'
        },
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
            Best Books for Indie Hackers on Amazon
          </h1>
          <p className="text-xl text-[#a1a1a1]">
            Curated reading list for developers, founders, and indie hackers. 
            These books will make you a better coder, thinker, and builder.
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

        {/* Books by Category */}
        {books.map((section) => (
          <section key={section.category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b border-[#222] pb-2">
              {section.category}
            </h2>
            <div className="grid gap-4">
              {section.items.map((book) => (
                <div key={book.name} className="bg-[#141414] border border-[#222] rounded-xl p-6 hover:border-[#8B5CF6] transition-all">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{book.name}</h3>
                        <p className="text-[#666] text-sm">{book.authors}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-[#222] text-[#a1a1a1] rounded-full">
                        {book.level}
                      </span>
                    </div>
                    <p className="text-[#a1a1a1]">{book.why}</p>
                    <a 
                      href={`https://www.amazon.com/s?k=${encodeURIComponent(book.name + ' ' + book.authors)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-[#8B5CF6] hover:text-[#A78BFA]"
                    >
                      Find on Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Why Read Books? */}
        <section className="bg-[#141414] border border-[#222] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Indie Hackers Should Read Books</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">📚 Learn from Masters</h3>
              <p className="text-[#a1a1a1] text-sm">
                Books distill years of experience into a few hundred pages. 
                Learn from the best without making their mistakes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🧠 Deep Work Time</h3>
              <p className="text-[#a1a1a1] text-sm">
                Unlike blog posts or tweets, books provide sustained, deep engagement 
                with complex topics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💰 One-Time Investment</h3>
              <p className="text-[#a1a1a1] text-sm">
                Buy once, read forever. Books are one of the best ROI investments 
                you can make in your career.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🌱 Foundation Building</h3>
              <p className="text-[#a1a1a1] text-sm">
                Principles from books form the foundation for better decision-making 
                throughout your career.
              </p>
            </div>
          </div>
        </section>

        {/* Reading Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Get the Most from These Books</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
              <h3 className="font-semibold mb-2">📝 Take Notes</h3>
              <p className="text-[#a1a1a1] text-sm">
                Highlight key passages. Write summaries. Teaching someone else reinforces learning.
              </p>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
              <h3 className="font-semibold mb-2">⚡ Apply Immediately</h3>
              <p className="text-[#a1a1a1] text-sm">
                Don't finish the book before trying the ideas. Apply one concept per week.
              </p>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6">
              <h3 className="font-semibold mb-2">🔄 Reread Classics</h3>
              <p className="text-[#a1a1a1] text-sm">
                Great books reveal new insights as you grow. Reread annually for fresh perspectives.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Start Your Reading Journey</h2>
          <p className="text-[#a1a1a1] mb-6">
            Pick 2-3 books from different categories. Mix programming with mindset and business.
          </p>
          <a 
            href="https://www.amazon.com/s?k=programming+startup+business+books"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#8B5CF6] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#A78BFA] transition-colors"
          >
            Browse All Books on Amazon
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
