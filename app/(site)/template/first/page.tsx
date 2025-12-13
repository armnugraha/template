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
  Baby,
  Gem,
  Flower2
} from 'lucide-react';
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Testing",

//   // other metadata
//   description: "This is Login page for Startup Pro"
// };

const TemplateFirstPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State untuk Budget Planner
  const [budget, setBudget] = useState(100000000); // Default 100 Juta

  // State untuk Products Section
  const [activeCategory, setActiveCategory] = useState('wedding');
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Format Currency IDR
  const formatIDR = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Kategori Budget Breakdown (Warna diupdate ke nuansa Earth Tone/Green)
  const budgetCategories = [
    { name: "Venue & Catering", percent: 45, color: "bg-emerald-600" },
    { name: "Dekorasi", percent: 15, color: "bg-emerald-500" },
    { name: "Dokumentasi", percent: 10, color: "bg-amber-400" },
    { name: "Busana & MUA", percent: 10, color: "bg-amber-300" },
    { name: "Entertainment", percent: 5, color: "bg-slate-400" },
    { name: "Lainnya (WO, Souvenir)", percent: 15, color: "bg-slate-300" },
  ];

  // Data Produk & Paket
  const productData = {
    wedding: {
      title: "Wedding Day",
      icon: <Heart className="w-5 h-5" />,
      packages: [
        {
          id: 1,
          name: "Intimate Gold",
          price: 45000000,
          desc: "Sempurna untuk acara sakral dengan keluarga inti.",
          features: ["Max 100 Pax", "Venue Outdoor/Indoor", "Standard Decoration", "MUA & Attire (Akad)", "1 Photographer + 1 Videographer", "Sound System Standard"]
        },
        {
          id: 2,
          name: "Platinum Grand",
          price: 85000000,
          desc: "Pesta meriah dengan detail kemewahan.",
          features: ["Max 300 Pax", "Ballroom Venue", "Premium Floral Decoration", "MUA & Attire (Akad + Resepsi)", "Cinematic Video + Drone", "Full Band Entertainment", "Wedding Organizer Team (6 Crew)"]
        },
        {
          id: 3,
          name: "Royal Eternity",
          price: 150000000,
          desc: "Pelayanan sekelas bangsawan untuk hari istimewa.",
          features: ["Max 500+ Pax", "Luxury Hotel Ballroom", "Custom 3D Decoration", "Designer Attire", "Same Day Edit Video", "Orchestra/Chamber", "Full WO Team (10 Crew)", "Honeymoon Voucher"]
        }
      ]
    },
    prewedding: {
      title: "Pre-Wedding",
      icon: <Camera className="w-5 h-5" />,
      packages: [
        {
          id: 4,
          name: "Studio Session",
          price: 3500000,
          desc: "Foto studio minimalis dan elegan.",
          features: ["3 Jam Sesi", "2 Konsep Baju", "All Files", "10 Edited Photos", "Make Up Artist"]
        },
        {
          id: 5,
          name: "Outdoor Adventure",
          price: 8000000,
          desc: "Abadikan momen di alam terbuka.",
          features: ["Lokasi Bandung Area", "Seharian Penuh", "3 Konsep Baju", "Cinematic Teaser 1 Min", "Printed Canvas 60x90cm"]
        }
      ]
    },
    engagement: {
      title: "Engagement",
      icon: <Gem className="w-5 h-5" />,
      packages: [
        {
          id: 6,
          name: "Lamaran Manis",
          price: 15000000,
          desc: "Momen pengikatan janji yang hangat.",
          features: ["Backdrop Dekorasi", "MC Lamaran", "Dokumentasi Foto", "Sound System Portable", "Catering 50 Pax"]
        }
      ]
    },
    tradition: {
      title: "Siraman & Pengajian",
      icon: <Flower2 className="w-5 h-5" />,
      packages: [
        {
          id: 7,
          name: "Paket Sakral",
          price: 12000000,
          desc: "Prosesi adat yang khidmat dan syahdu.",
          features: ["Dekorasi Siraman (Melati Asli)", "Perlengkapan Siraman (Gentong, Gayung)", "MC Adat", "Buku Pengajian (30 pcs)", "Sound System"]
        }
      ]
    },
    maternity: {
      title: "Maternity",
      icon: <Baby className="w-5 h-5" />,
      packages: [
        {
          id: 8,
          name: "Mom to Be",
          price: 4500000,
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
    <div className="font-sans text-slate-700 bg-white overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo updated to be cleaner */}
          <div className={`text-2xl font-light tracking-[0.2em] uppercase ${scrolled ? 'text-emerald-800' : 'text-emerald-800 md:text-white'}`}>
            Asmara
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-10 text-sm font-medium tracking-wide ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
            {['Beranda', 'Tentang', 'Layanan', 'Paket', 'Budget', 'Galeri', 'Kontak'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-400 transition-colors uppercase text-xs tracking-widest">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${scrolled ? 'text-emerald-800' : 'text-emerald-800'} focus:outline-none`}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-6 text-center">
                {['Beranda', 'Tentang', 'Layanan', 'Paket', 'Budget', 'Galeri', 'Kontak'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-600 font-medium hover:text-emerald-600 block uppercase text-sm tracking-widest"
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay changed to a very soft warm dark, less harsh black */}
          <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply"></div> 
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-2 px-4 border border-white/30 bg-white/10 backdrop-blur-sm rounded-none text-white text-xs tracking-[0.3em] mb-8 uppercase">
              Est. 2014 • Bandung, Indonesia
            </span>
            <h1 className="text-5xl md:text-7xl text-white font-light leading-tight mb-8 tracking-wide">
              Elegance in Every <br /> 
              <span className="font-normal text-amber-100 font-serif italic">Detail</span>
            </h1>
            <p className="text-white/90 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Mewujudkan pernikahan impian dengan sentuhan personal, estetik, dan penuh makna.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-emerald-900 px-10 py-4 rounded-none text-sm font-bold hover:bg-emerald-50 transition-colors uppercase tracking-widest"
            >
              Mulai Konsultasi
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "500+", label: "Pernikahan" },
              { num: "10", label: "Tahun Berkarya" },
              { num: "50+", label: "Vendor Partner" },
              { num: "100%", label: "Kepuasan" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-3">
                {/* Font changed to clean Sans-Serif */}
                <h3 className="text-4xl md:text-5xl font-light text-emerald-800">{stat.num}</h3>
                <p className="text-emerald-600 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT US --- */}
      <section id="tentang" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:w-1/2 relative"
            >
              <div className="relative z-10">
                <div className="absolute top-4 left-4 w-full h-full border border-emerald-200 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="md:w-1/2 space-y-8"
            >
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Tentang Asmara</span>
              {/* Clean Typography */}
              <h2 className="text-3xl md:text-4xl font-light text-emerald-950 leading-tight">
                Merancang <span className="italic font-serif text-emerald-700">Kebahagiaan</span> <br/>Tanpa Batas.
              </h2>
              <p className="text-slate-600 leading-loose font-light">
                Kami percaya bahwa kemewahan sejati terletak pada kesederhanaan yang terencana. Sejak 2014, Asmara Wedding Planner mendedikasikan diri untuk menciptakan momen yang tidak hanya indah dipandang, tetapi juga menyentuh hati.
              </p>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Profesional Team', 'Transparansi', 'Vendor Kurasi', 'Konsep Unik'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-slate-700 text-sm tracking-wide uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="layanan" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-emerald-950 mb-4 uppercase tracking-widest">Layanan Kami</h2>
            <div className="w-20 h-0.5 bg-amber-400 mx-auto"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: <Calendar size={32} />, title: "Full Planning", desc: "Perencanaan menyeluruh dari konsep hingga hari H." },
              { icon: <Utensils size={32} />, title: "Catering & Decor", desc: "Kurasi menu dan estetika visual terbaik." },
              { icon: <Camera size={32} />, title: "Documentation", desc: "Menangkap emosi dalam setiap frame foto & video." },
              { icon: <Music size={32} />, title: "Entertainment", desc: "Atmosfer musikal yang membangun suasana." },
              { icon: <Heart size={32} />, title: "On The Day", desc: "Koordinasi profesional khusus di hari acara." },
              { icon: <MapPin size={32} />, title: "Venue", desc: "Rekomendasi lokasi indoor & outdoor eksklusif." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-10 hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
              >
                <div className="text-emerald-700 mb-6 group-hover:text-amber-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-emerald-950 mb-4 uppercase tracking-wide">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- BUDGET PLANNER --- */}
      <section id="budget" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side */}
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-2 text-amber-400 mb-6">
                <Calculator size={20} />
                <span className="font-bold uppercase tracking-[0.2em] text-xs">Wedding Calculator</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">Simulasi Anggaran <br/>Pernikahan Cerdas</h2>
              <p className="text-emerald-100/80 mb-10 font-light leading-relaxed">
                Rencanakan alokasi dana Anda dengan bijak menggunakan kalkulator kami yang telah disesuaikan dengan standar industri terkini.
              </p>

              <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
                <label className="block text-xs font-bold text-emerald-200 uppercase tracking-widest mb-4">Total Budget</label>
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
                    <span className="text-amber-400 text-xl font-light">Rp</span>
                  </div>
                  <input 
                    type="number" 
                    value={budget} 
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full bg-transparent border-b border-emerald-600 py-2 pl-10 pr-4 text-white text-3xl font-light focus:outline-none focus:border-amber-400 transition-colors placeholder-emerald-700"
                  />
                </div>
                <div>
                  <input 
                    type="range" 
                    min="50000000" 
                    max="1000000000" 
                    step="10000000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1 bg-emerald-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-xs text-emerald-400 mt-4 font-mono">
                    <span>50 Juta</span>
                    <span>1 Miliar+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Results */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white text-slate-800 p-10 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-amber-400"></div>
                
                <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-6">
                  <h3 className="font-medium text-emerald-950 uppercase tracking-widest text-sm">Estimasi Alokasi</h3>
                  <span className="font-light text-2xl text-emerald-700">{formatIDR(budget)}</span>
                </div>

                <div className="space-y-6">
                  {budgetCategories.map((cat, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600 font-light">{cat.name}</span>
                        <span className="font-medium text-emerald-800">{formatIDR(budget * (cat.percent / 100))}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cat.percent}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-full ${cat.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCTS & PACKAGES SECTION --- */}
      <section id="paket" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-emerald-950 mb-4 uppercase tracking-widest">Koleksi Paket</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-light">Penawaran eksklusif yang dikurasi untuk momen spesial Anda.</p>
          </div>

          {/* Category Tabs - Clean Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(productData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === key 
                    ? 'bg-emerald-800 text-white border-emerald-800' 
                    : 'bg-transparent text-emerald-800 border-emerald-800/20 hover:border-emerald-800'
                }`}
              >
                {productData[key].title}
              </button>
            ))}
          </div>

          {/* Package Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='wait'>
              {productData[activeCategory].packages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-slate-50 p-8 border border-slate-100 hover:border-amber-200 transition-all duration-500 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white border border-slate-100 text-emerald-700 rounded-none">
                      {activeCategory === 'wedding' ? <Heart size={20} /> : 
                       activeCategory === 'prewedding' ? <Camera size={20} /> :
                       activeCategory === 'engagement' ? <Gem size={20} /> :
                       activeCategory === 'tradition' ? <Flower2 size={20} /> :
                       <Baby size={20} />
                      }
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-emerald-950 mb-3">{pkg.name}</h3>
                  <p className="text-slate-500 text-sm mb-8 font-light line-clamp-2 min-h-[40px]">{pkg.desc}</p>
                  
                  <div className="mb-8 pb-8 border-b border-slate-200">
                    <span className="text-xs text-slate-400 uppercase tracking-widest">Mulai Dari</span>
                    <div className="text-2xl font-light text-emerald-800 mt-1">{formatIDR(pkg.price)}</div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 font-light">
                        <div className="w-1.5 h-1.5 bg-amber-400 mr-3 rounded-full"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full py-4 bg-white border border-emerald-800 text-emerald-800 text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 hover:text-white transition-all duration-300"
                  >
                    Detail Paket
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white p-8 border-b border-slate-100 flex justify-between items-center z-10">
                <div>
                   <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">{productData[activeCategory].title}</span>
                   <h3 className="text-2xl font-light text-emerald-950 mt-1">{selectedPackage.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="p-2 text-slate-400 hover:text-emerald-800 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-end gap-2 mb-10">
                   <h2 className="text-4xl font-light text-emerald-700">{formatIDR(selectedPackage.price)}</h2>
                   <span className="text-slate-400 mb-2 text-sm font-light">/ nett</span>
                </div>

                <div className="bg-slate-50 p-8 mb-8 border border-slate-100">
                   <h4 className="font-medium text-emerald-900 mb-6 flex items-center gap-2 uppercase tracking-wide text-sm">
                     <Sparkles size={16} className="text-amber-500"/>
                     Inklusi Paket
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {selectedPackage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                          <span className="text-slate-600 text-sm font-light">{feature}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={() => setSelectedPackage(null)} className="flex-1 py-4 border border-slate-300 font-bold text-slate-500 hover:bg-slate-50 uppercase text-xs tracking-widest">
                    Kembali
                  </button>
                  <a href="#kontak" onClick={() => setSelectedPackage(null)} className="flex-1 py-4 bg-emerald-800 font-bold text-white hover:bg-emerald-900 flex justify-center items-center gap-2 uppercase text-xs tracking-widest">
                    Book Appointment
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- GALLERY --- */}
      <section id="galeri" className="py-24 bg-white">
         <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-emerald-950 mb-2 uppercase tracking-widest">Galeri</h2>
              <p className="text-slate-500 font-light">Kumpulan cerita cinta yang telah kami abadikan.</p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-emerald-700 hover:text-amber-500 transition-colors uppercase text-xs tracking-widest font-bold mt-4 md:mt-0">
              <span>Lihat Portfolio</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[600px]">
            {/* Gallery images updated to muted tones/grayscale to hover color */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519225448526-0ca85c53563e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 1" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/60 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em] uppercase text-sm border border-white px-6 py-3">Rustic Garden</span>
              </div>
            </div>
            
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 2" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
               <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/60 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em] uppercase text-xs border border-white px-4 py-2">Intimate</span>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 3" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
               <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/60 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em] uppercase text-sm border border-white px-6 py-3">Classic</span>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1507504031981-a2368c6e1919?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 4" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
               <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/60 transition-colors duration-500 flex items-center justify-center">
                 <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-[0.3em] uppercase text-xs border border-white px-4 py-2">Floral</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-emerald-950 mb-4 uppercase tracking-widest">Testimoni</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Putri & Dimas", date: "Jan 2024", text: "Elegan, rapi, dan menenangkan. Tim Asmara membuat hari H kami terasa seperti liburan." },
              { name: "Sarah & John", date: "Dec 2023", text: "They truly understand the concept of 'Less is More'. Everything was perfect." },
              { name: "Rina & Bayu", date: "Nov 2023", text: "Sangat profesional. Detail dekorasi hijaunya sangat pas dengan tema garden party kami." },
            ].map((testi, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-10 border border-slate-100"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8 font-light leading-relaxed">"{testi.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-200 mr-4 overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${idx+10}`} alt="user" className="grayscale" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900 text-sm uppercase tracking-wider">{testi.name}</h5>
                    <p className="text-xs text-slate-400 mt-1">{testi.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / BOOKING --- */}
      <section id="kontak" className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white rounded-none overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            
            {/* Form Side */}
            <div className="lg:w-3/5 p-12 lg:p-20">
              <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Hubungi Kami</span>
              <h2 className="text-3xl font-light text-emerald-950 mb-8">Mulai Konsultasi</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input type="text" className="peer w-full border-b border-slate-300 py-3 text-slate-700 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent" id="name" placeholder="Nama" />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-600">Nama Lengkap</label>
                  </div>
                  <div className="relative">
                     <input type="text" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} className="peer w-full border-b border-slate-300 py-3 text-slate-700 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent" id="date" placeholder="Tanggal" />
                     <label htmlFor="date" className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-600">Rencana Tanggal</label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input type="email" className="peer w-full border-b border-slate-300 py-3 text-slate-700 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent" id="email" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-600">Email Address</label>
                  </div>
                  <div className="relative">
                    <input type="tel" className="peer w-full border-b border-slate-300 py-3 text-slate-700 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent" id="phone" placeholder="HP" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-600">WhatsApp</label>
                  </div>
                </div>

                <div className="relative pt-4">
                   <textarea rows="4" className="peer w-full border-b border-slate-300 py-3 text-slate-700 focus:outline-none focus:border-emerald-600 transition-colors placeholder-transparent" id="msg" placeholder="Pesan"></textarea>
                   <label htmlFor="msg" className="absolute left-0 top-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-7 peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-emerald-600">Ceritakan Impian Anda</label>
                </div>

                <button type="button" className="mt-8 px-10 py-4 bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-800 transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 bg-slate-100 p-12 lg:p-20 text-emerald-950 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-light uppercase tracking-widest mb-10">Kantor Kami</h3>
                <div className="space-y-8 font-light text-sm">
                  <div className="flex items-start space-x-4">
                    <MapPin className="shrink-0 mt-1 text-emerald-600" size={18} />
                    <p className="leading-relaxed">Jl. Bunga Melati No. 45<br/>Bandung, Jawa Barat<br/>Indonesia</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="shrink-0 text-emerald-600" size={18} />
                    <p>+62 812 3456 7890</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="shrink-0 text-emerald-600" size={18} />
                    <p>hello@asmarawedding.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 border border-emerald-900/20 rounded-full flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all text-emerald-900">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-emerald-900/20 rounded-full flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-all text-emerald-900">
                    <Camera size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-emerald-950 text-emerald-100/60 py-16 border-t border-emerald-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-[0.3em] uppercase text-white mb-6">Asmara</h2>
          <p className="mb-10 max-w-md mx-auto text-xs font-light leading-relaxed tracking-wide">MENCIPTAKAN MOMEN ABADI DENGAN KESEDERHANAAN DAN ELEGANSI.</p>
          
          <div className="border-t border-emerald-900/50 pt-10 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider">
            <p>&copy; 2024 Asmara Wedding Planner.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors">Bridestory</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default TemplateFirstPage;
