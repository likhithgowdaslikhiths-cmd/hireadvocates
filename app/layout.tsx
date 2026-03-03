import "./globals.css";
import LegalDisclaimer from "../components/LegalDisclaimer";
import Header from "../components/Header";
import Footer from "../components/Footer";

import type { ReactNode } from "react";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "HireAdvocates",
  description: "Corporate Advisory & Legal Consulting",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>

        <LegalDisclaimer />
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}