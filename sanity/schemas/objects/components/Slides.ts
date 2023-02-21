export const Slides = {
  title: 'Slides',
  name: 'slides',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'slideLabel',
      type: 'string',
    },
    {
      title: 'Is default open?',
      name: 'isDefaultOpen',
      type: 'boolean',
    },
    {
      title: 'Title',
      name: 'slideTitle',
      type: 'string',
    },
    {
      title: 'Poisition next button',
      name: 'positionNextButton',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Body',
      name: 'slideBody',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Logos',
      name: 'slideLogos',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      title: 'Stats',
      name: 'slideStats',
      type: 'array',
      of: [{
        title: 'Stat',
        name: 'singleState',
        type: 'object',
        fields: [
          {
            title: 'Label',
            name: 'statLabel',
            type: 'string',
          },
          {
            title: 'Value',
            name: 'statValue',
            type: 'string',
          },
        ]
      }],
    },
  ],
}