export default {
  type: 'document',
  name: 'debtRelief',
  title: 'Debt Relief',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'H2', value: 'h2' }]
        }
      ],
      validation: (rule) => rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
      validation: (rule) => rule.required()
    },
    {
      name: 'videoId',
      title: 'Youtube Video ID',
      type: 'string',
      validation: (rule) => rule.required()
    }
  ]
};
