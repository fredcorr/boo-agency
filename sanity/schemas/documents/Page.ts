export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Seo',
      name: 'seo',
      type: 'seo',
    },
    {
      title: 'Include in nav',
      name: 'includeNav',
      type: 'boolean',
    },
    {
      title: 'Theme',
      name: 'theme',
      type: 'string',
      options: {
        list: [
          {title: 'Gradient', value: 'gradient'},
          {title: 'Dark', value: 'dark'},
          {title: 'Orange', value: 'orange'},
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Content',
      name: 'components',
      type: 'array',
      of: [
        {type: 'HomePageHero'},
        {type: 'HeroContact'},
        {type: 'QuickLinks'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title,
      }
    },
  },
}
