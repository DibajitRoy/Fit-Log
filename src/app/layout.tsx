import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PlanProvider from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog - Workout Library",
  description: "A dark, no-nonsense gym companion.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="black"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-black text-white">
        <PlanProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer theme="dark" position="bottom-right" />
        </PlanProvider>
      </body>
    </html>
  );
}