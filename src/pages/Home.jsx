import { NavLink } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import home from '../data/home.json'
import settings from '../data/settings.json'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-[88vh] text-white"
        style={{
          backgroundImage: home.heroImageUrl ? `url(${home.heroImageUrl})` : undefined,
          backgroundColor: home.heroImageUrl ? undefined : '#1e293b',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 leading-tight">
            {home.heroTitle || settings.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-gray-200">
            {home.heroSubtitle || settings.tagline}
          </p>
          <NavLink
            to="/project"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </NavLink>
        </div>
      </section>

      {/* Intro */}
      {home.content && home.content.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 py-20">
          <div className="prose prose-lg max-w-none">
            <PortableText value={home.content} />
          </div>
        </section>
      )}
    </>
  )
}
