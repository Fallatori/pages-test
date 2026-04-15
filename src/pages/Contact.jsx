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

        {/* Newsletter signup */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Stay Updated</h2>
          <p className="text-gray-500 text-sm mb-5">
            Subscribe to our newsletter for the latest news and updates.
          </p>
          {/* Replace the action URL with your Mailchimp form action URL.
              Find it in Mailchimp → Audience → Signup forms → Embedded forms */}
          <form
            action="YOUR_MAILCHIMP_URL"
            method="POST"
            target="_blank"
            className="space-y-3"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Your email address"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Mailchimp bot protection — do not remove */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_placeholder" tabIndex="-1" defaultValue="" />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
