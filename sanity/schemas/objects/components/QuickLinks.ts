export const QuickLinks = {
  title: 'Quick Links',
  name: 'QuickLinks',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Anchor name',
      name: 'anchorName',
      type: 'slug',
      options: {
        source: (doc: any, context: any) => context.parent.headline,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'page'},
        ]
      }],
    },
  ],
}
