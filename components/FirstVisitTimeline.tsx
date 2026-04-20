import React from 'react'
import Button from './Button'

interface TimelineStep {
  step: number
  title: string
  description: string
  icon?: string
}

const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Welcome & Check-In",
    description: "You'll be greeted warmly at our friendly front desk. We'll help you fill out any necessary paperwork while your child explores our kid-friendly waiting area with toys and books."
  },
  {
    step: 2,
    title: "Meet the Team",
    description: "Your child will meet our gentle pediatric dentists and team members. We'll take time to get to know your child and make them feel comfortable and safe."
  },
  {
    step: 3,
    title: "Initial Exam",
    description: "A gentle, thorough examination of your child's teeth, gums, and mouth. We'll explain everything we're doing in simple, reassuring words."
  },
  {
    step: 4,
    title: "Fun Cleaning",
    description: "A gentle professional cleaning to remove any plaque and keep those teeth sparkling. We use special kid-sized tools and make it as fun as possible!"
  },
  {
    step: 5,
    title: "Treatment Plan",
    description: "We'll discuss any findings and create a personalized care plan. You'll leave with a clear understanding of your child's dental health and next steps."
  },
  {
    step: 6,
    title: "Happy Goodbye",
    description: "Your child leaves with a small treat and a smile! We'll schedule any follow-up visits and answer all your questions before you go."
  }
]

export default function FirstVisitTimeline() {
  return (
    <div className="bg-amber-50/30 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            What to Expect on Your Child's First Visit
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've designed our first visit experience to be gentle, fun, and stress-free for both you and your child.
            Here's what happens step by step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={step.step} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 border-4 border-blue-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-blue-600">{step.step}</span>
                </div>

                {/* Content card */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-xl shadow-md p-6 border border-blue-50 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                      <span className="mr-3 text-2xl">
                        {index === 0 && "👋"}
                        {index === 1 && "🤝"}
                        {index === 2 && "🔍"}
                        {index === 3 && "🧼"}
                        {index === 4 && "📋"}
                        {index === 5 && "🎉"}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Ready to Schedule Your Child's First Visit?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team is here to make this a positive experience for your whole family.
            </p>
            <Button size="lg">
              Request Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}