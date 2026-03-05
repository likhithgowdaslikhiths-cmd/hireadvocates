"use client";

import { useState } from "react";
import { ShieldCheck, Lock, PhoneCall } from "lucide-react";

export default function OnlineConsultationSection() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    caseType: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

  if (!formData.name || !formData.phone) {
    alert("Please fill required fields");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);

      setFormData({
        name: "",
        phone: "",
        state: "",
        caseType: ""
      });

    } else {
      alert(data.error || "Something went wrong");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }

  setLoading(false);
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
              <h3>5,000+</h3>
              <p>Clients Served</p>
            </div>
            <div>
              <h3>3,200+</h3>
              <p>Cases Resolved</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Cities Covered</p>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="consultation-form">

          <h3>Book Your Consultation</h3>

          {success && (
            <div className="success-msg">
              ✅ Request Sent Successfully!
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
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
          >
            <option value="">Select Case Type</option>
            <option>Property Dispute</option>
            <option>Criminal Matter</option>
            <option>Family & Divorce</option>
            <option>Corporate Legal</option>
          </select>

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit & Connect →"}
          </button>

        </div>

      </div>
    </section>
  );
}