import Image from "next/image"
import { Skiper16 } from "@/components/ui/skiper-ui/skiper16"

const team = [
  {
    name: "Aryan Mehta",
    role: "Founder & CEO",
    bio: "Aryan leads Hillyoon Exports with over a decade of experience in apparel manufacturing and international trade. He drives the company's vision of delivering premium garments to global markets.",
    image: null, // Replace with "/imgs/team-aryan.jpg" when available
    initials: "AM",
  },
  {
    name: "Zara Khan",
    role: "Head of Export Operations",
    bio: "Zara oversees all export logistics, client relations, and international partnerships. Her expertise in global supply chains ensures every order reaches our partners on time and to spec.",
    image: null, // Replace with "/imgs/team-zara.jpg" when available
    initials: "ZK",
  },
]

export default function TeamSection() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold">
            The People Behind It
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Our Team
          </h2>
          <p className="mt-4 text-base text-neutral-500 max-w-xl mx-auto">
            Meet the team driving Hillyoon Exports forward — passionate about quality apparel and
            long-term global partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-[var(--border)] hover:shadow-lg hover:border-[#c8a96e] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-neutral-100 mb-5 shrink-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[var(--foreground)]">
                    <span className="text-xl font-bold text-[#c8a96e]">{member.initials}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
              <p className="text-sm text-[#c8a96e] font-medium mt-1">{member.role}</p>
              <p className="text-sm text-neutral-500 leading-relaxed mt-3">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Team Showcase - Skiper16 */}
        {/* <div>
          <Skiper16 />
        </div> */}

        {/* Team cards */}
        
      </div>
    </section>
  )
}
