import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title:
    "India’s New Criminal Code: Bharatiya Nyaya Sanhita (BNS) Explained | HireAdvocates",
  description:
    "Understand how the Bharatiya Nyaya Sanhita (BNS) replaced the Indian Penal Code and introduced new offences, punishments and reforms in India’s criminal law.",
};

export default function BNSBlog() {
  return (
    <main className="blog-detail-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">

          <h1>
            India’s New Criminal Code: What the Bharatiya Nyaya Sanhita Quietly Changed
          </h1>

          <p>
            Understanding how the Bharatiya Nyaya Sanhita (BNS) replaced the Indian Penal Code and introduced new reforms in India’s criminal law system.
          </p>

        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="blog-content-section">
        <div className="container blog-container">

          <h2>Introduction</h2>

          <p>
            India’s criminal law system underwent one of its biggest transformations
            in decades when the <strong>Bharatiya Nyaya Sanhita, 2023</strong> came
            into force on <strong>1 July 2024</strong>, replacing the colonial-era
            Indian Penal Code of 1860.
          </p>

          <p>
            The reform was introduced to modernise criminal justice and remove
            colonial influence from Indian law. While many provisions remain
            similar to earlier IPC sections, the new law introduces updated
            offences, revised punishments and a different approach to crime
            and public order.
          </p>

          <p>
            Today, FIRs, police investigations and court proceedings across India
            are being registered under the BNS instead of the IPC.
          </p>


          <h2>A Historic Shift in Criminal Law</h2>

          <p>
            The Bharatiya Nyaya Sanhita forms part of a broader reform of
            India’s criminal justice framework.
          </p>

          <p>
            Along with the <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS)</strong>
            and the <strong>Bharatiya Sakshya Adhiniyam (BSA)</strong>, it replaces
            three colonial criminal statutes that governed Indian law for more
            than 150 years.
          </p>

          <p>
            The objective of these reforms is to create a justice-centric and
            citizen-focused criminal law system.
          </p>


          <h2>New Offences Introduced Under BNS</h2>

          <p>
            The BNS recognises several modern forms of crime that were not
            clearly addressed earlier.
          </p>

          <ul>
            <li>Mob lynching</li>
            <li>Organised crime</li>
            <li>Acts threatening the sovereignty or unity of India</li>
            <li>Online and financial fraud</li>
          </ul>

          <p>
            These provisions reflect the growing importance of addressing
            organised and collective criminal activity in modern society.
          </p>


          <h2>Section 69 and Relationship-Based Offences</h2>

          <p>
            One of the most debated provisions of the BNS is
            <strong> Section 69</strong>, which criminalises sexual intercourse
            obtained through deceitful means such as false promises of marriage.
          </p>

          <p>
            Courts have already begun interpreting this provision, and legal
            debates continue regarding how criminal law should address issues
            related to personal relationships and consent.
          </p>


          <h2>A Different Approach to Punishment</h2>

          <p>
            The BNS introduces <strong>community service</strong> as a punishment
            for certain minor offences.
          </p>

          <p>
            This reflects an attempt to move beyond purely punitive imprisonment
            and adopt corrective or reform-based penalties in appropriate cases.
          </p>

          <p>
            The reform is also linked to broader efforts to reduce prison
            overcrowding.
          </p>


          <h2>A Law That Still Raises Questions</h2>

          <p>
            Despite its objectives, the Bharatiya Nyaya Sanhita has generated
            significant debate among legal scholars and practitioners.
          </p>

          <p>
            Some critics argue that certain provisions may be broadly worded
            or open to interpretation, particularly those related to national
            security and public order.
          </p>

          <p>
            Others believe the reforms represent a necessary step toward
            modernising India’s criminal law framework.
          </p>


          <h2>Conclusion</h2>

          <p>
            The Bharatiya Nyaya Sanhita marks one of the most important changes
            in India’s criminal law since independence.
          </p>

          <p>
            By replacing the Indian Penal Code and introducing new offences,
            revised punishments and updated legal definitions, the BNS has begun
            reshaping India’s criminal justice system.
          </p>

          <p>
            However, the true impact of the law will become clearer over time
            through court decisions, investigations and judicial interpretation.
          </p>

        </div>
      </section>


      {/* RELATED BLOGS */}
      <section className="related-blogs">
        <div className="container">

          <h2>Related Legal Articles</h2>

          <div className="related-blog-grid">

            {blogs
              .filter((blog) => blog.slug !== "bharatiya-nyaya-sanhita-criminal-law-changes")
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