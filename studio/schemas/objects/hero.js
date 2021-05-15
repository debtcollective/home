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
      ]
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content'
    }
  ]
};
