import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "PDF Merger",
  description: "This is a Free PDF merging website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
