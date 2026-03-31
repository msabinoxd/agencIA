import { motion } from 'motion/react';
import { CalendarX, UserMinus, Clock, Bot, MoonStar } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

const pains = [];

export function PainSolutionV4() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#F8F9FA]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">





        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-6 text-center"
        >
          <div className="relative flex items-center justify-center w-full">
            <div className="w-px h-16 bg-gradient-to-b from-red-300 via-[#E9ECEF] to-[#0090FF]/60" />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute w-2.5 h-2.5 rounded-full bg-[#0090FF] shadow-[0_0_12px_rgba(0,144,255,0.6)]"
            />
          </div>

          <p className="text-2xl md:text-3xl font-bold text-[#4A4A4A] max-w-2xl">
            E se você nunca mais tivesse{' '}
            <span className="text-[#1A1A1A]">nenhum desses problemas?</span>
          </p>

          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              A Intalky resolve cada uma delas.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Em 3 segundos, 24/7, sem depender de atendente.</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              <strong className="text-[#1A1A1A]">78% das vendas</strong> vão para quem responde primeiro. Com o método dos{' '}
              <strong className="text-[#0090FF]">7 Pilares da Persuasão</strong> e IA treinada para conduzir a negociação, seus pacientes interessados viram agendamentos confirmados — dia e noite.
            </p>
          </div>
        </motion.div>

      </div>

      <div className="mt-10 flex justify-center">
        <ScrollIndicator text="Veja como funciona" />
      </div>
    </section>
  );
}
