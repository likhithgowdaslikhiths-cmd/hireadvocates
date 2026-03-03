"use client";

import { useRef, useState } from "react";

const services = [
  {
    title: "Legal Requirement Assessment",
    desc: "We review every user submission carefully to understand the legal issue, urgency, and location before connecting you with a suitable lawyer or advocate."
  },
  {
    title: "Advocate Matching & Allocation",
    desc: "Our team connects you with an independent lawyer whose experience and practice area match your specific legal matter."
  },
  {
    title: "Criminal Matter Assistance",
    desc: "Get connected with experienced criminal lawyers for bail matters, criminal defence, FIR-related issues and court representation."
  },
  {
    title: "Family & Matrimonial Matter Assistance",
    desc: "Find trusted divorce lawyers and family law advocates for divorce proceedings and custody disputes."
  },
  {
    title: "Civil & Property Dispute Assistance",
    desc: "Connect with skilled property lawyers and civil advocates for land disputes, partition matters and civil recovery cases."
  },
  {
    title: "Cheque Bounce & Financial Dispute Assistance",
    desc: "Facilitating connections with lawyers experienced in cheque bounce cases and financial disputes."
  },
  {
    title: "Corporate & Business Legal Assistance",
    desc: "Access corporate lawyers for commercial disputes, contract review and compliance matters."
  },
  {
    title: "Domestic Violence & Protection Matters",
    desc: "Confidentially connect with experienced advocates for domestic violence cases and protection-related matters."
  },
  {
    title: "NRI Legal Assistance",
    desc: "Helping NRI clients connect with reliable lawyers in India for property disputes and civil matters."
  },
  {
    title: "Pre-Consultation Case Preparation Support",
    desc: "Administrative support to help organise your case before your legal consultation."
  },
  {
    title: "Confidential Case Handling",
    desc: "All legal submissions are handled with structured internal review and confidentiality standards."
  }
];

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (!sliderRef.current) return;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Legal Services</h2>

        <div
          className="services-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}