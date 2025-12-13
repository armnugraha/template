import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing",

  // other metadata
  description: "This is Login page for Startup Pro"
};

const LogoPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 p-10 font-sans text-stone-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-2">Noora Photo</h1>
          <p className="text-stone-500 uppercase tracking-widest text-sm">Brand Identity System</p>
        </div>

        {/* --- MAIN LOGO CONCEPT --- */}
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm mb-8 border border-stone-100 flex flex-col items-center justify-center">
          <span className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-8">Primary Lockup</span>
          <div className="transform scale-150">
            {/* Logo Combined */}
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Icon: Stylized N + Lens/Sparkle */}
              <path d="M40 25C40 25 35 15 25 15C15 15 10 25 10 25" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 55C10 55 15 65 25 65C35 65 40 55 40 55" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 20L15 60" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M35 20L35 60" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 20L35 60" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
              {/* Sparkle / Lens Glint */}
              <path d="M48 20L50 15L52 20L57 22L52 24L50 29L48 24L43 22L48 20Z" fill="#F59E0B"/>
              
              {/* Text */}
              <text x="70" y="52" fontFamily="serif" fontSize="38" fontWeight="bold" fill="#064E3B">Noora</text>
              <text x="178" y="52" fontFamily="sans-serif" fontSize="38" fontWeight="bold" fill="#F59E0B">.</text>
              <text x="72" y="68" fontFamily="sans-serif" fontSize="9" letterSpacing="0.3em" fill="#78716C" className="uppercase">Photography</text>
            </svg>
          </div>
        </div>

        {/* --- VARIATIONS GRID --- */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. ICON ONLY (Logomark) */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center">
             <span className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-6">01. Icon Only</span>
             <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="#ECFDF5"/>
                <path d="M38 22C38 22 34 14 26 14C18 14 14 22 14 22" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14 46C14 46 18 54 26 54C34 54 38 46 38 46" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 18L18 50" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M34 18L34 50" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 18L34 50" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                <path d="M44 18L46 13L48 18L53 20L48 22L46 27L44 22L39 20L44 18Z" fill="#F59E0B"/>
             </svg>
             <p className="mt-4 text-xs text-stone-400 text-center">Digunakan untuk Favicon, Profile Picture IG, atau Watermark kecil.</p>
          </div>

          {/* 2. TEXT ONLY (Wordmark) */}
          <div className="bg-emerald-900 p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center">
             <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-6">02. Wordmark (Inverted)</span>
             <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
               <text x="10" y="40" fontFamily="serif" fontSize="38" fontWeight="bold" fill="#FFFFFF">Noora</text>
               <text x="118" y="40" fontFamily="sans-serif" fontSize="38" fontWeight="bold" fill="#F59E0B">.</text>
             </svg>
             <p className="mt-4 text-xs text-emerald-400/60 text-center">Digunakan di atas foto gelap atau background solid.</p>
          </div>

          {/* 3. MONOGRAM / STAMP */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center">
             <span className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-6">03. Monogram Stamp</span>
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" stroke="#064E3B" strokeWidth="1"/>
                <circle cx="50" cy="50" r="40" stroke="#D97706" strokeWidth="0.5" strokeDasharray="4 4"/>
                <path d="M30 25L70 25" id="curve" fill="transparent" />
                <text width="100" fontSize="10" fontFamily="sans-serif" letterSpacing="0.2em" fill="#064E3B">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">EST. 2024</textPath>
                </text>
                
                {/* Center N */}
                <g transform="translate(32, 25) scale(0.6)">
                  <path d="M40 25C40 25 35 15 25 15C15 15 10 25 10 25" stroke="#064E3B" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M10 55C10 55 15 65 25 65C35 65 40 55 40 55" stroke="#064E3B" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M15 20L15 60" stroke="#064E3B" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M35 20L35 60" stroke="#064E3B" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M15 20L35 60" stroke="#064E3B" strokeWidth="3" strokeLinecap="round"/>
                </g>
             </svg>
             <p className="mt-4 text-xs text-stone-400 text-center">Cocok untuk stiker kemasan atau kop surat.</p>
          </div>

          {/* 4. COLORS */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-6">Color Palette</span>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-900 shadow-md mb-2"></div>
                <span className="text-xs text-stone-500 font-mono">#064E3B</span>
              </div>
              <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-amber-500 shadow-md mb-2"></div>
                 <span className="text-xs text-stone-500 font-mono">#F59E0B</span>
              </div>
              <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-[#FAFAF8] border border-stone-200 shadow-md mb-2"></div>
                 <span className="text-xs text-stone-500 font-mono">#FAFAF8</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- MODERN SERIES: ROUND 2 --- */}
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Modern Minimalist: Round 2</h2>
            <p className="text-stone-400 text-sm">Eksplorasi lanjutan dengan gaya geometris & abstrak</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* MODERN E: THE GOLDEN LENS */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center hover:border-emerald-600 transition-colors cursor-pointer group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Circle base */}
                        <circle cx="40" cy="40" r="30" stroke="#064E3B" strokeWidth="2"/>
                        {/* Overlapping 'N' shape using lens curves */}
                        <path d="M30 25V55" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M50 25V55" stroke="#064E3B" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M30 25C30 25 40 40 50 55" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Modern E: Golden Lens</span>
                <p className="text-[10px] text-stone-400 text-center mt-2">Simpel tapi mewah. Garis diagonal emas melambangkan 'cahaya' dalam lensa.</p>
            </div>

            {/* MODERN F: THE BAUHAUS */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center hover:border-emerald-600 transition-colors cursor-pointer group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Geometric blocks forming N */}
                        <rect x="25" y="20" width="10" height="40" fill="#064E3B"/>
                        <rect x="45" y="20" width="10" height="40" fill="#064E3B"/>
                        {/* Triangle for diagonal */}
                        <path d="M35 20L45 20L45 60L35 20Z" fill="#F59E0B" opacity="0.9"/>
                    </svg>
                </div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Modern F: Bauhaus</span>
                <p className="text-[10px] text-stone-400 text-center mt-2">Gaya arsitektural. Sangat kuat, tegas, dan artistik (artsy).</p>
            </div>

            {/* MODERN G: LIGHT PATH */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center hover:border-emerald-600 transition-colors cursor-pointer group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Folded ribbon/light path */}
                        <path d="M25 60V25L55 55V20" stroke="#064E3B" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
                        {/* Accent dot/flash */}
                        <circle cx="55" cy="15" r="4" fill="#F59E0B"/>
                    </svg>
                </div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Modern G: Light Path</span>
                <p className="text-[10px] text-stone-400 text-center mt-2">Monoline (satu garis). Terlihat seperti tanda tangan atau jalur cahaya neon.</p>
            </div>

            {/* MODERN H: THE FRAMING */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center hover:border-emerald-600 transition-colors cursor-pointer group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Two L shapes forming a frame/N */}
                        <path d="M25 25V55H40" stroke="#064E3B" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M55 55V25H40" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Modern H: Framing</span>
                <p className="text-[10px] text-stone-400 text-center mt-2">Abstrak & Minimalis. Dua siku yang saling melengkapi (klien & fotografer).</p>
            </div>

        </div>

        {/* --- PREVIOUS OPTIONS (FOR COMPARISON) --- */}
        <div className="mb-8 mt-16 text-center border-t border-stone-200 pt-8">
            <h2 className="text-xl font-serif font-bold text-stone-400 mb-2">Previous Explorations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 opacity-60 hover:opacity-100 transition-opacity">
             {/* REPEATING PREVIOUS FAVORITE: MODERN D */}
             <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center">
                <div className="mb-4">
                    <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="20" width="40" height="40" rx="10" stroke="#064E3B" strokeWidth="2"/>
                        <circle cx="60" cy="20" r="6" fill="#F59E0B"/>
                        <text x="40" y="52" textAnchor="middle" fontFamily="sans-serif" fontSize="32" fontWeight="bold" fill="#064E3B">N</text>
                    </svg>
                </div>
                <span className="text-[10px] font-bold text-stone-500 uppercase">Option D (Prev)</span>
            </div>
            {/* ... other previous icons placeholders ... */}
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
