import team from '../data/team.json'

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Our Team</h1>
      <p className="text-gray-500 mb-12">The people behind the project.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member) => (
          <div key={member._id} className="text-center">
            <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              {member.photoUrl ? (
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                  {member.name?.[0]}
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-2 text-sm">{member.role}</p>
            {member.bio && (
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
