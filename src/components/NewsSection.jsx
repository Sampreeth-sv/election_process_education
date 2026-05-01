const electionNews = [
  "Election Commission announces updated voter registration drives.",
  "Digital voter awareness campaigns expanded nationwide.",
  "New polling booth verification tools launched for citizens.",
]

export default function NewsSection() {
  return (
    <section className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Latest Election Updates
      </h2>

      <div className="grid gap-6 max-w-5xl mx-auto">
        {electionNews.map((news, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <p className="text-slate-300 text-lg">📰 {news}</p>
          </div>
        ))}
      </div>
    </section>
  )
}