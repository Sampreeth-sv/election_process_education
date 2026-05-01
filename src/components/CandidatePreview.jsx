export default function CandidatePreview() {
  const candidates = [
    {
      name: "Understand Candidates",
      desc: "Review candidate profiles, party manifestos, and public records before voting.",
    },
    {
      name: "Compare Policies",
      desc: "Evaluate priorities such as education, economy, healthcare, and governance.",
    },
    {
      name: "Make Informed Choices",
      desc: "Strengthen democracy through research-backed voting decisions.",
    },
  ]

  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Smart Voting Preparation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {candidates.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {item.name}
            </h3>
            <p className="text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}