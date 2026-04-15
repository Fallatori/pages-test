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

function fileUrlFor(asset) {
  if (!asset?.asset?._ref) return null
  // Sanity file refs: file-<hash>-<ext>  →  https://cdn.sanity.io/files/<projectId>/<dataset>/<hash>.<ext>
  const ref = asset.asset._ref
  const [, hash, ext] = ref.split('-')
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${hash}.${ext}`
}

console.log(`Fetching content from Sanity (project: ${projectId}, dataset: ${dataset})...`)

const [
  settings,
  home,
  about,
  news,
  partners,
  demos,
  events,
  materials,
] = await Promise.all([
  client.fetch(`*[_type == "siteSettings"][0]`),
  client.fetch(`*[_type == "homePage"][0]`),
  client.fetch(`*[_type == "aboutPage"][0]`),
  client.fetch(`*[_type == "newsArticle"] | order(date desc)`),
  client.fetch(`*[_type == "partner"] | order(order asc, name asc)`),
  client.fetch(`*[_type == "demoSite"] | order(order asc)`),
  client.fetch(`*[_type == "event"] | order(date desc)`),
  client.fetch(`*[_type == "material"] | order(order asc, date desc)`),
])

mkdirSync('src/data', { recursive: true })

// --- settings.json ---
writeFileSync('src/data/settings.json', JSON.stringify({
  title: settings?.title || 'TOGETHER',
  tagline: settings?.tagline || '',
  email: settings?.email || '',
  phone: settings?.phone || '',
  address: settings?.address || '',
  social: settings?.social || {},
}, null, 2))

// --- home.json ---
writeFileSync('src/data/home.json', JSON.stringify({
  heroTitle: home?.heroTitle || '',
  heroSubtitle: home?.heroSubtitle || '',
  heroImageUrl: urlFor(home?.heroImage, 1600, 900),
  stats: (home?.stats || []).map(s => ({
    value: s.value || '',
    label: s.label || '',
  })),
  aboutTeaser: home?.aboutTeaser || '',
  components: (home?.components || []).map(c => ({
    id: c.id?.current || c._key,
    icon: c.icon || '',
    title: c.title || '',
    description: c.description || '',
  })),
  pilotTeasers: (demos || []).map(d => ({
    city: d.city || '',
    country: d.country || '',
    flag: d.flag || '',
    type: d.type || '',
  })),
  newsletterUrl: home?.newsletterUrl || '',
}, null, 2))

// --- about.json ---
writeFileSync('src/data/about.json', JSON.stringify({
  title: about?.title || 'About TOGETHER',
  subtitle: about?.subtitle || '',
  overview: about?.overview || '',
  components: (about?.components || []).map(c => ({
    id: c.id?.current || c._key,
    title: c.title || '',
    description: c.description || '',
  })),
  objectives: (about?.objectives || []).map(o => ({
    number: o.number,
    title: o.title || '',
    description: o.description || '',
  })),
  glossaryNote: about?.glossaryNote || '',
  funding: {
    program: about?.funding?.program || '',
    grantNumber: about?.funding?.grantNumber || '',
    startDate: about?.funding?.startDate || '',
    duration: about?.funding?.duration || '',
  },
}, null, 2))

// --- news.json ---
writeFileSync('src/data/news.json', JSON.stringify(
  (news || []).map(a => ({
    id: a._id,
    date: a.date || '',
    title: a.title || '',
    excerpt: a.excerpt || '',
    url: a.url || null,
  })),
  null, 2
))

// --- partners.json ---
writeFileSync('src/data/partners.json', JSON.stringify(
  (partners || []).map(p => ({
    id: p._id,
    name: p.name || '',
    country: p.country || '',
    flag: p.flag || '',
    description: p.description || '',
    logoUrl: urlFor(p.logo, 400, 200),
    website: p.website || null,
  })),
  null, 2
))

// --- demos.json ---
writeFileSync('src/data/demos.json', JSON.stringify(
  (demos || []).map(d => ({
    id: d._id,
    city: d.city || '',
    country: d.country || '',
    flag: d.flag || '',
    type: d.type || '',
    label: d.label || '',
    lead: d.lead || '',
    image: urlFor(d.image, 800, 500),
    context: d.context || '',
    challenges: d.challenges || [],
    solutions: d.solutions || [],
  })),
  null, 2
))

// --- events.json ---
writeFileSync('src/data/events.json', JSON.stringify(
  (events || []).map(e => ({
    id: e._id,
    title: e.title || '',
    date: e.date || '',
    endDate: e.endDate || null,
    location: e.location || '',
    description: e.description || '',
    isPast: e.isPast || false,
  })),
  null, 2
))

// --- materials.json ---
writeFileSync('src/data/materials.json', JSON.stringify(
  (materials || []).map(m => ({
    id: m._id,
    title: m.title || '',
    version: m.version || '',
    description: m.description || '',
    date: m.date || '',
    type: m.type || 'pdf',
    fileUrl: m.file ? fileUrlFor(m.file) : (m.externalUrl || null),
  })),
  null, 2
))

console.log('✓ settings.json')
console.log('✓ home.json')
console.log('✓ about.json')
console.log(`✓ news.json (${(news || []).length} articles)`)
console.log(`✓ partners.json (${(partners || []).length} partners)`)
console.log(`✓ demos.json (${(demos || []).length} sites)`)
console.log(`✓ events.json (${(events || []).length} events)`)
console.log(`✓ materials.json (${(materials || []).length} materials)`)
console.log('\nContent fetched and saved to src/data/')
