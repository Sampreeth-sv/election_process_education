import { useState } from "react"
import { chatbotResponses } from "../data/chatbotResponses"

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I’m Civic AI. Ask me about voter eligibility, registration, election steps, or deadlines.",
    },
  ])
  const [input, setInput] = useState("")

  const getBotResponse = (query) => {
    const lower = query.toLowerCase()
    if (lower.includes("eligible") || lower.includes("eligibility"))
      return chatbotResponses.eligibility
    if (lower.includes("register") || lower.includes("registration"))
      return chatbotResponses.registration
    if (lower.includes("epic") || lower.includes("voter id"))
      return chatbotResponses.epic
    if (lower.includes("process") || lower.includes("steps"))
      return chatbotResponses.process
    if (lower.includes("booth") || lower.includes("polling"))
      return chatbotResponses.booth
    if (lower.includes("deadline") || lower.includes("date"))
      return chatbotResponses.deadline
    if (lower.includes("document"))
      return chatbotResponses.documents

    return chatbotResponses.default
  }
  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { sender: "user", text: input }
    const botMessage = {
      sender: "bot",
      text: getBotResponse(input),
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInput("")
  }
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl z-50"
      >
        🤖 Civic AI
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] bg-slate-950 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="bg-blue-600 px-6 py-4 font-bold text-white">
            CivicGuide AI Assistant
          </div>

          <div className="flex-1 max-h-96 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 ml-auto text-white"
                    : "bg-white/10 text-slate-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        <div className="p-4 border-t border-white/10 flex gap-2 bg-slate-950">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about voting..."
              className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-700 text-white"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 px-4 rounded-xl text-white"
            >
            Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}