export default {
  name: 'teamMembers',
  type: 'document',
  title: 'Our team',
  fields: [
    {
      name: 'teamMembers',
      type: 'array',
      title: 'Team Members',
      of: [{ type: 'teamMember' }]
    }
  ]
};
