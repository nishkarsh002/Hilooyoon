"use client"

import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function ScrollToTop() {
  const { visible, scrollToTop } = useScrollToTop()

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#c8a96e] text-white flex items-center justify-center shadow-lg hover:bg-[#a8893e] transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
