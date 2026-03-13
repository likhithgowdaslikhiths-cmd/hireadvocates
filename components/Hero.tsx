"use client";
import { useState, useEffect, useCallback } from "react";
import { ShieldCheck, Users, Scale } from "lucide-react";
import dynamic from "next/dynamic";

export default function Hero() {
  const Select = dynamic(() => import("react-select"), {
    ssr: false,
    loading: () => <div>Loading states...</div> // ✅ Fix hydration
  });
    const [openForm, setOpenForm] = useState(false);
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
  // Hero dropdown state
  const [searchData, setSearchData] = useState({
    state: null as any,
    caseType: "",
  });
  // Popup form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    location: "",
    caseType: "",
  });
const handleSubmit = async () => {
    try {
      console.log("Submitting:", formData); // Debug log
      
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        alert("✅ Request submitted successfully!");
        setOpenForm(false);
        // Reset forms
        setFormData({ name: "", phone: "", state: "", location: "", caseType: "" });
        setSearchData({ state: null, caseType: "" });
      } else {
        alert("❌ " + (data.error || "Something went wrong"));
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("🌐 Network error. Check console & try again.");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED: Hero button OPENS form (not submits)
  const handleOpenForm = () => {
    setFormData({
      ...formData,
      state: searchData.state ? searchData.state.value : "",
      caseType: searchData.caseType,
    });
    setOpenForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selected: any) => {
    setSearchData({ ...searchData, state: selected });
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

          {/* Live badge unchanged */}
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
          {/* ✅ FIXED Search Box */}
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
            {/* ✅ FIXED: Opens form INSTEAD of submitting */}
            <button className="submit-btn" onClick={handleOpenForm}>
              Submit Request
            </button>
          </div>

          {/* Trust indicators unchanged */}
          <div className="hero-trust">
            <div className="trust-item"><ShieldCheck size={20} className="trust-icon" /><span>Verified Lawyers</span></div>
            <div className="trust-item"><Users size={20} className="trust-icon" /><span>98% Client Satisfaction Rate</span></div>
            <div className="trust-item"><Scale size={20} className="trust-icon" /><span>All Legal Categories</span></div>
          </div>
        </div>
      </section>

      {/* ✅ FIXED Popup Form */}
      {openForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button className="close-popup" onClick={() => setOpenForm(false)}>✕</button>
            <h2>Request a Lawyer</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleFormChange}
            />
            
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
              placeholder="Location"
              value={formData.location}
              onChange={handleFormChange}
            />

            <select name="caseType" value={formData.caseType} onChange={handleFormChange}>
              <option value="">Select Case Type</option>
              <option value="Divorce">Divorce</option>
              <option value="Criminal">Criminal</option>
              <option value="Corporate">Corporate</option>
            </select>

            {/* ✅ FIXED: THIS button submits (popup one) */}
            <button className="submit-btn" onClick={handleSubmit}>
              Submit Request
            </button>
          </div>
        </div>
      )}
    </>
  );
}