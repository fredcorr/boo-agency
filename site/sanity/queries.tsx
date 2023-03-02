export const allPages = `*[ 
  _type == 'page'
]{
  title,
  _id,
  slug
}`

export const navPages = `*[ 
  slug.current != '/' && includeNav == true
] {
  title,
  _id,
  slug
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

export const SliderQuery = `
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

export const page = (slug: string[]) => `*[slug.current == '${slug.join(
  '/'
)}'] | order(_updatedAt asc)[0] {
  components[]{
    ...,
    ${HomePageHeroQuery}
    ${QuickLinksQuery}
    ${SliderQuery}
  },
  footer,
  theme,
  slug,
  title,
  _type,
  seo
}`
