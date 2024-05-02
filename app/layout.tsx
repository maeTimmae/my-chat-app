import type { Metadata } from "next";
import { Days_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const daysOne = Days_One({
  weight: "400",
  display: "swap",
  subsets:["latin"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={daysOne.className}>
        <Navbar / >
        {children}
      </body>
    </html>
  );
}
