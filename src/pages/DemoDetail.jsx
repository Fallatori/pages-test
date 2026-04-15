import { useParams, Link, Navigate } from 'react-router-dom'
import demos from '../data/demos.json'

function slugify(city) {
  return city.toLowerCase().replace(/\s+/g, '-')
}

export default function DemoDetail() {
  const { slug } = useParams()
  const site = demos.find((d) => slugify(d.city) === slug)

  if (!site) return <Navigate to="/demos" replace />

  const isHub = site.type === 'Innovation Hub'

  return (
    <div>
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${isHub ? 'from-blue-900 to-slate-900' : 'from-teal-900 to-slate-900'} text-white overflow-hidden`}>
        {site.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${site.image})` }}
          />
        )}
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          {/* Back link */}
          <Link
            to="/demos"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Demos & Pilots
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">{site.label}</span>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              isHub
                ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30'
                : 'bg-teal-500/30 text-teal-200 border border-teal-400/30'
            }`}>
              {site.type}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-7xl">{site.flag}</span>
            <div>
              <h1 className="text-5xl font-bold leading-tight">{site.city}</h1>
              <p className="text-white/60 text-lg mt-1">{site.country}</p>
            </div>
          </div>

          {site.lead && (
            <p className="mt-6 text-white/50 text-sm">
              Lead partner: <span className="text-white/80 font-medium">{site.lead}</span>
            </p>
          )}
        </div>
      </section>

      {/* Context */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">Background</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Site Context</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{site.context}</p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <h3 className="text-lg font-bold text-gray-900">Key Challenges</h3>
              </div>
              <ul className="space-y-3">
                {site.challenges.map((c, i) => (
                  <li key={i} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="text-lg font-bold text-gray-900">TOGETHER Solutions</h3>
              </div>
              <ul className="space-y-3">
                {site.solutions.map((s, i) => (
                  <li key={i} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other pilots */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">Other Pilot Sites</h3>
          <div className="flex flex-wrap gap-3">
            {demos
              .filter((d) => slugify(d.city) !== slug)
              .map((d) => (
                <Link
                  key={d.id}
                  to={`/demos/${slugify(d.city)}`}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-800 transition-colors"
                >
                  <span>{d.flag}</span>
                  {d.city}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
