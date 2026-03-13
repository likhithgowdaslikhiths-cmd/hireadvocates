"use client";

import { ShieldCheck, FileText, Scale, Siren } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          Fast and reliable legal support across India with expert criminal lawyers available when you need them the most.
        </p>

        <div className="why-grid">

          <div className="why-card highlight">
            <div className="why-header">
              <div className="why-icon">
                <Scale size={22} />
              </div>
              <h3>All Legal Cases Handled</h3>
            </div>
            <p>
              Our platform connects you with experienced lawyers who handle
              all types of legal matters including criminal, civil, property,
              divorce, and corporate cases across India.
            </p>
          </div>

          <div className="why-card highlight">
            <div className="why-header">
              <div className="why-icon">
                <ShieldCheck size={22} />
              </div>
              <h3>Expert Criminal Lawyers</h3>
            </div>
            <p>
              Get assistance from highly experienced criminal lawyers who
              specialize in bail cases, FIR matters, police complaints,
              and court representation.
            </p>
          </div>

          <div className="why-card highlight">
            <div className="why-header">
              <div className="why-icon">
                <Siren size={22} />
              </div>
              <h3>Urgent Police Station Support</h3>
            </div>
            <p>
              Need a lawyer urgently at a police station? Our network helps
              you quickly connect with nearby lawyers who can assist you
              during emergencies.
            </p>
          </div>

          <div className="why-card highlight">
            <div className="why-header">
              <div className="why-icon">
                <FileText size={28} />
              </div>
              <h3>Quick Legal Consultation</h3>
            </div>
            <p>
              Book online consultation with professional lawyers quickly
              and easily. Get immediate legal guidance and support whenever
              you need it.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}