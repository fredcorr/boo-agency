export const Seo = {
  type: 'object',
  title: 'Seo',
  name: 'seo_details',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Key words',
      name: 'keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
}
