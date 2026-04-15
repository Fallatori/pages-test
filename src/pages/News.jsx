import news from '../data/news.json'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function News() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Updates
          </span>
          <h1 className="text-4xl font-bold">News</h1>
        </div>
      </section>

      {/* News list */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl space-y-6">
            {news.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-white bg-blue-700 px-3 py-1 rounded-full">
                    {formatDate(article.date)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{article.title}</h2>
                <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-700 font-semibold hover:underline text-sm"
                  >
                    Read more →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
