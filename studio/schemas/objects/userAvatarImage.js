export default {
  name: 'userAvatarImage',
  type: 'image',
  title: 'Avatar Image',
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
    }
  ]
};
