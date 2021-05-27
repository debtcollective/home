export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'H1', value: 'h1' }]
        }
      ],
      validation: (rule) => rule.required()
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body'
    }
  ]
};
