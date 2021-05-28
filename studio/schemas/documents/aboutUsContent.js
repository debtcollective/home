export default {
  type: 'document',
  name: 'aboutUsContent',
  title: 'Content',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'aboutUsItem' }]
    }
  ]
};
