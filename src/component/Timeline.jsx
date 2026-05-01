export default function Timeline({ steps }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
        Your Voting Journey Timeline
      </h2>

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 font-bold">
              {step.id}
            </div>

            <div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-slate-400 text-sm">
                Complete this stage to move forward securely.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}