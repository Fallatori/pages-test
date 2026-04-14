#!/usr/bin/env node
/**
 * Fetches all content from Sanity and writes it to src/data/*.json
 * Run this before building: npm run fetch
 * Requires: SANITY_PROJECT_ID env var (and optionally SANITY_DATASET, SANITY_TOKEN)
 */

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { writeFileSync, mkdirSync } from 'fs'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const token = process.env.SANITY_TOKEN

if (!projectId) {
  console.error('Error: SANITY_PROJECT_ID environment variable is required.')
  console.error('Copy .env.example to .env and fill in your Sanity project ID.')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false })
const builder = imageUrlBuilder(client)

function urlFor(source, width, height) {
  if (!source?.asset) return null
  let img = builder.image(source).width(width).auto('format')
  if (height) img = img.height(height)
  return img.url()
}

console.log(`Fetching content from Sanity (project: ${projectId}, dataset: ${dataset})...`)

const [settings, home, project, gallery, team] = await Promise.all([
  client.fetch(`*[_type == "siteSettings"][0]`),
  client.fetch(`*[_type == "homePage"][0]`),
  client.fetch(`*[_type == "projectPage"][0]`),
  client.fetch(`*[_type == "galleryImage"] | order(order asc)`),
  client.fetch(`*[_type == "teamMember"] | order(order asc)`),
])

mkdirSync('src/data', { recursive: true })

writeFileSync('src/data/settings.json', JSON.stringify({
  title: settings?.title || 'Company Name',
  tagline: settings?.tagline || '',
  email: settings?.email || '',
  phone: settings?.phone || '',
  address: settings?.address || '',
  social: settings?.social || {},
}, null, 2))

writeFileSync('src/data/home.json', JSON.stringify({
  heroTitle: home?.heroTitle || '',
  heroSubtitle: home?.heroSubtitle || '',
  heroImageUrl: urlFor(home?.heroImage, 1600, 900),
  content: home?.content || [],
}, null, 2))

writeFileSync('src/data/project.json', JSON.stringify({
  title: project?.title || '',
  heroImageUrl: urlFor(project?.heroImage, 1600, 700),
  content: project?.content || [],
  features: (project?.features || []).map(f => ({
    _key: f._key,
    title: f.title || '',
    description: f.description || '',
  })),
}, null, 2))

writeFileSync('src/data/gallery.json', JSON.stringify(
  (gallery || []).map(img => ({
    _id: img._id,
    thumbUrl: urlFor(img.image, 600, 450),
    imageUrl: urlFor(img.image, 1600),
    caption: img.caption || '',
    alt: img.alt || img.caption || '',
  })),
  null, 2
))

writeFileSync('src/data/team.json', JSON.stringify(
  (team || []).map(m => ({
    _id: m._id,
    name: m.name || '',
    role: m.role || '',
    bio: m.bio || '',
    photoUrl: urlFor(m.photo, 400, 400),
  })),
  null, 2
))

console.log('Content fetched and saved to src/data/')
