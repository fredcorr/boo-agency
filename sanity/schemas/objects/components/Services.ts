export const Services = {
  title: 'Services',
  name: 'Services',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
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
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [{type: 'servicesCard'}],
    },
  ],
}
