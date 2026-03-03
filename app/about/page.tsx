export const metadata = {
  title: "About HireAdvocates | India’s Trusted Legal Consultation Platform",
  description:
    "HireAdvocates connects clients with verified lawyers across India for criminal, civil, property, family and corporate legal matters. Secure, confidential and professionally managed legal consultation services.",
};

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* PREMIUM HERO */}
      <section className="about-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-badge">
            India’s Trusted Legal Network
          </span>

          <h1>
            Redefining How India
            <span> Accesses Legal Support</span>
          </h1>

          <p>
            HireAdvocates is a structured legal connection platform that
            simplifies access to verified lawyers across criminal, civil,
            property, corporate and family matters — securely and professionally.
          </p>

          <div className="hero-stats">
            <div>
              <strong>5,000+</strong>
              <span>Verified Lawyers</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Cities Covered</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Case Coordination</span>
            </div>
          </div>
        </div>

      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="container narrow">

          <h2>Who We Are</h2>

          <p>
            HireAdvocates is a professional legal consultation coordination
            platform built to bridge the gap between individuals, businesses
            and experienced advocates across India.
          </p>

          <p>
            We do not provide legal advice directly. Instead, we streamline
            the connection process — carefully reviewing legal requirements,
            understanding urgency and location, and matching clients with
            suitable independent lawyers based on their expertise and
            practice area.
          </p>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="about-process">

        <div className="container">

          <h2>Our Structured Approach</h2>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Case Review & Assessment</h3>
              <p>
                Every submission is internally reviewed to understand the
                legal issue, urgency, and jurisdiction requirements.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Advocate Matching</h3>
              <p>
                Clients are connected with verified lawyers whose experience
                aligns with the specific legal matter.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Confidential Coordination</h3>
              <p>
                We ensure structured communication and confidentiality
                standards throughout the consultation process.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section light">

        <div className="container">

          <h2>Why HireAdvocates?</h2>

          <div className="feature-grid">

            <div className="feature-card">
              ✔ Verified Legal Professionals
            </div>

            <div className="feature-card">
              ✔ Transparent Coordination Process
            </div>

            <div className="feature-card">
              ✔ Nationwide Legal Coverage
            </div>

            <div className="feature-card">
              ✔ Secure & Confidential Handling
            </div>

            <div className="feature-card">
              ✔ Multi-Domain Legal Expertise
            </div>

            <div className="feature-card">
              ✔ Professional Client Support
            </div>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="about-cta">

        <div className="container">

          <h2>Need Legal Assistance?</h2>

          <p>
            Submit your legal requirement and get connected with
            a verified advocate suited to your case.
          </p>

          <a href="/hire-a-lawyer" className="cta-btn">
            Hire a Lawyer →
          </a>

        </div>

      </section>

    </main>
  );
}