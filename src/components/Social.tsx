import { siteConfig } from "../config/site";
import { MessageCircle, MessageSquare, Shield, HelpCircle, Heart } from "lucide-react";

export default function Social() {
  return (
    <section id="social" className="relative pt-20 pb-12 px-4 z-20 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="font-display font-bold text-2xl md:text-4xl text-white uppercase tracking-wider mb-3">
          Gabung <span className="text-lime-400">Komunitas Kami</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Temui petualang lainnya, dapatkan informasi event in-game terbaru, diskusi rank, serta tanyakan panduan bermain di saluran resmi Zenoria MC.
        </p>

        {/* Action Link Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {/* WhatsApp Card */}
          <a
            href={siteConfig.links.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-[#11141a]/60 backdrop-blur-md border border-gray-900 hover:border-emerald-500/30 rounded-2xl shadow-xl hover:scale-[1.02] hover:-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 mb-4 shadow-inner">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-emerald-400 transition-colors">
              WhatsApp Group
            </h3>
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider font-semibold mb-3">
              Grup Resmi Zenoria
            </span>
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Dapatkan bantuan instan dari Admin dan ngobrol santai bareng player lain.
            </p>
          </a>

          {/* Discord Card */}
          <a
            href={siteConfig.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-8 bg-[#11141a]/60 backdrop-blur-md border border-gray-900 hover:border-indigo-500/30 rounded-2xl shadow-xl hover:scale-[1.02] hover:-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-all duration-300 mb-4 shadow-inner">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-indigo-400 transition-colors">
              Discord Server
            </h3>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold mb-3">
              Komunitas Sementara
            </span>
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Mulai obrolan suara (voice channel) saat grinding bersama teman-teman server.
            </p>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

        {/* Footer Area */}
        <footer className="flex flex-col items-center gap-6">
          {/* Logo representation in footer */}
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Zenoria MC Shield Logo"
              referrerPolicy="no-referrer"
              className="w-8 h-8 object-contain"
            />
            <span className="font-display font-bold text-base text-white tracking-wider">
              {siteConfig.name}
            </span>
          </div>

          {/* WATERMARK PENGEMBANG (RAN DEV - DI FOOTER) - Tegas & Serasi */}
          <div className="py-2.5 px-6 rounded-full bg-[#0d0f14] border border-lime-500/10 inline-flex items-center gap-2 text-xs text-lime-400/90 tracking-wide shadow-md">
            <span>
              Website dikembangkan oleh <span className="font-bold text-yellow-400">{siteConfig.developer.name}</span> (WhatsApp: <span className="font-mono text-white select-all font-semibold">{siteConfig.developer.whatsapp}</span>)
            </span>
          </div>

          {/* Copyright Text */}
          <div className="text-[11px] font-mono text-gray-600 flex flex-col sm:flex-row items-center gap-2 mt-2">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Crafted for survival grinders with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
