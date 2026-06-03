import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ConnectionBridgeV4() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const yText1 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const yText2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  const yBand = useTransform(scrollYProgress, [0, 1], ["-150%", "150%"]);
  const opacityBand = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="h-64 md:h-80 bg-gradient-to-b from-white via-[#0090FF]/5 to-white relative flex justify-center items-center overflow-hidden border-y border-[#E9ECEF]">
      {/* Parallax Glow */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="absolute w-[400px] h-[400px] bg-[#0090FF]/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Linha Contínua de Conexão */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-white via-[#0090FF] to-white opacity-40" />

      {/* Pulso de Energia */}
      <motion.div
        style={{ top: yBand, opacity: opacityBand }}
        className="absolute left-1/2 -translate-x-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-[#0090FF] to-transparent shadow-[0_0_30px_rgba(0,144,255,0.6)]"
      />

      {/* Textos Flutuantes */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div style={{ y: yText1 }} className="flex items-center gap-3 opacity-50 ml-32 md:ml-48 mb-16">
          <div className="w-1.5 h-1.5 bg-[#0090FF] rounded-full shadow-[0_0_5px_rgba(0,144,255,0.8)]" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#0090FF] font-medium">Processamento IA</span>
        </motion.div>

        <motion.div style={{ y: yText2 }} className="flex items-center gap-3 opacity-50 mr-32 md:mr-48 mt-16">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A] font-medium">Análise Humana</span>
          <div className="w-1.5 h-1.5 bg-[#4A4A4A] rounded-full shadow-[0_0_5px_rgba(74,74,74,0.5)]" />
        </motion.div>
      </div>
    </div>
  );
}
