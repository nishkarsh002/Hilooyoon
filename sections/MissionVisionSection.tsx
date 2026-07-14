import { mission, vision } from "@/data/company"

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            What Drives Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-base text-neutral-600 leading-relaxed">{mission}</p>
          </div>

          {/* Vision */}
          <div className="bg-[var(--foreground)] rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-base text-neutral-400 leading-relaxed">{vision}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
