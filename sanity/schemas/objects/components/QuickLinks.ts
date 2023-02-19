export const QuickLinks = {
  title: 'Quick Links',
  name: 'QuickLinks',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
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
