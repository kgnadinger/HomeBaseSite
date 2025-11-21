interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: 1,
    title: "Create Your Family",
    description: "Set up your household and add family members. Each person gets their own profile with customizable avatar and role.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Add Chores",
    description: "Create chores for your family. Set descriptions, due dates, frequencies, and assign them to specific family members or make them available to everyone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Complete & Submit",
    description: "Family members complete their assigned chores and submit them for review. Parents can verify completion with photos or quick checks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Review & Approve",
    description: "Parents review submitted chores in the review queue. Approve completed tasks to award points and keep the family organized.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Earn Rewards",
    description: "Track points and achievements. Redeem earned rewards that you've set up, keeping everyone motivated and engaged.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="mb-4">How It Works</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Get your family organized in just a few simple steps.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Timeline line - hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-8 top-16 bottom-0 w-0.5 bg-border -translate-y-8"></div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="hidden sm:block w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2 sm:hidden">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hidden sm:block">{step.title}</h3>
                  <p className="text-muted text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

