export default {
  name: 'donationPageFeatures',
  type: 'document',
  title: 'How we will use the money?',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
