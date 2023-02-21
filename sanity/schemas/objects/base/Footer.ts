export const Footer = {
  title: 'Footer',
  name: 'footer',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Include Footer',
      name: 'includeFooter',
      type: 'boolean',
    },
    {
      title: 'Footer theme',
      name: 'footerTheme',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Footer copy',
      name: 'footerCopy',
      type: 'string',
    },
  ],
}
