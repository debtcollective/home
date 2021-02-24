export default {
  type: 'object',
  name: 'teamMember',
  title: 'Team Member',
  fields: [
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar'
    }
  }
};
