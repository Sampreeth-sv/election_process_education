export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:border-blue-400"
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}