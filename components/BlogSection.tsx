"use client";

import Link from "next/link";
import { blogs } from "@/data/blogs";
export default function BlogSection() {
  return (
    <section className="home-blog-section">

      <div className="container">

        <div className="blog-header">
          <h2>Legal Insights & Articles</h2>
          <p>
            Practical legal guidance on criminal law, property disputes,
            family matters and civil litigation across India.
          </p>
        </div>

        <div className="blog-grid">

          {blogs.slice(0,3).map((blog) => (
            <div className="blog-card" key={blog.slug}>

              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <span>{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>

                <Link
                    href={`/blog/${blog.slug}`}
                    className="blog-read-btn"
                  >
                    Read Article →
                  </Link>
              </div>

            </div>
          ))}

        </div>

        <div className="blog-view-all">
          <Link href="/blog">View All Articles</Link>
        </div>

      </div>

    </section>
  );
}