import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Rules from "./components/Rules";
import Ranks from "./components/Ranks";
import Social from "./components/Social";
import { siteConfig } from "./config/site";
import { ArrowUp, CheckCircle, Copy, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Monitor scroll for progress bar & back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress Bar calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Back to Top visibility threshold
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy Server IP with Toast notification trigger
  const handleCopyIP = () => {
    const serverIP = `${siteConfig.server.bedrock.ip}:${siteConfig.server.bedrock.port}`;
    navigator.clipboard.writeText(serverIP)
      .then(() => {
        setIsCopied(true);
        setShowToast(true);
        // Reset button copy state after 3s
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
        // Hide toast message after 4s
        setTimeout(() => {
          setShowToast(false);
        }, 4000);
      })
      .catch((err) => {
        console.error("Gagal menyalin IP server:", err);
      });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0c0e12] text-gray-200 selection:bg-lime-500 selection:text-black">
      
      {/* Scroll Progress Bar (Sticky & Transparan paling atas layar) */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-lime-500 via-emerald-500 to-lime-400 z-[9999] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header component */}
      <Header onCopyIP={handleCopyIP} isCopied={isCopied} />

      {/* Main Sections Wrapper */}
      <main className="w-full">
        {/* 1. Hero Section */}
        <Hero onCopyIP={handleCopyIP} isCopied={isCopied} />

        {/* 2. Tentang Server (About) */}
        <About />

        {/* 3. Fitur Server (Features) */}
        <Features />

        {/* 4. Peraturan Server (Rules) */}
        <Rules />

        {/* 5. Daftar Rank & Pembayaran (Ranks) */}
        <Ranks />

        {/* 6. Pusat Tautan & Footer (Social) */}
        <Social />
      </main>

      {/* Interactive Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600 hover:from-lime-400 hover:to-emerald-500 text-black shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border border-lime-400/30"
            title="Kembali ke Atas"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Toast Notification Popup */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            id="toast-notification"
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 md:left-auto md:right-6 z-[100] max-w-sm w-full bg-[#11141a] border border-lime-500/30 p-4 rounded-xl shadow-2xl flex items-start gap-3.5"
          >
            <div className="p-1.5 rounded-lg bg-lime-500/10 text-lime-400 shrink-0 mt-0.5">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="flex-grow">
              <h5 className="font-display font-bold text-sm text-white">
                IP Server Disalin!
              </h5>
              <p className="text-gray-400 text-xs mt-0.5 font-sans leading-normal">
                Alamat IP <span className="font-mono text-lime-400 font-semibold">{siteConfig.server.bedrock.ip}:{siteConfig.server.bedrock.port}</span> berhasil disalin. Selamat bermain di Zenoria MC!
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-500 hover:text-white transition-colors shrink-0 p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
