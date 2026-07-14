import { whyChooseUsItems } from "@/data/whyChooseUs"

const ICONS: Record<string, React.ReactNode> = {
  quality: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  pricing: (
    <>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  reliability: (
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />
  ),
  range: (
    <>
      <rect x="2" y="3" width="7" height="7" />
      <rect x="15" y="3" width="7" height="7" />
      <rect x="15" y="15" width="7" height="7" />
      <rect x="2" y="15" width="7" height="7" />
    </>
  ),
  customisation: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  support: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
}

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            Our Advantages
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Why Choose hilooyoon?
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-xl mx-auto">
            We are more than a supplier — we are a growth partner for your retail business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsItems.map((item) => (
            <div
              key={item.id}
              className="group p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--muted)] group-hover:bg-[var(--accent)] flex items-center justify-center mb-5 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--accent)] group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                >
                  {ICONS[item.icon ?? "support"]}
                </svg>
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
