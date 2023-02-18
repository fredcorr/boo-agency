export const allPages = `*[ 
  _type == 'page'
]{
  _id,
  slug
}`

export const page = (slug: string[]) => `*[slug.current == '${slug.join('/')}'] | order(_updatedAt asc)[0] {
  seo_details,
  theme,
  slug,
  title,
  _type
}`