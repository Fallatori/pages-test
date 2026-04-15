import siteSettings from './siteSettings.js'
import homePage from './homePage.js'
import newsArticle from './newsArticle.js'
import partner from './partner.js'
import demoSite from './demoSite.js'
import event from './event.js'
import material from './material.js'

// Legacy schemas kept for backwards compatibility
import projectPage from './projectPage.js'
import galleryImage from './galleryImage.js'
import teamMember from './teamMember.js'

export const schemaTypes = [
  // Singleton settings
  siteSettings,
  homePage,
  // TOGETHER content types
  newsArticle,
  partner,
  demoSite,
  event,
  material,
  // Legacy
  projectPage,
  galleryImage,
  teamMember,
]
