import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index.js'

export default defineConfig({
  name: 'default',
  title: 'Company Showcase CMS',

  // Replace with your Sanity project ID (found at sanity.io/manage)
  projectId: 'lu4u6ddc',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
