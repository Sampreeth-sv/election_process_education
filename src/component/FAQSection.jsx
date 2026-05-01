const faqs = [
  {
    question: "Who can vote?",
    answer:
      "Citizens meeting the legal voting age and registration requirements in their country.",
  },
  {
    question: "How do I verify my eligibility?",
    answer:
      "Check voter registration portals, government-issued ID, and election commission guidelines.",
  },
  {
    question: "Is my voting data secure?",
    answer:
      "Yes, secure civic platforms emphasize encryption, privacy, and legal compliance.",
  },
]

export default function FAQSection() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              {faq.question}
            </h3>
            <p className="text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}