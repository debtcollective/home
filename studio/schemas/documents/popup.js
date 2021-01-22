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
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution'
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};
