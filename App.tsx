
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  ChevronLeft,
  Star,
  ArrowRight,
  Layout,
  Compass,
  Search,
  CheckCircle2,
  Linkedin,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Calendar,
  Check
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS, GALLERY, STATS, PROCESS_STEPS, PACKAGES } from './constants';
import { Service, Review, GalleryImage, Package } from './types';

// Using the provided logo URL
const LOGO_URL = "https://prompt-library-static-assets.s3.amazonaws.com/ms-m0v7q3m8/0f243888-9d41-477f-a648-5c4558e8073b.png";

// --- Custom Hooks ---

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.substring(1);
      const targetElement = targetId === '' ? document.getElementById('top') : document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a 
              href="#top" 
              onClick={(e) => handleNavClick(e, '#top')}
              className="flex items-center gap-3"
            >
              <img 
                src={LOGO_URL} 
                alt="Des and Dec Logo" 
                className={`h-12 md:h-14 transition-all duration-500 object-contain ${!scrolled ? 'brightness-0 invert' : ''}`} 
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative group ${scrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-200 hover:text-white'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${scrolled ? 'bg-amber-600' : 'bg-white'}`}></span>
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="group bg-zinc-900 text-white px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20 active:scale-95"
              >
                Inquire
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-500 ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 text-sm font-bold uppercase tracking-widest text-zinc-800 border-b border-zinc-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollY = useScrollPosition();
  const handleHeroClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden bg-zinc-950" id="home">
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `scale(1.15) translateY(${scrollY * 0.4}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2072&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60"
          alt="Luxury interior"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-12 lg:px-8 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col items-start">
          <span className="animate-reveal-up reveal-delay-1 text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block border-l-2 border-amber-500 pl-4">
            BRING PRIDE INTO YOUR INTERIORS
          </span>
          <h1 className="animate-reveal-up reveal-delay-2 text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-10 leading-[1] tracking-tight">
            Turnkey <br /> 
            <span className="italic font-serif font-light text-zinc-300 relative">
              Excellence
              <span className="absolute -bottom-2 left-0 w-full h-px bg-white/20"></span>
            </span>
          </h1>
          <p className="animate-reveal-up reveal-delay-3 text-lg md:text-xl text-zinc-400 mb-14 max-w-xl font-light leading-relaxed">
            As Thiruvananthapuram's premier Interior Designers and Decorators, we craft timeless architectural statements that define luxury living.
          </p>
          <div className="animate-reveal-up reveal-delay-4 flex flex-col sm:flex-row gap-6">
            <a href="#services" onClick={(e) => handleHeroClick(e, '#services')} className="group bg-white text-zinc-900 px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl">
              Our Expertise <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#packages" onClick={(e) => handleHeroClick(e, '#packages')} className="group border border-white/20 text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all duration-500 text-center backdrop-blur-sm">
              View Packages
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 hidden lg:flex justify-center z-10 animate-in fade-in duration-1000 delay-500">
        <div className="max-w-[1200px] w-full px-8 flex items-center gap-10">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-bold">{stat.label}</span>
              </div>
              {i < STATS.length - 1 && <div className="w-px h-8 bg-zinc-800"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">{title}</h2>
    <div className={`w-20 h-1 bg-amber-500 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const About = () => (
  <section id="about" className="py-32 bg-white">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1541976534312-301099f4d173?q=80&w=1000&auto=format&fit=crop" alt="Quality construction" className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-10 py-8 shadow-2xl rounded-sm">
            <p className="text-4xl font-bold text-zinc-900 font-serif mb-1 italic">15+ Years</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 text-center">of Mastery</p>
          </div>
        </div>
        <div>
          <SectionHeading title="A Legacy of Architectural Brilliance" subtitle="Who We Are" centered={false} />
          <p className="text-zinc-600 text-lg mb-8 leading-relaxed font-light">
            Des and Dec Private Limited is a premier design-build firm in Thiruvananthapuram. We don't just design spaces; we curate environments that tell your story. Our expertise spans across luxury residential architecture, sophisticated interiors, and complex commercial projects.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <CheckCircle2 size={24} className="text-amber-600" />
              <h4 className="font-bold text-zinc-900">Turnkey Experts</h4>
              <p className="text-sm text-zinc-500">One-point contact for all your design and build needs.</p>
            </div>
            <div className="flex flex-col gap-2">
              <CheckCircle2 size={24} className="text-amber-600" />
              <h4 className="font-bold text-zinc-900">Sustainable Focus</h4>
              <p className="text-sm text-zinc-500">Eco-conscious materials and tropical design principles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC<{ onBook: (serviceTitle: string) => void }> = ({ onBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="py-32 bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Comprehensive Solutions" subtitle="What We Do" />
        <div className="max-w-xl mx-auto mb-16 relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search size={20} className="text-zinc-400 group-focus-within:text-amber-600" />
          </div>
          <input
            type="text"
            placeholder="Search our expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border border-zinc-200 rounded-sm text-sm font-light outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white group relative overflow-hidden h-[450px]">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{service.title}</h3>
                <p className="text-zinc-300 text-[13px] mb-6 opacity-0 group-hover:opacity-100 transition-all">{service.description}</p>
                <button 
                  onClick={() => onBook(service.title)}
                  className="flex items-center gap-2 bg-amber-600 hover:bg-white hover:text-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <Calendar size={12} /> Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages: React.FC<{ onSelect: (pkgName: string) => void }> = ({ onSelect }) => (
  <section id="packages" className="py-32 bg-white">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Tailored Investment Plans" subtitle="Our Packages" />
      <div className="grid md:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`relative p-10 border rounded-sm transition-all flex flex-col h-full ${pkg.isPopular ? 'border-amber-500 shadow-2xl scale-105 z-10 bg-zinc-900 text-white' : 'border-zinc-100 bg-zinc-50'}`}
          >
            {pkg.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-zinc-900'}`}>{pkg.name}</h3>
              <p className={pkg.isPopular ? 'text-zinc-400' : 'text-zinc-500'}>{pkg.tagline}</p>
            </div>
            
            <div className={`text-4xl font-bold mb-10 ${pkg.isPopular ? 'text-amber-500' : 'text-zinc-900'}`}>
              {pkg.price}
              <span className="text-sm font-normal text-zinc-400 ml-2">Tier</span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                  <span className={`text-sm font-light ${pkg.isPopular ? 'text-zinc-300' : 'text-zinc-600'}`}>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onSelect(pkg.name)}
              className={`w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm ${pkg.isPopular ? 'bg-amber-600 hover:bg-white hover:text-zinc-900 text-white' : 'bg-zinc-900 hover:bg-amber-600 text-white'}`}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const filteredGallery = filter === 'all' ? GALLERY : GALLERY.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-32 bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Authentic Creations" subtitle="Featured Projects" />
        <div className="flex flex-wrap justify-center gap-10 mb-20 border-b border-zinc-100 pb-8">
          {['all', 'residential', 'commercial', 'kitchen', 'living'].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`text-[10px] font-bold uppercase tracking-[0.3em] relative ${filter === cat ? 'text-amber-600' : 'text-zinc-400 hover:text-zinc-900'}`}>
              {cat}
              {filter === cat && <span className="absolute -bottom-8 left-0 right-0 h-0.5 bg-amber-600"></span>}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((img, index) => (
            <div key={img.id} onClick={() => setSelectedImageIndex(index)} className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 rounded-sm cursor-pointer">
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-8 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mb-1">{img.category}</p>
                <h4 className="text-xl font-bold text-white">{img.alt}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex(prev => (prev + 1) % REVIEWS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-zinc-950 text-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Client Perspectives</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Trusted Across Kerala</h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-500 text-amber-500" />)}
              </div>
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <p className="text-zinc-400 font-light leading-relaxed">Prominent medical professionals and corporate leaders trust us for their finest residents in Thiruvananthapuram.</p>
          </div>
          <div className="lg:col-span-2 min-h-[400px] relative">
            {REVIEWS.map((review, index) => (
              <div key={review.id} className={`absolute inset-0 transition-all duration-700 ${index === currentIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'}`}>
                <div className="h-full p-12 md:p-16 border border-zinc-800 bg-zinc-900/40 rounded-sm flex flex-col justify-between">
                  <div>
                    <p className="text-zinc-300 italic mb-12 text-xl md:text-2xl font-light">"{review.comment}"</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-amber-500 text-xl">{review.author[0]}</div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{review.author}</h4>
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

const Contact: React.FC<ContactProps> = ({ selectedService, onServiceChange }) => {
  const [isOther, setIsOther] = useState(false);
  const [otherValue, setOtherValue] = useState("");

  const dropdownOptions = [
    ...SERVICES.map(s => s.title),
    ...PACKAGES.map(p => p.name)
  ];

  useEffect(() => {
    if (selectedService && !dropdownOptions.includes(selectedService)) {
      setIsOther(true);
      setOtherValue(selectedService);
    } else {
      setIsOther(false);
    }
  }, [selectedService]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "Other") {
      setIsOther(true);
      onServiceChange("");
    } else {
      setIsOther(false);
      onServiceChange(val);
    }
  };

  const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherValue(e.target.value);
    onServiceChange(e.target.value);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <SectionHeading title="Let's Build Your Vision" subtitle="Connect" centered={false} />
            <div className="space-y-10">
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-sm text-amber-600"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-widest mb-2">The Studio</h4>
                  <p className="text-zinc-500 font-light max-w-xs">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-sm text-amber-600"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-widest mb-2">Direct Line</h4>
                  <p className="text-zinc-500 font-light">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-sm shadow-sm border border-zinc-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-b border-zinc-200 pb-2 focus-within:border-amber-500">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Name</label>
                  <input type="text" required className="w-full bg-transparent outline-none py-1 font-light" placeholder="Full Name" />
                </div>
                <div className="border-b border-zinc-200 pb-2 focus-within:border-amber-500">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Phone</label>
                  <input type="tel" required className="w-full bg-transparent outline-none py-1 font-light" placeholder="+91" />
                </div>
              </div>

              <div className="border-b border-zinc-200 pb-2 focus-within:border-amber-500">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Company Name (Optional)</label>
                <input type="text" className="w-full bg-transparent outline-none py-1 font-light" placeholder="Organization/Firm Name" />
              </div>

              <div className="border-b border-zinc-200 pb-2 focus-within:border-amber-500">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Service Required</label>
                <select 
                  className="w-full bg-transparent outline-none py-1 font-light bg-white cursor-pointer"
                  value={isOther ? "Other" : selectedService}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Select a Service or Package</option>
                  {dropdownOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              {isOther && (
                <div className="border-b border-zinc-200 pb-2 focus-within:border-amber-500 animate-in slide-in-from-top-2 duration-300">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Please Specify Requirement</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-transparent outline-none py-1 font-light" 
                    placeholder="E.g., Home Office Setup, Lighting consultation" 
                    value={otherValue}
                    onChange={handleOtherInputChange}
                  />
                </div>
              )}

              <div className="border-b border-zinc-200 pb-2 focus-within:border-amber-500">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Message</label>
                <textarea rows={3} className="w-full bg-transparent outline-none py-1 font-light resize-none" placeholder="Describe your project vision..."></textarea>
              </div>
              <button type="submit" className="w-full bg-zinc-900 text-white py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-600 transition-all shadow-lg">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-32 pb-12 border-t border-zinc-100">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <img 
            src={LOGO_URL} 
            alt="Des and Dec Logo" 
            className="h-16 mb-8 object-contain" 
          />
          <p className="text-zinc-500 font-light leading-relaxed mb-8">Thiruvananthapuram's premier Interior Designers and Decorators. BRING PRIDE INTO YOUR INTERIORS.</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Navigation</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li><a href="#top" className="hover:text-amber-600">Home</a></li>
            <li><a href="#about" className="hover:text-amber-600">About</a></li>
            <li><a href="#services" className="hover:text-amber-600">Expertise</a></li>
            <li><a href="#packages" className="hover:text-amber-600">Packages</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Expertise</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li>Architecture</li>
            <li>Turnkey Interiors</li>
            <li>Modular Kitchens</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-8">Contact</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-light">
            <li>{BUSINESS_INFO.phone}</li>
            <li>{BUSINESS_INFO.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-100 pt-12 text-center text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Des and Dec Private Limited. ISO 9001:2015 Certified.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectService = (title: string) => {
    setSelectedService(title);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <About />
      <Services onBook={handleSelectService} />
      <Packages onSelect={handleSelectService} />
      <Gallery />
      <Reviews />
      <Contact selectedService={selectedService} onServiceChange={setSelectedService} />
      <Footer />
      <a href="https://wa.me/919447766111" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-40 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg></a>
    </div>
  );
};

export default App;
