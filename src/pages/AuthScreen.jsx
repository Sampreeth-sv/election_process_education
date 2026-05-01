import { useState } from "react"

export default function AuthScreen({ onAuthSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      onAuthSuccess()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-4 rounded-xl bg-slate-900 border border-slate-700 text-white"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-semibold text-white"
        >
          {isLogin ? "Login Securely" : "Register Securely"}
        </button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center text-blue-400 mt-6 cursor-pointer"
        >
          {isLogin ? "Need an account? Register" : "Already registered? Login"}
        </p>
      </div>
    </div>
  )
}