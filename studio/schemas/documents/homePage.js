export default {
  name: 'home',
  type: 'document',
  title: 'Home page',
  fields: [
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero'
    },
    {
      name: 'secondSection',
      type: 'homePageSecondSection',
      title: 'Second Section'
    }
  ],
  preview: {
    select: {
      title: 'hero.title'
    }
  }
};
