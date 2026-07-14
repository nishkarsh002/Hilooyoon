import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
          Ready to Partner?
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
          Start Your Wholesale Journey Today
        </h2>
        <p className="mt-5 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Reach out to our B2B team and let us build the right wholesale solution for your business —
          from product selection to pricing and fulfilment.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 bg-[#c8a96e] text-white text-sm font-semibold rounded-full hover:bg-[#a8893e] transition-colors duration-200"
          >
            Contact Us Now
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center h-12 px-8 border border-neutral-600 text-white text-sm font-semibold rounded-full hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200"
          >
            Browse Catalogue
          </Link>
        </div>
      </div>
    </section>
  )
}
