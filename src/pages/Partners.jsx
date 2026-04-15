import partners from '../data/partners.json'

const gradients = [
  'from-blue-900 to-slate-900',
  'from-indigo-900 to-slate-900',
  'from-slate-800 to-blue-950',
  'from-blue-800 to-indigo-950',
  'from-indigo-800 to-slate-900',
  'from-slate-900 to-blue-900',
  'from-blue-950 to-indigo-900',
]

function PartnerCard({ partner, gradientIndex }) {
  const gradient = gradients[gradientIndex % gradients.length]

  const card = (
    <div className={`group relative flex flex-col justify-end min-h-56 rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl h-full`}>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px)' }}
      />

      <div className="relative">
        <span className="text-3xl block mb-3">{partner.flag}</span>
        <h3 className="font-bold text-white leading-snug mb-1">{partner.name}</h3>
        <p className="text-white/50 text-xs mb-3">{partner.country}</p>
        <p className="text-white/60 text-xs leading-relaxed line-clamp-2">{partner.description}</p>

        {partner.website && (
          <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
            Visit website
            <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  if (partner.website) {
    return (
      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    )
  }
  return <div className="h-full">{card}</div>
}

export default function Partners() {
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

      {/* Partners grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <PartnerCard key={partner.id} partner={partner} gradientIndex={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
