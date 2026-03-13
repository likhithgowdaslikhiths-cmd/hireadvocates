import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title:
    "Domestic Violence Act in India Explained | Scope Beyond Physical Abuse",
  description:
    "Understand how the Protection of Women from Domestic Violence Act, 2005 recognises emotional, economic and psychological abuse in domestic relationships.",
};

export default function DomesticViolenceBlog() {
  return (
    <main className="blog-detail-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="container">

          <h1>
            Beyond Physical Abuse: Understanding the Reach of the Domestic Violence Act in India
          </h1>

          <p>
            How Indian law recognises emotional, economic and psychological abuse
            within domestic relationships.
          </p>

        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="blog-content-section">
        <div className="container blog-container">

          <h2>Introduction</h2>

          <p>
            Domestic violence is often imagined as physical assault within a
            household. However, the law in India recognises that abuse within
            relationships can take many different forms — some visible and others
            far less obvious.
          </p>

          <p>
            The Protection of Women from Domestic Violence Act, 2005 was
            introduced to address violence occurring within domestic
            relationships and to provide legal recognition to forms of abuse
            that were previously ignored or difficult to prove in court.
          </p>

          <p>
            Over the years, the Act has become one of the most frequently invoked
            laws in family disputes. Yet many people remain unaware that domestic
            violence under this law includes emotional, verbal, economic and
            psychological abuse, not just physical harm.
          </p>


          <h2>A Law That Goes Beyond Physical Violence</h2>

          <p>
            One of the most significant features of the Domestic Violence Act is
            its broad definition of abuse.
          </p>

          <p>Under the law, domestic violence may include:</p>

          <ul>
            <li>Physical harm</li>
            <li>Verbal and emotional abuse</li>
            <li>Economic deprivation</li>
            <li>Threats or intimidation</li>
            <li>Controlling behaviour within a household</li>
          </ul>

          <p>
            This expanded definition recognises that harm within domestic
            relationships often occurs in non-physical ways that can be equally
            damaging.
          </p>


          <h2>The Law Applies to More Than Just Married Couples</h2>

          <p>
            A lesser-known aspect of the Act is that it does not apply only to
            legally married spouses.
          </p>

          <p>
            The law also recognises relationships in the nature of marriage,
            commonly referred to as live-in relationships.
          </p>

          <p>
            Courts often examine factors such as shared residence, duration of
            the relationship and how the couple presented themselves socially
            while interpreting this concept.
          </p>


          <h2>The Concept of the “Shared Household”</h2>

          <p>
            Another frequently debated issue under the Act is the idea of a
            shared household.
          </p>

          <p>
            The law recognises the right of a woman to reside in a household
            where she has lived in a domestic relationship, even if she does not
            own the property.
          </p>

          <p>This concept has led to disputes involving:</p>

          <ul>
            <li>Marital homes</li>
            <li>In-laws’ properties</li>
            <li>Jointly occupied residences</li>
          </ul>

          <p>
            Courts have clarified that the meaning of a shared household depends
            on the nature of residence and the relationship between the parties.
          </p>


          <h2>A Law That Continues to Evolve Through Judicial Interpretation</h2>

          <p>
            Since its enactment in 2005, the Domestic Violence Act has been
            shaped extensively by court decisions.
          </p>

          <p>Judicial rulings have examined issues such as:</p>

          <ul>
            <li>Whether relatives outside the household can be named in complaints</li>
            <li>How live-in relationships are evaluated under the law</li>
            <li>What constitutes emotional or economic abuse</li>
            <li>The interpretation of shared household rights</li>
          </ul>


          <h2>Issues That Often Arise in Domestic Violence Proceedings</h2>

          <p>
            Domestic violence litigation often raises questions about domestic
            relationships and household rights.
          </p>

          <ul>
            <li>The nature of the domestic relationship</li>
            <li>The existence of a shared household</li>
            <li>Allegations of emotional or economic abuse</li>
            <li>Financial arrangements within the household</li>
            <li>The role of extended family members</li>
          </ul>


          <h2>Why Domestic Violence Cases Often Become Legally Complex</h2>

          <p>
            Domestic violence cases frequently intersect with multiple areas of
            law including matrimonial disputes, maintenance claims, property
            rights and criminal allegations.
          </p>

          <p>
            Because of this overlap, proceedings under the Domestic Violence Act
            can become legally and emotionally complex for everyone involved.
          </p>


          <h2>Final Thoughts</h2>

          <p>
            The Protection of Women from Domestic Violence Act, 2005 marked a
            major shift in how Indian law recognises abuse within domestic
            relationships.
          </p>

          <p>
            By expanding the definition of violence beyond physical harm and
            recognising different forms of domestic relationships, the law
            brought many previously ignored situations under legal scrutiny.
          </p>

          <p>
            As courts continue interpreting the Act, its true scope continues to
            evolve through judicial decisions and legal debates.
          </p>

        </div>
      </section>


      {/* RELATED BLOGS */}
      <section className="related-blogs">
        <div className="container">

          <h2>Related Legal Articles</h2>

          <div className="related-blog-grid">

            {blogs
              .filter((blog) => blog.slug !== "domestic-violence-act-india-explained")
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