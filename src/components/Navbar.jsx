import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import settings from '../data/settings.json'

const links = [
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Partners', to: '/partners' },
  { label: 'Demos & Pilots', to: '/demos' },
  { label: 'Events', to: '/events' },
  { label: 'Materials', to: '/materials' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-white bg-blue-700'
        : 'text-gray-300 hover:text-white hover:bg-gray-700'
    }`

  return (
    <nav className="bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
            <span className="text-blue-400">TOGETHER</span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-3 space-y-1">
            <NavLink
              to="/"
              className={linkClass}
              end
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
