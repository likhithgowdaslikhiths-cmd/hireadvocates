"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul K.",
    text: "I booked an online legal consultation and was connected with a verified lawyer within hours. Clear and professional advice."
  },
  {
    name: "Sneha M.",
    text: "Urgent criminal lawyer assistance was handled smoothly. Secure consultation and detailed legal guidance."
  },
  {
    name: "Arjun P.",
    text: "Connected with an experienced family lawyer. Confidential and structured legal consultation."
  },
  {
    name: "Priya S.",
    text: "Excellent platform for cheque bounce and financial dispute matters. Very practical legal advice."
  },
  {
    name: "Mohammed R.",
    text: "As an NRI, I received professional and transparent legal assistance in India."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <h2>Client Testimonials</h2>

        <div className="vertical-testimonials">

          {/* Column 1 */}
          <div className="testimonial-column">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="testimonial-card">
                <p>{item.text}</p>

                <div className="testimonial-footer">
                  <h4>{item.name}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C8A951" color="#C8A951" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="testimonial-column reverse">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="testimonial-card">
                <p>{item.text}</p>

                <div className="testimonial-footer">
                  <h4>{item.name}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C8A951" color="#C8A951" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}