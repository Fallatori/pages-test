import { useState } from 'react'
import demos from '../data/demos.json'

const hubs = demos.filter((d) => d.type === 'Innovation Hub')
const replications = demos.filter((d) => d.type === 'Replication Study')

function SiteCard({ site, expanded, onToggle }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{site.flag}</span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{site.label}</span>
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                  site.type === 'Innovation Hub'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-teal-100 text-teal-800'
                }`}>
                  {site.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{site.city}</h3>
              <p className="text-sm text-gray-500">{site.country}</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-1 font-medium">Lead partner</p>
        <p className="text-sm text-gray-900 font-semibold mb-4">{site.lead}</p>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">{site.context}</p>

        <button
          onClick={onToggle}
          className="text-sm text-blue-700 font-semibold hover:underline"
        >
          {expanded ? 'Show less ↑' : 'Know more →'}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Challenges</h4>
              <ul className="space-y-2">
                {site.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">▪</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">TOGETHER Solutions</h4>
              <ul className="space-y-2">
                {site.solutions.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 flex-shrink-0 mt-0.5">▪</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Demos() {
  const [expandedId, setExpandedId] = useState(null)

  const toggle = (id) => setExpandedId(expandedId === id ? null : id)

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
        </div>
      </section>

      {/* Legend */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Innovation Hub</span>
            <span className="text-sm text-gray-600">Co-development sites for the TOGETHER toolkit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full">Replication Study</span>
            <span className="text-sm text-gray-600">Validation and replication in new contexts</span>
          </div>
        </div>
      </section>

      {/* Innovation Hubs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Innovation Hubs</h2>
          <div className="space-y-4">
            {hubs.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                expanded={expandedId === site.id}
                onToggle={() => toggle(site.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Replication Studies */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Replication Studies</h2>
          <div className="space-y-4">
            {replications.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                expanded={expandedId === site.id}
                onToggle={() => toggle(site.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
