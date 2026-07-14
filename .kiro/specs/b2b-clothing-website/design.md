# Design Document — hilooyoon B2B Clothing Website

## Overview

The hilooyoon website is a static, multi-page B2B marketing and product-showcase platform. It is built with Next.js 16.2.10 (App Router, Turbopack default), React 19, TypeScript 5, and Tailwind CSS v4. There is no backend in this phase; all data comes from typed static files. The site targets retailers, wholesalers, and distributors and must project a premium, minimal aesthetic across all viewport widths (320 px – 1920 px).

Key Next.js 16 constraints observed from the official docs:

- `params` and `searchParams` props in pages and layouts are now **Promises** and must be `await`ed.
- Turbopack is the default bundler for both `next dev` and `next build`.
- `middleware.ts` is deprecated; use `proxy.ts` if network-boundary logic is needed (not required here).
- Tailwind v4 is configured via `@import "tailwindcss"` in globals.css with the `@tailwindcss/postcss` plugin — **no** `tailwind.config.js`.
- The `@theme inline` block in `globals.css` maps CSS custom properties to Tailwind's theme tokens.
- Async Request APIs (`cookies`, `headers`, `draftMode`) are fully async — only relevant if added in future phases.

---

## Architecture

### High-Level Structure

```
hilooyoon/                     ← workspace root (no src/)
├── app/                       ← Next.js App Router pages & root layout
│   ├── layout.tsx             ← Root layout: Navbar + Footer + fonts + metadata
│   ├── page.tsx               ← Home page  (/)
│   ├── about/
│   │   └── page.tsx           ← About Us page  (/about)
│   ├── products/
│   │   ├── page.tsx           ← Products catalogue  (/products)
│   │   └── [id]/
│   │       └── page.tsx       ← Product Detail View  (/products/[id])
│   ├── contact/
│   │   └── page.tsx           ← Contact Us page  (/contact)
│   ├── globals.css
│   └── favicon.ico
├── components/                ← Reusable UI primitives
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── ScrollToTop.tsx
├── sections/                  ← Full-page section components (one concern each)
│   ├── HeroSection.tsx
│   ├── FeaturedProductsSection.tsx
│   ├── AboutPreviewSection.tsx
│   ├── CTASection.tsx
│   ├── CompanyStorySection.tsx
│   ├── MissionVisionSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── ProductGridSection.tsx
│   ├── ProductDetailSection.tsx
│   ├── ContactFormSection.tsx
│   └── BusinessInfoSection.tsx
├── data/
│   ├── products.ts            ← Product[] typed array
│   ├── company.ts             ← Company story, mission, vision text
│   └── whyChooseUs.ts         ← WhyChooseUsItem[] typed array
├── assets/                    ← Static images used inside components (imported)
├── hooks/
│   ├── useScrollToTop.ts      ← scroll position detection
│   └── useActiveRoute.ts      ← active pathname detection for Navbar
├── lib/
│   ├── products.ts            ← helper: getFeaturedProducts, getProductById
│   └── metadata.ts            ← shared buildMetadata() helper
└── public/
    └── image.png              ← hilooyoon logo
```

### Rendering Strategy

All pages are **React Server Components** by default (Next.js 16 App Router default). Client Components (`'use client'`) are used only where browser APIs or interactivity is required:

| Component | Rendering |
|---|---|
| `app/layout.tsx` | Server Component |
| `app/page.tsx` (Home) | Server Component |
| `app/about/page.tsx` | Server Component |
| `app/products/page.tsx` | Server Component |
| `app/products/[id]/page.tsx` | Server Component (async params) |
| `app/contact/page.tsx` | Server Component |
| `components/Navbar.tsx` | **Client Component** (hamburger state, active route) |
| `components/ScrollToTop.tsx` | **Client Component** (scroll position, window.scrollTo) |
| `sections/ContactFormSection.tsx` | **Client Component** (form state, validation) |
| All other sections | Server Components |

---

## Components and Interfaces

### `components/Navbar.tsx`

**Client Component** — needs `useState` for mobile drawer and `usePathname` for active-link detection.

```tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" aria-label="hilooyoon home">
          <Image src="/image.png" alt="hilooyoon" width={120} height={40} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors hover:text-accent
                  ${pathname === href ? 'text-accent border-b-2 border-accent' : 'text-neutral-700'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon via CSS — three bars / X */}
          <span className="block w-5 h-0.5 bg-neutral-900 mb-1" />
          <span className="block w-5 h-0.5 bg-neutral-900 mb-1" />
          <span className="block w-5 h-0.5 bg-neutral-900" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <ul className="md:hidden flex flex-col bg-white border-t border-neutral-200 px-4 py-4 gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium py-2
                  ${pathname === href ? 'text-accent' : 'text-neutral-700'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
```

### `components/Footer.tsx`

Server Component. Renders brand name, nav links, copyright, and contact snippet.

### `components/ProductCard.tsx`

Server Component. Accepts a `Product` prop and renders an image, name, category badge, and `<Link href={"/products/" + product.id}>`.

```tsx
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-lg overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs uppercase tracking-widest text-neutral-500">{product.category}</span>
        <h3 className="mt-1 text-base font-semibold text-neutral-900">{product.name}</h3>
      </div>
    </Link>
  )
}
```

### `components/ScrollToTop.tsx`

Client Component. Uses `useScrollToTop` hook to detect scroll position; visible when `scrollY > 300`, calls `window.scrollTo({ top: 0, behavior: 'smooth' })` on click.

---

## Data Models

### `Product` — `data/products.ts`

```ts
export interface Product {
  id: string           // URL-safe slug, e.g. "classic-white-tee"
  name: string
  category: string     // e.g. "T-Shirts", "Polos", "Jackets"
  description: string
  images: string[]     // paths relative to /public, at least one element
  sizes: string[]      // e.g. ["XS","S","M","L","XL","XXL"]
  colors: string[]     // e.g. ["White","Black","Navy"]
  featured: boolean    // whether to show on Home page Featured section
}

export const products: Product[] = [
  // ... static entries
]
```

### `WhyChooseUsItem` — `data/whyChooseUs.ts`

```ts
export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  icon?: string   // optional icon name / SVG path
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  // minimum 3 items required
]
```

### `CompanyContent` — `data/company.ts`

```ts
export const companyStory: string = `...`  // narrative paragraphs

export const mission: string = `...`

export const vision: string = `...`
```

---

## Page Architecture

### Root Layout — `app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: { template: '%s | hilooyoon', default: 'hilooyoon — B2B Clothing Brand' },
  description: 'hilooyoon is a premium B2B clothing brand supplying retailers, wholesalers, and distributors with high-quality apparel.',
  openGraph: {
    title: 'hilooyoon — B2B Clothing Brand',
    description: 'Premium wholesale clothing for retailers and distributors.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
```

### Home Page — `app/page.tsx`

```tsx
import type { Metadata } from 'next'
import HeroSection from '@/sections/HeroSection'
import FeaturedProductsSection from '@/sections/FeaturedProductsSection'
import AboutPreviewSection from '@/sections/AboutPreviewSection'
import CTASection from '@/sections/CTASection'
import { getFeaturedProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Discover hilooyoon — premium B2B clothing for retailers and wholesalers.',
  openGraph: {
    title: 'hilooyoon — Home',
    description: 'Discover hilooyoon — premium B2B clothing for retailers and wholesalers.',
    type: 'website',
  },
}

export default function HomePage() {
  const featured = getFeaturedProducts()
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection products={featured} />
      <AboutPreviewSection />
      <CTASection />
    </>
  )
}
```

### Products Page — `app/products/page.tsx`

```tsx
import type { Metadata } from 'next'
import ProductGridSection from '@/sections/ProductGridSection'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse the full hilooyoon product catalogue — wholesale apparel by category.',
  openGraph: {
    title: 'Products | hilooyoon',
    description: 'Browse the full hilooyoon product catalogue.',
    type: 'website',
  },
}

export default function ProductsPage() {
  return <ProductGridSection products={products} />
}
```

### Product Detail — `app/products/[id]/page.tsx`

`params` is a Promise in Next.js 16 — must be awaited.

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetailSection from '@/sections/ProductDetailSection'
import { getProductById } from '@/lib/products'
import { products } from '@/data/products'

// Pre-generate all static product routes at build time
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
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | hilooyoon`,
      description: product.description,
      type: 'website',
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
```

### About Us Page — `app/about/page.tsx`

```tsx
import type { Metadata } from 'next'
import CompanyStorySection from '@/sections/CompanyStorySection'
import MissionVisionSection from '@/sections/MissionVisionSection'
import WhyChooseUsSection from '@/sections/WhyChooseUsSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about hilooyoon — our story, mission, and why B2B buyers choose us.',
  openGraph: {
    title: 'About Us | hilooyoon',
    description: 'Learn about hilooyoon — our story, mission, and why B2B buyers choose us.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <CompanyStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
    </>
  )
}
```

### Contact Us Page — `app/contact/page.tsx`

```tsx
import type { Metadata } from 'next'
import ContactFormSection from '@/sections/ContactFormSection'
import BusinessInfoSection from '@/sections/BusinessInfoSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with hilooyoon for wholesale and partnership inquiries.',
  openGraph: {
    title: 'Contact Us | hilooyoon',
    description: 'Get in touch with hilooyoon for wholesale and partnership inquiries.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactFormSection />
      <BusinessInfoSection />
    </>
  )
}
```

---

## Library Helpers — `lib/products.ts`

```ts
import { products } from '@/data/products'
import type { Product } from '@/data/products'

/** Returns the featured products slice (3–8 items). */
export function getFeaturedProducts(): Product[] {
  const featured = products.filter((p) => p.featured)
  // Clamp to 8 max; data must contain at least 3 featured entries
  return featured.slice(0, 8)
}

/** Looks up a product by id. Returns undefined if not found. */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

/** Returns the unique list of category names from the product catalogue. */
export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))]
}
```

---

## Contact Form Architecture

`sections/ContactFormSection.tsx` is a **Client Component** handling all form state and validation client-side (no server action needed in this phase — form submission shows a success message in the UI).

### Form Fields

| Field | Type | Required | Validation |
|---|---|---|---|
| Full Name | text | ✓ | non-empty after trim |
| Business Name | text | ✓ | non-empty after trim |
| Email Address | email | ✓ | valid email pattern |
| Phone Number | tel | — | none |
| Message | textarea | ✓ | non-empty after trim |

### Validation Logic

```ts
// lib/validation.ts

export interface ContactFormValues {
  fullName: string
  businessName: string
  email: string
  phone: string
  message: string
}

export interface ContactFormErrors {
  fullName?: string
  businessName?: string
  email?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.fullName.trim())
    errors.fullName = 'Full name is required.'

  if (!values.businessName.trim())
    errors.businessName = 'Business name is required.'

  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim())
    errors.message = 'Message is required.'

  return errors
}
```

### Submission Flow

1. User fills form and submits.
2. `validateContactForm` runs synchronously.
3. If errors exist → set `errors` state, render inline messages, **do not proceed**.
4. If no errors → set `submitted = true`, render confirmation message.
5. In a future phase this step will POST to a backend/email service.

---

## Styling Architecture

### Tailwind v4 Setup

The project already has the correct Tailwind v4 setup:
- `@import "tailwindcss"` in `app/globals.css`
- `@tailwindcss/postcss` plugin in `postcss.config.mjs`
- No `tailwind.config.js` — theme tokens defined via `@theme inline` in `globals.css`

### Design Tokens

Extend `app/globals.css` with the brand's design tokens:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #c8a96e;        /* warm gold — primary accent */
  --accent-dark: #a8893e;   /* hover state for accent */
  --muted: #f5f5f5;
  --border: #e5e5e5;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-dark: var(--accent-dark);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --font-sans: var(--font-geist-sans);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;            /* 16px minimum */
  line-height: 1.6;
}
```

### Hover Transitions

All interactive elements (buttons, links, cards) use `transition-*` utilities:

```
hover:bg-accent-dark transition-colors duration-200
group-hover:scale-105 transition-transform duration-300
hover:shadow-lg transition-shadow
```

No inline `style` attributes — all styling via Tailwind classes or CSS custom properties.

---

## SEO Architecture

Each page exports a static `metadata` object. The root layout defines a `title.template` of `'%s | hilooyoon'` so per-page titles automatically get the brand suffix.

Every page metadata includes `openGraph` with `title`, `description`, and `type: 'website'`.

Dynamic product pages use `generateMetadata` (async, awaiting the `params` Promise) to produce per-product titles and descriptions.

---

## Hooks

### `hooks/useScrollToTop.ts`

```ts
'use client'

import { useEffect, useState } from 'react'

export function useScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return { visible, scrollToTop }
}
```

### `hooks/useActiveRoute.ts`

Wraps `usePathname` from `next/navigation` for components that need active-route detection.

```ts
'use client'

import { usePathname } from 'next/navigation'

export function useActiveRoute(href: string): boolean {
  const pathname = usePathname()
  return pathname === href
}
```

---

## Error Handling

| Scenario | Handling |
|---|---|
| Product not found (`/products/[id]`) | `notFound()` from `next/navigation` → renders `app/not-found.tsx` |
| Zero products in data file | `ProductGridSection` checks `products.length === 0` and renders an empty-state message |
| Contact form validation failure | Inline error messages per field; no network request made |
| Image load failure | `next/image` built-in error fallback; provide `alt` on all images |

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navbar active-link indicator

*For any* valid route pathname in the set `['/', '/about', '/products', '/contact']`, the Navbar component renders the corresponding nav link with the active-indicator class (`text-accent`) and all other links without it.

**Validates: Requirements 1.7**

---

### Property 2: ProductCard href matches product id

*For any* valid `Product` object, the `ProductCard` component renders a link whose `href` is exactly `/products/{product.id}`.

**Validates: Requirements 2.6, 4.3**

---

### Property 3: Featured products count invariant

*For any* `products` array where at least 3 and no more than 8 entries have `featured: true`, `getFeaturedProducts()` returns an array whose length is between 3 and 8 (inclusive).

**Validates: Requirements 2.3**

---

### Property 4: FeaturedProductsSection renders a card per product

*For any* non-empty array of `Product` objects passed to `FeaturedProductsSection`, the component renders exactly one `ProductCard` per product in the array.

**Validates: Requirements 2.2**

---

### Property 5: ProductGridSection renders a card per product

*For any* non-empty array of `Product` objects passed to `ProductGridSection`, the component renders exactly one `ProductCard` per product.

**Validates: Requirements 4.2**

---

### Property 6: Category grouping covers all products

*For any* `products` array, the set of category group headings rendered by `ProductGridSection` equals the set of distinct `product.category` values in that array.

**Validates: Requirements 4.1**

---

### Property 7: ProductDetailSection renders all required fields

*For any* valid `Product`, the `ProductDetailSection` component renders the product name, category, description, all size labels, all color labels, and an Inquiry Button linking to `/contact`.

**Validates: Requirements 4.4**

---

### Property 8: Contact form required-field validation

*For any* non-empty subset of required fields (`fullName`, `businessName`, `email`, `message`) left blank, `validateContactForm` returns an error entry for each blank field and returns no error for any non-blank required field.

**Validates: Requirements 5.3**

---

### Property 9: Contact form invalid-email validation

*For any* string that does not match a valid email pattern, `validateContactForm` returns an error on the `email` field; *for any* string that is a valid email, it returns no error on that field.

**Validates: Requirements 5.4**

---

### Property 10: Page metadata includes Open Graph fields

*For any* page's exported `metadata` object in the application, the `openGraph` field is defined and contains non-empty `title`, `description`, and `type` values.

**Validates: Requirements 6.4**

---

### Property 11: Why Choose Us data count invariant

*For any* valid `whyChooseUsItems` array used by `WhyChooseUsSection`, the array contains at least 3 items.

**Validates: Requirements 3.3**

---

### Property 12: Product type structural completeness

*For any* object in the `products` export from `data/products.ts`, the object satisfies the `Product` interface — all required fields (`id`, `name`, `category`, `description`, `images`, `sizes`, `colors`, `featured`) are present with the correct types, and `images` contains at least one element.

**Validates: Requirements 8.2**

---

## Testing Strategy

### Dual Testing Approach

Both unit/example tests and property-based tests are used. Unit tests cover specific behavior and edge cases; property tests validate universal invariants across generated inputs.

### Unit / Example Tests

Focus on specific rendering correctness and interaction behavior:

- Navbar renders logo with `href="/"` and all four nav links
- Navbar shows hamburger at `< 768 px` viewport; drawer opens on toggle
- `ProductCard` renders product name, category, and correct `href`
- `HeroSection` renders headline, tagline, and CTA button
- `AboutPreviewSection` renders "Learn More" link with `href="/about"`
- `CTASection` renders button with `href="/contact"`
- `ContactFormSection` shows confirmation message on valid submit
- `ProductGridSection` renders empty-state message when `products.length === 0`
- `ProductDetailSection` renders Inquiry Button linking to `/contact`
- Root layout includes `<Navbar>` and `<Footer>` in the render tree

### Property-Based Tests

Configured with minimum **100 iterations** per test. Each test is tagged with the property number from this document.

| Property | Test File | Library |
|---|---|---|
| P1: Active-link indicator | `__tests__/Navbar.prop.test.tsx` | fast-check |
| P2: ProductCard href | `__tests__/ProductCard.prop.test.tsx` | fast-check |
| P3: Featured count invariant | `__tests__/lib/products.prop.test.ts` | fast-check |
| P4: FeaturedSection cards | `__tests__/FeaturedProductsSection.prop.test.tsx` | fast-check |
| P5: ProductGrid cards | `__tests__/ProductGridSection.prop.test.tsx` | fast-check |
| P6: Category grouping | `__tests__/ProductGridSection.prop.test.tsx` | fast-check |
| P7: ProductDetail fields | `__tests__/ProductDetailSection.prop.test.tsx` | fast-check |
| P8: Required-field errors | `__tests__/lib/validation.prop.test.ts` | fast-check |
| P9: Email validation | `__tests__/lib/validation.prop.test.ts` | fast-check |
| P10: OG metadata fields | `__tests__/metadata.prop.test.ts` | fast-check |
| P11: Why Choose Us count | `__tests__/data/whyChooseUs.prop.test.ts` | fast-check |
| P12: Product type structure | `__tests__/data/products.prop.test.ts` | fast-check |

### Edge Cases

- `ProductGridSection` with `products = []` → empty-state message (Req 8.4)
- `getFeaturedProducts()` with all `featured: false` → returns empty array (no crash)
- `validateContactForm` with all fields blank → all four error messages present
- `getProductById` with unknown id → returns `undefined`, page calls `notFound()`

### Integration / Smoke Checks

- `data/products.ts` compiles without TypeScript errors (type safety enforced at build)
- `next build` succeeds with zero errors (Turbopack)
- Each page exports a `metadata` object (checked by TypeScript at build via `Metadata` type)
- Folder structure follows Req 9.1–9.7 (enforced by convention; no `src/` directory exists)
