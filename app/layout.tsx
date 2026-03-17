import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amokahi - Fast, Flexible Micro-Loans for Everyone",
  description: "Get quick access to affordable personal and business loans with Amokahi. Apply online, receive fast approval, and manage repayments easily—all from one secure digital platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Toaster position="top-center" />
      <TanstackQueryProvider>
            {children}
          </TanstackQueryProvider>
      </body>
    </html>
  );
}
