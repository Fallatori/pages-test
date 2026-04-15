import { useState } from 'react'
import partners from '../data/partners.json'

const allCountries = ['All', ...Array.from(new Set(partners.map((p) => p.country))).sort()]

export default function Partners() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? partners : partners.filter((p) => p.country === filter)

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Consortium
          </span>
          <h1 className="text-4xl font-bold">Our Partners</h1>
          <p className="text-gray-400 mt-2">{partners.length} organisations across 9 countries</p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-50 border-b border-gray-200 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {allCountries.map((country) => (
              <button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === country
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-gray-500 mb-6">
            Showing {filtered.length} partner{filtered.length !== 1 ? 's' : ''}
            {filter !== 'All' ? ` from ${filter}` : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-xl">
                  {partner.flag}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 leading-snug">{partner.name}</h3>
                <span className="inline-block text-xs text-gray-500 mb-3">{partner.country}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
