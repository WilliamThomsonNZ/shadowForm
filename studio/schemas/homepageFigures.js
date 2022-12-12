export default {
  name: 'homepageFigures',
  title: 'Homepage Figures',
  type: 'document',
  fields: [
    {
      name: 'servicesRendered',
      title: 'Services Rendered',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'worldwideClients',
      title: 'Worldwide Clients',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'growthRate',
      title: 'Growth Rate',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
