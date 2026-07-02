import { siteConfig } from "../config/site";
import { CreditCard, CheckCircle2, ShieldAlert, Award, AlertCircle, Sparkles } from "lucide-react";

const serverRanks = [
  { name: "VIP", color: "from-blue-600 to-cyan-500", textGlow: "shadow-blue-500/20 text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { name: "MVP", color: "from-indigo-600 to-violet-500", textGlow: "shadow-indigo-500/20 text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { name: "MASTER", color: "from-emerald-600 to-teal-500", textGlow: "shadow-emerald-500/20 text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { name: "TITAN", color: "from-red-600 to-orange-500", textGlow: "shadow-red-500/20 text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  { name: "SUPEREME", color: "from-purple-600 to-fuchsia-500", textGlow: "shadow-purple-500/20 text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { name: "CELESTIAL", color: "from-amber-600 to-yellow-500", textGlow: "shadow-amber-500/20 text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { name: "TRANSCENDENT", color: "from-pink-600 to-rose-500", textGlow: "shadow-pink-500/20 text-rose-400", bg: "bg-pink-500/10", border: "border-pink-500/20" }
];

export default function Ranks() {
  return (
    <section id="ranks" className="py-20 bg-[#090b0e]/50 border-y border-gray-950 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-lime-400 uppercase tracking-widest bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
            Premium Tier Ranks
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-wider mt-4 mb-4">
            Daftar <span className="text-lime-400">Rank Server</span>
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Dukung server agar terus online dengan membeli salah satu tier rank premium di bawah ini.
          </p>
        </div>

        {/* VERBATIM PURCHASE NOTE - PENTING & MEMIKAT */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0d0f14] border border-yellow-500/30 shadow-xl max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <AlertCircle className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-yellow-400 uppercase tracking-wider mb-1">
                Catatan Pembelian Penting
              </h4>
              <p className="text-gray-300 text-sm font-medium leading-relaxed tracking-wide">
                "Beli rank agar bisa terbang dan menikmati command premium lainnya. Sebelum membeli, mohon lihat saluran sosial media kami untuk deskripsi detail setiap rank!"
              </p>
            </div>
          </div>
        </div>

        {/* Rank Badges Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-16">
          {serverRanks.map((rank, index) => (
            <div
              key={index}
              className={`px-6 py-4 rounded-xl ${rank.bg} ${rank.border} border backdrop-blur-sm flex items-center gap-3 hover:scale-105 transition-all duration-300 group shadow-lg min-w-[200px] justify-center`}
            >
              <Award className={`w-5 h-5 ${rank.textGlow} group-hover:rotate-12 transition-transform`} />
              <span className="font-display font-bold text-base text-white tracking-wider uppercase group-hover:text-lime-400 transition-colors">
                {rank.name}
              </span>
              <span className="text-[9px] font-mono text-gray-500 uppercase">
                Tier {index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Payment Gateways Section */}
        <div className="max-w-xl mx-auto bg-[#11141a]/80 backdrop-blur-md border border-lime-500/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-0.5 bg-gray-900 border border-gray-800 rounded-full text-[10px] font-mono text-gray-400 tracking-wider uppercase flex items-center gap-1.5">
            <CreditCard className="w-3 h-3 text-lime-400" />
            <span>Metode Pembayaran Resmi</span>
          </div>

          <div className="text-center mt-3">
            <p className="text-gray-400 text-xs mb-5 font-sans leading-relaxed">
              Transaksi aman dan diproses langsung oleh tim kami. Kami mendukung berbagai metode pengiriman uang berikut:
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* E-Wallet Dana */}
              <div className="p-4 rounded-xl bg-[#080a0d] border border-gray-900 hover:border-blue-500/30 transition-colors flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-white font-display tracking-wider">
                  {siteConfig.payments[0]}
                </div>
                <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">
                  Transfer Instan
                </span>
              </div>

              {/* QRISS */}
              <div className="p-4 rounded-xl bg-[#080a0d] border border-gray-900 hover:border-lime-500/30 transition-colors flex flex-col items-center gap-2">
                <div className="text-xs font-bold text-white font-display tracking-wider">
                  {siteConfig.payments[1]}
                </div>
                <span className="text-[10px] font-mono text-lime-400 uppercase font-semibold">
                  Otomatisasi Scan
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-mono text-gray-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-lime-500" />
              <span>Dikonfirmasi & dikoordinasikan via WhatsApp/Discord</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
