export default {
  type: 'object',
  name: 'aboutUsContent',
  title: 'About Us Content',
  fields: [
    {
      name: 'item',
      type: 'array',
      title: 'Items',
      of: [{ type: 'aboutUsItem' }]
    }
  ]
};
