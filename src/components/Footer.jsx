import { NavLink } from 'react-router-dom'
import settings from '../data/settings.json'

const footerLinks = [
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Partners', to: '/partners' },
  { label: 'Demos & Pilots', to: '/demos' },
  { label: 'Events', to: '/events' },
  { label: 'Materials', to: '/materials' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-xl mb-2">TOGETHER</p>
            <p className="text-sm leading-relaxed text-gray-400">{settings.tagline}</p>
            {settings.email && (
              <a
                href={`mailto:${settings.email}`}
                className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {settings.email}
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Connect</p>
            {settings.social?.linkedin && (
              <a
                href={settings.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-3"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            )}
            <p className="text-xs text-gray-500 leading-relaxed mt-4">
              🇪🇺 Funded by the European Union<br />
              Horizon Europe — Grant No. 101226137
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} TOGETHER Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
