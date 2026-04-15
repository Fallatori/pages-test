#!/usr/bin/env node
/**
 * Seeds Sanity with content from src/data/*.json
 * Run once after setting up the Sanity project:
 *   npm run seed
 *
 * Requires: SANITY_PROJECT_ID and SANITY_TOKEN env vars
 * The token needs write access (Editor or above).
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const token = process.env.SANITY_TOKEN

if (!projectId || !token) {
  console.error('Error: SANITY_PROJECT_ID and SANITY_TOKEN are required.')
  console.error('Make sure your .env file is set up correctly.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

function readJson(path) {
  return JSON.parse(readFileSync(new URL(`../src/data/${path}`, import.meta.url), 'utf8'))
}

function toDoc(type, id, fields) {
  return { _type: type, _id: id, ...fields }
}

async function seed() {
  const settings = readJson('settings.json')
  const home = readJson('home.json')
  const about = readJson('about.json')
  const news = readJson('news.json')
  const partners = readJson('partners.json')
  const demos = readJson('demos.json')
  const events = readJson('events.json')
  const materials = readJson('materials.json')

  const docs = []

  // --- siteSettings (singleton) ---
  docs.push(toDoc('siteSettings', 'siteSettings', {
    title: settings.title,
    tagline: settings.tagline,
    email: settings.email,
    phone: settings.phone || '',
    address: settings.address || '',
    social: settings.social || {},
  }))

  // --- homePage (singleton) ---
  docs.push(toDoc('homePage', 'homePage', {
    heroTitle: home.heroTitle,
    heroSubtitle: home.heroSubtitle,
    stats: (home.stats || []).map((s, i) => ({ _key: `stat-${i}`, value: s.value, label: s.label })),
    aboutTeaser: home.aboutTeaser,
    components: (home.components || []).map((c, i) => ({
      _key: `component-${i}`,
      id: { _type: 'slug', current: c.id },
      icon: c.icon,
      title: c.title,
      description: c.description,
    })),
    newsletterUrl: home.newsletterUrl || '',
  }))

  // --- aboutPage (singleton) ---
  docs.push(toDoc('aboutPage', 'aboutPage', {
    title: about.title,
    subtitle: about.subtitle,
    overview: about.overview,
    components: (about.components || []).map((c, i) => ({
      _key: `about-component-${i}`,
      id: { _type: 'slug', current: c.id },
      title: c.title,
      description: c.description,
    })),
    objectives: (about.objectives || []).map((o, i) => ({
      _key: `objective-${i}`,
      number: o.number,
      title: o.title,
      description: o.description,
    })),
    glossaryNote: about.glossaryNote,
    funding: about.funding,
  }))

  // --- newsArticle documents ---
  for (const article of news) {
    docs.push(toDoc('newsArticle', `newsArticle-${article.id}`, {
      title: article.title,
      date: article.date,
      excerpt: article.excerpt,
      ...(article.url ? { url: article.url } : {}),
    }))
  }

  // --- partner documents ---
  for (let i = 0; i < partners.length; i++) {
    const p = partners[i]
    docs.push(toDoc('partner', `partner-${p.id}`, {
      name: p.name,
      country: p.country,
      flag: p.flag,
      description: p.description,
      order: i + 1,
    }))
  }

  // --- demoSite documents ---
  for (let i = 0; i < demos.length; i++) {
    const d = demos[i]
    docs.push(toDoc('demoSite', `demoSite-${d.id}`, {
      city: d.city,
      country: d.country,
      flag: d.flag,
      type: d.type,
      label: d.label,
      lead: d.lead,
      context: d.context,
      challenges: d.challenges,
      solutions: d.solutions,
      order: i + 1,
    }))
  }

  // --- event documents ---
  for (const e of events) {
    docs.push(toDoc('event', `event-${e.id}`, {
      title: e.title,
      date: e.date,
      ...(e.endDate ? { endDate: e.endDate } : {}),
      location: e.location,
      description: e.description,
      isPast: e.isPast,
    }))
  }

  // --- material documents ---
  for (let i = 0; i < materials.length; i++) {
    const m = materials[i]
    docs.push(toDoc('material', `material-${m.id}`, {
      title: m.title,
      version: m.version || '',
      description: m.description,
      date: m.date,
      type: m.type,
      ...(m.fileUrl ? { externalUrl: m.fileUrl } : {}),
      order: i + 1,
    }))
  }

  console.log(`Seeding ${docs.length} documents into ${projectId}/${dataset}...\n`)

  // Batch in groups of 50 (Sanity transaction limit)
  const BATCH = 50
  for (let i = 0; i < docs.length; i += BATCH) {
    const batch = docs.slice(i, i + BATCH)
    const tx = client.transaction()
    for (const doc of batch) {
      tx.createOrReplace(doc)
    }
    await tx.commit()
    console.log(`  ✓ ${Math.min(i + BATCH, docs.length)}/${docs.length} documents written`)
  }

  console.log('\nDone! Open Sanity Studio to review and publish the drafts.')
  console.log('Then run `npm run fetch && npm run build` to pull the live content.')
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
