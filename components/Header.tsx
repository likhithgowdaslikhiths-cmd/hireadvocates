"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-container">

        {/* Logo */}
        <Link href="/" className="logo">
          Hire<span>Advocates</span>
        </Link>

        {/* Navigation */}
        <nav className={`nav-menu ${open ? "active" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/hire-a-lawyer">Hire a Lawyer</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <button className="primary-btn mobile-btn">
            Book a Call
          </button>
        </nav>

        {/* Desktop Button */}
        <div className="header-actions">
          <button className="primary-btn">Book a Call</button>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </header>
  );
}