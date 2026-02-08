import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | HackerStack.dev',
  description: 'Terms of service for HackerStack.dev - your rights and obligations when using our website.',
}

export default function Terms() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-[#a1a1a1] mb-8">Last updated: February 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-[#a1a1a1] mb-4">
            By accessing and using HackerStack.dev, you accept and agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use of Our Website</h2>
          <p className="text-[#a1a1a1] mb-4">
            You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, 
            restrict, or inhibit anyone else's use and enjoyment of the website.
          </p>
          <p className="text-[#a1a1a1] mb-4">
            You agree NOT to:
          </p>
          <ul className="list-disc pl-6 text-[#a1a1a1] space-y-2">
            <li>Use the website in any way that causes, or may cause, damage to the website</li>
            <li>Use the website for any fraudulent or illegal purposes</li>
            <li>Reproduce, duplicate, copy, or resell any part of our website</li>
            <li>Attempt to gain unauthorized access to any part of our website</li>
            <li>Transmit viruses, trojans, worms, or other harmful material</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
          <p className="text-[#a1a1a1] mb-4">
            All content on HackerStack.dev, including but not limited to text, graphics, logos, icons, images, 
            audio clips, and software, is the property of HackerStack.dev or its content suppliers and is protected 
            by copyright laws.
          </p>
          <p className="text-[#a1a1a1] mb-4">
            You may not reproduce, distribute, modify, create derivative works from, publicly display, 
            or exploit any content from our website without our prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. User-Submitted Content</h2>
          <p className="text-[#a1a1a1] mb-4">
            When you submit a tool for inclusion in our directory, you grant us a non-exclusive, royalty-free license 
            to use, reproduce, and display such content for the purpose of promoting your tool on our website.
          </p>
          <p className="text-[#a1a1a1] mb-4">
            You represent and warrant that you own or have the necessary rights to submit the content 
            and that the content does not infringe any third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Affiliate Disclosure</h2>
          <p className="text-[#a1a1a1] mb-4">
            HackerStack.dev participates in the Amazon Associates Program and other affiliate programs. 
            When you click on affiliate links and make purchases, we may earn a commission. 
            This comes at no additional cost to you.
          </p>
          <p className="text-[#a1a1a1] mb-4">
            We only recommend products and services that we believe provide value to our users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-[#a1a1a1] mb-4">
            HACKERSTACK.DEV IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p className="text-[#a1a1a1] mb-4">
            IN NO EVENT SHALL HACKERSTACK.DEV OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, 
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF THE WEBSITE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. External Links</h2>
          <p className="text-[#a1a1a1] mb-4">
            Our website may contain links to external websites that are not operated by us. 
            If you click on a third-party link, you will be directed to that site's terms and privacy policy. 
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Tool Recommendations</h2>
          <p className="text-[#a1a1a1] mb-4">
            The tools listed on HackerStack.dev are for informational purposes only. 
            We do not endorse any specific tool and recommend that you conduct your own research 
            before making purchasing decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
          <p className="text-[#a1a1a1] mb-4">
            We reserve the right to modify or replace these Terms of Service at any time. 
            If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
          <p className="text-[#a1a1a1] mb-4">
            We may terminate or suspend your access to our website immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
          <p className="text-[#a1a1a1] mb-4">
            These Terms shall be governed by and construed in accordance with applicable laws, 
            without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
          <p className="text-[#a1a1a1] mb-4">
            If you have any questions about these Terms of Service, please contact us at:
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
