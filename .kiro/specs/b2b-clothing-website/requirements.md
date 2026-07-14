# Requirements Document

## Introduction

This document defines the requirements for the **hilooyoon** B2B clothing brand website. The site is a static, multi-page marketing and product-showcase platform built with Next.js 16.2.10, React 19, TypeScript, and Tailwind CSS v4 using the App Router. It targets clothing retailers, wholesalers, and distributors, providing a professional online presence, product catalogue browsing, and a channel for business inquiries — with no backend in this phase.

## Glossary

- **Website**: The hilooyoon Next.js application served at the root domain.
- **Navbar**: The shared responsive navigation bar rendered at the top of every page.
- **Footer**: The shared footer component rendered at the bottom of every page.
- **Hero Section**: The full-width, large-banner introductory section on the Home page.
- **Featured Products Section**: The curated subset of products displayed on the Home page.
- **Product Card**: A UI component that displays a single product's image, name, category, and a link to its detail view.
- **Product Detail View**: The expanded view showing all fields for a single product.
- **Inquiry Button**: A call-to-action button that links or scrolls to the Contact page/form.
- **Contact Form**: The HTML form on the Contact Us page that collects business inquiry data.
- **Static Product Data**: TypeScript data files stored under `data/` (e.g., `data/products.ts`) that serve as the product catalogue.
- **SEO Metadata**: Per-page `<title>`, `<meta description>`, and Open Graph tags exported via Next.js Metadata API.
- **App Router**: The Next.js file-system router using the `app/` directory with layouts and pages.
- **Scroll-to-Top Button**: An optional floating UI element that scrolls the viewport to the top of the page.
- **B2B Visitor**: A retailer, wholesaler, distributor, or bulk buyer visiting the Website.

---

## Requirements

### Requirement 1 — Shared Layout and Navigation

**User Story:** As a B2B Visitor, I want a consistent navigation experience on every page, so that I can move between pages without confusion.

#### Acceptance Criteria

1. THE Website SHALL render the Navbar at the top of every page using the root `app/layout.tsx`.
2. THE Website SHALL render the Footer at the bottom of every page using the root `app/layout.tsx`.
3. THE Navbar SHALL display the hilooyoon logo (`public/image.png`) as a clickable link to the Home page.
4. THE Navbar SHALL include navigation links to Home (`/`), About Us (`/about`), Products (`/products`), and Contact Us (`/contact`).
5. WHEN a B2B Visitor views the Website on a mobile viewport (width < 768 px), THE Navbar SHALL collapse the navigation links into a hamburger menu toggle.
6. WHEN a B2B Visitor activates the hamburger menu toggle, THE Navbar SHALL display the navigation links in a vertical drawer or dropdown.
7. WHILE a navigation link corresponds to the currently active route, THE Navbar SHALL apply a distinct visual indicator (e.g., underline or accent color) to that link.
8. WHERE the Scroll-to-Top Button feature is enabled, THE Website SHALL render a floating button that, when clicked, scrolls the viewport to the top of the page.

---

### Requirement 2 — Home Page

**User Story:** As a B2B Visitor, I want an impactful home page that quickly communicates who hilooyoon is and what it offers, so that I can decide whether to explore further.

#### Acceptance Criteria

1. THE Home page SHALL render a Hero Section containing a full-width banner image or background, a headline, a supporting tagline, and at least one call-to-action button linking to `/products` or `/contact`.
2. THE Home page SHALL render a Featured Products Section displaying a curated list of Product Cards sourced from Static Product Data.
3. THE Featured Products Section SHALL display a minimum of 3 and a maximum of 8 Product Cards.
4. THE Home page SHALL render an About Preview section containing a brief brand description and a "Learn More" link that navigates to `/about`.
5. THE Home page SHALL render a CTA (Call-to-Action) section containing a headline and a button that navigates to `/contact`.
6. WHEN a B2B Visitor clicks a Product Card on the Featured Products Section, THE Website SHALL navigate to the corresponding Product Detail View.

---

### Requirement 3 — About Us Page

**User Story:** As a B2B Visitor, I want to read about hilooyoon's story, mission, and value proposition, so that I can evaluate them as a potential business partner.

#### Acceptance Criteria

1. THE About Us page SHALL render a Company Story section containing narrative text about the brand's founding and history.
2. THE About Us page SHALL render a Mission & Vision section containing separate statements for the company mission and the company vision.
3. THE About Us page SHALL render a "Why Choose Us" section containing at least 3 distinct value-proposition items, each with a title and description.
4. THE About Us page (`/about`) SHALL export SEO Metadata with a unique `<title>` and `<meta description>` relevant to the brand's B2B positioning.

---

### Requirement 4 — Products Page and Product Detail View

**User Story:** As a B2B Visitor, I want to browse all available product categories and view individual product details, so that I can identify items suitable for my business.

#### Acceptance Criteria

1. THE Products page SHALL render a product categories section that groups products by category using data from Static Product Data.
2. THE Products page SHALL render a Product Card for each product in Static Product Data.
3. WHEN a B2B Visitor clicks a Product Card, THE Website SHALL display the Product Detail View for that product.
4. THE Product Detail View SHALL display the product name, category, description, available sizes, available colors, and an Inquiry Button.
5. WHEN a B2B Visitor clicks the Inquiry Button, THE Website SHALL navigate to `/contact` or scroll to the Contact Form.
6. THE Static Product Data SHALL be defined in `data/products.ts` and exported as a typed TypeScript array.
7. THE Products page (`/products`) SHALL export SEO Metadata with a unique `<title>` and `<meta description>`.

---

### Requirement 5 — Contact Us Page

**User Story:** As a B2B Visitor, I want to submit a business inquiry and find the company's contact details, so that I can initiate a partnership conversation.

#### Acceptance Criteria

1. THE Contact Us page SHALL render a Contact Form with fields for: full name, business name, email address, phone number (optional), and message.
2. THE Contact Form SHALL mark the full name, business name, email address, and message fields as required.
3. IF a B2B Visitor submits the Contact Form with one or more required fields empty, THEN THE Contact Form SHALL display an inline validation error message for each empty required field without submitting.
4. IF a B2B Visitor submits the Contact Form with an improperly formatted email address, THEN THE Contact Form SHALL display an inline validation error for the email field without submitting.
5. WHEN a B2B Visitor successfully submits the Contact Form, THE Contact Form SHALL display a confirmation message indicating the inquiry was received.
6. THE Contact Us page SHALL render a Business Information section containing the company email address, phone number, and physical or mailing address.
7. WHERE Google Maps integration is enabled, THE Contact Us page SHALL render an embedded Google Maps iframe showing the business location.
8. THE Contact Us page (`/contact`) SHALL export SEO Metadata with a unique `<title>` and `<meta description>`.

---

### Requirement 6 — SEO and Metadata

**User Story:** As a site owner, I want every page to have proper SEO metadata, so that the Website can be discovered by search engines and shared on social platforms.

#### Acceptance Criteria

1. THE Website SHALL export a root-level `Metadata` object from `app/layout.tsx` containing a default `<title>` template and a default `<meta description>`.
2. THE Home page SHALL export SEO Metadata with a unique `<title>` and `<meta description>` describing hilooyoon's B2B offering.
3. WHEN a page exports SEO Metadata, THE Website SHALL render the corresponding `<title>` and `<meta name="description">` tags in the document `<head>` using the Next.js Metadata API.
4. THE Website SHALL include Open Graph tags (`og:title`, `og:description`, `og:type`) in each page's exported Metadata.

---

### Requirement 7 — Responsive Design and Visual Style

**User Story:** As a B2B Visitor accessing the Website from any device, I want a consistent, professional experience, so that I can engage with content regardless of screen size.

#### Acceptance Criteria

1. THE Website SHALL render a fully responsive layout across viewport widths from 320 px to 1920 px using Tailwind CSS v4 responsive utilities.
2. THE Website SHALL apply a white-and-black base color theme with a designated accent color used consistently for interactive elements such as buttons and links.
3. THE Website SHALL use professional, legible typography with a minimum body font size of 16 px.
4. WHEN a B2B Visitor hovers over an interactive element (button, link, card), THE Website SHALL apply a visible hover state transition.
5. THE Website SHALL not use inline styles for layout or color; all styling SHALL be applied via Tailwind CSS utility classes or CSS custom properties defined in `app/globals.css`.

---

### Requirement 8 — Static Data Architecture

**User Story:** As a developer, I want product and page content to be defined in typed static data files, so that content can be updated without touching component logic.

#### Acceptance Criteria

1. THE Website SHALL source all product data from `data/products.ts`, which SHALL export a `Product[]` typed array.
2. THE `Product` type SHALL include at minimum: `id` (string), `name` (string), `category` (string), `description` (string), `images` (string[]), `sizes` (string[]), `colors` (string[]), and `featured` (boolean).
3. THE Website SHALL source any static page content (company story, mission, vision, why-choose-us items) from dedicated files in the `data/` folder.
4. IF the `data/products.ts` file contains zero products, THEN THE Products page SHALL display an empty-state message informing the B2B Visitor that no products are currently available.

---

### Requirement 9 — Folder Structure and Code Organisation

**User Story:** As a developer, I want a clear, consistent project folder structure, so that components and pages are easy to locate and maintain.

#### Acceptance Criteria

1. THE Website SHALL organise page-level React components under `app/` using Next.js App Router conventions (one `page.tsx` per route, shared `layout.tsx` at the root).
2. THE Website SHALL organise reusable UI components (Navbar, Footer, Product Card, etc.) under `components/`.
3. THE Website SHALL organise full-page section components (Hero, Featured Products, About Preview, etc.) under `sections/`.
4. THE Website SHALL organise static data files under `data/`.
5. THE Website SHALL organise custom React hooks under `hooks/`.
6. THE Website SHALL organise utility functions and helper modules under `lib/`.
7. THE Website SHALL NOT use a `src/` directory; all source folders SHALL exist at the repository root.
