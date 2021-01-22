export default {
  name: 'popup',
  type: 'document',
  title: 'Popup',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      of: [{ type: 'block' }],
      title: 'Text',
      type: 'array'
    },
    {
      name: 'popupImage',
      type: 'popupImage',
      title: 'Popup Image'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};
