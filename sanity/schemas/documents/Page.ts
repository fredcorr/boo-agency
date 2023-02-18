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
      type: 'seo_details',
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
      name: 'content',
      type: 'content',
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
