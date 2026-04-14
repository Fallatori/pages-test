export default {
  name: 'projectPage',
  title: 'Project Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Project Description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    },
  ],
}
