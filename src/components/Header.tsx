import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Copy, Check, Menu, X, Shield, Wifi } from "lucide-react";

interface HeaderProps {
  onCopyIP: () => void;
  isCopied: boolean;
}

export default function Header({ onCopyIP, isCopied }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0c0e12]/95 backdrop-blur-md border-b border-lime-500/10 shadow-xl" 
          : "bg-[#0c0e12]/40 backdrop-blur-sm border-b border-lime-500/5"
      }`}
    >
      {/* Top Header Watermark (RAN DEV) - Sangat Jelas & Mencolok */}
      <div 
        id="top-watermark"
        className="w-full bg-gradient-to-r from-emerald-950 via-[#0a160d] to-emerald-950 text-lime-400 text-xs md:text-sm py-2 px-4 text-center font-medium border-b border-lime-500/20 shadow-inner flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          <span>
            Developed by <span className="font-bold text-yellow-400">{siteConfig.developer.name}</span> (WhatsApp: <span className="font-mono text-white underline">{siteConfig.developer.whatsapp}</span>)
          </span>
          <span className="hidden md:inline text-lime-600">|</span>
          <span className="text-lime-200 italic text-[11px] md:text-xs">
            "{siteConfig.developer.pitch}"
          </span>
        </div>
        <a
          href="https://sfl.gl/x2ic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-yellow-400 text-black font-semibold text-[11px] hover:bg-yellow-300 transition-all duration-300 shadow-md hover:scale-105"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          <span>Lihat Website Lain &raquo;</span>
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-navbar"
        className={`w-full transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Zenoria MC Logo"
              referrerPolicy="no-referrer"
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110 rounded-lg border border-lime-500/15 bg-[#080a0d] p-0.5"
            />
            <div>
              <span className="font-display font-bold text-lg md:text-xl text-white tracking-wider flex items-center gap-1.5">
                {siteConfig.name}
                <span className="text-yellow-400 font-mono text-[10px] md:text-xs px-1.5 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/20">
                  NEW ERA
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-300">
            <a href="#about" className="hover:text-lime-400 transition-colors">Tentang</a>
            <a href="#features" className="hover:text-lime-400 transition-colors">Fitur In-Game</a>
            <a href="#rules" className="hover:text-lime-400 transition-colors">Peraturan</a>
            <a href="#ranks" className="hover:text-lime-400 transition-colors">Daftar Rank</a>
            <a href="#social" className="hover:text-lime-400 transition-colors">Komunitas</a>
          </div>

          {/* CTA Buttons - Copied IP */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onCopyIP}
              className="flex items-center gap-2 bg-gradient-to-r from-lime-600 to-emerald-600 hover:from-lime-500 hover:to-emerald-500 text-black font-display font-bold text-xs py-2.5 px-4 rounded-lg shadow-md hover:shadow-lime-500/20 transition-all duration-300 border border-lime-400/30"
              title="Salin IP Java & Bedrock"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>IP Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin IP Server</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-lime-400 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0c0e12]/95 backdrop-blur-lg border-b border-lime-500/10 py-6 px-4 shadow-xl z-50">
            <div className="flex flex-col gap-4 font-medium text-center">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-lime-400 transition-colors text-gray-300"
              >
                Tentang
              </a>
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-lime-400 transition-colors text-gray-300"
              >
                Fitur In-Game
              </a>
              <a
                href="#rules"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-lime-400 transition-colors text-gray-300"
              >
                Peraturan
              </a>
              <a
                href="#ranks"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-lime-400 transition-colors text-gray-300"
              >
                Daftar Rank
              </a>
              <a
                href="#social"
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-lime-400 transition-colors text-gray-300"
              >
                Komunitas
              </a>
              <div className="pt-4 border-t border-gray-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onCopyIP();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-lime-600 to-emerald-600 text-black font-display font-bold py-3 px-4 rounded-lg"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>IP Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin IP Server</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
