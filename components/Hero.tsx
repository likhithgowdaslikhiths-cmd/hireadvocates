"use client";
import { useState, useCallback } from "react";
import { ShieldCheck, Users, Scale } from "lucide-react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <div>Loading states...</div>,
});

const stateOptions = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
];

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hero search box state
  const [searchData, setSearchData] = useState({
    state: null as any,
    caseType: "",
  });

  // Popup form state — includes email now
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    location: "",
    caseType: "",
  });

  // ── Handlers ──────────────────────────────────────────────────────

  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Syncs both searchData AND formData when state is selected
  const handleSelectChange = (selected: any) => {
    setSearchData({ ...searchData, state: selected });
    setFormData({ ...formData, state: selected ? selected.value : "" });
  };

  // ✅ Opens popup and pre-fills state + caseType from hero search
  const handleOpenForm = () => {
    setFormData((prev) => ({
      ...prev,
      state: searchData.state ? searchData.state.value : "",
      caseType: searchData.caseType,
    }));
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
    setFormData({ name: "", phone: "", email: "", state: "", location: "", caseType: "" });
    setSearchData({ state: null, caseType: "" });
  };

  // ✅ Submits form data including email
  const handleSubmit = async () => {
    if (loading) return;

    // Basic client-side validation
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
        alert("✅ Request submitted successfully! We'll connect you soon.");
        handleClose();
      } else {
        alert("❌ " + (data.error || "Something went wrong. Please try again."));
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("🌐 Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const getMenuPortalTarget = useCallback(() => {
    return typeof document !== "undefined" ? document.body : undefined;
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>India's Trusted <span>Legal Connection</span> Platform</h1>
          <p className="hero-description">1,000+ Verified Lawyers. 100+ Cities</p>

          {/* Live badge */}
          <div className="hero-live-badge">
            <div className="live-avatars">
              <img src="/avatars/h1.png" alt="Lawyer" />
              <img src="/avatars/h2.png" alt="Lawyer" />
              <img src="/avatars/h3.png" alt="Lawyer" />
              <img src="/avatars/google-badge.png" alt="Google badge" className="google-badge" />
            </div>
            <span><strong>96 Lawyers are online</strong></span>
            <div className="live-dot"></div>
          </div>

          {/* Hero Search Box */}
          <div className="hero-search-box">
            <div className="input-group">
              <label>Location</label>
              <Select
                options={stateOptions}
                placeholder="Karnataka"
                value={searchData.state}
                menuPortalTarget={getMenuPortalTarget()}
                menuPosition="fixed"
                styles={{ menuPortal: (base: any) => ({ ...base, zIndex: 9999 }) }}
                onChange={handleSelectChange}
              />
            </div>
            <div className="input-group">
              <label>Case Type</label>
              <select name="caseType" value={searchData.caseType} onChange={handleSearchChange}>
                <option value="">Select Case Type</option>
                <option value="Divorce">Divorce</option>
                <option value="Criminal">Criminal</option>
                <option value="Corporate">Corporate</option>
              </select>
            </div>
            <button className="submit-btn" onClick={handleOpenForm}>
              Submit Request
            </button>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>Verified Lawyers</span>
            </div>
            <div className="trust-item">
              <Users size={20} className="trust-icon" />
              <span>98% Client Satisfaction Rate</span>
            </div>
            <div className="trust-item">
              <Scale size={20} className="trust-icon" />
              <span>All Legal Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {openForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-popup" onClick={handleClose}>✕</button>
            <h2>Request a Lawyer</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={handleFormChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number * (10 digits)"
              value={formData.phone}
              onChange={handleFormChange}
            />

            {/* ✅ NEW: Email field for confirmation mail */}
            <input
              type="email"
              name="email"
              placeholder="Email Address (for confirmation)"
              value={formData.email}
              onChange={handleFormChange}
            />

            {/* ✅ FIXED: State syncs to formData */}
            <Select
              options={stateOptions}
              placeholder="Search or Select State"
              value={searchData.state}
              menuPortalTarget={getMenuPortalTarget()}
              menuPosition="fixed"
              styles={{ menuPortal: (base: any) => ({ ...base, zIndex: 9999 }) }}
              onChange={handleSelectChange}
            />

            <input
              type="text"
              name="location"
              placeholder="City / District"
              value={formData.location}
              onChange={handleFormChange}
            />

            <select name="caseType" value={formData.caseType} onChange={handleFormChange}>
              <option value="">Select Case Type</option>
              <option value="Divorce">Divorce</option>
              <option value="Criminal">Criminal</option>
              <option value="Corporate">Corporate</option>
            </select>

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}