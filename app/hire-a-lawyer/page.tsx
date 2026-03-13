"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function HireLawyerPage() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    caseType: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e: any) => {
  e.preventDefault();

  if (!formData.name || !formData.phone) {
    alert("Please fill required fields");
    return;
  }

  try {

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        state: formData.state,
        caseType: formData.caseType,
        location: formData.message
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Request submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        state: "",
        caseType: "",
        message: "",
      });

    } else {
      alert(data.error || "Something went wrong");
    }

  } catch (error) {
    alert("Server error");
  }
};

  return (
    <main className="hire-page">

      {/* SPLIT SECTION */}
      <section className="hire-section">

        {/* LEFT SIDE */}
        <div className="hire-left">

          <div className="hire-content">

            <span className="hire-badge">
              India’s Trusted Legal Network
            </span>

            <h1>
              Hire a <span>Verified</span> Lawyer
            </h1>

            <p>
              Connect with experienced advocates across India for criminal,
              civil, corporate, property and family matters —
              fast, confidential and professionally managed.
            </p>

            <div className="hire-stats">
              <div>
                <strong>1,000+</strong>
                <span>Verified Lawyers</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Cities Covered</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Consultation Support</span>
              </div>
            </div>

            <div className="hire-contact">
              <div>
                <Mail size={18} />
                info@hireadvocates.com
              </div>

              <a
                href="https://www.google.com/maps/place/Worexa+Technologies/@12.9264514,77.5508696"
                target="_blank"
                className="address-link"
              >
                <MapPin size={18} />
                3rd Phase, Banashankari 3rd Stage,
                Bengaluru, Karnataka 560085
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="hire-right">

          <form className="hire-form" onSubmit={handleSubmit}>
            <h3>Request Legal Assistance</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
            </select>

            <select
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              required
            >
              <option value="">Select Case Type</option>
              <option>Criminal Matter</option>
              <option>Family & Divorce</option>
              <option>Property Dispute</option>
              <option>Corporate Legal</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Briefly describe your legal issue"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">
              Submit Request →
            </button>

          </form>

        </div>

      </section>

      {/* MAP SECTION */}
      <section className="hire-map">
        <h2>Our Location</h2>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=12.9264514,77.5508696&z=15&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </main>
  );
}