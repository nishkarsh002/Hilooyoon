import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[var(--foreground)] overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/tshirts.jpeg"
          alt="hilooyoon clothing collection"
          fill
          className="object-cover opacity-25"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)]/90 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold mb-6">
            B2B Wholesale Clothing
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Premium
            <br />
            <span className="text-[var(--accent)]">Apparel</span>
            <br />
            for Retailers
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-10 max-w-xl">
            hilooyoon supplies retailers, wholesalers, and distributors with high-quality clothing
            designed for consistent performance and strong sell-through.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#c8a96e] text-white text-sm font-semibold rounded-full hover:bg-[#a8893e] transition-colors duration-200"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 border border-neutral-600 text-white text-sm font-semibold rounded-full hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-10 border-t border-neutral-800 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-xs text-neutral-500 mt-0.5 uppercase tracking-wide">SKUs Available</p>
            </div>
            <div className="w-px h-10 bg-neutral-800" />
            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-xs text-neutral-500 mt-0.5 uppercase tracking-wide">Retail Partners</p>
            </div>
            <div className="w-px h-10 bg-neutral-800" />
            <div>
              <p className="text-3xl font-bold text-white">5★</p>
              <p className="text-xs text-neutral-500 mt-0.5 uppercase tracking-wide">Partner Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
