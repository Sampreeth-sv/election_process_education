const sampleCandidates = [
  {
    name: "Candidate A",
    education: "Masters in Public Policy",
    priorities: ["Education", "Healthcare", "Employment"],
  },
  {
    name: "Candidate B",
    education: "Law Degree",
    priorities: ["Infrastructure", "Economy", "Digital Governance"],
  },
]

export default function CandidateComparison() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Candidate Comparison
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sampleCandidates.map((candidate, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {candidate.name}
            </h3>
            <p className="mb-2 text-slate-300">
              Education: {candidate.education}
            </p>
            <div>
              <p className="font-semibold mb-2">Key Priorities:</p>
              <ul className="space-y-2 text-slate-300">
                {candidate.priorities.map((priority, i) => (
                  <li key={i}>• {priority}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}