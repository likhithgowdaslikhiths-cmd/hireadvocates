import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title:
    "How Criminal Complaints Are Misused in Property Disputes | HireAdvocates",
  description:
    "Understand when property disputes become criminal cases in India and when criminal law is misused in civil property disputes.",
};

export default function BlogDetail() {

  const currentSlug = "criminal-complaints-property-disputes";

  return (
    <main className="blog-detail-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">

          <h1>
            How Criminal Complaints Are Misused in Property Disputes
          </h1>

          <p>
            Understanding the difference between civil property disputes and
            genuine criminal offences under Indian law.
          </p>

        </div>
      </section>


      {/* BLOG CONTENT */}
      <section className="blog-content-section">
        <div className="container blog-container">

          <h2>Introduction</h2>

          <p>
            Property disputes in India are usually civil matters involving
            ownership, possession, title validity, and contractual obligations.
          </p>

          <p>
            However, many disputes that begin as civil disagreements
            increasingly turn into criminal complaints involving allegations
            such as cheating, forgery, breach of trust, or criminal intimidation.
          </p>

          <p>
            This raises an important legal question: when does a property dispute
            genuinely become a crime, and when is criminal law used as a pressure tactic?
          </p>

          <h2>1. Why Criminal Complaints Are Filed in Property Matters</h2>

          <p>
            Criminal complaints are sometimes filed not purely for justice,
            but as a strategy to gain leverage in a dispute.
          </p>

          <ul>
            <li>Police involvement</li>
            <li>Fear of arrest</li>
            <li>Reputational pressure</li>
            <li>Settlement pressure</li>
          </ul>

          <p>
            Unlike civil litigation, which can take years, criminal proceedings
            create immediate pressure.
          </p>

          <h2>2. Common Criminal Allegations in Property Disputes</h2>

          <ul>
            <li>Section 420 IPC – Cheating</li>
            <li>Section 406 IPC – Criminal Breach of Trust</li>
            <li>Sections 467–471 IPC – Forgery</li>
            <li>Section 506 IPC – Criminal Intimidation</li>
            <li>Section 441 IPC – Trespass</li>
          </ul>

          <p>
            However, not every failed agreement or dispute over ownership
            automatically becomes a criminal offence.
          </p>

          <h2>
            3. The Key Legal Test – Dishonest Intention From the Beginning
          </h2>

          <p>
            The Supreme Court of India has repeatedly clarified that
            a breach of contract alone does not constitute cheating.
          </p>

          <p>
            Criminal liability arises only when dishonest intention
            existed at the very beginning of the transaction.
          </p>

          <h2>4. Judicial Position on Misuse</h2>

          <p>
            Courts have consistently held that criminal law cannot be used
            to settle purely civil disputes.
          </p>

          <ul>
            <li>High Courts can quash such cases under Section 482 CrPC</li>
            <li>Criminal proceedings should not replace civil remedies</li>
          </ul>

          <h2>5. Example Situations</h2>

          <h3>Situation A – Civil Dispute</h3>

          <p>
            A seller agrees to sell property but later discovers a title defect.
            The buyer may file a civil suit for refund or specific performance.
          </p>

          <h3>Situation B – Criminal Offence</h3>

          <p>
            A seller takes money from multiple buyers for the same property.
            This clearly indicates fraudulent intention from the beginning.
          </p>

          <h2>6. How Courts Identify Misuse</h2>

          <ul>
            <li>Timing of the criminal complaint</li>
            <li>Existence of pending civil litigation</li>
            <li>Whether fraud allegations are supported by evidence</li>
            <li>Whether intention at inception is clearly pleaded</li>
          </ul>

          <h2>7. Risks of Misusing Criminal Law</h2>

          <ul>
            <li>FIR may be quashed by High Court</li>
            <li>Courts may impose costs</li>
            <li>Counter-litigation may arise</li>
            <li>Credibility damage in civil court</li>
          </ul>

          <h2>Final Thoughts</h2>

          <p>
            Not every property dispute is a crime. The key factor is
            whether there was deception at the beginning of the transaction.
          </p>

          <p>
            Strategic legal advice early in a dispute can prevent years
            of unnecessary litigation and misuse of criminal law.
          </p>

        </div>
      </section>


      {/* RELATED BLOGS */}
      <section className="related-blogs">
        <div className="container">

          <h2>Related Legal Articles</h2>

          <div className="related-blog-grid">

            {blogs
              .filter((blog) => blog.slug !== currentSlug)
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