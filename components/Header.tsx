"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-container">

        {/* Logo */}
        <Link href="/" className="logo">
         <Image
  src="/logo.png"
  alt="HireAdvocates Logo"
  width={160}
  height={40}
  style={{ height: "auto" }}
  priority
/>
        </Link>

        {/* Navigation */}
        <nav className={`nav-menu ${open ? "active" : ""}`}>
  <Link href="/" onClick={() => setOpen(false)}>Home</Link>
  <Link href="/hire-a-lawyer" onClick={() => setOpen(false)}>Hire a Lawyer</Link>
  <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
  <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
  <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>

  <button className="primary-btn mobile-btn">Book a Call</button>
</nav>

        {/* Desktop Button */}
        <div className="header-actions">
          <button className="primary-btn">Book a Call</button>
        </div>

        {/* Mobile Toggle */}
       <div className="menu-toggle" onClick={() => setOpen(!open)}>
  {open ? "✕" : "☰"}
</div>

      </div>
    </header>
  );
}