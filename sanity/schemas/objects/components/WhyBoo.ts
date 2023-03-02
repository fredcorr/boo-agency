export const WhyBoo = {
  title: 'Why Boo',
  name: 'WhyBoo',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Anchor name',
      name: 'anchorName',
      type: 'slug',
      options: {
        source: (doc: any, context: any) => context.parent.title,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Stats',
      name: 'slideStats',
      type: 'array',
      of: [{
        title: 'Stats',
        name: 'stats',
        type: 'object',
        fields: [
          {
            title: 'Label',
            name: 'statLabel',
            type: 'string',
          },
          {
            title: 'Value',
            name: 'statValue',
            type: 'string',
          },
        ]
      }],
    },
  ],
}