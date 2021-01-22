export default {
  name: 'popupImage',
  type: 'image',
  title: 'Popup Image',
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
};
