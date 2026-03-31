import { motion } from 'motion/react';
import { CalendarX, UserMinus, Clock, Bot, MoonStar } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

import clinicalSuccessImg from '../assets/mockups/clinical_success.png';

const pains = [];

export function PainSolutionV4() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#F8F9FA]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">





        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem à Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0090FF]/20 to-[#00D1FF]/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[32px] overflow-hidden border border-[#E9ECEF] shadow-2xl bg-white">
              <img
                src={clinicalSuccessImg}
                alt="Sucesso Clínico Intalky"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/20 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Texto à Direita */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-red-300 via-[#E9ECEF] to-[#0090FF]/60" />
              <p className="text-xl md:text-2xl font-bold text-[#4A4A4A]">
                E se você nunca mais tivesse{' '}
                <span className="text-[#1A1A1A]">nenhum desses problemas?</span>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tight leading-[1.1]">
                A Intalky resolve cada uma delas.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Em 3 segundos, 24/7.</span>
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                <strong className="text-[#1A1A1A]">78% das vendas</strong> vão para quem responde primeiro. Com o método dos{' '}
                <strong className="text-[#0090FF]">7 Pilares da Persuasão</strong> e IA treinada, seus pacientes interessados viram agendamentos confirmados — dia e noite.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      <div className="mt-10 flex justify-center">
        <ScrollIndicator text="Veja como funciona" />
      </div>
    </section>
  );
}
