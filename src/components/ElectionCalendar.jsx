const electionDates = [
  {
    state: "Karnataka",
    event: "Voter Registration Deadline",
    date: "March 15, 2026",
  },
  {
    state: "India",
    event: "National Election Phase 1",
    date: "April 10, 2026",
  },
]

export default function ElectionCalendar() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Election Calendar
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {electionDates.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {item.event}
            </h3>
            <p className="text-slate-300">{item.state}</p>
            <p className="text-slate-400">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}