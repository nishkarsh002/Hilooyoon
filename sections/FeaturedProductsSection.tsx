import Link from "next/link"
import { Skiper49 } from "@/components/ui/skiper-ui/skiper49"

export default function FeaturedProductsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
              Our Collection
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200"
          >
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Skiper49 — Inverted Perspective Carousel */}
        <Skiper49 />

        {/* Mobile view all */}
        <div className="mt-4 sm:hidden text-center">
          <Link
            href="/products"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  )
}
