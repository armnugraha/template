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
  PieChart,
  DollarSign,
  Sparkles,
  Star,
  Baby,
  Gem,
  Flower2
} from 'lucide-react';

const TemplateThirdPage = () => {
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

  // Kategori Budget Breakdown
  const budgetCategories = [
    { name: "Venue & Catering", percent: 45, color: "bg-rose-500" },
    { name: "Dekorasi", percent: 15, color: "bg-rose-400" },
    { name: "Dokumentasi", percent: 10, color: "bg-stone-500" },
    { name: "Busana & MUA", percent: 10, color: "bg-stone-400" },
    { name: "Entertainment", percent: 5, color: "bg-rose-300" },
    { name: "Lainnya (WO, Souvenir)", percent: 15, color: "bg-stone-300" },
  ];

  // Data Produk & Paket
  const productData = {
    wedding: {
      title: "Wedding Day",
      icon: <Heart className="w-6 h-6" />,
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
      icon: <Camera className="w-6 h-6" />,
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
      icon: <Gem className="w-6 h-6" />,
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
      icon: <Flower2 className="w-6 h-6" />,
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
      icon: <Baby className="w-6 h-6" />,
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
    <div className="font-sans text-stone-800 bg-stone-50 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-serif font-bold tracking-widest ${scrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
            ASMARA<span className="text-rose-400">.</span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-8 font-medium ${scrolled ? 'text-stone-600' : 'text-white/90'}`}>
            {['Beranda', 'Tentang', 'Layanan', 'Paket', 'Simulasi Budget', 'Galeri', 'Kontak'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-rose-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${scrolled ? 'text-stone-800' : 'text-stone-800'} focus:outline-none`}>
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
              <div className="flex flex-col p-6 space-y-4 text-center">
                {['Beranda', 'Tentang', 'Layanan', 'Paket', 'Simulasi Budget', 'Galeri', 'Kontak'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-600 font-medium hover:text-rose-400 block"
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
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 border border-white/40 rounded-full text-white text-sm tracking-widest mb-6 uppercase">
              Premium Wedding Organizer
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
              Mewujudkan Pernikahan <br /> <span className="text-rose-200 italic font-light">Impian Anda</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto">
              Setiap kisah cinta itu unik. Kami hadir untuk merayakan keunikan cerita Anda dalam sebuah momen abadi yang tak terlupakan.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30"
            >
              Konsultasi Gratis
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <div className="bg-white py-12 border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Pernikahan Sukses" },
              { num: "10th", label: "Pengalaman" },
              { num: "50+", label: "Partner Vendor" },
              { num: "100%", label: "Klien Bahagia" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">{stat.num}</h3>
                <p className="text-stone-500 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT US --- */}
      <section id="tentang" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:w-1/2 relative"
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511285560982-1356311d0581?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-rose-300 rounded-full z-0"></div>
            </motion.div>
            
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="md:w-1/2 space-y-6"
            >
              <h4 className="text-rose-500 font-bold uppercase tracking-widest text-sm">Tentang Kami</h4>
              <h2 className="text-4xl font-serif font-bold text-stone-800">Merancang Kebahagiaan Sejak 2014</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Asmara Wedding Planner bukan sekadar penyelenggara acara. Kami adalah sahabat Anda dalam merencanakan hari paling bersejarah. Filosofi kami sederhana: **"Detail adalah Kunci"**.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Dari pemilihan bunga terkecil hingga pencahayaan panggung yang megah, tim kami memastikan setiap aspek mencerminkan kepribadian Anda dan pasangan.
              </p>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Profesional Team', 'Budget Transparan', 'Vendor Terkurasi', 'Konsep Unik'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="text-rose-400" size={20} />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="layanan" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Layanan Eksklusif</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Kami menyediakan solusi lengkap untuk kebutuhan pernikahan Anda, mulai dari perencanaan hingga hari-H.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Calendar size={40} />, title: "Full Planning", desc: "Kami menangani segalanya dari nol. Mulai dari konsep, budgeting, negosiasi vendor, hingga eksekusi." },
              { icon: <Utensils size={40} />, title: "Catering & Decor", desc: "Bekerja sama dengan vendor dekorasi dan catering terbaik untuk memanjakan mata dan lidah tamu Anda." },
              { icon: <Camera size={40} />, title: "Documentation", desc: "Tim fotografer dan videografer profesional untuk mengabadikan setiap momen emosional." },
              { icon: <Music size={40} />, title: "Entertainment", desc: "Pilihan hiburan musik akustik hingga orkestra untuk membangun suasana romantis." },
              { icon: <Heart size={40} />, title: "On The Day Coord", desc: "Bagi Anda yang sudah merencanakan sendiri, kami siap mengeksekusi agar Anda bebas stres di hari H." },
              { icon: <MapPin size={40} />, title: "Venue Selection", desc: "Akses eksklusif ke berbagai venue pernikahan indoor dan outdoor terbaik di kota." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-stone-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-stone-100"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-rose-500 mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- BUDGET PLANNER --- */}
      <section id="simulasi-budget" className="py-24 bg-stone-800 text-white overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Side: Text & Input */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 text-rose-400 mb-4">
                <Calculator size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">Wedding Calculator</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Simulasi Anggaran Pernikahan</h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Bingung membagi pos pengeluaran? Gunakan kalkulator pintar kami untuk mendapatkan estimasi alokasi dana ideal berdasarkan standar industri pernikahan saat ini.
              </p>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <label className="block text-sm font-medium text-stone-300 mb-2">Masukkan Total Budget Anda</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-stone-400">Rp</span>
                  </div>
                  <input 
                    type="number" 
                    value={budget} 
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full bg-stone-900/50 border border-stone-600 rounded-xl py-4 pl-12 pr-4 text-white text-xl font-bold focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-stone-300 mb-2">Geser untuk menyesuaikan</label>
                  <input 
                    type="range" 
                    min="50000000" 
                    max="1000000000" 
                    step="10000000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                  <div className="flex justify-between text-xs text-stone-500 mt-2">
                    <span>Rp 50 Juta</span>
                    <span>Rp 1 Miliar+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Results */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white text-stone-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-stone-100">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <PieChart className="text-rose-500" size={20}/>
                    Estimasi Alokasi
                  </h3>
                  <span className="font-bold text-xl text-rose-500">{formatIDR(budget)}</span>
                </div>

                <div className="space-y-5">
                  {budgetCategories.map((cat, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-stone-700">{cat.name}</span>
                        <span className="font-bold text-stone-900">{formatIDR(budget * (cat.percent / 100))}</span>
                      </div>
                      <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cat.percent}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className={`h-2.5 rounded-full ${cat.color}`}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-stone-400 mt-1 text-right">{cat.percent}% dari total</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                  <p className="text-xs text-stone-500 mb-4 italic">*Angka ini adalah estimasi. Konsultasikan untuk rincian akurat.</p>
                  <button className="w-full py-3 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                    <DollarSign size={16} />
                    Dapatkan Penawaran Detail
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCTS & PACKAGES SECTION (NEW) --- */}
      <section id="paket" className="py-24 bg-rose-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-2 block">Pilihan Paket Spesial</span>
            <h2 className="text-4xl font-serif font-bold text-stone-800">Rencanakan Momen Sempurna</h2>
            <p className="text-stone-500 max-w-2xl mx-auto mt-4">Pilih kategori acara Anda dan temukan penawaran terbaik yang telah kami kurasi.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(productData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === key 
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105' 
                    : 'bg-white text-stone-600 hover:bg-rose-100 border border-stone-200'
                }`}
              >
                {productData[key].icon}
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Pseudo-3D Glass Effect Background Decoration */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-rose-100 to-stone-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* 3D Icon Container */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-rose-500 rounded-2xl rotate-6 opacity-20 blur-sm"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-white to-rose-50 rounded-2xl border border-white shadow-lg flex items-center justify-center text-rose-500">
                      {activeCategory === 'wedding' ? <Heart size={28} fill="currentColor" className="drop-shadow-sm" /> : 
                       activeCategory === 'prewedding' ? <Camera size={28} /> :
                       activeCategory === 'engagement' ? <Gem size={28} /> :
                       activeCategory === 'tradition' ? <Flower2 size={28} /> :
                       <Baby size={28} />
                      }
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-2">{pkg.name}</h3>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">{pkg.desc}</p>
                  
                  <div className="mb-8">
                    <span className="text-xs text-stone-400 uppercase tracking-wider">Mulai Dari</span>
                    <div className="text-3xl font-bold text-rose-500">{formatIDR(pkg.price)}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center text-sm text-stone-600">
                        <Star size={16} className="text-yellow-400 mr-2 fill-current" />
                        {feat}
                      </li>
                    ))}
                    {pkg.features.length > 3 && (
                      <li className="text-sm text-stone-400 italic pl-6">+ {pkg.features.length - 3} fitur lainnya</li>
                    )}
                  </ul>

                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full py-3 rounded-xl border-2 border-rose-500 text-rose-500 font-bold hover:bg-rose-500 hover:text-white transition-all duration-300"
                  >
                    Lihat Detail Lengkap
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
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white p-6 border-b border-stone-100 flex justify-between items-center z-10">
                <div>
                   <span className="text-rose-500 text-sm font-bold uppercase tracking-widest">{productData[activeCategory].title} Package</span>
                   <h3 className="text-2xl font-serif font-bold text-stone-800">{selectedPackage.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-end gap-2 mb-8">
                   <h2 className="text-4xl font-bold text-rose-500">{formatIDR(selectedPackage.price)}</h2>
                   <span className="text-stone-400 mb-2">/ nett</span>
                </div>

                <div className="bg-rose-50 rounded-xl p-6 mb-8">
                   <h4 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                     <Sparkles size={18} className="text-rose-500"/>
                     Apa yang Anda dapatkan:
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedPackage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                          <span className="text-stone-700 text-sm">{feature}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-8">
                  *Harga dapat berubah sewaktu-waktu menyesuaikan tanggal (High/Low Season) dan permintaan kustomisasi tambahan. Hubungi kami untuk penawaran mengikat.
                </p>

                <div className="flex gap-4">
                  <button onClick={() => setSelectedPackage(null)} className="flex-1 py-4 rounded-xl border border-stone-300 font-bold text-stone-600 hover:bg-stone-50">
                    Tutup
                  </button>
                  <a href="#kontak" onClick={() => setSelectedPackage(null)} className="flex-1 py-4 rounded-xl bg-rose-500 font-bold text-white hover:bg-rose-600 flex justify-center items-center gap-2 shadow-lg shadow-rose-500/30">
                    <Mail size={18} />
                    Book Sekarang
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- GALLERY / PORTFOLIO --- */}
      <section id="galeri" className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-2">Portfolio Kami</h4>
              <h2 className="text-4xl font-serif font-bold">Momen Tak Terlupakan</h2>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-rose-300 hover:text-white transition-colors mt-4 md:mt-0">
              <span>Lihat Semua Galeri</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            {/* Masonry-style Grid using Flex/Grid hacks */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1519225448526-0ca85c53563e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h3 className="text-xl font-bold">Rustic Outdoor Theme</h3>
                  <p className="text-sm text-gray-300">Bandung, 2023</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
               <img 
                src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <h3 className="text-lg font-bold">Intimate Indoor</h3>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-xl">
               <img 
                src="https://images.unsplash.com/photo-1522673607200-1645062cd958?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 3" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <h3 className="text-lg font-bold">Elegant Groom</h3>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
               <img 
                src="https://images.unsplash.com/photo-1507504031981-a2368c6e1919?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wedding 4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <h3 className="text-lg font-bold">Floral Details</h3>
              </div>
            </div>
          </div>
          
          <button className="md:hidden flex items-center justify-center space-x-2 text-rose-300 mt-8 w-full">
            <span>Lihat Semua Galeri</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-rose-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800">Kata Mereka</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Putri & Dimas", date: "Januari 2024", text: "Tidak menyangka pernikahan impian kami bisa terwujud seindah ini. Tim Asmara sangat detail dan responsif. Terima kasih!" },
              { name: "Sarah & John", date: "Desember 2023", text: "The best decision we made for our wedding. Professional, creative, and very calm under pressure." },
              { name: "Rina & Bayu", date: "November 2023", text: "Dekorasinya luar biasa, makanannya enak, dan flow acara sangat rapi. Keluarga besar kami sangat puas." },
            ].map((testi, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-rose-100"
              >
                <div className="flex text-rose-400 mb-4">
                  {[...Array(5)].map((_, i) => <Heart key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic mb-6">"{testi.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-stone-200 rounded-full mr-4 overflow-hidden">
                     {/* Placeholder avatar */}
                     <img src={`https://i.pravatar.cc/150?u=${idx}`} alt="user" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800">{testi.name}</h5>
                    <p className="text-xs text-stone-500">{testi.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / BOOKING --- */}
      <section id="kontak" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-rose-50 z-0 rounded-l-full hidden lg:block"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Form Side */}
            <div className="lg:w-3/5 p-10 lg:p-16">
              <h2 className="text-3xl font-serif font-bold text-white mb-2">Mulai Perjalanan Anda</h2>
              <p className="text-stone-400 mb-8">Isi formulir di bawah ini, kami akan menghubungi Anda untuk konsultasi gratis.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Tanggal Pernikahan</label>
                    <input type="date" className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Email</label>
                    <input type="email" className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors" placeholder="email@contoh.com" />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm mb-2">Nomor WhatsApp</label>
                    <input type="tel" className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors" placeholder="0812..." />
                  </div>
                </div>

                <div>
                   <label className="block text-stone-400 text-sm mb-2">Ceritakan Rencana Anda</label>
                   <textarea rows="4" className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition-colors" placeholder="Lokasi, tema impian, estimasi tamu..."></textarea>
                </div>

                <button type="button" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-lg transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 bg-rose-500 p-10 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Info Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="shrink-0 mt-1" />
                    <p className="opacity-90">Jl. Bunga Melati No. 45<br/>Bandung, Jawa Barat<br/>Indonesia</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="shrink-0" />
                    <p className="opacity-90">+62 812 3456 7890</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="shrink-0" />
                    <p className="opacity-90">hello@asmarawedding.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-rose-500 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-rose-500 transition-all">
                    <Camera size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">ASMARA.</h2>
          <p className="mb-8 max-w-md mx-auto text-sm">Mewujudkan pernikahan impian dengan sentuhan personal dan elegan.</p>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Asmara Wedding Planner. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default TemplateThirdPage;