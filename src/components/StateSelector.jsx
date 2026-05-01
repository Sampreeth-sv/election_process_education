import { INDIAN_STATES } from "../data/indianStates"

export default function StateSelector({ value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-slate-300">State / Union Territory</label>
      <select
        className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select State</option>
        {INDIAN_STATES.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  )
}