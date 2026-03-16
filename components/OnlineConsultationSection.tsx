"use client";

import { useState } from "react";
import { ShieldCheck, Lock, PhoneCall } from "lucide-react";

export default function OnlineConsultationSection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    location: "",
    caseType: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validation
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          state: "",
          location: "",
          caseType: ""
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("❌ " + (data.error || "Something went wrong. Please try again."));
      }
    } catch (error) {
      console.error(error);
      alert("🌐 Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="consultation-section">
      <div className="consultation-container">

        {/* LEFT SIDE */}
        <div className="consultation-left">
          <h2>Online Legal Consultation</h2>
          <p className="consultation-sub">
            Get Expert Legal Advice from Verified Lawyers Across India
          </p>

          <ul className="consultation-benefits">
            <li>
              <ShieldCheck size={20} />
              Speak directly with experienced advocates for clear legal guidance
            </li>
            <li>
              <Lock size={20} />
              100% confidential & secure consultation with full data protection
            </li>
            <li>
              <PhoneCall size={20} />
              Complete legal support — from consultation to court representation
            </li>
          </ul>

          {/* Stats */}
          <div className="consultation-stats">
            <div>
              <h3>10,000+</h3>
              <p>Clients Served</p>
            </div>
            <div>
              <h3>3,200+</h3>
              <p>Cases Resolved</p>
            </div>
            <div>
              <h3>100+</h3>
              <p>Cities Covered</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="consultation-form">
          <h3>Book Your Consultation</h3>

          {success && (
            <div className="success-msg">
              ✅ Request Sent! We'll connect you within 24 hours.
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Full Name *"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number * (10 digits)"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* ✅ NEW: Email for confirmation mail */}
          <input
            type="email"
            name="email"
            placeholder="Email Address (for confirmation)"
            value={formData.email}
            onChange={handleChange}
          />

          <select name="state" value={formData.state} onChange={handleChange}>
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

          {/* ✅ NEW: Location field */}
          <input
            type="text"
            name="location"
            placeholder="City / District"
            value={formData.location}
            onChange={handleChange}
          />

          <select name="caseType" value={formData.caseType} onChange={handleChange}>
            <option value="">Select Case Type</option>
            <option>Property Dispute</option>
            <option>Criminal Matter</option>
            <option>Family & Divorce</option>
            <option>Corporate Legal</option>
            <option>Divorce</option>
            <option>Corporate</option>
          </select>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? "Sending..." : "Submit & Connect →"}
          </button>
        </div>

      </div>
    </section>
  );
}