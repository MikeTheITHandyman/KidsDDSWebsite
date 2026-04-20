import React from 'react'
import ServicesGrid from '../../components/ServicesGrid'

export default function ServicesIndex() {
  return (
    <article>
      <header className="bg-gradient-to-br from-blue-50 to-amber-50/50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Pediatric Dental Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive, compassionate dental care designed specifically for children,
            from routine check-ups to specialized treatments in a welcoming environment.
          </p>
        </div>
      </header>

      <main>
        <ServicesGrid />

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Specialized Pediatric Care
              </h2>
              <p className="text-lg text-slate-600">
                Our services are tailored to meet the unique dental needs of children at every stage of development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-detail-card">
                <div className="text-4xl mb-4">🦷</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Infant Oral Health</h3>
                <p className="text-slate-600">
                  Early dental care starting from the first tooth, including guidance for parents
                  on proper oral hygiene and nutrition.
                </p>
              </div>

              <div className="service-detail-card">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Toddler Dentistry</h3>
                <p className="text-slate-600">
                  Gentle examinations and treatments for young children, focusing on prevention
                  and building positive dental experiences.
                </p>
              </div>

              <div className="service-detail-card">
                <div className="text-4xl mb-4">🧒</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Children's Dentistry</h3>
                <p className="text-slate-600">
                  Comprehensive dental care for school-aged children, including orthodontics
                  and restorative treatments as needed.
                </p>
              </div>

              <div className="service-detail-card">
                <div className="text-4xl mb-4">🧑</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Adolescent Care</h3>
                <p className="text-slate-600">
                  Transition care for teenagers, preparing them for adult dentistry while
                  addressing any remaining pediatric dental needs.
                </p>
              </div>

              <div className="service-detail-card">
                <div className="text-4xl mb-4">♿</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Special Needs Dentistry</h3>
                <p className="text-slate-600">
                  Compassionate, specialized care for children with special needs, creating
                  a comfortable environment for all patients.
                </p>
              </div>

              <div className="service-detail-card">
                <div className="text-4xl mb-4">😴</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Sedation Options</h3>
                <p className="text-slate-600">
                  Safe, comfortable sedation dentistry for anxious children or complex procedures,
                  ensuring stress-free dental experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </article>
  )
}
