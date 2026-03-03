"use client";

import { ShieldCheck, Globe, Zap, FileText } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          A smarter, faster and more reliable way to connect with legal experts across India.
        </p>

        <div className="why-grid">

          <div className="why-card highlight">
  <div className="why-header">
    <div className="why-icon">
      <ShieldCheck size={22} />
    </div>
    <h3>Verified & Trusted Lawyers</h3>
  </div>
  <p>
    Connect with carefully verified lawyers and advocates who provide
    professional, reliable, and confidential legal services across India.
  </p>
</div>
<div className="why-card highlight">
  <div className="why-header">
    <div className="why-icon">
      <ShieldCheck size={22} />
    </div>
    <h3>Growing Network Across India</h3>
  </div>
  <p>
   Access a strong network of experienced criminal, divorce, property,
              civil, and corporate lawyers serving clients in multiple cities.
  </p>
</div>
<div className="why-card highlight">
  <div className="why-header">
    <div className="why-icon">
      <ShieldCheck size={22} />
    </div>
    <h3>Quick & Easy Consultation</h3>
  </div>
  <p>
    Book online legal consultation with a lawyer near you in just a few
              simple steps — fast, secure, and hassle-free.
  </p>
</div>

          

          <div className="why-card highlight">
  <div className="why-header">
    <div className="why-icon">
              <FileText size={28} />
            </div>
            <h3>Complete Legal Assistance</h3>
            </div>
            <p>
              From legal advice and document drafting to court representation and
              dispute resolution, get end-to-end legal support through our platform.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}