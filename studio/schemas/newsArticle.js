export default {
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
    { name: 'date', title: 'Publication Date', type: 'date', validation: (R) => R.required() },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short summary shown in news cards',
      type: 'text',
      rows: 3,
      validation: (R) => R.required(),
    },
    {
      name: 'url',
      title: 'External Link (optional)',
      description: 'If the full article lives elsewhere, link to it here',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      description: 'Lower numbers appear first',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
}
