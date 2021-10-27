export default {
  name: 'image',
  type: 'image',
  title: 'Avatar Image',
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
    }
  ]
};
