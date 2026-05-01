import { useState } from "react"
import LandingScreen from "./pages/LandingScreen"
import OnboardingScreen from "./pages/OnboardingScreen"
import DashboardScreen from "./pages/DashboardScreen"

export default function App() {
  const [screen, setScreen] = useState("landing")
  const [profile, setProfile] = useState(null)

  const handleRestart = () => {
    setProfile(null)
    setScreen("landing")
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {screen === "landing" && (
        <LandingScreen onStart={() => setScreen("onboarding")} />
      )}

      {screen === "onboarding" && (
        <OnboardingScreen
          onSubmit={(data) => {
            setProfile(data)
            setScreen("dashboard")
          }}
        />
      )}

      {screen === "dashboard" && (
        <DashboardScreen profile={profile} />
      )}
    </div>
  )
}