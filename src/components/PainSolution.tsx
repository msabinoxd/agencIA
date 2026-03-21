import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ScrollIndicator } from './ScrollIndicator';

export function PainSolution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#F8F9FA] flex items-center justify-center min-h-[70vh]">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity grayscale opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-[#F8F9FA]/60 to-[#F8F9FA]" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* A Dor (Problema) */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#888888] leading-tight tracking-tight">
              <span className="line-through decoration-red-500/50 hover:text-[#4A4A4A] transition-colors">Agenda vazia mesmo investindo em tráfego.</span><br />
              <span className="line-through decoration-red-500/50 hover:text-[#4A4A4A] transition-colors">IA que só responde FAQ, não converte.</span><br />
              <span className="line-through decoration-red-500/50 hover:text-[#4A4A4A] transition-colors">Leads perdidos enquanto a clínica está fechada.</span>
            </h2>
          </div>

          {/* Elemento Transitório Visual */}
          <div className="relative h-40 md:h-48 w-full flex justify-center items-center my-8">
            <div className="absolute w-px h-full bg-gradient-to-b from-red-500/50 via-[#E9ECEF] to-[#0090FF]/50" />
            <motion.div
              animate={{ y: [-40, 40, -40] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#0090FF] shadow-[0_0_15px_rgba(0,144,255,0.5)] z-10"
            />
            <div className="absolute top-1/2 -translate-y-1/2 ml-24 md:ml-32 flex flex-col items-start gap-1 opacity-50">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#888888] whitespace-nowrap">Continue</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#0090FF] whitespace-nowrap">Rolando</span>
            </div>
          </div>

          {/* A Solução */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
              A venda como consequência de um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">atendimento de excelência.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed">
              <strong className="text-[#1A1A1A]">78% das vendas</strong> vão para quem responde primeiro. Com o método dos <strong className="text-[#0090FF]">7 Pilares da Persuasão</strong> e IA treinada para conduzir a negociação, seus leads viram agendamentos em <strong className="text-[#0090FF]">3 segundos</strong>.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <ScrollIndicator text="Veja como funciona" />
      </div>
    </section>
  );
}
