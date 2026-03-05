import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Legal Blog | HireAdvocates",
  description:
    "Expert legal insights on criminal law, property disputes, family law and civil litigation in India.",
};

export default function BlogPage() {
  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">

          <h1>Legal Articles & Insights</h1>

          <p>
            Practical legal guidance and expert insights on property disputes,
            criminal law, civil litigation, and corporate legal matters in India.
          </p>

        </div>
      </section>

      {/* BLOG LIST */}
      <section className="blog-list-section">
        <div className="container">

          <div className="blog-grid">

            {blogs.map((blog) => (
              <article className="blog-card" key={blog.slug}>

                <div className="blog-image">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />
                </div>

                <div className="blog-content">

                  <span className="blog-date">
                    {blog.date}
                  </span>

                  <h3>{blog.title}</h3>

                  <p>{blog.description}</p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="blog-read-btn"
                  >
                    Read Article →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}