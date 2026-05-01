export default function AdminDashboard() {
  const metrics = [
    { label: "Registered Users", value: "152K" },
    { label: "State Coverage", value: "28" },
    { label: "Daily Active Users", value: "12K" },
    { label: "Support Queries", value: "3.2K" },
  ]
return (
    <div className="min-h-screen bg-slate-950 text-white px-8 py-10">
      <h1 className="text-5xl font-bold mb-10 text-blue-400">
        Admin Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-blue-400 mb-3">
              {metric.value}
            </h2>
            <p className="text-slate-300">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-10">
        <h2 className="text-3xl font-bold mb-6">Platform Controls</h2>
        <ul className="space-y-4 text-slate-300">
          <li>• Manage voter guidance content</li>
          <li>• Monitor election alerts</li>
          <li>• Track user engagement</li>
          <li>• Manage regional resources</li>
        </ul>
      </div>
    </div>
  )
}