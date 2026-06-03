import { motion } from 'motion/react';
import { CalendarX, UserMinus, Clock, Bot, MoonStar } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

import clinicalSuccessImg from '../assets/mockups/clinical_success.png';

export function PainSolutionV4() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[var(--color-bg-gradient)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagem à Esquerda com Card SaaS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative max-w-[480px] floating">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0090FF]/20 to-[#00D1FF]/20 rounded-[40px] blur-2xl opacity-50" />
              <div className="relative rounded-[32px] overflow-hidden glass-card p-2 shadow-[var(--sh-deep)] bg-white/40">
                <div className="rounded-[24px] overflow-hidden border border-[#E9ECEF]">
                  <img
                    src={clinicalSuccessImg}
                    alt="Sucesso Clínico Intalky"
                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto à Direita - Centralizado no Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="w-px h-12 bg-gradient-to-b from-[#0090FF] to-[#00D1FF]" />
                <p className="text-xl md:text-2xl font-bold text-[#4A4A4A] tracking-tight">
                  E se você nunca mais tivesse{' '}
                  <span className="text-[#1A1A1A]">nenhum desses problemas?</span>
                </p>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.02]">
                A Intalky resolve cada uma delas.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">
                  Em 3 segundos, 24/7.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-medium">
                <strong className="text-[#1A1A1A]">78% das vendas</strong> vão para quem responde primeiro. Com o método dos{' '}
                <strong className="text-[#0090FF]">7 Pilares da Persuasão</strong> e IA treinada, seus clientes interessados viram agendamentos confirmados — dia e noite.
              </p>

              <div className="pt-4">
                <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#0090FF] transition-colors shadow-lg">
                  Entender a Metodologia
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

