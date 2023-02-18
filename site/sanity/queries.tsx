export const allPages = `*[ 
  _type == 'page'
]{
  _id,
  slug
}`

export const page = (slug: string[]) => `*[slug.current == '${slug.join('/')}'] | order(_updatedAt asc)[0] {
  _type == 'page' => {
    ${Page}
  },
  _type
}`

export const Page = `
  seo_details
`