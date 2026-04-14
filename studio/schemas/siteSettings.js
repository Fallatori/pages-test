export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'email', title: 'Contact Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'address', title: 'Address', type: 'text', rows: 3 },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter / X URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
      ],
    },
  ],
}
