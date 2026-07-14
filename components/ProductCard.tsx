import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-xl overflow-hidden border border-[var(--border)] bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Product image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--muted)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-medium">
          {product.category}
        </span>
        <h3 className="mt-1 text-base font-semibold text-neutral-900 group-hover:text-[var(--accent)] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-neutral-500 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center gap-1.5 flex-wrap">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-neutral-600"
            >
              {color}
            </span>
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-neutral-400">+{product.colors.length - 4} more</span>
          )}
        </div>
      </div>
    </Link>
  )
}
