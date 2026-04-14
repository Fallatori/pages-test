import { PortableText } from '@portabletext/react'
import project from '../data/project.json'

export default function Project() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-white flex items-center"
        style={{
          backgroundImage: project.heroImageUrl ? `url(${project.heroImageUrl})` : undefined,
          backgroundColor: project.heroImageUrl ? undefined : '#1e293b',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      {project.content && project.content.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <PortableText value={project.content} />
          </div>
        </section>
      )}

      {/* Features grid */}
      {project.features && project.features.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature) => (
                <div
                  key={feature._key}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
