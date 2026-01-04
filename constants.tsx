
import { Service, Review, GalleryImage, BusinessInfo, Package } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Des and Dec Private Limited",
  address: "First Floor, K-Complex, Kowdiar, Thiruvananthapuram, Kerala 695003",
  phone: "+91 94477 66111",
  email: "info@desanddec.com",
  hours: {
    "Monday - Saturday": "9:30 AM - 6:30 PM",
    "Sunday": "By Appointment"
  }
};

export const PACKAGES: Package[] = [
  {
    id: "pkg_classic",
    name: "Classic Package",
    tagline: "Essential Excellence for Modern Living",
    price: "Standard",
    features: [
      "Modular Kitchen (710 Grade BWP Plywood)",
      "Essential Wardrobes for 2 Bedrooms",
      "Standard TV Unit & Shoe Rack",
      "Basic Electrical & Plumbing Points",
      "High-Quality Hardware with Soft-Close",
      "1.0mm Laminate Exterior Finishes",
      "1 Year Comprehensive Service Warranty"
    ]
  },
  {
    id: "pkg_pride",
    name: "Pride Package",
    tagline: "The Perfect Balance of Style & Luxury",
    price: "Premium",
    isPopular: true,
    features: [
      "All Classic + Wardrobes for 3 Bedrooms",
      "Acrylic or Glass Finish Kitchen Shutters",
      "Designer False Ceiling in Living & Dining",
      "LED Cove Lighting & Profile Spotlights",
      "Premium Wall Paneling in Master Suite",
      "International Hardware (Hettich/Hafele)",
      "5 Year Extended Warranty Support"
    ]
  },
  {
    id: "pkg_elite",
    name: "Elite Package",
    tagline: "Bespoke Ultra-Luxury Masterpiece",
    price: "Luxury",
    features: [
      "Full Home Automation (Lighting & Curtains)",
      "Premium Italian Marble or Large Format Tiles",
      "Luxury Modular Kitchen with Island/Breakfast Counter",
      "Bespoke Designer Loose Furniture Set",
      "Home Cinema or High-End Acoustic Paneling",
      "Luxury Sanitary & Wellness Fittings",
      "Lifetime Design & Consultation Support"
    ]
  }
];

export interface Stat {
  label: string;
  value: string;
}

export const STATS: Stat[] = [
  { label: "Years of Experience", value: "15+" },
  { label: "Completed Projects", value: "500+" },
  { label: "Expert Professionals", value: "50+" },
  { label: "Satisfied Clients", value: "450+" }
];

export const PROCESS_STEPS = [
  {
    title: "Discovery",
    description: "Initial consultation to understand your lifestyle, preferences, and vision for the space."
  },
  {
    title: "Planning",
    description: "Detailed spatial analysis, budgeting, and timeline creation to ensure a seamless execution."
  },
  {
    title: "Design",
    description: "Crafting bespoke 3D visualizations and selecting materials that define your unique aesthetic."
  },
  {
    title: "Execution",
    description: "Turnkey implementation where our engineers and artisans bring the design to life."
  }
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Luxury Interior Design",
    description: "Bespoke residential interiors focusing on comfort, luxury, and functionality using premium materials.",
    price: "Turnkey Solutions",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Architectural Design",
    description: "Innovative building designs that harmonize with the tropical landscape of Kerala while embracing modern tech.",
    price: "Consultation Basis",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Commercial & Office",
    description: "Productive workspaces and retail environments designed to elevate brand identity and efficiency.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Civil Construction",
    description: "High-quality construction services with rigorous project management and structural integrity.",
    image: "https://images.unsplash.com/photo-1541976534312-301099f4d173?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Modular Kitchens",
    description: "State-of-the-art ergonomic kitchens with international fittings and optimized storage solutions.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Landscape Design",
    description: "Creating outdoor sanctuaries that extend the living space into nature seamlessly.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "MEP Services",
    description: "Integrated Mechanical, Electrical, and Plumbing engineering for smart, safe, and efficient homes.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "Home Automation",
    description: "Seamlessly integrated smart home technologies for modern convenience and enhanced security.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Dr. Rahul Menon",
    rating: 5,
    comment: "The team at Des and Dec transformed our villa in Kowdiar beyond our expectations. Their turnkey approach meant we didn't have to worry about a single detail.",
    date: "1 month ago"
  },
  {
    id: "r2",
    author: "Saritha Varma",
    rating: 5,
    comment: "Exceptional design aesthetics. They have a way of bringing traditional Kerala elements into a very modern, minimalist framework.",
    date: "2 months ago"
  },
  {
    id: "r3",
    author: "K. Jayachandran",
    rating: 5,
    comment: "Highly professional engineers and designers. The 3D visualizations were so accurate, the final result was exactly what we saw on screen.",
    date: "5 days ago"
  }
];

export const GALLERY: GalleryImage[] = [
  { id: "g1", url: "https://images.unsplash.com/photo-1616486341353-c5833cd717b2?q=80&w=800&auto=format&fit=crop", category: "living", alt: "Luxury living room in Trivandrum" },
  { id: "g2", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", category: "kitchen", alt: "Modern minimalist kitchen design" },
  { id: "g3", url: "https://images.unsplash.com/photo-1617806118233-18e16208a50a?q=80&w=800&auto=format&fit=crop", category: "residential", alt: "Bespoke master bedroom" },
  { id: "g4", url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop", category: "commercial", alt: "Corporate office design Kerala" },
  { id: "g5", url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop", category: "living", alt: "Contemporary dining hall" },
  { id: "g6", url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800&auto=format&fit=crop", category: "residential", alt: "Luxury bath suite" }
];
