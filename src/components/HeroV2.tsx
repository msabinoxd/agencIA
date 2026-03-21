import { motion } from 'motion/react';
import { Bot, ArrowRight, Zap, MessageSquareCode } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { stagger } from '../shared/animations';
import InteractiveChatWidget from './InteractiveChatWidget';

export function HeroV2({ onOpenSimulator }: { onOpenSimulator?: () => void }) {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#F8F9FA]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0090FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00D1FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          {/* Badge */}
          <div className="inline-flex items-start gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E9ECEF] shadow-[var(--sh)] max-w-full">
            <span className="flex h-2 w-2 rounded-full bg-[#0090FF] animate-pulse shrink-0 mt-[3px]"></span>
            <span className="text-[9px] sm:text-[11px] font-black text-[#4A4A4A] uppercase tracking-wider sm:tracking-widest leading-tight">Para Clínicas Odontológicas & Estéticas</span>
          </div>

          {/* Headline */}
          <motion.h1
            className="text-[28px] sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.05]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {["Toda", "semana,", "sua", "clínica", "perde", "pacientes", "que", "já", "demonstraram", "interesse.", "E", "você", "sabe", "disso."].map((word, i) => {
              const isHighlight = word === 'perde' || word === 'pacientes';
              return (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.2em] ${isHighlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } }
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-lg">
            Não é problema de tráfego. Não é problema de marketing. É que o dinheiro que você investe para trazer o lead evapora no momento em que ele precisava de um processo comercial — e encontrou um <span className="text-[#1A1A1A] font-bold">vácuo.</span>
          </p>

          {/* 3 parágrafos de apoio */}
          <div className="space-y-2 max-w-lg">
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              Você investe em anúncios. Os leads chegam. Alguns agendam. Outros somem sem explicação. E aqueles que aparecem na avaliação... nem sempre saem com o tratamento fechado.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed font-semibold">
              Enquanto isso, o dinheiro do tráfego continua sendo debitado todo mês. Sem piedade.
            </p>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              O problema não está onde você procura. Está no que acontece <span className="text-[#1A1A1A] font-bold">depois que o lead clica.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <a
                href="#/funil"
                className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-5 sm:px-7 py-4 rounded-xl font-black text-[10px] sm:text-sm uppercase tracking-wide sm:tracking-widest leading-snug text-center transition-all hover:scale-[1.02] overflow-hidden shadow-[0_4px_14px_rgba(0,144,255,0.3)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                Quero entender onde meu processo comercial tem furo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
            <button
              onClick={onOpenSimulator}
              className="flex items-center justify-center gap-2 bg-white hover:bg-[#F1F3F5] text-[#1A1A1A] border border-[#E9ECEF] px-7 py-4 rounded-xl font-bold text-sm transition-all shadow-[var(--sh)]"
            >
              Simulação de Atendimento
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 sm:gap-8 pt-6 mt-2 border-t border-[#E9ECEF]">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-[#0090FF] italic">R$50M+</span>
              <span className="text-[8px] sm:text-[10px] font-black text-[#888888] uppercase tracking-tight sm:tracking-[0.15em] leading-tight mt-0.5">Em Vendas<br />Gerados</span>
            </div>
            <div className="w-px h-10 bg-[#E9ECEF]" />
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-[#0090FF] italic">4x</span>
              <span className="text-[8px] sm:text-[10px] font-black text-[#888888] uppercase tracking-tight sm:tracking-[0.15em] leading-tight mt-0.5">Crescimento<br />em 12 Meses</span>
            </div>
            <div className="w-px h-10 bg-[#E9ECEF]" />
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-[#0090FF] italic">-70%</span>
              <span className="text-[8px] sm:text-[10px] font-black text-[#888888] uppercase tracking-tight sm:tracking-[0.15em] leading-tight mt-0.5">Redução<br />de No-Show</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:px-6"
        >
          <InteractiveChatWidget />

          {/* Floating Badges — apenas lg+ */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden lg:flex absolute -right-4 top-16 bg-white border border-[#E9ECEF] px-4 py-3 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] items-center gap-3 z-30"
          >
            <div className="bg-[#0090FF]/10 p-2 rounded-xl">
              <Zap className="w-5 h-5 text-[#0090FF]" />
            </div>
            <div>
              <p className="text-[#1A1A1A] text-sm font-black italic">Response: 3s</p>
              <p className="text-[#888888] text-[10px] font-bold uppercase tracking-widest">Instant Scale</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="hidden lg:flex absolute -left-4 bottom-20 bg-white border border-[#E9ECEF] px-4 py-3 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] items-center gap-3 z-30"
          >
            <div className="bg-[#00D1FF]/10 p-2 rounded-xl">
              <MessageSquareCode className="w-5 h-5 text-[#00D1FF]" />
            </div>
            <div>
              <p className="text-[#1A1A1A] text-sm font-black italic">Smart Filtro</p>
              <p className="text-[#888888] text-[10px] font-bold uppercase tracking-widest">Lead Qualifier</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-14 flex justify-center">
        <ScrollIndicator text="Descubra onde estão os buracos" />
      </div>
    </section>
  );
}
