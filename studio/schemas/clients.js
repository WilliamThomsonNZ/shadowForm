export default {
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'clientLink',
      title: 'Client Link',
      type: 'string',
    },
    {
      name: 'clientImage',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ] 
}
