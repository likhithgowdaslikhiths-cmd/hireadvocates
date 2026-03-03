"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { FileText, Scale, PhoneCall } from "lucide-react";

export default function HowItWorks() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
    
    setProgress(scrollProgress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="how-it-works" className="how-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>How it Works</h2>
          <p className="how-description">
            We make finding the right lawyer simple and stress-free
          </p>
        </div>

        <div className="how-timeline">
          {/* Step 1 */}
          <div className="step-container">
            <div className="step" style={{ opacity: Math.min(1, progress * 3), transform: `translateY(${20 - progress * 20}px)` }}>
              <div className="step-number">1</div>
              <div className="step-icon">
                <FileText size={24} />
              </div>
              <h3>Share Your Case</h3>
              <p>Provide your legal details securely through our easy online form.</p>
            </div>
          </div>

          {/* Animated Arrow 1 */}
          <div className="arrow-container">
            <div 
              className="arrow" 
              style={{ 
                width: `${Math.min(60, progress * 120)}px`,
                opacity: Math.min(1, progress * 2)
              }}
            />
          </div>

          {/* Step 2 */}
          <div className="step-container">
            <div className="step" style={{ opacity: Math.min(1, (progress - 0.3) * 3), transform: `translateY(${20 - (progress - 0.3) * 20}px)` }}>
              <div className="step-number gold">2</div>
              <div className="step-icon gold">
                <Scale size={24} />
              </div>
              <h3>Smart Lawyer Matching</h3>
              <p>Our platform connects you with a verified lawyer suited to your needs.</p>
            </div>
          </div>

          {/* Animated Arrow 2 */}
          <div className="arrow-container">
            <div 
              className="arrow" 
              style={{ 
                width: `${Math.min(60, (progress - 0.5) * 120)}px`,
                opacity: Math.min(1, (progress - 0.5) * 2)
              }}
            />
          </div>

          {/* Step 3 */}
          <div className="step-container">
            <div className="step" style={{ opacity: Math.min(1, (progress - 0.6) * 3), transform: `translateY(${20 - (progress - 0.6) * 20}px)` }}>
              <div className="step-number green">3</div>
              <div className="step-icon green">
                <PhoneCall size={24} />
              </div>
              <h3>Start with Confidence</h3>
              <p>Speak directly with your lawyer and move forward with clarity.</p>
            </div>
          </div>
        </div>

        <button className="how-btn">
          Connect with a Lawyer Today
        </button>
      </div>
    </section>
  );
}
