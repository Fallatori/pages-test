import settings from '../data/settings.json'
import home from '../data/home.json'

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                For questions about the TOGETHER project, partnership opportunities, or media enquiries,
                please contact us by email. We aim to respond within a few working days.
              </p>

              <dl className="space-y-5">
                {settings.email && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-gray-900 mb-0.5">Email</dt>
                      <dd>
                        <a href={`mailto:${settings.email}`} className="text-blue-700 hover:underline">
                          {settings.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                )}

                {settings.social?.linkedin && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-gray-900 mb-0.5">LinkedIn</dt>
                      <dd>
                        <a
                          href={settings.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:underline"
                        >
                          Follow TOGETHER on LinkedIn
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
              </dl>

              {/* Funding note */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇪🇺</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Funded by the European Union</p>
                    <p className="text-xs text-gray-500 font-mono">Horizon Europe — Grant No. 101226137</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Subscribe to the TOGETHER newsletter for project updates, events, publications, and news from our pilot sites.
                </p>
                {/* Mailchimp form — replace action URL with your Mailchimp embed URL */}
                <form
                  action={home.newsletterUrl || 'YOUR_MAILCHIMP_URL'}
                  method="POST"
                  target="_blank"
                  className="space-y-3"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                  {/* Mailchimp bot protection — do not remove */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_placeholder" tabIndex="-1" defaultValue="" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
                <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
