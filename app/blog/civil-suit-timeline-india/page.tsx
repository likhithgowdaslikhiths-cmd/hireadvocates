import Link from "next/link";
import { blogs } from "@/data/blogs";
export const metadata = {
  title:
    "Civil Suit Timeline Explained | What Happens After Filing a Civil Case in India",
  description:
    "Step-by-step explanation of the civil suit timeline under the Code of Civil Procedure (CPC) and what litigants can expect after filing a case.",
};

export default function CivilSuitTimelineBlog() {
  return (
    <main className="blog-detail-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">

          <h1>
            Civil Suit Timeline Explained: What Actually Happens After You File a Case
          </h1>

          <p>
            Understanding the real stages of civil litigation under the Code of
            Civil Procedure, 1908.
          </p>

        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="blog-content-section">
        <div className="container blog-container">

          <h2>Introduction</h2>

          <p>
            Many people assume that once a civil suit is filed, the court
            immediately begins hearing arguments and delivering decisions.
          </p>

          <p>
            In reality, civil litigation follows a structured process under the
            Code of Civil Procedure, 1908. Each stage has its own procedure,
            documents, and timelines.
          </p>

          <h2>Stage 1: Filing the Plaint</h2>

          <p>
            The process begins with filing the plaint. This is the formal
            document explaining your claim to the court.
          </p>

          <ul>
            <li>Cause of action</li>
            <li>Jurisdiction</li>
            <li>Facts supporting the claim</li>
            <li>Supporting documents</li>
            <li>Relief sought</li>
          </ul>

          <p>
            If the plaint contains defects or missing documents, the court may
            return or reject it.
          </p>

          <h2>Stage 2: Issuance of Summons</h2>

          <p>
            Once the plaint is accepted, the court issues summons to the
            defendant informing them that a suit has been filed.
          </p>

          <p>
            Delays often occur at this stage due to incorrect addresses or
            difficulty in serving the defendant.
          </p>

          <h2>Stage 3: Written Statement</h2>

          <p>
            The defendant submits a written statement responding to the
            allegations made in the plaint.
          </p>

          <p>
            This must generally be filed within 30 days and may be extended up
            to 90 days in many cases.
          </p>

          <h2>Stage 4: Replication</h2>

          <p>
            If the defendant introduces new facts, the plaintiff may file a
            replication to respond to those allegations.
          </p>

          <h2>Stage 5: Framing of Issues</h2>

          <p>
            The court frames specific questions (issues) that must be decided
            during the trial.
          </p>

          <ul>
            <li>Whether the agreement is valid</li>
            <li>Whether the plaintiff is entitled to relief</li>
          </ul>

          <p>
            These issues determine the direction of the entire case.
          </p>

          <h2>Stage 6: Evidence</h2>

          <p>
            Evidence is the longest phase of most civil suits.
          </p>

          <p>
            Both sides present documents, witness testimony, and cross
            examination under the Indian Evidence Act.
          </p>

          <h2>Stage 7: Final Arguments</h2>

          <p>
            Lawyers present legal arguments summarizing facts, evidence,
            precedents, and law before the judge.
          </p>

          <h2>Stage 8: Judgment</h2>

          <p>
            The court delivers its decision. It may allow the suit, dismiss it,
            or grant partial relief.
          </p>

          <h2>Stage 9: Decree and Execution</h2>

          <p>
            Winning a case does not automatically mean recovery.
          </p>

          <p>
            If the losing party does not comply, execution proceedings may be
            required to enforce the decree.
          </p>

          <h2>How Long Does a Civil Suit Take?</h2>

          <ul>
            <li>Recovery suits: 2–4 years</li>
            <li>Property disputes: 5–10 years</li>
            <li>Commercial suits: 3–6 years</li>
          </ul>

          <h2>Final Thought</h2>

          <p>
            Civil litigation is not just about being right. It is about
            preparation, documentation, and strategy.
          </p>

          <p>
            Proper legal advice and strong documentation can significantly
            reduce delays and improve the chances of success.
          </p>

        </div>
      </section>
<section className="related-blogs">
        <div className="container">

          <h2>Related Legal Articles</h2>

          <div className="related-blog-grid">

            {blogs
              .filter((blog) => blog.slug !== "civil-criminal-strategy-land-litigation")
              .slice(0, 3)
              .map((blog) => (
                <article className="related-blog-card" key={blog.slug}>

                  <div className="related-blog-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>

                  <div className="related-blog-content">

                    <span>{blog.date}</span>

                    <h3>{blog.title}</h3>

                    <Link href={`/blog/${blog.slug}`}>
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