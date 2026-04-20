import React from 'react'

export default function Contact() {
  return (
    <article>
      <header className="bg-gradient-to-br from-blue-50 to-amber-50/50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Contact Kids Dentist
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help you and your child feel comfortable about dental care.
            Contact us today to schedule an appointment or ask any questions.
          </p>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Address</h3>
                    <p className="text-slate-600">
                      160 Commerce Dr #100<br />
                      Grayslake, IL 60030
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600">
                      <a href="tel:+18472231400" className="hover:text-blue-600 transition-colors">
                        (847) 223-1400
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Office Hours</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Thursday: 8:00 AM - 5:00 PM</p>
                      <p>Friday: 8:00 AM - 12:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-semibold text-slate-800 mb-2">Emergency Care</h3>
                <p className="text-slate-600 text-sm mb-3">
                  For dental emergencies outside of regular office hours, please call our emergency line or visit the nearest emergency room.
                </p>
                <a
                  href="tel:+18472231400"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Emergency: (847) 223-1400
                </a>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h2>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-50">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="(847) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="How can we help you and your child?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  )
}
