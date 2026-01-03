import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/redux/StoreProvider";
import MeetingModal from "@/components/fix-meeting-form";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oscorm - Scalable Workforce Automation Solutions",
  description:
    "Oscorm delivers next-gen remote teams with AI oversight. Hire pre-vetted experts in engineering, AI, design, marketing, and more with rapid deployment.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          {children}

          <MeetingModal />
        </StoreProvider>
      </body>
    </html>
  );
}
