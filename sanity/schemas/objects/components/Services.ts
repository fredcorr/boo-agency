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
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [{type: 'servicesCard'}],
    },
  ],
}
