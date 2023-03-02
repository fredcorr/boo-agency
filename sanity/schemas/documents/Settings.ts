export default {
  title: 'Settings',
  name: 'settings',
  type: 'document',
  fields: [
    {
      title: 'Navgation',
      name: 'navigation',
      type: 'array',
      of: [
        {
          title: 'Nav item',
          name: 'navItem',
          type: 'object',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'reference',
              to: [{type: 'page'}],
            },
            {
              title: 'Link label',
              name: 'linkLabel',
              type: 'string',
            },
            {
              title: 'Anchor link',
              name: 'anchorLink',
              type: 'string',
            },
          ],
          preview: {
            select: {
              pageTitle: 'link.title',
              label: 'linkLabel'
            },
            prepare({pageTitle, label}: any) {
              console.log(pageTitle)
              return {
                title: label || pageTitle,
              }
            },
          },
        },
      ],
    },
    {
      title: 'Email',
      name: 'email',
      type: 'email',
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
