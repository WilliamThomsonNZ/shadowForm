export default {
  name: 'portfolioProjects',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'servicesProvided',
      title: 'Services Provided',
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
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'string',
    },
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Twitter', value: 'twitter' },
          { title: 'Website', value: 'website' }
        ]
      }
    }
  ],
};
