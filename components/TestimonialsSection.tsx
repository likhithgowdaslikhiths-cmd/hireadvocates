"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta.",
    text: "I needed a lawyer quickly and they helped me find without any confusion. The process was simple and I got connected the same day. Very helpful service"
  },
  {
    name: "Sandeep Rao.",
    text: "Reliable platform to find legal professionals. It saved me the effort of asking around."
  },
  {
    name: "Anitha Ravi.",
    text: "I was confused about the legal steps for my issue, but the advocate I connected with guided me clearly from the start. Everything went smoothly and I felt much more confident about my case."
  },
  {
    name: "Megha H R.",
    text: "The advocate was approachable and explained things clearly. Good support overall."
  },
  {
    name: "Ashirwad Tanoj.",
    text: "I had a consumer complaint issue and the advocate guided me properly on what steps to take. The process was handled smoothly and I’m happy with the support I received."
  },
  {
    name: "Meghana Shreyas.",
    text: "I appreciate the clear advice I got. The advocate made sure I understood the options before moving forward."
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
                    {[...Array(6)].map((_, i) => (
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
                    {[...Array(6)].map((_, i) => (
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