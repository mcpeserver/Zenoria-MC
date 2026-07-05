import { useState } from "react";
import { siteConfig } from "../config/site";
import { CreditCard, CheckCircle2, ShieldAlert, Award, AlertCircle, Sparkles, Check, Zap, Info } from "lucide-react";

const serverRanks = [
  { 
    name: "VIP", 
    color: "from-blue-600 to-cyan-500 text-blue-400", 
    textGlow: "shadow-blue-500/20 text-blue-400", 
    bg: "bg-blue-500/10", 
    border: "border-blue-500/20",
    price: "IDR 15.000",
    perks: [
      "Akses Command /fly (Terbang di area claim)",
      "Maksimal 3 Set Home (Lokasi teleportasi)",
      "Prefix [VIP] Berwarna Biru di Chat Server",
      "Kits VIP Mingguan gratis",
      "1x Kunci Crate Premium"
    ],
    highlight: "Sangat cocok untuk pemain pemula"
  },
  { 
    name: "MVP", 
    color: "from-indigo-600 to-violet-500 text-indigo-400", 
    textGlow: "shadow-indigo-500/20 text-indigo-400", 
    bg: "bg-indigo-500/10", 
    border: "border-indigo-500/20",
    price: "IDR 30.000",
    perks: [
      "Semua fitur rank VIP",
      "Akses Command /fly di Seluruh Dunia Survival",
      "Maksimal 5 Set Home",
      "Pesan masuk server kustom (Join Message)",
      "2x Kunci Crate Premium",
      "Akses Command /nick untuk ganti nama"
    ],
    highlight: "Pilihan terpopuler komunitas"
  },
  { 
    name: "MASTER", 
    color: "from-emerald-600 to-teal-500 text-emerald-400", 
    textGlow: "shadow-emerald-500/20 text-emerald-400", 
    bg: "bg-emerald-500/10", 
    border: "border-emerald-500/20",
    price: "IDR 50.000",
    perks: [
      "Semua fitur rank MVP",
      "Fitur Keep Inventory (Item tidak hilang saat mati)",
      "Maksimal 8 Set Home",
      "Akses Command /back (Kembali ke lokasi kematian)",
      "Akses Command /heal (Cooldown 60 detik)",
      "3x Kunci Crate Premium"
    ],
    highlight: "Nilai terbaik untuk pemain survival"
  },
  { 
    name: "TITAN", 
    color: "from-red-600 to-orange-500 text-red-400", 
    textGlow: "shadow-red-500/20 text-red-400", 
    bg: "bg-red-500/10", 
    border: "border-red-500/20",
    price: "IDR 75.000",
    perks: [
      "Semua fitur rank MASTER",
      "Fitur Keep XP (Level pengalaman tidak hilang)",
      "Maksimal 12 Set Home",
      "Akses Command /feed (Mengatasi lapar seketika)",
      "Akses Virtual Crafting Table (/craft)",
      "4x Kunci Crate Premium"
    ],
    highlight: "Kekuatan luar biasa di arena pertempuran"
  },
  { 
    name: "SUPREME", 
    color: "from-purple-600 to-fuchsia-500 text-purple-400", 
    textGlow: "shadow-purple-500/20 text-purple-400", 
    bg: "bg-purple-500/10", 
    border: "border-purple-500/20",
    price: "IDR 100.000",
    perks: [
      "Semua fitur rank TITAN",
      "Akses Virtual Enderchest (/ec) di mana saja",
      "Maksimal 16 Set Home",
      "Akses Command /condense (Menyatukan ingot otomatis)",
      "Bypass antrean saat server penuh (Priority Slot)",
      "5x Kunci Crate Premium"
    ],
    highlight: "Akses komplit kenyamanan maksimal"
  },
  { 
    name: "CELESTIAL", 
    color: "from-amber-600 to-yellow-500 text-amber-400", 
    textGlow: "shadow-amber-500/20 text-amber-400", 
    bg: "bg-amber-500/10", 
    border: "border-amber-500/20",
    price: "IDR 150.000",
    perks: [
      "Semua fitur rank SUPREME",
      "Akses Command /heal tanpa cooldown",
      "Maksimal 20 Set Home",
      "Akses Partikel Efek Unik di sekeliling karakter",
      "Warna Chat Tebal (Bold Chat) kustom",
      "8x Kunci Crate Premium"
    ],
    highlight: "Kekuatan kosmik tak tertandingi"
  },
  { 
    name: "TRANSCENDENT", 
    color: "from-pink-600 to-rose-500 text-rose-400", 
    textGlow: "shadow-pink-500/20 text-rose-400", 
    bg: "bg-pink-500/10", 
    border: "border-pink-500/20",
    price: "IDR 250.000",
    perks: [
      "Kekuasaan Tertinggi Zenoria MC!",
      "Akses Unlimited Set Home",
      "Prefix Kustom Tag di Chat sesuai keinginan",
      "Akses Teleportasi Instan tanpa delay (/tp)",
      "Dapatkan Pet/Companion Pendamping Eksklusif",
      "15x Kunci Crate Premium langsung",
      "Bebas klaim klaim lahan up to 100.000 block"
    ],
    highlight: "Dukungan Ultimate bagi sang Legenda!"
  }
];

export default function Ranks() {
  const [selectedRank, setSelectedRank] = useState(0);

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

        {/* Ranks Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16 items-start">
          {/* Rank Buttons Selector Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider px-1">
              Pilih Tier Rank
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              {serverRanks.map((rank, index) => {
                const isSelected = selectedRank === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedRank(index)}
                    className={`px-4 py-3.5 rounded-xl text-left border backdrop-blur-sm transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? `${rank.bg} ${rank.border} border-lime-500/40 shadow-lg scale-[1.02]`
                        : "bg-gray-900/40 border-gray-800/40 hover:bg-[#11141a] hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Award className={`w-5 h-5 ${isSelected ? rank.color : "text-gray-400 group-hover:text-lime-400"} transition-colors`} />
                      <span className={`font-display font-bold text-sm tracking-wider uppercase transition-colors ${
                        isSelected ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      }`}>
                        {rank.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-lime-500/20 text-lime-400" : "bg-gray-950 text-gray-500"
                    }`}>
                      Tier {index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rank Details Card Column */}
          <div className="lg:col-span-7 bg-[#11141a]/60 backdrop-blur-md border border-lime-500/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            {/* Top right decorative shine */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800/60 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-lime-400 bg-lime-500/10 px-2.5 py-0.5 rounded-full uppercase border border-lime-500/20">
                      Tier {selectedRank + 1} Premium Rank
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wider uppercase">
                    RANK {serverRanks[selectedRank].name}
                  </h3>
                </div>
                <div className="text-right sm:text-right">
                  <span className="text-xs text-gray-400 block mb-1 font-mono uppercase tracking-wider">Mulai Dari</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-lime-400 tracking-wider">
                    {serverRanks[selectedRank].price}
                  </span>
                </div>
              </div>

              {/* Subtitle Highlight */}
              <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400/90 mb-5 font-mono bg-yellow-400/5 border border-yellow-400/10 py-2 px-3 rounded-xl">
                <Info className="w-4 h-4 shrink-0" />
                <span>{serverRanks[selectedRank].highlight}</span>
              </div>

              {/* Perks List */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                  Akses Fitur & Keistimewaan:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serverRanks[selectedRank].perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/25 flex items-center justify-center text-lime-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="border-t border-gray-800/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-500 font-sans text-center sm:text-left">
                Tanya admin di Discord / WhatsApp untuk detail pendaftaran rank ini.
              </span>
              <a
                href="#social"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-black font-display font-bold text-sm tracking-wider uppercase text-center hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-lime-500/10 cursor-pointer"
              >
                Pesan Rank Sekarang
              </a>
            </div>
          </div>
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
