import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>Kids Dentist</h4>
          <p>160 Commerce Dr #100<br/>Grayslake, IL 60030</p>
          <p>(847) 223-1400</p>
        </div>

        <div>
          <h4>Office Hours</h4>
          <p>Mon–Fri: 8:00am – 5:00pm<br/>Sat: By appointment</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p><a href="/request-appointment">Request Appointment</a></p>
          <p><a href="/for-patients/patient-forms">Patient Forms</a></p>
        </div>
      </div>
      <div className="container footer-bottom">© Kids Dentist</div>
    </footer>
  )
}

