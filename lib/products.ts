import { products } from "@/data/products"
import type { Product } from "@/data/products"

/** Returns featured products — between 3 and 8 items. */
export function getFeaturedProducts(): Product[] {
  const featured = products.filter((p) => p.featured)
  return featured.slice(0, 8)
}

/** Looks up a product by its id slug. Returns undefined if not found. */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

/** Returns the unique sorted list of category names from the product catalogue. */
export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))].sort()
}
