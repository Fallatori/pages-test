export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroTitle', title: 'Hero Title', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3 },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'stats',
      title: 'Stats Strip',
      description: 'The three numbers shown below the hero (e.g. 20 Partner Organisations)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    },
    {
      name: 'aboutTeaser',
      title: 'About Teaser Text',
      description: 'Short paragraph shown in the "What is TOGETHER?" section on the home page',
      type: 'text',
      rows: 4,
    },
    {
      name: 'components',
      title: 'Core Toolkit Components',
      description: 'The three innovation cards shown on the home page',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID (no spaces)', type: 'slug', options: { source: 'title' } },
            { name: 'icon', title: 'Icon (emoji)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title', subtitle: 'icon' } },
        },
      ],
    },
    {
      name: 'newsletterUrl',
      title: 'Mailchimp Newsletter URL',
      description: 'The full Mailchimp signup page or form action URL',
      type: 'url',
    },
  ],
}
