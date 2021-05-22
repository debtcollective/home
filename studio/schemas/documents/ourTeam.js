export default {
  name: 'ourTeam',
  type: 'document',
  title: 'Our team',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'teamMembers',
      type: 'array',
      title: 'Team Members',
      of: [{ type: 'teamMember' }]
    }
  ]
};
