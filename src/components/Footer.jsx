import settings from '../data/settings.json'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-semibold text-white mb-1">{settings.title}</p>
        {settings.tagline && <p className="text-sm mb-3">{settings.tagline}</p>}
        {settings.email && (
          <a
            href={`mailto:${settings.email}`}
            className="text-sm hover:text-white transition-colors"
          >
            {settings.email}
          </a>
        )}
        <p className="text-xs mt-6">
          &copy; {new Date().getFullYear()} {settings.title}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
