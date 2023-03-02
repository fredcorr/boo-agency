export const HomePageHero = {
  title: 'Home Page Hero',
  name: 'HomePageHero',
  type: 'object',
  fields: [
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
