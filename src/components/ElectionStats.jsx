export default function ElectionStats() {
  const stats = [
    { title: "Eligible Voters", value: "968M+" },
    { title: "States Covered", value: "28+" },
    { title: "Election Security", value: "99.9%" },
    { title: "AI Guidance", value: "24/7" },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-lg"
          >
            <h3 className="text-4xl font-extrabold text-blue-400 mb-3">
              {stat.value}
            </h3>
            <p className="text-slate-300">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}