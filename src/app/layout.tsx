"use client";

import "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import Head from "@/app/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}
