export default {
  type: 'object',
  name: 'aboutUsContent',
  title: 'About Us Content',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'aboutUsItem' }]
    }
  ]
};
