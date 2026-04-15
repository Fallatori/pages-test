import events from '../data/events.json'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function EventCard({ event }) {
  return (
    <div className={`bg-white rounded-xl border shadow-sm p-6 ${event.isPast ? 'border-gray-100 opacity-75' : 'border-blue-100'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {!event.isPast && (
              <span className="px-2.5 py-0.5 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                Upcoming
              </span>
            )}
            {event.isPast && (
              <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                Past
              </span>
            )}
            <span className="text-xs text-gray-500">
              {formatDate(event.date)}
              {event.endDate && ` – ${formatDate(event.endDate)}`}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  const upcoming = events.filter((e) => !e.isPast)
  const past = events.filter((e) => e.isPast)

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Calendar
          </span>
          <h1 className="text-4xl font-bold">Events & Activities</h1>
        </div>
      </section>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="max-w-3xl space-y-4">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past */}
      <section className={`py-12 ${upcoming.length > 0 ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
          <div className="max-w-3xl space-y-4">
            {past.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
