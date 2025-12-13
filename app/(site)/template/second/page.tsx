"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Calendar, 
  Camera, 
  Utensils, 
  Music, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Calculator,
  Sparkles,
  Star,
  ChevronRight
} from 'lucide-react';

const TemplateSecondPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State untuk Budget Planner
  const [budget, setBudget] = useState(100000000); // Default 100 Juta

  // State untuk Products Section
  const [activeCategory, setActiveCategory] = useState('wedding');
  const [selectedPackage, setSelectedPackage] = useState<typeof productData['wedding']['packages'][0] | null>(null);

  // Format Currency IDR
  const formatIDR = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Kategori Budget Breakdown
  const budgetCategories = [
    { name: "Venue & Catering", percent: 45, color: "bg-emerald-500" },
    { name: "Dekorasi", percent: 15, color: "bg-emerald-400" },
    { name: "Dokumentasi", percent: 10, color: "bg-amber-400" },
    { name: "Busana & MUA", percent: 10, color: "bg-amber-300" },
    { name: "Entertainment", percent: 5, color: "bg-stone-400" },
    { name: "Lainnya", percent: 15, color: "bg-stone-300" },
  ];

  // Data Produk & Paket dengan Image
  const productData = {
    wedding: {
      title: "Wedding Day",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      packages: [
        {
          id: 1,
          name: "Intimate Gold",
          price: 45000000,
          image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
          desc: "Sempurna untuk acara sakral dengan keluarga inti.",
          features: ["Max 100 Pax", "Venue Outdoor/Indoor", "Standard Decoration", "MUA & Attire (Akad)", "1 Photographer + 1 Videographer"]
        },
        {
          id: 2,
          name: "Platinum Grand",
          price: 85000000,
          image: "https://images.unsplash.com/photo-1519225448526-0ca85c53563e?auto=format&fit=crop&q=80&w=800",
          desc: "Pesta meriah dengan detail kemewahan.",
          features: ["Max 300 Pax", "Ballroom Venue", "Premium Floral Decoration", "MUA & Attire (Akad + Resepsi)", "Cinematic Video + Drone", "Full Band Entertainment"]
        },
        {
          id: 3,
          name: "Royal Eternity",
          price: 150000000,
          image: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&q=80&w=800",
          desc: "Pelayanan sekelas bangsawan untuk hari istimewa.",
          features: ["Max 500+ Pax", "Luxury Hotel Ballroom", "Custom 3D Decoration", "Designer Attire", "Same Day Edit Video", "Orchestra"]
        }
      ]
    },
    prewedding: {
      title: "Pre-Wedding",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800",
      packages: [
        {
          id: 4,
          name: "Studio Session",
          price: 3500000,
          image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800",
          desc: "Foto studio minimalis dan elegan.",
          features: ["3 Jam Sesi", "2 Konsep Baju", "All Files", "10 Edited Photos", "Make Up Artist"]
        },
        {
          id: 5,
          name: "Outdoor Adventure",
          price: 8000000,
          image: "https://images.unsplash.com/photo-1529636721157-d4633756ac19?auto=format&fit=crop&q=80&w=800",
          desc: "Abadikan momen di alam terbuka.",
          features: ["Lokasi Bandung Area", "Seharian Penuh", "3 Konsep Baju", "Cinematic Teaser 1 Min", "Printed Canvas"]
        }
      ]
    },
    engagement: {
      title: "Engagement",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      packages: [
        {
          id: 6,
          name: "Lamaran Manis",
          price: 15000000,
          image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
          desc: "Momen pengikatan janji yang hangat.",
          features: ["Backdrop Dekorasi", "MC Lamaran", "Dokumentasi Foto", "Sound System Portable", "Catering 50 Pax"]
        }
      ]
    },
    tradition: {
      title: "Adat",
      image: "https://images.unsplash.com/photo-1625244514890-093a85b9671d?auto=format&fit=crop&q=80&w=800",
      packages: [
        {
          id: 7,
          name: "Paket Sakral",
          price: 12000000,
          image: "https://images.unsplash.com/photo-1625244514890-093a85b9671d?auto=format&fit=crop&q=80&w=800",
          desc: "Prosesi adat yang khidmat dan syahdu.",
          features: ["Dekorasi Siraman", "Perlengkapan Adat", "MC Adat", "Buku Pengajian", "Sound System"]
        }
      ]
    },
    maternity: {
      title: "Maternity",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
      packages: [
        {
          id: 8,
          name: "Mom to Be",
          price: 4500000,
          image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
          desc: "Rayakan kehamilan dengan foto estetik.",
          features: ["Home Service / Studio", "Gown Provided", "Family Included", "15 Edited Photos", "MUA"]
        }
      ]
    }
  };

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-sans text-stone-700 bg-[#FAFAF8] overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo updated: Font serif yang lebih berkarakter */}
          <div className={`text-3xl font-serif font-bold italic tracking-wide ${scrolled ? 'text-emerald-900' : 'text-emerald-900 md:text-white'}`}>
            Asmara<span className="text-amber-400 font-sans not-italic">.</span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-1 p-1 rounded-full ${scrolled ? 'bg-stone-100/50' : 'bg-white/10 backdrop-blur-md'}`}>
            {['Beranda', 'Tentang', 'Layanan', 'Paket', 'Budget', 'Kontak'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-stone-600 hover:bg-white hover:shadow-sm hover:text-emerald-800' 
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${scrolled ? 'text-emerald-900' : 'text-emerald-900'} focus:outline-none`}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, borderRadius: "0 0 50% 50%" }}
              animate={{ opacity: 1, height: 'auto', borderRadius: "0 0 0 0" }}
              exit={{ opacity: 0, height: 0, borderRadius: "0 0 50% 50%" }}
              className="md:hidden bg-white shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-4 text-center">
                {['Beranda', 'Tentang', 'Layanan', 'Paket', 'Budget', 'Kontak'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-600 font-medium hover:text-emerald-600 block text-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with softer Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 mix-blend-multiply"></div> 
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-[3rem] shadow-2xl"
          >
            <span className="inline-block py-2 px-6 bg-white rounded-full text-emerald-900 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg">
              Est. 2014 • Wedding Organizer
            </span>
            <h1 className="text-5xl md:text-7xl text-white font-serif font-bold leading-tight mb-6 drop-shadow-sm">
              Momen Anda,<br /> 
              <span className="text-amber-200 italic font-light">Karya Seni Kami.</span>
            </h1>
            <p className="text-white/90 text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Mewujudkan pernikahan impian dengan sentuhan personal yang hangat, detail yang artistik, dan perencanaan yang tanpa cela.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-800 text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-900/40"
              >
                Mulai Konsultasi
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-900 px-10 py-4 rounded-full text-sm font-bold hover:bg-stone-50 transition-colors shadow-lg"
              >
                Lihat Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION (Rounded Card Style) --- */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-stone-100">
            {[
              { num: "500+", label: "Wedding Stories" },
              { num: "10", label: "Years Experience" },
              { num: "50+", label: "Trusted Vendors" },
              { num: "5.0", label: "Client Rating" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-4xl font-serif font-bold text-emerald-800">{stat.num}</h3>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT US --- */}
      <section id="tentang" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:w-1/2 relative"
            >
              <div className="relative z-10 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1511285560982-1356311d0581?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto object-cover rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs animate-bounce-slow">
                  <p className="font-serif italic text-emerald-800 text-lg">"Detail adalah bahasa cinta kami."</p>
                </div>
              </div>
              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
            </motion.div>
            
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="md:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-1.5 rounded-full text-amber-700 text-sm font-bold">
                <Star size={14} fill="currentColor" />
                <span>Tentang Kami</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 leading-tight">
                Merancang Kebahagiaan <br/><span className="italic text-emerald-600 font-light">Tanpa Batas.</span>
              </h2>
              <p className="text-stone-600 leading-loose text-lg">
                Asmara Wedding Planner bukan sekadar organizer. Kami adalah seniman momen. Kami memadukan manajemen acara yang presisi dengan estetika visual yang memukau.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Tim Profesional', 'Budget Transparan', 'Vendor Pilihan', 'Konsep Personal'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
                    <CheckCircle className="text-emerald-500" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (Clean Cards) --- */}
      <section id="layanan" className="py-24 bg-white rounded-t-[4rem]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-4">Layanan Kami</h2>
            <p className="text-stone-500 max-w-lg mx-auto">Kami menyediakan solusi menyeluruh agar Anda bisa menikmati momen tanpa rasa khawatir.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Calendar size={28} />, title: "Full Planning", desc: "Perencanaan dari A-Z." },
              { icon: <Utensils size={28} />, title: "Catering & Decor", desc: "Rasa & estetika visual." },
              { icon: <Camera size={28} />, title: "Documentation", desc: "Mengabadikan emosi." },
              { icon: <Music size={28} />, title: "Entertainment", desc: "Membangun suasana." },
              { icon: <Heart size={28} />, title: "On The Day", desc: "Koordinasi hari H." },
              { icon: <MapPin size={28} />, title: "Venue", desc: "Lokasi eksklusif." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-stone-50 hover:bg-emerald-50 p-8 rounded-[2rem] transition-all duration-300 border border-stone-100 hover:border-emerald-200"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-700 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- BUDGET PLANNER (Soft Dashboard Look) --- */}
      <section id="budget" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
              
              {/* Left Side: Input */}
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-2 text-amber-300 mb-4">
                  <Calculator size={20} />
                  <span className="font-bold uppercase tracking-widest text-sm">Smart Calculator</span>
                </div>
                <h2 className="text-4xl font-serif font-bold mb-6">Simulasi Anggaran</h2>
                <p className="text-emerald-100/80 mb-10 leading-relaxed max-w-md">
                  Gunakan fitur ini untuk mendapatkan gambaran awal alokasi dana pernikahan Anda.
                </p>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <label className="block text-sm font-medium text-emerald-200 mb-3">Total Budget Anda</label>
                  <div className="flex items-center bg-emerald-950/50 rounded-2xl px-6 py-4 border border-emerald-700 focus-within:border-amber-400 transition-colors">
                    <span className="text-amber-400 text-lg font-bold mr-4">Rp</span>
                    <input 
                      type="number" 
                      value={budget} 
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full bg-transparent text-white text-2xl font-bold focus:outline-none placeholder-emerald-700"
                    />
                  </div>
                  
                  <div className="mt-8">
                    <input 
                      type="range" 
                      min="50000000" 
                      max="1000000000" 
                      step="10000000"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-2 bg-emerald-950 rounded-full appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Visual Result */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-white/95 backdrop-blur-sm text-stone-800 p-8 rounded-[2.5rem] shadow-xl h-full flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-8">
                    <h3 className="font-bold text-emerald-900">Estimasi Alokasi</h3>
                    <span className="font-bold text-2xl text-emerald-600">{formatIDR(budget)}</span>
                  </div>

                  <div className="space-y-5">
                    {budgetCategories.map((cat, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex justify-between text-sm mb-2 z-10 relative">
                          <span className="font-bold text-stone-600">{cat.name}</span>
                          <span className="font-bold text-stone-800">{formatIDR(budget * (cat.percent / 100))}</span>
                        </div>
                        {/* Custom Progress Bar with Rounded Edges */}
                        <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${cat.percent}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`h-full rounded-full ${cat.color}`}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS & PACKAGES SECTION (ARTISTIC 3D CARDS) --- */}
      <section id="paket" className="py-24 bg-[#FAFAF8] overflow-hidden">
        <div className="container mx-auto px-6 relative">
          
          {/* Background Decoration */}
          <div className="absolute top-0 left-10 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl -z-10"></div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-6">Koleksi Paket</h2>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(productData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === key 
                      ? 'bg-emerald-800 text-white shadow-lg scale-105' 
                      : 'bg-white text-emerald-800 border border-emerald-100 hover:bg-emerald-50'
                  }`}
                >
                  {productData[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Artistic 3D Card Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='wait'>
              {productData[activeCategory].packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  {/* The Card */}
                  <div className="relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    
                    {/* Image Header with Curve */}
                    <div className="h-64 relative overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Price Badge Floating */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
                        <span className="text-xs text-stone-500 uppercase font-bold block">Start From</span>
                        <span className="text-emerald-800 font-bold">{formatIDR(pkg.price)}</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 relative">
                      {/* Floating Icon */}
                      <div className="absolute -top-8 left-8 w-16 h-16 bg-emerald-800 rounded-2xl rotate-3 flex items-center justify-center text-white shadow-lg border-4 border-white group-hover:rotate-12 transition-transform duration-300">
                        {activeCategory === 'wedding' ? <Heart size={24} fill="currentColor" /> : 
                         activeCategory === 'prewedding' ? <Camera size={24} /> :
                         <Sparkles size={24} />
                        }
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-emerald-950 mt-4 mb-2">{pkg.name}</h3>
                      <p className="text-stone-500 text-sm mb-6 line-clamp-2">{pkg.desc}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {pkg.features.slice(0, 2).map((feat, idx) => (
                          <span key={idx} className="bg-stone-100 text-stone-600 text-xs px-3 py-1 rounded-full font-medium">
                            {feat}
                          </span>
                        ))}
                        <span className="bg-stone-100 text-stone-400 text-xs px-3 py-1 rounded-full">+More</span>
                      </div>

                      <button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full py-4 bg-emerald-50 text-emerald-800 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-emerald-800 group-hover:text-white transition-colors"
                      >
                        Lihat Detail <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Aesthetic Shadow Blob behind card */}
                  <div className="absolute -bottom-4 left-4 right-4 h-4 bg-emerald-900/20 blur-xl rounded-full -z-10 group-hover:bg-emerald-900/40 transition-colors"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- DETAIL MODAL (Rounded) --- */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-[3rem]"
            >
              {/* Image Header in Modal */}
              <div className="h-48 relative">
                <img src={selectedPackage.image} className="w-full h-full object-cover" alt="header"/>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-stone-800 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <div className="px-10 pb-10 -mt-10 relative">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">{productData[activeCategory].title}</span>
                <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-2">{selectedPackage.name}</h3>
                <div className="flex items-end gap-2 mb-8">
                   <h2 className="text-4xl font-bold text-emerald-600">{formatIDR(selectedPackage.price)}</h2>
                   <span className="text-stone-400 mb-2 font-medium">/ nett</span>
                </div>

                <div className="bg-stone-50 rounded-3xl p-8 mb-8">
                   <h4 className="font-bold text-emerald-900 mb-6 flex items-center gap-2">
                     <Sparkles size={20} className="text-amber-500"/>
                     Apa yang Anda dapatkan:
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                      {selectedPackage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                          <span className="text-stone-600 font-medium">{feature}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => setSelectedPackage(null)} className="flex-1 py-4 rounded-2xl border border-stone-200 font-bold text-stone-500 hover:bg-stone-50">
                    Kembali
                  </button>
                  <a href="#kontak" onClick={() => setSelectedPackage(null)} className="flex-1 py-4 rounded-2xl bg-emerald-800 font-bold text-white hover:bg-emerald-900 flex justify-center items-center gap-2 shadow-xl shadow-emerald-900/20">
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- GALLERY (Masonry with Rounded Corners) --- */}
      <section id="galeri" className="py-24 bg-white">
         <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-2">Galeri Momen</h2>
              <p className="text-stone-500">Kumpulan cerita cinta yang telah kami abadikan.</p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-emerald-700 hover:text-amber-500 transition-colors font-bold mt-4 md:mt-0">
              <span>Lihat Portfolio</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem]">
              <img 
                src="https://images.unsplash.com/photo-1519225448526-0ca85c53563e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 1" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-8">
                 <span className="text-white font-serif text-2xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">Rustic Garden Theme</span>
              </div>
            </div>
            
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem]">
               <img 
                src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 2" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>

            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] mt-0 md:mt-12">
               <img 
                src="https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 3" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem]">
               <img 
                src="https://images.unsplash.com/photo-1507504031981-a2368c6e1919?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 4" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-4">Kata Mereka</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Putri & Dimas", date: "Jan 2024", text: "Elegan, rapi, dan menenangkan. Tim Asmara membuat hari H kami terasa seperti liburan." },
              { name: "Sarah & John", date: "Dec 2023", text: "They truly understand the concept of 'Less is More'. Everything was perfect." },
              { name: "Rina & Bayu", date: "Nov 2023", text: "Sangat profesional. Detail dekorasi hijaunya sangat pas dengan tema garden party kami." },
            ].map((testi, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm relative"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <span className="text-2xl font-serif">"</span>
                </div>
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic mb-8 font-medium leading-relaxed">"{testi.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-stone-200 mr-4 rounded-full overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${idx+10}`} alt="user" className="grayscale" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900">{testi.name}</h5>
                    <p className="text-xs text-stone-400 mt-1">{testi.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / BOOKING --- */}
      <section id="kontak" className="py-24 bg-emerald-900 relative overflow-hidden rounded-t-[4rem]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            {/* Form Side */}
            <div className="lg:w-3/5 p-12 lg:p-16">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Hubungi Kami</span>
              <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-8">Mulai Konsultasi</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-700 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Nama Lengkap" />
                  </div>
                  <div className="relative">
                     <input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-700 focus:outline-none focus:border-emerald-600 transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-700 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Email Address" />
                  </div>
                  <div className="relative">
                    <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-700 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="WhatsApp" />
                  </div>
                </div>

                <div className="relative">
                   <textarea rows="4" className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-700 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Ceritakan impian pernikahan Anda..."></textarea>
                </div>

                <button type="button" className="px-10 py-5 bg-emerald-900 rounded-xl text-white font-bold hover:bg-emerald-800 transition-colors w-full md:w-auto">
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 bg-stone-100 p-12 lg:p-16 text-emerald-950 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-10">Kantor Kami</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <p className="leading-relaxed font-medium">Jl. Bunga Melati No. 45<br/>Bandung, Jawa Barat<br/>Indonesia</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <Phone size={20} />
                    </div>
                    <p className="font-medium">+62 812 3456 7890</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                      <Mail size={20} />
                    </div>
                    <p className="font-medium">hello@asmarawedding.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-emerald-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-emerald-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Camera size={24} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-emerald-950 text-emerald-100/60 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold italic text-white mb-6">Asmara<span className="text-amber-400 not-italic">.</span></h2>
          <p className="mb-10 max-w-md mx-auto text-sm leading-relaxed">Menciptakan momen abadi dengan sentuhan personal yang tak terlupakan.</p>
          
          <div className="border-t border-emerald-900 pt-10 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Asmara Wedding Planner.</p>
            <div className="flex space-x-8 mt-4 md:mt-0 font-bold text-white">
              <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Pinterest</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Bridestory</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default TemplateSecondPage;