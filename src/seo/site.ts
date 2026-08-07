export const SITE = {
  name: 'Abrar Nafiu',
  title: 'Abrar Nafiu — Software Engineer',
  titleTemplate: (page: string) => `${page} | Abrar Nafiu`,
  description:
    'Abrar Nafiu is a software engineer and Northeastern CS student. Spotify SWE intern, Amazon apprentice — building full-stack products with React, TypeScript, gRPC, and cloud.',
  url: 'https://abrarnafiu.com',
  locale: 'en_US',
  twitter: '@abrarnafiu',
  email: 'abrarnafiu@abrarnafiu.com',
  image: 'https://abrarnafiu.com/og-image.jpg',
  imageAlt: 'Abrar Nafiu, software engineer',
  keywords: [
    'Abrar Nafiu',
    'software engineer',
    'Northeastern University',
    'Spotify intern',
    'React',
    'TypeScript',
    'full stack developer',
    'portfolio',
    'New York',
    'Boston',
  ],
  sameAs: [
    'https://github.com/abrarnafiu',
    'https://www.linkedin.com/in/abrar-nafiu/',
  ],
} as const

export function absoluteUrl(path = '/') {
  const base = SITE.url.replace(/\/$/, '')
  if (!path || path === '/') return `${base}/`
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
