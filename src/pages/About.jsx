import about from '../data/about.json'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            About the Project
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            {about.title}
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed text-sm">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">Overview</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">The Challenge & Our Approach</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{about.overview}</p>
          </div>
        </div>
      </section>

      {/* Core components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">The Toolkit</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">Three Core Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.components.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-700"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">Our Goals</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">8 Project Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {about.objectives.map((obj) => (
              <div
                key={obj.number}
                className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center text-sm">
                  {obj.number}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{obj.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot sites overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">Where We Work</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">Pilot Sites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Innovation Hubs</span>
              </h3>
              <ul className="space-y-3">
                {[
                  { city: 'Oslo', country: 'Norway', flag: '🇳🇴' },
                  { city: 'Orihuela', country: 'Spain', flag: '🇪🇸' },
                  { city: 'Egaleo', country: 'Greece', flag: '🇬🇷' },
                ].map((site) => (
                  <li key={site.city} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                    <span className="text-2xl">{site.flag}</span>
                    <span className="font-medium text-gray-900">{site.city}</span>
                    <span className="text-sm text-gray-500">{site.country}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block px-2 py-0.5 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full">Replication Studies</span>
              </h3>
              <ul className="space-y-3">
                {[
                  { city: 'Lisbon', country: 'Portugal', flag: '🇵🇹' },
                  { city: 'Istanbul', country: 'Türkiye', flag: '🇹🇷' },
                ].map((site) => (
                  <li key={site.city} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                    <span className="text-2xl">{site.flag}</span>
                    <span className="font-medium text-gray-900">{site.city}</span>
                    <span className="text-sm text-gray-500">{site.country}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary + Funding */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Living Glossary</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{about.glossaryNote}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Funding</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🇪🇺</span>
                <div>
                  <p className="font-semibold text-gray-900">{about.funding.program}</p>
                  <p className="text-xs text-gray-500 font-mono">Grant No. {about.funding.grantNumber}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Started {about.funding.startDate} · {about.funding.duration} project
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
