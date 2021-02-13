export default {
  name: 'aboutUsItem',
  type: 'object',
  title: 'About Us Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required()
    }
  ]
};
