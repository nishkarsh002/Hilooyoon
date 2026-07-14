"use client"

import { useState } from "react"
import {
  validateContactForm,
  hasErrors,
  type ContactFormValues,
  type ContactFormErrors,
} from "@/lib/validation"

const INITIAL_VALUES: ContactFormValues = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  message: "",
}

export default function ContactFormSection() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validateContactForm(values)
    if (hasErrors(newErrors)) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-lg mx-auto text-center py-20">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Inquiry Received!</h2>
            <p className="text-base text-neutral-500 leading-relaxed">
              Thank you for reaching out. Our B2B team will review your inquiry and get back to you
              within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            Get in Touch
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-base text-neutral-500 leading-relaxed">
            Ready to place a wholesale order or want to learn more? Fill in the form below and our
            team will get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-neutral-700 mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                autoComplete="name"
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                aria-invalid={!!errors.fullName}
                className={`w-full h-12 px-4 rounded-xl border text-sm text-neutral-900 outline-none transition-colors duration-200 focus:border-[var(--accent)] ${
                  errors.fullName
                    ? "border-red-400 bg-red-50"
                    : "border-[var(--border)] bg-white focus:bg-white"
                }`}
                placeholder="Jane Smith"
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs text-red-500" role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                className="block text-sm font-medium text-neutral-700 mb-1.5"
              >
                Business Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={values.businessName}
                onChange={handleChange}
                autoComplete="organization"
                aria-describedby={errors.businessName ? "businessName-error" : undefined}
                aria-invalid={!!errors.businessName}
                className={`w-full h-12 px-4 rounded-xl border text-sm text-neutral-900 outline-none transition-colors duration-200 focus:border-[var(--accent)] ${
                  errors.businessName
                    ? "border-red-400 bg-red-50"
                    : "border-[var(--border)] bg-white focus:bg-white"
                }`}
                placeholder="Your Retail Co."
              />
              {errors.businessName && (
                <p id="businessName-error" className="mt-1.5 text-xs text-red-500" role="alert">
                  {errors.businessName}
                </p>
              )}
            </div>

            {/* Email + Phone row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  className={`w-full h-12 px-4 rounded-xl border text-sm text-neutral-900 outline-none transition-colors duration-200 focus:border-[var(--accent)] ${
                    errors.email
                      ? "border-red-400 bg-red-50"
                      : "border-[var(--border)] bg-white focus:bg-white"
                  }`}
                  placeholder="jane@yourstore.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  Phone Number{" "}
                  <span className="text-neutral-400 text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full h-12 px-4 rounded-xl border border-[var(--border)] text-sm text-neutral-900 outline-none transition-colors duration-200 focus:border-[var(--accent)] bg-white"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 outline-none transition-colors duration-200 focus:border-[var(--accent)] resize-none ${
                  errors.message
                    ? "border-red-400 bg-red-50"
                    : "border-[var(--border)] bg-white focus:bg-white"
                }`}
                placeholder="Tell us about your business, what products you're interested in, and your typical order volume..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#c8a96e] text-white text-sm font-semibold rounded-full hover:bg-[#a8893e] transition-colors duration-200"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
