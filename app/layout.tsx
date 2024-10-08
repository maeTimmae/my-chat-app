import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  weight :"variable",
  subsets : ["latin"],
  display : "swap"
})

export const metadata: Metadata = {
  title: "Spring-Chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
