"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import SideNav from "@/components/ui/SideNav";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen">
          <SideNav collapsed={collapsed} />
          <div className="flex-1 flex flex-col">
            <Header onToggle={() => setCollapsed(!collapsed)} />
            <div className="flex-1 overflow-auto">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
