import { Link } from 'react-router-dom'
import demos from '../data/demos.json'

function slugify(city) {
  return city.toLowerCase().replace(/\s+/g, '-')
}

const hubGradients = [
  'from-blue-900 to-slate-900',
  'from-indigo-900 to-slate-900',
  'from-blue-800 to-indigo-900',
]
const replicationGradients = [
  'from-teal-900 to-slate-900',
  'from-cyan-900 to-slate-900',
]

function PilotCard({ site, gradientClass }) {
  return (
    <Link
      to={`/demos/${slugify(site.city)}`}
      className={`group relative flex flex-col justify-end min-h-72 rounded-2xl overflow-hidden bg-gradient-to-br ${gradientClass} p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      {/* Background image if available */}
      {site.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
          style={{ backgroundImage: `url(${site.image})` }}
        />
      )}

      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px)' }}
      />

      {/* Content */}
      <div className="relative">
        {/* Top badges */}
        <div className="flex items-center gap-2 mb-auto">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">{site.label}</span>
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
            site.type === 'Innovation Hub'
              ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30'
              : 'bg-teal-500/30 text-teal-200 border border-teal-400/30'
          }`}>
            {site.type}
          </span>
        </div>

        {/* Flag + city */}
        <div className="mt-16">
          <span className="text-5xl block mb-3">{site.flag}</span>
          <h3 className="text-3xl font-bold text-white leading-tight">{site.city}</h3>
          <p className="text-white/60 text-sm mt-1 mb-4">{site.country}</p>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{site.context}</p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
          Explore
          <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Demos() {
  const hubs = demos.filter((d) => d.type === 'Innovation Hub')
  const replications = demos.filter((d) => d.type === 'Replication Study')

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Where We Work
          </span>
          <h1 className="text-4xl font-bold mb-4">Demonstrations & Pilots</h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            TOGETHER tests and validates its toolkit across five sites in five countries — three Innovation Hubs
            where the toolkit is co-developed with local stakeholders, and two Replication Studies where
            findings are applied and validated in new contexts.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
              <span className="text-sm text-gray-400">Innovation Hub — co-development sites</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
              <span className="text-sm text-gray-400">Replication Study — validation sites</span>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Hubs */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            Innovation Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hubs.map((site, i) => (
              <PilotCard key={site.id} site={site} gradientClass={hubGradients[i % hubGradients.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* Replication Studies */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            Replication Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {replications.map((site, i) => (
              <PilotCard key={site.id} site={site} gradientClass={replicationGradients[i % replicationGradients.length]} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
