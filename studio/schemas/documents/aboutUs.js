export default {
  name: 'about-us',
  type: 'document',
  title: 'About us',
  fieldsets: [
    {
      title: 'CTA',
      name: 'cta'
    }
  ],
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
