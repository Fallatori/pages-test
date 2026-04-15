import materials from '../data/materials.json'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Materials() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Resources
          </span>
          <h1 className="text-4xl font-bold">Materials</h1>
          <p className="text-gray-400 mt-2">Publications, deliverables, and project resources.</p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloads</h2>
          <div className="max-w-2xl space-y-4">
            {materials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs text-gray-400 font-mono">{item.version}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{formatDate(item.date)}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  {item.fileUrl ? (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">More materials coming soon</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The TOGETHER project will publish deliverables, research papers, and policy briefs throughout
              the project lifetime. Subscribe to our newsletter to be notified when new resources are available.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
