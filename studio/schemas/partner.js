export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    { name: 'name', title: 'Organisation Name', type: 'string', validation: (R) => R.required() },
    { name: 'country', title: 'Country', type: 'string', validation: (R) => R.required() },
    { name: 'flag', title: 'Flag Emoji', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
    },
    {
      name: 'order',
      title: 'Order',
      description: 'Controls display order on the Partners page',
      type: 'number',
    },
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name A–Z', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'country' },
  },
}
