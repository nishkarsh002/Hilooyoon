import type { Metadata } from "next"
import CompanyStorySection from "@/sections/CompanyStorySection"
import MissionVisionSection from "@/sections/MissionVisionSection"
import WhyChooseUsSection from "@/sections/WhyChooseUsSection"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about hilooyoon — our story, mission, and why B2B buyers choose us.",
  openGraph: {
    title: "About Us | hilooyoon",
    description: "Learn about hilooyoon — our story, mission, and why B2B buyers choose us.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      <CompanyStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
    </>
  )
}
