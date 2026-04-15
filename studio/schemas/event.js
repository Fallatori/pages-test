export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Event Title', type: 'string', validation: (R) => R.required() },
    { name: 'date', title: 'Start Date', type: 'date', validation: (R) => R.required() },
    { name: 'endDate', title: 'End Date (optional)', type: 'date' },
    { name: 'location', title: 'Location', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'isPast',
      title: 'Mark as Past Event',
      description: 'Toggle on once the event has passed',
      type: 'boolean',
      initialValue: false,
    },
  ],
  orderings: [
    { title: 'Date, Newest First', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
    { title: 'Date, Soonest First', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
}
