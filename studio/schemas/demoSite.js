export default {
  name: 'demoSite',
  title: 'Demo / Pilot Site',
  type: 'document',
  fields: [
    { name: 'city', title: 'City', type: 'string', validation: (R) => R.required() },
    { name: 'country', title: 'Country', type: 'string', validation: (R) => R.required() },
    { name: 'flag', title: 'Flag Emoji', type: 'string' },
    {
      name: 'type',
      title: 'Site Type',
      type: 'string',
      options: {
        list: [
          { title: 'Innovation Hub', value: 'Innovation Hub' },
          { title: 'Replication Study', value: 'Replication Study' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    },
    { name: 'label', title: 'Label (e.g. DRMIH-1)', type: 'string' },
    { name: 'lead', title: 'Lead Partner', type: 'string' },
    {
      name: 'image',
      title: 'Site Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'context',
      title: 'Context / Background',
      description: 'Paragraph describing the site and its risk context',
      type: 'text',
      rows: 4,
    },
    {
      name: 'challenges',
      title: 'Key Challenges',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'solutions',
      title: 'TOGETHER Solutions',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Order',
      description: 'Controls display order — hubs before replication sites',
      type: 'number',
    },
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'city', subtitle: 'type' },
    prepare({ title, subtitle }) {
      return { title, subtitle }
    },
  },
}
