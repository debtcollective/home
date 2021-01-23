export default {
  name: 'popup',
  type: 'document',
  title: 'Popup',
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
    },
    {
      fieldset: 'cta',
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string'
    },
    {
      fieldset: 'cta',
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};
