"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function HireLawyerPage() {

 const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  state: "",
  caseType: "",
  location: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleChange = (e: any) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: any) => {
  e.preventDefault();

  if (!formData.name || formData.name.trim().length < 2) {
    alert("Please enter your full name (min 2 characters)");
    return;
  }
  if (!formData.phone || !formData.phone.match(/^\d{10,12}$/)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  setLoading(true);
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        state: formData.state,
        caseType: formData.caseType,
        location: formData.location,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", state: "", caseType: "", location: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      alert("❌ " + (data.error || "Something went wrong."));
    }
  } catch (error) {
    console.error(error);
    alert("🌐 Network error. Please try again.");
  } finally {
    setLoading(false);
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
        {/* RIGHT SIDE FORM */}
<div className="hire-right">
  <form className="hire-form" onSubmit={handleSubmit}>
    <h3>Request Legal Assistance</h3>

    {success && (
      <div className="success-msg">
        ✅ Request submitted! We'll connect you within 24 hours.
      </div>
    )}

    <input
      type="text"
      name="name"
      placeholder="Your Full Name *"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number * (10 digits)"
      value={formData.phone}
      onChange={handleChange}
      required
    />

    {/* ✅ Email for confirmation */}
    <input
      type="email"
      name="email"
      placeholder="Email Address (for confirmation)"
      value={formData.email}
      onChange={handleChange}
    />

    <select name="state" value={formData.state} onChange={handleChange} required>
      <option value="">Select State</option>
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>
      <option>Maharashtra</option>
      <option>Manipur</option>
      <option>Meghalaya</option>
      <option>Mizoram</option>
      <option>Nagaland</option>
      <option>Odisha</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Sikkim</option>
      <option>Tamil Nadu</option>
      <option>Telangana</option>
      <option>Tripura</option>
      <option>Uttar Pradesh</option>
      <option>Uttarakhand</option>
      <option>West Bengal</option>
      <option>Delhi</option>
    </select>

    {/* ✅ City/District field */}
    <input
      type="text"
      name="location"
      placeholder="City / District"
      value={formData.location}
      onChange={handleChange}
    />

    <select name="caseType" value={formData.caseType} onChange={handleChange} required>
      <option value="">Select Case Type</option>
      <option>Criminal Matter</option>
      <option>Family & Divorce</option>
      <option>Property Dispute</option>
      <option>Corporate Legal</option>
    </select>

    <textarea
      name="message"
      rows={4}
      placeholder="Briefly describe your legal issue (optional)"
      value={formData.message}
      onChange={handleChange}
    />

    <button
      type="submit"
      disabled={loading}
      style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
    >
      {loading ? "Submitting..." : "Submit Request →"}
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