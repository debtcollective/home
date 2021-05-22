export default {
  name: 'homePageFeatures',
  type: 'document',
  title: 'Features section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: []
        }
      ],
      validation: (rule) => rule.required()
    },
    {
      name: 'badges',
      title: 'Bages',
      type: 'array',
      of: [
        {
          type: 'badge'
        }
      ],
      validation: (rule) => rule.required()
    }
  ]
};
