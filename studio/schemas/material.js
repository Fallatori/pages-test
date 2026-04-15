export default {
  name: 'material',
  title: 'Material / Resource',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
    { name: 'version', title: 'Version (e.g. v0.1)', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
    },
    {
      name: 'type',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          { title: 'PDF', value: 'pdf' },
          { title: 'Report', value: 'report' },
          { title: 'Dataset', value: 'dataset' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      initialValue: 'pdf',
    },
    {
      name: 'file',
      title: 'File Upload',
      description: 'Upload the file directly to Sanity',
      type: 'file',
    },
    {
      name: 'externalUrl',
      title: 'External URL (alternative to file upload)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Date, Newest First', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'version' },
  },
}
