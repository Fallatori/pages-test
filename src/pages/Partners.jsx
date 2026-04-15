import partners from '../data/partners.json'

const accents = [
  'from-blue-900 to-slate-900',
  'from-indigo-900 to-slate-900',
  'from-slate-800 to-blue-950',
  'from-blue-800 to-indigo-950',
  'from-indigo-800 to-slate-900',
  'from-slate-900 to-blue-900',
  'from-blue-950 to-indigo-900',
]

function PartnerCard({ partner, gradientIndex }) {
  const gradient = accents[gradientIndex % accents.length]

  const card = (
    <div className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Logo zone — white, generous padding, any aspect ratio fits */}
      <div className="bg-white h-36 shrink-0 p-6">
        {partner.logoUrl ? (
          <img
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            className="block w-full h-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl">{partner.flag}</span>
          </div>
        )}
      </div>

      {/* Text zone — dark gradient */}
      <div className={`relative flex flex-col flex-1 bg-gradient-to-br ${gradient} p-5`}>
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.3) 39px, rgba(255,255,255,.3) 40px)' }}
        />
        <div className="relative flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{partner.flag}</span>
            <span className="text-white/50 text-xs">{partner.country}</span>
          </div>
          <h3 className="font-bold text-white leading-snug mb-2">{partner.name}</h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-3 flex-1">{partner.description}</p>

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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((partner, i) => (
              <PartnerCard key={partner.id} partner={partner} gradientIndex={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
