import ElectionStats from "../components/ElectionStats"
import NotificationBanner from "../components/NotificationBanner"
import Timeline from "../components/Timeline"
import StepCard from "../components/StepCard"
import FAQSection from "../components/FAQSection"
import NewsSection from "../components/NewsSection"
import CandidatePreview from "../components/CandidatePreview"
import Footer from "../components/Footer"
import { getCountryData } from "../data/votingData"
import AIChatAssistant from "../components/AIChatAssistant"

export default function DashboardScreen({ profile }) {
  const data = getCountryData()
  const eligible = profile.ageGroup === "18+"
  const updatedSteps = [...data.steps]

  if (eligible) {
    updatedSteps[0] = {
      ...updatedSteps[0],
      title: "Eligibility Confirmed",
      details: [
        "You meet the legal voting age requirement.",
        "You are eligible to participate in Indian elections.",
        "Proceed with registration or polling booth verification."
      ]
    }
  }
   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <NotificationBanner />

      {/* Personalized Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="uppercase tracking-widest text-blue-400 mb-3">
          Personalized Voter Dashboard
        </p>

        <h1 className="text-5xl font-extrabold mb-4">
          Welcome, {profile.fullName}
        </h1>
 <p className="text-slate-300 text-lg max-w-3xl mb-8">
          State: {profile.state} | Status: {profile.voterStatus}
        </p>

        {/* Eligibility Banner */}
        <div className={`rounded-3xl p-6 border ${
          eligible
            ? "bg-green-500/10 border-green-500/30"
            : "bg-red-500/10 border-red-500/30"
        }`}>
          <h2 className="text-2xl font-bold mb-2">
            {eligible
              ? "✅ You are eligible to vote in India"
              : "❌ You are not currently eligible to vote"}
          </h2>

          <p className="text-slate-300">
            {eligible
              ? `You can now proceed with voter registration, booth verification, and election participation in ${profile.state}.`
              : "You can still explore the process and prepare for future elections."}
          </p>
        </div>
      </div>

      <ElectionStats />

      <div className="max-w-6xl mx-auto px-6">
        <Timeline steps={updatedSteps} />

        <div className="grid gap-6 mt-12">
          {updatedSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        <CandidatePreview />
        <NewsSection />
        <FAQSection />
        <AIChatAssistant />
      </div>

      <Footer />
    </div>
  )
}

        