import type { Metadata } from "next"
import ContactFormSection from "@/sections/ContactFormSection"
import BusinessInfoSection from "@/sections/BusinessInfoSection"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with hilooyoon for wholesale and partnership inquiries.",
  openGraph: {
    title: "Contact Us | hilooyoon",
    description: "Get in touch with hilooyoon for wholesale and partnership inquiries.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactFormSection />
      <BusinessInfoSection />
    </>
  )
}
