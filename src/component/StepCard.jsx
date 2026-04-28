export default function StepCard({ step }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] transition duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-blue-400">
          Step {step.id}
        </h2>
        <span className="text-sm uppercase tracking-wider text-slate-400">
          Election Process
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>

      <ul className="space-y-3 text-slate-300">
        {step.details.map((detail, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-400">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}