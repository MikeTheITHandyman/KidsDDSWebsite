import React from 'react'

export default function AboutPage() {
  return (
    <article>
      <header className="bg-gradient-to-br from-blue-50 to-amber-50/50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            About Kids Dentist
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Dedicated to providing exceptional pediatric dental care in Grayslake, IL
            with compassion, expertise, and a child-friendly approach.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Welcome to Kids Dentist, where we specialize exclusively in pediatric dentistry.
              Our practice is dedicated to creating positive dental experiences for children
              through gentle care, modern techniques, and a welcoming environment.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-50">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
                <p className="text-slate-600">
                  To provide compassionate, comprehensive dental care that helps children develop
                  healthy smiles and positive attitudes toward dental health throughout their lives.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-50">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h2>
                <p className="text-slate-600">
                  We understand that every child is unique. Our team takes the time to build trust,
                  explain procedures in age-appropriate ways, and create a comfortable environment
                  for dental care.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose Kids Dentist?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">👨‍⚕️</div>
                  <h3 className="font-semibold text-slate-800 mb-2">Expert Pediatric Dentists</h3>
                  <p className="text-slate-600 text-sm">Board-certified specialists with years of experience in pediatric dentistry.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="font-semibold text-slate-800 mb-2">Child-Friendly Environment</h3>
                  <p className="text-slate-600 text-sm">Modern facilities designed specifically for children and their comfort.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="font-semibold text-slate-800 mb-2">Compassionate Care</h3>
                  <p className="text-slate-600 text-sm">Gentle, patient-centered approach that puts your child's needs first.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  )
}
