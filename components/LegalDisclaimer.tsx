"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

export default function LegalDisclaimer() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures we're on the client before using portal
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

  if (!show || !mounted) return null;

  // ✅ Portal renders directly into <body>, bypassing broken parent stacking contexts
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-disclaimer-title"
    >
      <div className="bg-white max-w-lg w-full rounded-xl shadow-2xl p-6">
        <h2
          id="legal-disclaimer-title"
          className="text-xl font-bold text-gray-900 mb-4 text-center"
        >
          Legal Disclaimer
        </h2>

        <div className="text-sm text-gray-700 space-y-4 leading-relaxed max-h-[300px] overflow-y-auto pr-2">
          <p>
            As per the rules of the Bar Council of India, law firms and legal
            professionals are not permitted to solicit work or advertise
            through public communication.
          </p>
          <p>
            This website is provided solely for informational purposes. The
            content available on this website should not be interpreted as
            legal advice or solicitation.
          </p>
          <p>
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

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAgree}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            AGREE
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition duration-200"
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>,
    document.body // ✅ Renders outside all parent containers
  );
}