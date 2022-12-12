export default {
  name: 'teamMembers',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'twitterLink',
      title: 'Twitter Link',
      type: 'string',
    },
    {
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'string',
    },
    {
      name: 'linkedinLink',
      title: 'Linkedin Link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
