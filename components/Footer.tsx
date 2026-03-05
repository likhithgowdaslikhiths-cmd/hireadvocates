"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-elite">

      <div className="footer-top-glow"></div>

      <div className="footer-container">

        {/* Brand Column */}
        <div className="footer-col brand">

          {/* Logo */}
          <Link href="/" className="footer-logo">
            <Image
              src="/logo2.png"
              alt="HireAdvocates Logo"
              width={160}
              height={45}
              priority
            />
          </Link>

          <p>
            India’s trusted legal connection platform connecting individuals
            and businesses with verified lawyers across India.
          </p>

          <div className="footer-stats">
            <span>5,000+ Lawyers</span>
            <span>500+ Cities</span>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/hire-a-lawyer">Hire a Lawyer</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div className="footer-col">
          <h4>Practice Areas</h4>
          <ul>
            <li><Link href="/services">Criminal Law</Link></li>
            <li><Link href="/services">Family & Divorce</Link></li>
            <li><Link href="/services">Property Disputes</Link></li>
            <li><Link href="/services">Corporate Law</Link></li>
            <li><Link href="/services">Civil Litigation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>

          <div className="footer-contact">

            <div>
              <Mail size={16} />
              <a href="mailto:info@hireadvocates.com">
                info@hireadvocates.com
              </a>
            </div>

            <div>
              <MapPin size={16} />
              <a
                href="https://www.google.com/maps/search/?api=1&query=3rd+Phase,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085"
                target="_blank"
                rel="noopener noreferrer"
              >
                3rd Phase, Banashankari 3rd Stage,<br />
                Banashankari, Bengaluru,<br />
                Karnataka 560085
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">

        <div className="footer-bottom-left">
          © {new Date().getFullYear()} HireAdvocates. All rights reserved.
        </div>

        <div className="footer-bottom-center">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>

        <div className="footer-bottom-right">
          Designed & Developed by{" "}
          <a
            href="https://worexa.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Worexa Technologies
          </a>
        </div>

      </div>

    </footer>
  );
}