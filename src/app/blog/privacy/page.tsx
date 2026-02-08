import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | HackerStack.dev',
  description: 'Privacy policy for HackerStack.dev - how we collect, use, and protect your information.',
}

export default function Privacy() {
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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-[#a1a1a1] mb-8">Last updated: February 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-[#a1a1a1] mb-4">
            Welcome to HackerStack.dev ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="text-[#a1a1a1] mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 text-[#a1a1a1] space-y-2">
            <li>Subscribe to our newsletter</li>
            <li>Submit a tool for inclusion in our directory</li>
            <li>Contact us via email</li>
            <li>Leave comments on our blog posts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="text-[#a1a1a1] mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-[#a1a1a1] space-y-2">
            <li>Send you newsletters and updates about AI tools</li>
            <li>Respond to your comments and questions</li>
            <li>Improve our website and services</li>
            <li>Process tool submissions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking</h2>
          <p className="text-[#a1a1a1] mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
          <p className="text-[#a1a1a1] mb-4">
            We may use third-party services for analytics (Google Analytics) and email marketing (SendGrid). 
            These services have their own privacy policies addressing how they use such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Affiliate Disclosure</h2>
          <p className="text-[#a1a1a1] mb-4">
            HackerStack.dev is a participant in the Amazon Associates Program and other affiliate programs. 
            When you click on links to our partner sites and make a purchase, we may earn a commission at no additional cost to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
          <p className="text-[#a1a1a1] mb-4">
            We use administrative, technical, and physical security measures to protect your personal information. 
            While we have taken reasonable steps to secure the information you provide to us, no website or internet transmission is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
          <p className="text-[#a1a1a1] mb-4">Depending on your location, you may have rights including:</p>
          <ul className="list-disc pl-6 text-[#a1a1a1] space-y-2">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
          <p className="text-[#a1a1a1] mb-4">
            Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
          <p className="text-[#a1a1a1] mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
            and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
          <p className="text-[#a1a1a1] mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-[#8B5CF6]">hello@hackerstack.dev</p>
        </section>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t border-[#222] text-center text-sm text-[#666]">
        <p>© 2026 HackerStack.dev • <Link href="/blog" className="hover:text-[#8B5CF6]">Back to Blog</Link></p>
      </footer>
    </div>
  )
}
