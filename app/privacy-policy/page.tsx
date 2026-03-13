export const metadata = {
  title: "Privacy Policy | HireAdvocates",
  description:
    "Learn how HireAdvocates collects, uses and protects user information when connecting clients with lawyers across India.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">

          <p>
            HireAdvocates respects your privacy and is committed to protecting
            the personal information you share with us while using our platform.
          </p>

          <h2>Information We Collect</h2>

          <ul>
            <li>Name and contact details submitted through forms</li>
            <li>Email address and phone number</li>
            <li>Location information when requesting legal assistance</li>
            <li>Technical information such as browser type and IP address</li>
          </ul>

          <h2>How We Use Your Information</h2>

          <p>
            The information collected is used only to connect users with
            independent lawyers and provide legal consultation coordination.
          </p>

          <ul>
            <li>To process legal consultation requests</li>
            <li>To connect you with suitable lawyers</li>
            <li>To improve our platform and services</li>
            <li>To communicate regarding your request</li>
          </ul>

          <h2>Data Protection</h2>

          <p>
            We implement reasonable security practices to protect user
            information from unauthorized access or misuse.
          </p>

          <h2>Third Party Services</h2>

          <p>
            Our website may include links to external services such as Google
            Maps or email providers. These services have their own privacy
            policies.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions regarding this privacy policy, you may
            contact us at:
          </p>

          <p>
            Email: info@hireadvocates.com
          </p>

        </div>
      </section>

    </main>
  );
}