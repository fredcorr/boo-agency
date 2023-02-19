export const HomePageHero = {
  title: 'Home Page Hero',
  name: 'HomePageHero',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Subheadline',
      name: 'subHeadline',
      type: 'string',
    },
    {
      title: 'Number',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Video',
      name: 'video',
      type: 'file',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
