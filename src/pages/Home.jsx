import { Link } from 'react-router-dom'
import home from '../data/home.json'
import news from '../data/news.json'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Home() {
  const latestNews = news.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${home.heroImageUrl})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              🇪🇺 Horizon Europe Research Project
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {home.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
              <Link
                to="/demos"
                className="border border-gray-500 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Pilot Sites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-blue-700">
            {home.stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">About the Project</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">What is TOGETHER?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{home.aboutTeaser}</p>
              <Link to="/about" className="text-blue-700 font-semibold hover:underline">
                Know more →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Funded by</p>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🇪🇺</span>
                <div>
                  <p className="font-bold text-gray-900">European Union</p>
                  <p className="text-sm text-gray-500">Horizon Europe Programme</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 font-mono">Grant Agreement No. 101226137</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">The Toolkit</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Three Core Innovations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.components.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border-l-4 border-l-blue-700"
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot sites teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">Where We Work</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Demonstrations & Pilots</h2>
            </div>
            <Link to="/demos" className="text-blue-700 font-semibold hover:underline hidden md:block">
              Know more →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {home.pilotTeasers.map((site) => (
              <Link
                key={site.city}
                to="/demos"
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl p-5 text-center transition-all"
              >
                <span className="text-4xl block mb-2">{site.flag}</span>
                <p className="font-bold text-gray-900 group-hover:text-blue-800">{site.city}</p>
                <p className="text-xs text-gray-500 mt-1">{site.country}</p>
                <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  site.type === 'Innovation Hub'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-teal-100 text-teal-800'
                }`}>
                  {site.type}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 md:hidden text-center">
            <Link to="/demos" className="text-blue-700 font-semibold hover:underline">
              Know more →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">Latest</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">News</h2>
            </div>
            <Link to="/news" className="text-blue-700 font-semibold hover:underline hidden md:block">
              All news →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <span className="text-xs text-gray-400 font-medium">{formatDate(article.date)}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-3 leading-snug">{article.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:hidden text-center">
            <Link to="/news" className="text-blue-700 font-semibold hover:underline">
              All news →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Stay Informed</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to the TOGETHER newsletter for project updates, events, and publications.
          </p>
          <a
            href={home.newsletterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </div>
  )
}
