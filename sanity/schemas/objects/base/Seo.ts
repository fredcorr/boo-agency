export const Seo = {
  type: 'object',
  title: 'Seo',
  name: 'seo',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Hide from search engines',
      name: 'hideFromSearchEngine',
      type: 'boolean',
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
    {
      title: 'Feature image',
      name: 'featureImage',
      type: 'image',
    },
  ],
}
