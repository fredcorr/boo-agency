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

export const HomePageHeroQuery = `
  _type == 'HomepageHero' => {
    "video": video.asset->{ url },
  },
`

export const QuickLinksQuery = `
  _type == 'QuickLinks' => {
    links[]->{title, slug},
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

export const page = (slug: string[]) => `*[slug.current == '${slug.join(
  '/'
)}'] | order(_updatedAt asc)[0] {
  "settings": ${navPages},
  components[]{
    ...,
    ${HomePageHeroQuery}
    ${QuickLinksQuery}
    ${Logos}
  },
  footer,
  title,
  _type,
  theme,
  slug,
  seo
}`
