"use client";
import { useEffect, useState, useCallback } from "react";

export default function LegalDisclaimer() {
  const [show, setShow] = useState(false);

  // ✅ Optimized useCallback for better performance
  const handleAgree = useCallback(() => {
    localStorage.setItem("hireadvocates_disclaimer", "true");
    setShow(false);
    document.body.style.overflow = "auto";
  }, []);

  const handleDecline = useCallback(() => {
    window.location.href = "https://google.com";
  }, []);

  useEffect(() => {
    const accepted = localStorage.getItem("hireadvocates_disclaimer");
    if (!accepted) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }

    // ✅ Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!show) return null;

  return (
    <div className="disclaimer-overlay fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div className="disclaimer-modal bg-white max-w-md w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6">
        <div className="disclaimer-title text-xl font-bold text-gray-900 mb-6 text-center">
          Legal Disclaimer
        </div>

        <div className="disclaimer-text text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            As per the Bar Council of India rules, law firms are prohibited
            from advertising or soliciting work through public communication.
          </p>

          <p>
            This website is intended solely for informational purposes.
            By clicking "AGREE", you acknowledge that you are accessing
            this website voluntarily and that no solicitation is involved.
          </p>

          <p>
            HireAdvocates shall not be responsible for any decisions taken
            based on the information provided on this website.
          </p>
        </div>

        <div className="disclaimer-buttons flex gap-3 mt-8">
          <button 
            className="agree-btn flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            onClick={handleAgree}
          >
            AGREE
          </button>

          <button 
            className="decline-btn flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            onClick={handleDecline}
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>
  );
}
