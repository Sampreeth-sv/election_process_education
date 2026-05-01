export default function LandingScreen({ onStart }) {
  const previewSteps = [
    "Check Eligibility",
    "Register as a Voter",
    "Verify Polling Booth",
    "Cast Your Vote",
    "Stay Updated",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          CivicGuide India
        </h1>
        <button className="px-5 py-2 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
          Secure Access
        </button>
      </nav>
 {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="max-w-4xl">
          <p className="uppercase tracking-widest text-blue-400 mb-4">
            Transparent • Secure • Intelligent Voting
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Empowering Citizens Through
            <span className="text-blue-400"> Smart Election Guidance</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Navigate voter eligibility, registration, and election processes with
            AI-powered civic assistance designed for accessibility and trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl"
            >
              Get Started
            </button>

            <button className="border border-slate-600 hover:border-blue-400 px-8 py-4 rounded-2xl text-lg">
              Learn More
            </button>
          </div>
        </div>
         {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">99.9%</h3>
            <p className="text-slate-300 mt-2">Secure Verification</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-slate-300 mt-2">AI Civic Assistance</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">India</h3>
            <p className="text-slate-300 mt-2">National Voter Education</p>
          </div>
        </div>
        {/* Timeline Preview */}
        <div className="mt-24 w-full max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
            Your Voting Journey Timeline
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-left">
            <div className="space-y-6">
              {previewSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step}</h3>
                    <p className="text-slate-400 text-sm">
                      Learn this stage interactively with CivicGuide AI.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}