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

export const page = (slug: string[]) => `*[slug.current == '${slug.join('/')}'] | order(_updatedAt asc)[0] {
  components[]{
    ...
  },
  theme,
  slug,
  title,
  _type,
  seo
}`