/** @format */

import type { Metadata } from "next";
import { Suspense } from "react";

import { TanstackProvider } from "../lib/tanstack";

import Navbar from "@/components/atomic/navbar";
import Footer from "@/components/atomic/footer";
import LoadingPage from "@/components/atomic/loading";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Excelearn",
  description: "Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingPage />}>
          <TanstackProvider>
            <Navbar />
            {children}
            <Footer />
          </TanstackProvider>
        </Suspense>
      </body>
    </html>
  );
}
