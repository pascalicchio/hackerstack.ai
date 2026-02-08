import { Metadata } from 'next'

interface BlogPostSchema {
  title: string
  description: string
  date: string
  author: string
  image?: string
  url: string
}

interface ToolSchema {
  name: string
  description: string
  url: string
  price?: string
  category?: string
}

export function generateBlogPostSchema(post: BlogPostSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HackerStack.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hackerstack.dev/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    image: post.image || 'https://hackerstack.dev/favicon.svg',
  }
}

export function generateToolSchema(tool: ToolSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: tool.description,
    url: tool.url,
    offers: {
      '@type': 'Offer',
      price: tool.price || 'Free',
      priceCurrency: 'USD',
    },
    ...(tool.category && { applicationCategory: tool.category }),
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HackerStack.dev',
    url: 'https://hackerstack.dev',
    description: 'Curated AI tools for indie hackers, solo founders, and bootstrappers.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://hackerstack.dev/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HackerStack.dev',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HackerStack.dev',
    url: 'https://hackerstack.dev',
    logo: 'https://hackerstack.dev/favicon.svg',
    sameAs: [
      'https://twitter.com/HackerStackAI',
      'https://bsky.app/profile/hackerstackai.bsky.social',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@hackerstack.dev',
      contactType: 'customer service',
    },
  }
}

// Helper function to add schema to Next.js metadata
export function addSchemaToMetadata(schema: object): Metadata {
  return {
    other: {
      'script:ld+json': JSON.stringify(schema),
    },
  }
}
