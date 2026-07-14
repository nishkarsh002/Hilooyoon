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

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required."
  }

  if (!values.businessName.trim()) {
    errors.businessName = "Business name is required."
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required."
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  if (!values.message.trim()) {
    errors.message = "Message is required."
  }

  return errors
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
