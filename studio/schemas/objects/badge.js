export default {
  type: 'object',
  name: 'badge',
  title: 'Badge',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      validation: (rule) => rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required()
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body',
      validation: (rule) => rule.required()
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color (blue, gray, green, pink, primary, purple, white, yellow)',
      validation: (rule) => rule.required()
    },
    {
      name: 'href',
      type: 'string',
      title: 'Hypertext Reference (the link that will be opened on click)'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (rule) => rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    }
  }
};
