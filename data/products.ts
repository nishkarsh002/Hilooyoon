export interface Product {
  id: string
  name: string
  category: string
  description: string
  images: string[]
  sizes: string[]
  colors: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: "premium-tee-collection",
    name: "Premium Tee Collection",
    category: "T-Shirts",
    description:
      "Our flagship heavyweight cotton T-shirt range. Features a structured collar, reinforced stitching, and a relaxed fit available in a wide colour palette. A wholesale essential for any retail line.",
    images: ["/imgs/tshirts.jpeg", "/imgs/tshirts2.jpeg", "/imgs/tshirt1.jpeg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Olive", "Grey"],
    featured: true,
  },
  {
    id: "essential-tee",
    name: "Essential Tee",
    category: "T-Shirts",
    description:
      "A clean, minimal tee in a premium 200gsm cotton blend. Fade-resistant and pre-shrunk — built for consistency across large wholesale orders.",
    images: ["/imgs/tshirts2.jpeg", "/imgs/tshirt2.jpeg", "/imgs/tshirt3.jpeg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Charcoal"],
    featured: true,
  },
  {
    id: "graphic-tee",
    name: "Statement Graphic Tee",
    category: "T-Shirts",
    description:
      "A bold graphic tee on a premium ring-spun cotton base. Available for custom artwork — perfect for branded drops and limited-edition retail collections.",
    images: ["/imgs/tshirt1.jpeg", "/imgs/tshirt2.jpeg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Sand"],
    featured: true,
  },
  {
    id: "branded-tee",
    name: "Branded Logo Tee",
    category: "T-Shirts",
    description:
      "A signature branded tee featuring embroidered or printed logo placement. Ideal for retail-ready branded merchandise programmes.",
    images: ["/imgs/tshirt2.jpeg", "/imgs/tshirt3.jpeg", "/imgs/tshirts.jpeg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
    featured: false,
  },
  {
    id: "classic-tee",
    name: "Classic Crew Tee",
    category: "T-Shirts",
    description:
      "A timeless crew-neck tee in a soft 180gsm jersey. A budget-friendly core SKU that delivers volume for entry-level and value retail lines.",
    images: ["/imgs/tshirt3.jpeg", "/imgs/tshirts2.jpeg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey", "Beige"],
    featured: false,
  },
  {
    id: "oversized-hoodie",
    name: "Oversized Fleece Hoodie",
    category: "Hoodies",
    description:
      "An ultra-soft 320gsm French terry hoodie with dropped shoulders and a kangaroo pocket. A streetwear favourite available for bulk orders with custom embroidery options.",
    images: ["/imgs/hoodies.jpeg", "/imgs/set1.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey Marl", "Black", "Cream", "Dusty Pink"],
    featured: true,
  },
  {
    id: "slim-chino",
    name: "Slim-Fit Chino Trouser",
    category: "Trousers",
    description:
      "Tailored slim-fit chinos in a durable stretch-cotton blend. A wardrobe staple for retail collections targeting the professional and smart-casual segments.",
    images: ["/imgs/trouser.jpeg", "/imgs/trouser2.jpeg"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Beige", "Navy", "Olive", "Black"],
    featured: true,
  },
  {
    id: "formal-trouser",
    name: "Formal Straight Trouser",
    category: "Trousers",
    description:
      "A clean straight-cut formal trouser in a wrinkle-resistant fabric blend. A reliable core piece for smart and workwear retail ranges.",
    images: ["/imgs/trouser2.jpeg", "/imgs/trouser.jpeg"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Black", "Charcoal", "Navy"],
    featured: false,
  },
  {
    id: "track-lower",
    name: "Track Lower",
    category: "Lowers",
    description:
      "A comfortable track-style lower in a soft jersey fabric with an elasticated waistband and tapered leg. Perfect for athleisure and loungewear retail lines.",
    images: ["/imgs/lowers.jpeg", "/imgs/lower1.jpeg", "/imgs/lower3.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey", "Olive"],
    featured: true,
  },
  {
    id: "jogger-lower",
    name: "Premium Jogger",
    category: "Lowers",
    description:
      "A mid-weight jogger with ribbed ankle cuffs and a drawstring waist. One of the highest-velocity wholesale pieces across streetwear and sports retail.",
    images: ["/imgs/lower1.jpeg", "/imgs/lowers2.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy", "Cream"],
    featured: false,
  },
  {
    id: "cargo-lower",
    name: "Cargo Lower",
    category: "Lowers",
    description:
      "Multi-pocket cargo lowers in a durable cotton-twill blend with side pockets and a relaxed fit. Popular in streetwear and outdoor retail segments.",
    images: ["/imgs/lowers2.jpeg", "/imgs/lower3.jpeg", "/imgs/lowers.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Black", "Olive", "Grey"],
    featured: false,
  },
  {
    id: "running-lower",
    name: "Active Running Lower",
    category: "Lowers",
    description:
      "A lightweight moisture-wicking lower with a slim taper and reflective detailing. Built for performance sportswear and activewear retail collections.",
    images: ["/imgs/lower3.jpeg", "/imgs/lower1.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Charcoal"],
    featured: false,
  },
  {
    id: "cargo-shorts",
    name: "Utility Cargo Shorts",
    category: "Shorts",
    description:
      "Six-pocket utility cargo shorts in a durable cotton-twill fabric. Versatile and practical — popular in streetwear and outdoor retail segments.",
    images: ["/imgs/shorts.jpeg", "/imgs/lowers.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Black", "Olive"],
    featured: false,
  },
  {
    id: "coordinated-set-1",
    name: "Co-ord Set — Classic",
    category: "Sets",
    description:
      "A coordinated tee and lower set in complementary tones. Sell as a complete outfit — co-ord sets are among the fastest-growing wholesale categories in casual and streetwear retail.",
    images: ["/imgs/set1.jpeg", "/imgs/set2.jpeg", "/imgs/hoodies.jpeg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    featured: true,
  },
  {
    id: "coordinated-set-2",
    name: "Co-ord Set — Premium",
    category: "Sets",
    description:
      "A premium co-ord set with a structured top and relaxed lower in a matching fabric. A high-margin, complete offering ideal for fashion-forward retail collections.",
    images: ["/imgs/set2.jpeg", "/imgs/set1.jpeg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White/Beige", "Black/Charcoal", "Navy/Khaki"],
    featured: false,
  },
]
