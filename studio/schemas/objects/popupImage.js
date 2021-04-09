export default {
  name: 'popupImage',
  type: 'image',
  title: 'Popup Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution'
    }
  ]
};
