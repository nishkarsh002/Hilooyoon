import type { Metadata } from "next"
import ProductGridSection from "@/sections/ProductGridSection"
import { products } from "@/data/products"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the full hilooyoon product catalogue — wholesale apparel by category.",
  openGraph: {
    title: "Products | hilooyoon",
    description: "Browse the full hilooyoon product catalogue.",
    type: "website",
  },
}

export default function ProductsPage() {
  return <ProductGridSection products={products} />
}
