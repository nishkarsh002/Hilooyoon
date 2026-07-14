"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/data/products"

export default function ProductDetailSection({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-neutral-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[var(--accent)] transition-colors duration-200">Products</Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image with arrows */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--muted)] group">
              <Image
                src={product.images[activeIndex]}
                alt={`${product.name} — image ${activeIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveIndex((i) => (i === 0 ? product.images.length - 1 : i - 1))}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveIndex((i) => (i === product.images.length - 1 ? 0 : i + 1))}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`relative w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      activeIndex === i
                        ? "border-[var(--accent)]"
                        : "border-transparent hover:border-neutral-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
              {product.category}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-base text-neutral-600 leading-relaxed">{product.description}</p>

            {/* Sizes */}
            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                Available Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span key={size} className="inline-flex items-center justify-center min-w-[3rem] h-10 px-3 text-sm font-medium border border-[var(--border)] rounded-lg text-neutral-700">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mt-7">
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                Available Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span key={color} className="text-sm px-4 py-1.5 rounded-full bg-[var(--muted)] text-neutral-700 font-medium">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquiry CTA */}
            <div className="mt-10 p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <p className="text-sm text-neutral-600 mb-4">
                Interested in this product? Get in touch for pricing, minimum order quantities, and lead times.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full h-12 bg-[#c8a96e] text-white text-sm font-semibold rounded-full hover:bg-[#a8893e] transition-colors duration-200"
              >
                Enquire About This Product
              </Link>
            </div>

            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[var(--accent)] transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
