const LANGUAGES = [
  "English",
  "Hindi",
  "Kannada",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Bengali",
]

export default function LanguageSelector({ value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-slate-300">Preferred Language</label>
      <select
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Language</option>
        {LANGUAGES.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
    </div>
  )
}