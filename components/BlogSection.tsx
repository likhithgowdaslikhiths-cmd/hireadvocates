"use client";

import Link from "next/link";

const blogs = [
  {
    title: "Supreme Court Strengthens Homebuyers’ Rights in Delayed Possession Cases",
    slug: "supreme-court-homebuyers-rights",
    excerpt:
      "The Supreme Court reinforces compensation rights for homebuyers facing delayed possession and missing Occupancy Certificates."
  },
  {
    title: "Karnataka High Court Rules Accident Tribunal Can Hear Personal Accident Cover Claims",
    slug: "karnataka-hc-accident-tribunal",
    excerpt:
      "High Court clarifies tribunal jurisdiction for personal accident insurance claims under motor accident matters."
  },
  {
    title: "Delhi High Court Limits Black Money Act for ‘Involuntary Residents’",
    slug: "delhi-hc-black-money-act",
    excerpt:
      "Important clarification on applicability of the Black Money Act for individuals who became residents involuntarily."
  }
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">

        <h2>Latest Legal Insights</h2>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>

              <Link href={`/blog/${blog.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          ))}
        </div>

        <div className="blog-btn-wrapper">
          <Link href="/blog" className="view-more-btn">
            View More Blogs →
          </Link>
        </div>

      </div>
    </section>
  );
}