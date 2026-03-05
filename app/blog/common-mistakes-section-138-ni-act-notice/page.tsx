import Link from "next/link";
import { blogs } from "@/data/blogs";
export const metadata = {
  title:
    "Common Mistakes After Receiving Section 138 NI Act Notice | HireAdvocates",
  description:
    "Understand the most common mistakes accused individuals make after receiving a cheque bounce notice under Section 138 of the Negotiable Instruments Act.",
};

export default function Section138Blog() {
  return (
    <main className="blog-detail-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">

          <h1>
            Common Mistakes Accused Make After Receiving a Section 138 NI Act
            Notice — And How It Can Cost You
          </h1>

          <p>
            Understanding the legal consequences and common mistakes made
            after receiving a cheque bounce notice under Section 138 of the
            Negotiable Instruments Act.
          </p>

        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="blog-content-section">
        <div className="container blog-container">

          <h2>Introduction</h2>

          <p>
            Receiving a cheque bounce notice can be stressful. Many accused
            individuals assume the notice is only a pressure tactic and delay
            responding to it.
          </p>

          <p>
            However, under Section 138 of the Negotiable Instruments Act,
            failure to pay the cheque amount within 15 days of receiving a
            valid demand notice can result in criminal prosecution.
          </p>

          <p>
            That 15-day window is one of the most critical stages in cheque
            bounce matters, and many people make serious legal mistakes during
            this time.
          </p>

          <h2>1. Ignoring the Notice Completely</h2>

          <p>
            Many people believe a legal notice is simply intimidation.
            In reality, once the notice is received, the legal clock starts.
          </p>

          <ul>
            <li>Make the cheque payment</li>
            <li>Send a proper legal reply explaining your defence</li>
          </ul>

          <p>
            Ignoring the notice gives the complainant a straightforward path
            to file a criminal complaint.
          </p>

          <h2>2. Missing the 15-Day Window</h2>

          <p>
            The law provides exactly fifteen days to make payment after
            receiving the notice.
          </p>

          <p>
            If payment is made within this period, the offence is not
            considered complete.
          </p>

          <p>
            Once the period expires, the complainant gains the right to
            initiate criminal proceedings.
          </p>

          <h2>3. Sending a Weak or Casual Reply</h2>

          <p>
            Some accused respond with vague statements such as:
          </p>

          <ul>
            <li>“I will arrange payment soon.”</li>
            <li>“I deny the allegations.”</li>
          </ul>

          <p>
            These statements do not constitute a proper legal defence.
          </p>

          <p>
            A proper reply should clearly explain whether liability exists,
            whether the cheque was issued as security, and whether payment
            has already been made.
          </p>

          <h2>4. Assuming “I Didn’t Receive It” Is Enough</h2>

          <p>
            Courts often presume delivery if the notice was sent through
            registered post or speed post to the correct address.
          </p>

          <p>
            Simply denying receipt is rarely sufficient to defeat the case.
          </p>

          <h2>5. Not Checking the Demand Amount Carefully</h2>

          <p>
            Under Section 138, the notice must demand exactly the cheque
            amount.
          </p>

          <p>
            If the notice demands additional amounts such as interest or
            charges within the same demand, it may sometimes render the
            notice legally defective.
          </p>

          <h2>6. Believing Payment After 15 Days Ends the Matter</h2>

          <p>
            Payment after the statutory period may assist settlement,
            but it does not automatically erase the offence.
          </p>

          <p>
            Once the statutory period expires, the complainant still has
            the right to file a criminal complaint.
          </p>

          <h2>7. Waiting for Court Summons Before Consulting a Lawyer</h2>

          <p>
            Many accused individuals wait until court summons are issued
            before seeking legal advice.
          </p>

          <p>
            By that time the complainant has already filed the complaint
            and the opportunity for strategic reply has passed.
          </p>

          <p>
            Early legal advice can help:
          </p>

          <ul>
            <li>Prepare a structured legal reply</li>
            <li>Evaluate whether liability exists</li>
            <li>Negotiate settlement</li>
            <li>Identify technical defects in the notice</li>
          </ul>

          <h2>What Most Accused Get Wrong</h2>

          <p>
            Many people treat the notice stage casually, but in cheque
            bounce matters the notice stage is the first legal battleground.
          </p>

          <p>
            The way you respond within those fifteen days can shape the
            entire case that follows.
          </p>

          <h2>Conclusion</h2>

          <p>
            Receiving a Section 138 notice is not the end of the world,
            but it is a critical legal moment.
          </p>

          <p>
            Ignoring the notice, missing deadlines, sending weak replies,
            or delaying legal consultation can seriously damage your
            defence.
          </p>

          <p>
            Strategy begins the day the notice arrives  not when the
            court case begins.
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