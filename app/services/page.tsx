"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
     {
    title: "NDPS Case Assistance",
    description:
      "Legal support for NDPS (Narcotic Drugs and Psychotropic Substances Act) cases including possession charges, bail applications, investigation procedures and court defence.",
    image: "/services/12.jpg",
  },
    {
      title: "Legal Requirement Assessment",
      description:
        "We review your legal issue, urgency, and location to connect you with the right advocate for accurate consultation.",
      image: "/services/01.jpg",
    },
    {
    title: "ITP Act Case Assistance",
    description:
      "Connect with advocates experienced in Immoral Traffic Prevention (ITP) Act cases for legal defence, court representation and case advisory.",
    image: "/services/13.jpg",
  },
    {
      title: "Advocate Matching & Allocation",
      description:
        "Get matched with independent lawyers based on your legal matter and practice area requirements.",
      image: "/services/02.jpg",
    },
    {
      title: "Criminal Matter Assistance",
      description:
        "Bail matters, criminal defence, FIR issues, police complaint guidance and court representation support.",
      image: "/services/03.jpg",
    },
    {
      title: "Family & Matrimonial Matters",
      description:
        "Divorce, child custody, maintenance, domestic disputes and mutual settlement support.",
      image: "/services/04.jpg",
    },
    {
      title: "Civil & Property Disputes",
      description:
        "Land disputes, partition cases, civil recovery, injunction issues and real estate conflicts.",
      image: "/services/05.jpg",
    },
    {
      title: "Cheque Bounce & Financial Disputes",
      description:
        "Legal support for cheque bounce cases, financial disagreements and recovery matters.",
      image: "/services/06.jpg",
    },
    {
      title: "Corporate & Business Legal Assistance",
      description:
        "Commercial disputes, contract review, compliance issues and partnership conflicts.",
      image: "/services/07.jpg",
    },
    {
      title: "Domestic Violence & Protection Matters",
      description:
        "Confidential legal support for domestic violence and sensitive protection cases.",
      image: "/services/08.jpg",
    },
    {
      title: "NRI Legal Assistance",
      description:
        "Helping NRIs connect with reliable lawyers in India for property and civil matters.",
      image: "/services/09.jpg",
    },
    {
      title: "Pre-Consultation Case Preparation",
      description:
        "Administrative support to organise case details before your consultation.",
      image: "/services/10.jpg",
    },
    {
      title: "Confidential Case Handling",
      description:
        "Structured internal review with strict confidentiality standards.",
      image: "/services/11.jpg",
    },
  ];

  return (
    <main className="services-page">

      <section className="services-hero">
        <h1>Our Legal Services</h1>
        <p>
          Connecting you with verified lawyers across India for every major
          legal matter.
        </p>
      </section>

      <section className="services-grid">

        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => router.push("/hire-a-lawyer")}
          >
            <div className="service-image">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="img"
              />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">
                Hire a Lawyer →
              </span>
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}