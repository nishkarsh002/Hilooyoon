import Link from "next/link"
import Image from "next/image"

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual block */}
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/imgs/set1.jpeg"
              alt="hilooyoon collection"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[var(--foreground)]/20" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              Built for Business Partnerships
            </h2>
            <p className="mt-5 text-base text-neutral-600 leading-relaxed">
              hilooyoon was founded with a single belief — that quality wholesale clothing should be
              accessible without compromise. We work directly with manufacturers and fabric mills to
              deliver consistent, premium apparel to retail partners across the region.
            </p>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              Our team understands the demands of B2B trade: reliable lead times, competitive
              pricing, and products your customers will keep coming back for.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors duration-200"
            >
              Learn more about us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
