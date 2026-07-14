export default function BusinessInfoSection() {
  return (
    <section className="py-20 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-10">Business Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                Email
              </h3>
              <a
                href="mailto:hello@hilooyoon.com"
                className="text-sm font-medium text-neutral-900 hover:text-[var(--accent)] transition-colors duration-200 break-all"
              >
                hello@hilooyoon.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.7 3.42 2 2 0 0 1 3.67 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.99 5.99l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                Phone
              </h3>
              <a
                href="tel:+1234567890"
                className="text-sm font-medium text-neutral-900 hover:text-[var(--accent)] transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                Address
              </h3>
              <address className="text-sm font-medium text-neutral-900 not-italic leading-relaxed">
                123 Fashion District
                <br />
                Suite 4B
              </address>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-2xl border border-[var(--border)] text-center">
            <p className="text-sm text-neutral-500">
              Business hours:{" "}
              <span className="font-medium text-neutral-900">Monday – Friday, 9am – 6pm</span>
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              We typically respond to inquiries within{" "}
              <span className="font-medium text-neutral-900">1–2 business days</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
