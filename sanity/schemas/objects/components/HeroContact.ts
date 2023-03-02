export const HeroContact = {
  title: 'Hero contact',
  name: 'HeroContact',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Body test',
      name: 'bodyText',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Button label',
      name: 'buttonLabel',
      type: 'string',
    },
    {
      title: 'Linkedin',
      name: 'linkedin',
      type: 'url',
    },
  ],
}
