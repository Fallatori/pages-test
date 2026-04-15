export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
    {
      name: 'overview',
      title: 'Project Overview',
      description: 'Main description paragraph — the challenge and the approach',
      type: 'text',
      rows: 6,
    },
    {
      name: 'components',
      title: 'Toolkit Components',
      description: 'The three core innovations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID (no spaces)', type: 'slug', options: { source: 'title' } },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    },
    {
      name: 'objectives',
      title: 'Project Objectives',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'number' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
    },
    {
      name: 'glossaryNote',
      title: 'Glossary Note',
      type: 'text',
      rows: 2,
    },
    {
      name: 'funding',
      title: 'Funding Information',
      type: 'object',
      fields: [
        { name: 'program', title: 'Programme', type: 'string' },
        { name: 'grantNumber', title: 'Grant Number', type: 'string' },
        { name: 'startDate', title: 'Start Year', type: 'string' },
        { name: 'duration', title: 'Duration', type: 'string' },
      ],
    },
  ],
}
