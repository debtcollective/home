export default {
  name: 'home-page-hero',
  type: 'document',
  title: 'Home page hero',
  fields: [
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero'
    }
  ],
  preview: {
    select: {
      title: 'hero.title'
    }
  }
};
