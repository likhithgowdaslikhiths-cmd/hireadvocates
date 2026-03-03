"use client";

import { useEffect, useState } from "react";

export default function LegalDisclaimer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("hireadvocates_disclaimer");
    if (!accepted) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("hireadvocates_disclaimer", "true");
    setShow(false);
    document.body.style.overflow = "auto";
  };

  const handleDecline = () => {
    window.location.href = "https://google.com";
  };

  if (!show) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">

        <div className="disclaimer-title">
          Legal Disclaimer
        </div>

        <div className="disclaimer-text">
          <p>
            As per the Bar Council of India rules, law firms are prohibited
            from advertising or soliciting work through public communication.
          </p>

          <br />

          <p>
            This website is intended solely for informational purposes.
            By clicking “AGREE”, you acknowledge that you are accessing
            this website voluntarily and that no solicitation is involved.
          </p>

          <br />

          <p>
            HireAdvocates shall not be responsible for any decisions taken
            based on the information provided on this website.
          </p>
        </div>

        <div className="disclaimer-buttons">
          <button className="agree-btn" onClick={handleAgree}>
            AGREE
          </button>

          <button className="decline-btn" onClick={handleDecline}>
            DECLINE
          </button>
        </div>

      </div>
    </div>
  );
}