import { useEffect } from 'react'
import { SITE, absoluteUrl } from './site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  noindex?: boolean
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/** Updates document title, meta tags, canonical, and optional JSON-LD for the current route. */
export function useSeo({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.image,
  imageAlt = SITE.imageAlt,
  type = 'website',
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title ? SITE.titleTemplate(title) : SITE.title
    const url = absoluteUrl(path)
    const img = image.startsWith('http') ? image : absoluteUrl(image)

    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', img)
    upsertMeta('property', 'og:image:alt', imageAlt)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', img)
    upsertMeta('name', 'twitter:image:alt', imageAlt)
    upsertLink('canonical', url)

    if (jsonLd) {
      upsertJsonLd('seo-jsonld-page', jsonLd)
    }

    return () => {
      const pageLd = document.getElementById('seo-jsonld-page')
      if (pageLd && jsonLd) pageLd.remove()
    }
  }, [title, description, path, image, imageAlt, type, noindex, jsonLd])
}
