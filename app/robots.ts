import type { MetadataRoute } from 'next'

const AI_CRAWLER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      // Explicit allow for known AI/answer-engine crawlers — the wildcard
      // above already permits them, but some hosting-layer bot managers
      // only honor named rules, not wildcards.
      {
        userAgent: AI_CRAWLER_AGENTS,
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    sitemap: 'https://www.kidsdds.com/sitemap.xml',
  }
}
