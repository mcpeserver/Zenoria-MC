import { motion } from "motion/react";
import { Gamepad2, Wifi, Shield, Home, Sparkles } from "lucide-react";

const serverAdvantages = [
  {
    title: "Grinding Santuy",
    desc: "Sangat cocok untuk player yang ingin bermain dengan tenang.",
    icon: Gamepad2,
    color: "from-lime-500/20 to-lime-500/0",
    iconColor: "text-lime-400",
    borderColor: "hover:border-lime-500/40"
  },
  {
    title: "Sinyal Stabil",
    desc: "Koneksi lancar demi kenyamanan bermain (kalo tidak ada kendala).",
    icon: Wifi,
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/40"
  },
  {
    title: "Claim Land/Block",
    desc: "Amankan base atau kerajaanmu dari bahaya griefing tangan jahil.",
    icon: Shield,
    color: "from-green-500/20 to-green-500/0",
    iconColor: "text-green-400",
    borderColor: "hover:border-green-500/40"
  },
  {
    title: "Sethome System",
    desc: "Tandai titik koordinat rumahmu agar tidak tersesat atau kehilangan arah.",
    icon: Home,
    color: "from-teal-500/20 to-teal-500/0",
    iconColor: "text-teal-400",
    borderColor: "hover:border-teal-500/40"
  },
  {
    title: "Gacha & Gambling",
    desc: "Uji keberuntunganmu untuk mendapatkan item-item berkategori rare.",
    icon: Sparkles,
    color: "from-yellow-500/20 to-yellow-500/0",
    iconColor: "text-yellow-400",
    borderColor: "hover:border-yellow-500/40"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto relative z-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-wider mb-4">
          Kenapa Harus <span className="text-lime-400">Zenoria MC</span>?
        </h2>
        <div className="w-20 h-1 bg-lime-500 mx-auto rounded mb-4" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Kami menyediakan server Survival Economy yang solid, dirancang khusus untuk kenyamanan bermain para player Minecraft di Indonesia.
        </p>
      </div>

      {/* Grid of Advantages */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {serverAdvantages.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden bg-[#11141a]/65 backdrop-blur-md border border-gray-900 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-xl transition-all duration-300 ${item.borderColor}`}
            >
              {/* Radial background highlight matching item color */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl pointer-events-none opacity-40`} />

              {/* Icon Frame */}
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center border border-gray-800 relative z-10 shadow-inner">
                <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
              </div>

              {/* Content Text */}
              <div className="relative z-10 flex-grow">
                <h3 className="font-display font-bold text-lg md:text-xl text-white mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Aesthetic indicator decoration */}
              <div className="w-8 h-1 rounded bg-gray-800 self-start group-hover:bg-lime-500 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
