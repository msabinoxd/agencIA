import { motion } from 'motion/react';
import { CalendarX, UserMinus, Clock, Bot, MoonStar } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

const pains = [];

export function PainSolutionV4() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#F8F9FA]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header V2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-red-500 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Diagnóstico da sua operação
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            Cinco situações que custam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">R$50.000 ou mais por mês</span>{' '}
            para a maioria das clínicas. Qual delas você reconhece?
          </h2>

          {/* Intro text encurtado (Max 2 linhas) */}
          <div className="space-y-4 text-left bg-white border border-[#E9ECEF] rounded-2xl p-6 shadow-[var(--sh)] mb-0">
            <p className="text-[#4A4A4A] leading-relaxed font-medium">
              São contas simples que a maioria dos donos de clínica <strong className="text-[#1A1A1A]">nunca parou para fazer.</strong>
            </p>
            <p className="text-[#4A4A4A] leading-relaxed italic">
              Gestores que pensam como empresários não aceitam viver no escuro. Eles estancam o sangramento.
            </p>
          </div>
        </motion.div>



        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6 text-center"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Em 3 segundos, 24/7, sem depender de SDR.</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              <strong className="text-[#1A1A1A]">78% das vendas</strong> vão para quem responde primeiro. Com o método dos{' '}
              <strong className="text-[#0090FF]">7 Pilares da Persuasão</strong> e IA treinada para conduzir a negociação, seus leads viram agendamentos confirmados — dia e noite.
            </p>
          </div>
        </motion.div>

      </div>

      <div className="mt-16 flex justify-center">
        <ScrollIndicator text="Veja como funciona" />
      </div>
    </section>
  );
}
