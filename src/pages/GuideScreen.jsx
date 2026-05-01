import { getCountryData } from "../data/votingData"
import StepCard from "../components/StepCard"
import FAQSection from "../components/FAQSection"
import Timeline from "../components/Timeline"

export default function GuideScreen({ profile, onRestart }) {
  if (!profile) return null

  const data = getCountryData()
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No voting data available.
      </div>
    )
  }

  const eligible = profile.ageGroup !== "Under 18"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <p className="uppercase tracking-widest text-blue-400 text-sm mb-2">
              Personalized Civic Dashboard
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              Voting Guide — {profile.country}
            </h1>
          </div>

          <button
            onClick={onRestart}
            className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-2xl"
          >
            Restart
          </button>
        </div>

        {/* Eligibility Banner */}
        <div
          className={`rounded-3xl p-6 mb-10 shadow-xl border ${
            eligible
              ? "bg-green-500/10 border-green-500/30"
              : "bg-red-500/10 border-red-500/30"
          }`}
        >
          <h2 className="text-2xl font-bold mb-2">
            {eligible
              ? "✅ You are eligible to vote"
              : "❌ You are not currently eligible"}
          </h2>
          <p className="text-slate-300">
            {eligible
              ? "Proceed confidently with your voter journey."
              : "You can still explore the process and prepare for future elections."}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-blue-400 text-3xl font-bold">
              {data.steps.length}
            </h3>
            <p className="text-slate-300 mt-2">Voting Steps</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-blue-400 text-3xl font-bold">Secure</h3>
            <p className="text-slate-300 mt-2">Guided Verification</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-blue-400 text-3xl font-bold">AI</h3>
            <p className="text-slate-300 mt-2">Assisted Navigation</p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline steps={data.steps} />

        {/* Steps */}
        <div className="grid gap-6 mt-12">
          {data.steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* FAQ */}
        <FAQSection />
      </div>
    </div>
  )
}