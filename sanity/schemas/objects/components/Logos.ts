export const Logos = {
  title: 'Logos',
  name: 'Logos',
  type: 'object',
  fields: [
    {
      title: 'Logo body',
      name: 'logosCopy',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Add keyline',
      name: 'addKeyline',
      type: 'boolean',
    },
    {
      title: 'Anchor name',
      name: 'anchorName',
      type: 'slug',
      options: {
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Client logos',
      name: 'clientLogos',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
