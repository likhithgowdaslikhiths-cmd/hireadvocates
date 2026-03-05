import "./globals.css";
import LegalDisclaimer from "../components/LegalDisclaimer";
import Header from "../components/Header";
import Footer from "../components/Footer";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
subsets: ["latin"],
weight: ["400", "500", "600", "700"],
variable: "--font-heading",
display: "swap",
});

const roboto = Roboto({
subsets: ["latin"],
weight: ["400", "500", "700"],
variable: "--font-body",
display: "swap",
});

export const metadata: Metadata = {
title: "HireAdvocates | Hire Verified Lawyers Across India",
description:
"Connect with experienced lawyers across India for criminal, civil, property, corporate and family legal matters. HireAdvocates provides trusted legal consultation and representation.",
};

export default function RootLayout({
children,
}: {
children: ReactNode;
}) {
return (

<html lang="en" className={`${poppins.variable} ${roboto.variable}`} suppressHydrationWarning>
<body className="antialiased">
<LegalDisclaimer />
<Header />
<main>{children}</main>
<Footer />
</body>
</html>
  );
}
