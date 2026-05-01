export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div>
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">
          CivicGuide India
        </h1>
        <p className="text-xs text-slate-400">
          Secure Voting Assistance Platform
        </p>
      </div>

      <div className="hidden md:flex gap-8 text-slate-300 font-medium">
        <button className="hover:text-blue-400">Home</button>
        <button className="hover:text-blue-400">Eligibility</button>
        <button className="hover:text-blue-400">Resources</button>
        <button className="hover:text-blue-400">FAQ</button>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl font-semibold">
        Get Started
      </button>
    </nav>
  )
}