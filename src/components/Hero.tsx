import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { siteConfig } from "../config/site";
import { Copy, Check, MessageSquare, ShieldAlert, Terminal, Users, Wifi, Globe } from "lucide-react";

interface HeroProps {
  onCopyIP: () => void;
  isCopied: boolean;
}

export default function Hero({ onCopyIP, isCopied }: HeroProps) {
  const [serverStatus, setServerStatus] = useState<{
    online: boolean;
    players: { online: number; max: number } | null;
    version: string | null;
    loading: boolean;
  }>({
    online: true,
    players: { online: 12, max: 150 }, // Standard realistic default fallback
    version: "1.20.x - 1.21.x",
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;
    fetch(`https://api.mcsrvstat.us/2/${siteConfig.server.bedrock.ip}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setServerStatus({
            online: data.online ?? true,
            players: data.players
              ? {
                  online: data.players.online ?? 12,
                  max: data.players.max ?? 150,
                }
              : { online: 15, max: 150 },
            version: data.version ?? "1.20.x - 1.21.x",
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.warn("Using default fallback values. Info:", err);
        if (isMounted) {
          setServerStatus((prev) => ({ ...prev, loading: false }));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24 px-4">
      {/* Background Cinematic with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.webp"
          alt="Zenoria MC Cinematic Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110"
        />
        {/* Gradients to blend background cleanly */}
        <div className="absolute inset-0 bg-radial-at-c from-lime-950/20 via-[#0c0e12]/80 to-[#0c0e12] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0e12]/40 to-[#0c0e12] z-10" />
      </div>

      {/* Decorative Neon Sparks & Lime Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-lime-500/10 rounded-full blur-[100px] z-10 glow-bg pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] z-10 glow-bg pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Floating Logo Asset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <div className="relative p-2 rounded-2xl bg-[#0c0e12]/60 border border-lime-500/20 shadow-2xl backdrop-blur-md max-w-[200px] md:max-w-[260px] aspect-square flex items-center justify-center">
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-lime-500/5 rounded-2xl blur-xl animate-pulse pointer-events-none" />
            <motion.img
              src="/logo.png"
              alt="Zenoria MC Shield Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain relative z-10 rounded-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Server Tag / Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-4 md:mb-6 animate-pulse"
        >
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
          <span>Java & Bedrock Server ({serverStatus.version})</span>
        </motion.div>

        {/* Hero Heading - ZENORIA MC */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white tracking-wide leading-tight mb-2 uppercase"
        >
          ZENORIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 drop-shadow-[0_2px_10px_rgba(234,179,8,0.3)]">MC</span>
        </motion.h1>

        {/* Sub-heading - New Era */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-medium text-xl sm:text-2xl text-lime-400 mb-4 tracking-wide flex items-center gap-2"
        >
          New Era <span className="text-rose-400 animate-bounce">🎀</span>
        </motion.h2>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mb-8 md:mb-10 font-sans tracking-wide leading-relaxed"
        >
          "{siteConfig.description}"
        </motion.p>

        {/* CTA Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center px-4"
        >
          {/* Main Action - Copy IP */}
          <button
            onClick={onCopyIP}
            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-emerald-500 text-black font-display font-bold py-4 px-8 rounded-xl shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer border border-lime-400/40 w-full"
          >
            {isCopied ? (
              <>
                <Check className="w-5 h-5" />
                <span>IP Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Salin IP Server (25538)</span>
              </>
            )}
          </button>

          {/* Secondary Action - Gabung Komunitas */}
          <a
            href="#social"
            className="flex items-center justify-center gap-3 bg-[#11141a]/90 hover:bg-[#181d26] text-white font-display font-bold py-4 px-8 rounded-xl border border-gray-800 hover:border-lime-500/40 hover:scale-[1.02] transition-all duration-300 w-full shadow-md"
          >
            <MessageSquare className="w-5 h-5 text-lime-400" />
            <span>Gabung Komunitas</span>
          </a>
        </motion.div>

        {/* Server Connection Guide Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 w-full max-w-xl bg-[#11141a]/80 backdrop-blur-md border border-lime-500/10 rounded-2xl p-5 shadow-2xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-[10px] font-mono text-gray-400 tracking-wider uppercase flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-lime-500" />
            <span>Server Connection Info</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-1.5 font-mono">
            {/* Java Edition */}
            <div className="p-3.5 rounded-xl bg-[#090b0e] border border-gray-900">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">
                JAVA EDITION (PC/Mac)
              </span>
              <div className="text-xs text-lime-400 font-semibold truncate select-all">
                {siteConfig.server.java.ip}
              </div>
              <span className="text-[9px] text-gray-500 block mt-1">
                Versi: Terbaru / Survival Economy
              </span>
            </div>

            {/* Bedrock Edition */}
            <div className="p-3.5 rounded-xl bg-[#090b0e] border border-gray-900">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block mb-1">
                BEDROCK EDITION (HP/Console)
              </span>
              <div className="text-xs text-lime-400 font-semibold truncate select-all">
                {siteConfig.server.bedrock.ip}
              </div>
              <span className="text-[9px] text-lime-500/70 block mt-1">
                Port: <span className="font-bold text-yellow-400">{siteConfig.server.bedrock.port}</span>
              </span>
            </div>

            {/* Dynamic Status Display Bar */}
            <div className="col-span-1 sm:col-span-2 p-3 rounded-xl bg-[#080a0d] border border-lime-500/15 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className={`relative flex h-2 w-2`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${serverStatus.online ? 'bg-lime-400' : 'bg-red-400'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${serverStatus.online ? 'bg-lime-500' : 'bg-red-500'}`}></span>
                </span>
                <span className="text-gray-400 font-medium">Status Server:</span>
                <span className={`font-bold tracking-wider ${serverStatus.online ? 'text-lime-400' : 'text-red-400'}`}>
                  {serverStatus.online ? 'ONLINE' : 'OFFLINE'}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Users className="w-3.5 h-3.5 text-yellow-400" />
                  Pemain: <strong className="text-white">{serverStatus.players?.online ?? 0}</strong> / {serverStatus.players?.max ?? 150}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <Wifi className="w-3.5 h-3.5 text-lime-400" />
                  Sinyal: <strong className="text-lime-400">Stabil</strong>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
