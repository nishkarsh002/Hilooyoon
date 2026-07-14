import { companyStory } from "@/data/company"
import Image from "next/image"

export default function CompanyStorySection() {
  const paragraphs = companyStory
    .trim()
    .split("\n\n")
    .filter((p) => p.trim().length > 0)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              How hilooyoon Began
            </h2>
            <div className="mt-6 space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-base text-neutral-600 leading-relaxed">
                  {para.trim()}
                </p>
              ))}
            </div>
          </div>

          {/* Visual accent */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/imgs/brand.jpeg"
              alt="hilooyoon quality craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
