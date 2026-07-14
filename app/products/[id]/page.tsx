import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductDetailSection from "@/sections/ProductDetailSection"
import { getProductById } from "@/lib/products"
import { products } from "@/data/products"

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: "Product Not Found" }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | hilooyoon`,
      description: product.description,
      type: "website",
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()
  return <ProductDetailSection product={product} />
}
