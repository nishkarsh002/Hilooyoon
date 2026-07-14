import ProductCard from "@/components/ProductCard"
import type { Product } from "@/data/products"

export default function ProductGridSection({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center">
          <p className="text-neutral-500 text-lg">
            No products are currently available. Please check back soon.
          </p>
        </div>
      </section>
    )
  }

  // Group by category
  const categoryMap = products.reduce<Record<string, Product[]>>((acc, product) => {
    if (!acc[product.category]) acc[product.category] = []
    acc[product.category].push(product)
    return acc
  }, {})

  const categories = Object.keys(categoryMap).sort()

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            Full Catalogue
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Our Products
          </h1>
          <p className="mt-4 text-base text-neutral-500 max-w-xl">
            Browse our wholesale apparel range — from core basics to fashion-forward pieces across
            every category.
          </p>
        </div>

        {/* Category groups */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-neutral-900">{category}</h2>
                <div className="flex-1 h-px bg-[var(--border)]" />
                <span className="text-sm text-neutral-400">
                  {categoryMap[category].length} item
                  {categoryMap[category].length !== 1 ? "s" : ""}
                </span>
              </div>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryMap[category].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
