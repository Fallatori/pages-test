import settings from '../data/settings.json'

export default function Contact() {
  const hasSocial = settings.social && Object.values(settings.social).some(Boolean)

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Contact</h1>
      <p className="text-gray-500 mb-12">Get in touch with us.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Contact info */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-gray-900">Contact Information</h2>
          <dl className="space-y-4 text-gray-600">
            {settings.email && (
              <div>
                <dt className="text-sm font-medium text-gray-900 mb-0.5">Email</dt>
                <dd>
                  <a href={`mailto:${settings.email}`} className="text-blue-600 hover:underline">
                    {settings.email}
                  </a>
                </dd>
              </div>
            )}
            {settings.phone && (
              <div>
                <dt className="text-sm font-medium text-gray-900 mb-0.5">Phone</dt>
                <dd>{settings.phone}</dd>
              </div>
            )}
            {settings.address && (
              <div>
                <dt className="text-sm font-medium text-gray-900 mb-0.5">Address</dt>
                <dd className="whitespace-pre-line">{settings.address}</dd>
              </div>
            )}
          </dl>

          {hasSocial && (
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Follow us</h3>
              <div className="flex flex-wrap gap-4">
                {settings.social.twitter && (
                  <a href={settings.social.twitter} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors">
                    Twitter / X
                  </a>
                )}
                {settings.social.linkedin && (
                  <a href={settings.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors">
                    LinkedIn
                  </a>
                )}
                {settings.social.github && (
                  <a href={settings.social.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-xl font-semibold mb-5 text-gray-900">Send a Message</h2>
          {/* Sign up at formspree.io, create a form, and replace YOUR_FORM_ID below */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">
            Form powered by{' '}
            <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
              Formspree
            </a>
            . Sign up free and replace YOUR_FORM_ID in Contact.jsx.
          </p>
        </div>
      </div>
    </div>
  )
}
