export default {
  name: 'aboutUs',
  type: 'document',
  title: 'About us',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'content',
      type: 'aboutUsContent',
      title: 'Content'
    }
  ]
};
