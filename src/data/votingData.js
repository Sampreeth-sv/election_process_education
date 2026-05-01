export function getCountryData() {
  return {
    country: "India",
    minimumVotingAge: 18,
    steps: [
      {
        id: 1,
        title: "Check Eligibility",
        details: [
          "You must be an Indian citizen.",
          "You must be 18 years or older.",
          "Ensure valid identity documents are available."
        ]
      },
      {
        id: 2,
        title: "Register as a Voter",
        details: [
          "Apply via NVSP portal or Election Commission resources.",
          "Submit Aadhaar, address proof, and identity proof.",
          "Receive your EPIC/Voter ID card."
        ]
      },
      {
        id: 3,
        title: "Verify Polling Booth",
        details: [
          "Check your polling station online.",
          "Confirm election dates for your state.",
          "Carry voter ID on election day."
        ]
      },
      {
        id: 4,
        title: "Cast Your Vote",
        details: [
          "Visit assigned booth.",
          "Complete identity verification.",
          "Vote securely via EVM/VVPAT."
        ]
      },
      {
        id: 5,
        title: "Stay Updated",
        details: [
          "Track election news.",
          "Follow Election Commission announcements.",
          "Report misinformation or fraud."
        ]
      }
    ]
  }
}