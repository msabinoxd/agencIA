import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { waURL, CONFIG } from '../config';
import { fadeUp, stagger, scaleIn } from '../shared/animations';

const checklist = [
  "Setup completo em 48h",
  "Integração com seu CRM",
  "IA + supervisão humana",
  "Sem contrato de fidelidade"
];

export function CTAFinal() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#F8F9FA] border-t border-[#E9ECEF]">
      {/* Background Glows - Animated */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0090FF]/8 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D1FF]/8 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-bold uppercase tracking-wider mb-8"
        >
          <Zap className="w-4 h-4" />
          Transforme seu Atendimento
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]"
        >
          Seus leads merecem uma <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">resposta em 3 segundos.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-[#4A4A4A] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Agende uma conversa de 20 minutos. Sem compromisso. Mostramos como funciona e calculamos o ROI do seu negócio.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 text-left sm:text-center max-w-4xl mx-auto"
        >
          {checklist.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group flex items-center justify-start sm:justify-center gap-3 text-[#1A1A1A] font-medium bg-white hover:bg-[#F1F3F5] border border-[#E9ECEF] hover:border-[#0090FF]/20 rounded-xl py-4 px-5 transition-all duration-300 shadow-[var(--sh)]"
            >
              <CheckCircle2 className="w-5 h-5 text-[#0090FF] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 relative"
        >
          {/* Shimmer Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <motion.a
              href={waURL(CONFIG.wa.msgFinal)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-10 py-5 rounded-full font-bold text-lg transition-all overflow-hidden"
              style={{ animation: 'ctaPulse 2.5s ease-in-out infinite' }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <Sparkles className="w-5 h-5" />
              {CONFIG.wa.ctaFinal}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#888888] font-medium bg-white px-4 py-2 rounded-full border border-[#E9ECEF] shadow-[var(--sh)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0090FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0090FF]"></span>
            </span>
            Abre o WhatsApp · Resposta em até 2h
          </div>
        </motion.div>
      </div>
    </section>
  );
}
