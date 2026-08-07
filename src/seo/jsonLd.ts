import { SITE, absoluteUrl } from './site'
import { projectList } from '../data/projects'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    image: SITE.image,
    email: SITE.email,
    jobTitle: 'Software Engineer',
    description: SITE.description,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Northeastern University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    sameAs: [...SITE.sameAs],
    knowsAbout: [
      'Software Engineering',
      'React',
      'TypeScript',
      'Python',
      'gRPC',
      'Cloud Computing',
      'Machine Learning',
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name} Portfolio`,
    url: SITE.url,
    description: SITE.description,
    author: { '@type': 'Person', name: SITE.name },
    inLanguage: 'en-US',
  }
}

export function projectJsonLd(projectId: string) {
  const project = projectList.find((p) => p.id === projectId)
  if (!project) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/project/${project.id}`),
    author: {
      '@type': 'Person',
      name: SITE.name,
      url: SITE.url,
    },
    keywords: project.technologies.join(', '),
    ...(project.liveUrl ? { sameAs: [project.liveUrl, project.githubUrl] } : { sameAs: [project.githubUrl] }),
  }
}
