"use client";
import { useState, useEffect, useCallback } from "react";
import { ShieldCheck, Users, Scale } from "lucide-react";
import dynamic from "next/dynamic";

export default function Hero() {
  const Select = dynamic(() => import("react-select"), {
    ssr: false,
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

  // Handle hero dropdown change
  const handleSearchChange = (e: any) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

 const handleOpenForm = () => {
    setFormData({
      ...formData,
      state: searchData.state ? searchData.state.value : "",
      caseType: searchData.caseType,
    });
    setOpenForm(true);
  };

  // Handle popup form change
  const handleFormChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const getMenuPortalTarget = useCallback(() => {
    if (typeof document !== "undefined") {
      return document.body;
    }
    return undefined;
  }, []);

  return (
    <>
    <section className="hero-section">
      <div className="hero-content">

        <h1>
          India’s Trusted <span>Legal Connection</span> Platform
        </h1>
        <p className="hero-description"> 5,000+ Verified Lawyers. 500+ Cities</p>

      <div className="hero-live-badge">
  <div className="live-avatars">
    <img src="https://i.pravatar.cc/30?img=1" alt="" />
    <img src="https://i.pravatar.cc/30?img=2" alt="" />
    <img src="https://i.pravatar.cc/30?img=3" alt="" />
    <div className="google-badge">G</div>
  </div>

  <span>
    <strong>96 Lawyer's are online</strong> 
  </span>

  <div className="live-dot"></div>
</div>

       {/* Improved Search Box */}
          <div className="hero-search-box">
          <div className="input-group">
            <label>Location</label>
            <Select
              options={stateOptions}
              placeholder="Karnataka"
              value={searchData.state}
              menuPortalTarget={getMenuPortalTarget()}
              menuPosition="fixed"
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
              onChange={(selected: any) =>
                setSearchData({
                  ...searchData,
                  state: selected,
                })
              }
            />
          </div>
            <div className="input-group">
              <label>Case Type</label>
              <select
                name="caseType"
                onChange={handleSearchChange}
              >
                <option value="">Select Case Type</option>
                <option value="Divorce">Divorce</option>
                <option value="Criminal">Criminal</option>
                <option value="Corporate">Corporate</option>
              </select>
            </div>

            <button
              className="hero-btn"
              onClick={handleOpenForm}
            >
              Request Lawyer →
            </button>

          </div>

        

        {/* Trust Indicators */}
        <div className="hero-trust">
  <div className="trust-item">
    <ShieldCheck size={20} className="trust-icon" />
    <span>Verified Lawyers</span>
  </div>

  <div className="trust-item">
    <Users size={20} className="trust-icon" />
    <span>Trusted by 10K+ Clients</span>
  </div>

  <div className="trust-item">
    <Scale size={20} className="trust-icon" />
    <span>All Legal Categories</span>
  </div>
</div>
      </div>
    </section>
   {openForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button
              className="close-popup"
              onClick={() => setOpenForm(false)}
            >
              ✕
            </button>

            <h2>Request a Lawyer</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleFormChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleFormChange}
            />

            
           <Select
              options={stateOptions}
              placeholder="Search or Select State"
              value={searchData.state}
              menuPortalTarget={getMenuPortalTarget()}
              menuPosition="fixed"
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
              onChange={(selected: any) =>
                setSearchData({
                  ...searchData,
                  state: selected,
                })
              }
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleFormChange}
            />

            <select
              name="caseType"
              value={formData.caseType}
              onChange={handleFormChange}
            >
              <option value="">Select Case Type</option>
              <option value="Divorce">Divorce</option>
              <option value="Criminal">Criminal</option>
              <option value="Corporate">Corporate</option>
            </select>

            <button className="submit-btn">
              Submit Request
            </button>

          </div>
        </div>
      )}
    </>

    
  );
}