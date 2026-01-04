
export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'residential' | 'commercial' | 'kitchen' | 'living';
  alt: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: { [key: string]: string };
}
