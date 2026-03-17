"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

export default function LegalDisclaimer() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const accepted = localStorage.getItem("hireadvocates_disclaimer");
      if (!accepted) {
        setShow(true);
        document.body.style.overflow = "hidden";
      }
    } catch (error) {
      console.error("LocalStorage access error:", error);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAgree = useCallback(() => {
    try {
      localStorage.setItem("hireadvocates_disclaimer", "true");
    } catch (error) {
      console.error("LocalStorage error:", error);
    }
    setShow(false);
    document.body.style.overflow = "auto";
  }, []);

  const handleDecline = useCallback(() => {
    window.location.href = "https://www.barcouncilofindia.org/";
  }, []);

  // ✅ Don't render until mounted on client
  if (!mounted) return null;
  // ✅ Don't render if user already agreed
  if (!show) return null;

  return createPortal(
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, 
               display: "flex", alignItems: "center", justifyContent: "center",
               backgroundColor: "rgba(0,0,0,0.6)", padding: "16px" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-disclaimer-title"
    >
      <div style={{ backgroundColor: "white", maxWidth: "512px", width: "100%",
                    borderRadius: "12px", boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                    padding: "24px" }}>
        
        <h2 id="legal-disclaimer-title"
            style={{ fontSize: "20px", fontWeight: "bold", color: "#111827",
                     marginBottom: "16px", textAlign: "center" }}>
          Legal Disclaimer
        </h2>

        <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6",
                      maxHeight: "300px", overflowY: "auto", paddingRight: "8px" }}>
          <p style={{ marginBottom: "12px" }}>
            As per the rules of the Bar Council of India, law firms and legal
            professionals are not permitted to solicit work or advertise
            through public communication.
          </p>
          <p style={{ marginBottom: "12px" }}>
            This website is provided solely for informational purposes. The
            content available on this website should not be interpreted as
            legal advice or solicitation.
          </p>
          <p style={{ marginBottom: "12px" }}>
            By clicking <strong>"AGREE"</strong>, you acknowledge that you are
            accessing this website voluntarily to obtain information about legal
            services and that no solicitation, advertisement, or inducement has
            been made by HireAdvocates.
          </p>
          <p>
            HireAdvocates shall not be responsible for any decisions taken by
            users based solely on the information provided on this website.
            Users are advised to seek professional legal consultation for
            specific legal matters.
          </p>
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
          <button
            onClick={handleAgree}
            style={{ flex: 1, backgroundColor: "#2563eb", color: "white",
                     fontWeight: "600", padding: "12px", borderRadius: "8px",
                     border: "none", cursor: "pointer", fontSize: "14px" }}
          >
            AGREE
          </button>
          <button
            onClick={handleDecline}
            style={{ flex: 1, backgroundColor: "#e5e7eb", color: "#111827",
                     fontWeight: "600", padding: "12px", borderRadius: "8px",
                     border: "none", cursor: "pointer", fontSize: "14px" }}
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}