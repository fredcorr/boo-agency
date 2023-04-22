export const allPages = `*[ 
  _type == 'page'
]{
  title,
  _id,
  slug
}`

export const navPages = `*[
  _type == "settings"
][0] {
  email,
  navigation[] {
    linkLabel,
    anchorLink,
    link -> {slug, title} 
  }
}`

export const QuickLinksQuery = `
  _type == 'QuickLinks' => {
    links[]->{title, slug},
  },
`

export const WhyBoo = `
  _type == 'WhyBoo' => {
    ...,
    clientLogos[]{
      ...,
      asset->{
        url,
        metadata
      }
    }
  },
`

export const HomePageHeroQuery = `
  _type == 'HomePageHero' => {
    ...,
    'video': video.asset->{url, ...},
  },
`

export const Logos = `
  _type == 'Logos' => {
    ...,
    clientLogos[]{
      ...,
      asset->{
        url,
        metadata
      }
    }
  },
`

export const getQuery = (slug: string[]) => `*[slug.current == '${slug.join(
  '/'
)}'] | order(_updatedAt asc)[0] {
  "settings": ${navPages},
  components[]{
    ...,
    ${HomePageHeroQuery}
    ${QuickLinksQuery}
    ${WhyBoo}
    ${Logos}
  },
  footer,
  title,
  _type,
  theme,
  slug,
  seo
}`
