import { motion } from "motion/react";
import { AlertTriangle, ShieldAlert, Octagon, Check, CircleDot } from "lucide-react";

const rulesList = [
  "No Toxic!!",
  "No 4no",
  "No Bullying",
  "No Sara/Rasis",
  "Promosi Bayar 10.000",
  "No Caper",
  "No Bot",
  "No Hack Client",
  "No Abuse",
  "No Cheat (dalam bentuk apapun)",
  "No Bahas Game Lain",
  "Good Attitude [WAJIB]"
];

export default function Rules() {
  return (
    <section id="rules" className="py-20 px-4 max-w-5xl mx-auto relative z-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 inline-flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Server Regulations</span>
        </span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-wider mt-4 mb-4">
          Peraturan <span className="text-lime-400">Server</span>
        </h2>
        <div className="w-20 h-1 bg-lime-500 mx-auto rounded" />
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
          Harap baca dan pahami seluruh tata tertib bermain di Zenoria MC demi menjaga sportivitas dan kenyamanan bersama.
        </p>
      </div>

      {/* Rules Container Card */}
      <div className="relative overflow-hidden bg-[#0d0f14]/90 backdrop-blur-md border border-lime-500/30 rounded-2xl p-6 md:p-10 shadow-2xl shadow-lime-950/10">
        
        {/* Subtle Background Red Glow for Threat Area */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-lime-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* BLACKLIST WARNING BANNER - Sangat Tegas & Verbatim */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-red-950/80 via-red-900/40 to-red-950/80 border border-red-500/30 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-full bg-red-500/10 -skew-x-12 pointer-events-none" />
          <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Peringatan Keras!
            </h4>
            <p className="text-red-300 font-sans text-sm font-semibold tracking-wide">
              Player yang melanggar akan kami blacklist!
            </p>
          </div>
        </div>

        {/* Grid of Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rulesList.map((rule, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#11141a]/60 border border-gray-900 hover:border-lime-500/20 transition-all duration-200 group"
            >
              <div className="w-6 h-6 rounded bg-[#0c0e12] border border-gray-800 flex items-center justify-center text-lime-500 shrink-0 mt-0.5 group-hover:bg-lime-500 group-hover:text-black transition-colors duration-200">
                <span className="font-mono text-xs font-semibold">{idx + 1}</span>
              </div>
              <p className="text-gray-300 text-sm font-medium tracking-wide leading-relaxed group-hover:text-white transition-colors">
                {rule}
              </p>
            </div>
          ))}
        </div>

        {/* Small Note */}
        <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <span className="flex items-center gap-2">
            <Octagon className="w-4 h-4 text-lime-500" />
            <span>Server Side Logging Active 24/7</span>
          </span>
          <span>Bermainlah dengan jujur dan santuy!</span>
        </div>
      </div>
    </section>
  );
}
