"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Areeb | Personal Portfolio",
  description:
    "Muhammad Areeb is a full-stack MERN developer with strong expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-[#184e77] relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-[#a6dcef]`}
      >
        <motion.div
          className="bg-[#184e77] absolute top-[-6rem] -z-10 right-[35rem] h-[22rem] w-[28rem] rounded-full blur-[8rem] sm:h-[40rem] sm:w-[50rem]"
          animate={{
            rotate: 360,
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            },
            opacity: {
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="bg-[#d0e8f2] absolute top-[-1rem] -z-10 left-[-35rem] h-[28rem] w-[40rem] rounded-full blur-[10rem] sm:h-[45rem] sm:w-[65rem]"
          animate={{
            rotate: 360,
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 90,
              ease: "linear",
            },
            opacity: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            },
          }}
        />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
