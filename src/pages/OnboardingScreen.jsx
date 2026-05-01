import { useState } from "react"
import StateSelector from "../components/StateSelector"

const AGE_GROUPS = ["Under 18", "18+"]
const VOTER_STATUS = [
  "First-time voter",
  "Registered voter",
  "Need registration help"
]

export default function OnboardingScreen({ onSubmit }) {
  const [fullName, setFullName] = useState("")
  const [state, setState] = useState("")
  const [ageGroup, setAgeGroup] = useState("")
  const [voterStatus, setVoterStatus] = useState("")

  const handleSubmit = () => {
    onSubmit({
      fullName,
      country: "India",
      state,
      ageGroup,
      voterStatus,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-blue-400 text-sm mb-3">
            India Voter Verification
          </p>
          <h2 className="text-4xl font-bold mb-4">Build Your Voter Profile</h2>
          <p className="text-slate-300">
            Personalized election guidance tailored to your state and eligibility.
          </p>
        </div>

        <div className="w-full bg-slate-800 rounded-full h-2 mb-8">
          <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-slate-300">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
          />
        </div>

        <StateSelector value={state} onChange={setState} />

        <div className="mb-6">
          <label className="block mb-2 text-slate-300">Age Group</label>
          <select
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
          >
            <option value="">Select Age Group</option>
            {AGE_GROUPS.map((age) => (
              <option key={age}>{age}</option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-slate-300">Voter Status</label>
          <select
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
            value={voterStatus}
            onChange={(e) => setVoterStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            {VOTER_STATUS.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!fullName || !state || !ageGroup || !voterStatus}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
        >
          Continue Securely
        </button>
      </div>
    </div>
  )
}