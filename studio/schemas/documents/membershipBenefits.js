export default {
  name: 'membershipBenefits',
  type: 'document',
  title: 'Membership benefits',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required()
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body',
      validation: (rule) => rule.required()
    },
    {
      name: 'badges',
      title: 'Bages',
      type: 'array',
      of: [
        {
          type: 'badge'
        }
      ],
      validation: (rule) => rule.required()
    }
  ]
};
