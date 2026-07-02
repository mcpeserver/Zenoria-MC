import { motion } from "motion/react";
import { CheckCircle2, Clock, Hammer, HelpCircle, Package, Briefcase, Award, ShoppingBag, Eye, Star } from "lucide-react";

const activeFeatures = [
  { name: "Gacha System", desc: "Uji keberuntunganmu untuk mendapatkan perlengkapan mistis atau kosmetik langka.", icon: Star },
  { name: "Jobs System", desc: "Pilih pekerjaan in-game favoritmu untuk mulai mengumpulkan uang server.", icon: Briefcase },
  { name: "Quest System", desc: "Selesaikan berbagai tantangan seru setiap harinya dan dapatkan bonus menarik.", icon: Award },
  { name: "Claim Blockshop", desc: "Beli dan klaim blok perlindungan lahan langsung melalui sistem toko in-game.", icon: Package },
  { name: "AuraSkill (McMMO)", desc: "Tingkatkan level skill karaktermu (mining, acrobatics, dll.) untuk bonus stat permanen.", icon: Eye },
  { name: "Ultra Cosmetic Shop", desc: "Kustomisasi penampilan karaktermu dengan sayap, topi, dan aura kosmetik premium.", icon: ShoppingBag }
];

const developmentFeatures = [
  {
    name: "Kits Rank",
    status: "OTW",
    statusText: "otw",
    desc: "Paket starter kit eksklusif yang disesuaikan khusus untuk pemegang tingkatan rank.",
    icon: Clock,
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glowColor: "group-hover:border-blue-500/30"
  },
  {
    name: "Custom Enchant",
    status: "Tahap Perkembangan",
    statusText: "masih tahap perkembangan",
    desc: "Sihir (enchantment) khusus buatan server untuk senjata dan armor super kuat.",
    icon: Hammer,
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    glowColor: "group-hover:border-amber-500/30"
  },
  {
    name: "Leveling Mobs",
    status: "Dalam Pertimbangan",
    statusText: "masih dipertimbangkan",
    desc: "Sistem level monster yang bervariasi sesuai jarak koordinat untuk grinding menantang.",
    icon: HelpCircle,
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glowColor: "group-hover:border-purple-500/30"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#090b0e]/80 border-y border-gray-950 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-lime-400 uppercase tracking-widest bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
            Daftar Fitur In-Game
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-wider mt-4 mb-4">
            Fitur Utama <span className="text-lime-400">Server</span>
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Kami menghadirkan fitur-fitur ekonomi interaktif untuk memberikan pengalaman grinding santuy terbaik sepanjang hari.
          </p>
        </div>

        {/* Active Features Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-6 bg-lime-500 rounded" />
            <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-wide uppercase">
              Fitur Aktif & Tersedia
            </h3>
            <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
              Ready to Play
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#11141a]/50 border border-gray-900/60 rounded-xl p-6 hover:border-lime-500/20 transition-all duration-300 group flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0c0e12] flex items-center justify-center border border-gray-800 text-lime-400 group-hover:bg-lime-500 group-hover:text-black transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white mb-1 group-hover:text-lime-300 transition-colors">
                      {feat.name}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Features Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-6 bg-amber-500 rounded" />
            <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-wide uppercase">
              Fitur Dalam Pengembangan
            </h3>
            <span className="text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
              Development Road
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#11141a]/50 border border-gray-900/60 rounded-xl p-6 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden ${feat.glowColor}`}
                >
                  <div className="flex gap-4 items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0c0e12] flex items-center justify-center border border-gray-800 text-gray-400 group-hover:text-amber-400 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-display font-bold text-base text-white">
                          {feat.name}
                        </h4>
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${feat.badgeColor}`}>
                          {feat.statusText}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-900 flex items-center gap-2 text-[10px] font-mono text-gray-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-600" />
                    <span>Rencana integrasi di patch berikutnya</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
