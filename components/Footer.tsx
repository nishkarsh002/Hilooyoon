import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/imgs/image.png"
                alt="hilooyoon"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Premium wholesale clothing for retailers, distributors, and fashion businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-300 hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a
                  href="mailto:hello@hilooyoon.com"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  hello@hilooyoon.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-neutral-400">123 Fashion District, Suite 4B</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} hilooyoon. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">B2B Clothing &amp; Wholesale</p>
        </div>
      </div>
    </footer>
  )
}
