import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import "./globals.css"

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: { template: "%s | hilooyoon", default: "hilooyoon — B2B Clothing Brand" },
  description:
    "hilooyoon is a premium B2B clothing brand supplying businesses, wholesalers, and distributors with high-quality apparel.",
  openGraph: {
    title: "hilooyoon — B2B Clothing Brand",
    description: "Premium wholesale clothing for businesses and distributors.",
    type: "website",
  },
  icons: {
    icon: "/imgs/favicon_io%20(4)/favicon.ico",
    shortcut: "/imgs/favicon_io%20(4)/favicon.ico",
    apple: "/imgs/favicon_io%20(4)/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-white text-[var(--foreground)] antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
