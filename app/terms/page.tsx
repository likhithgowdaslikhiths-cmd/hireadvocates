export const metadata = {
  title: "Terms & Conditions | HireAdvocates",
  description:
    "Terms governing the use of the HireAdvocates platform for connecting clients with lawyers.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">

          <p>
            These Terms and Conditions govern the use of the HireAdvocates
            platform and services.
          </p>

          <h2>Platform Role</h2>

          <p>
            HireAdvocates operates as a legal connection platform that connects
            users with independent lawyers across India.
          </p>

          <p>
            We do not provide legal advice directly.
          </p>

          <h2>User Responsibilities</h2>

          <ul>
            <li>Provide accurate information when submitting legal requests</li>
            <li>Use the platform for lawful purposes only</li>
            <li>Respect professional conduct when communicating with lawyers</li>
          </ul>

          <h2>No Attorney Client Relationship</h2>

          <p>
            Submission of a request on this website does not automatically
            establish an attorney-client relationship with HireAdvocates.
          </p>

          <h2>Limitation of Liability</h2>

          <p>
            HireAdvocates is not responsible for outcomes of legal matters
            handled by independent lawyers connected through the platform.
          </p>

          <h2>Changes to Terms</h2>

          <p>
            We may update these terms from time to time. Continued use of the
            platform indicates acceptance of the updated terms.
          </p>

          <h2>Contact Information</h2>

          <p>
            Email: info@hireadvocates.com
          </p>

        </div>
      </section>

    </main>
  );
}