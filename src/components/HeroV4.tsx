import { motion } from 'motion/react';
import { Bot, ArrowRight, Zap, MessageSquareCode, Play } from 'lucide-react';
import { useState } from 'react';
import { ScrollIndicator } from './ScrollIndicator';
import { stagger } from '../shared/animations';
import InteractiveChatWidget from './InteractiveChatWidget';

export function HeroV4({ onOpenSimulator }: { onOpenSimulator?: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#F8F9FA]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0090FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00D1FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

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
            {["Toda", "semana", "você", "perde", "pacientes", "que", "já", "demonstraram", "interesse."].map((word, i) => {
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
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-lg font-medium">
            Até quando você vai ficar trocando de agência achando que o problema é tráfego?
          </p>

          {/* Vídeo VSL Customizado */}
          <div className="w-full max-w-lg aspect-video bg-[#E9ECEF] rounded-2xl border border-[#E9ECEF] shadow-[0_8px_32px_rgba(0,144,255,0.15)] flex items-center justify-center relative overflow-hidden group">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/exPRy-IeD7s/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Botão de Play Menor */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,144,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-1" />
                </div>
                {/* Mensagem de clique Menor */}
                <span className="relative z-10 text-white font-bold mt-3 tracking-widest text-[9px] sm:text-[10px] uppercase bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Clique para assistir
                </span>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full">
                {/* 
                  Parâmetros adicionados:
                  autoplay=1: inicia automaticamente após o clique do usuário
                  controls=1: permite pausar e escolher o progresso do vídeo
                  rel=0: restringe vídeos sugeridos no final aos do mesmo canal
                  modestbranding=1: tira logo grande do YouTube
                  iv_load_policy=3: desativa anotações/cards
                */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/exPRy-IeD7s?autoplay=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
                  title="VSL"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlays protetores para impedir cliques em links do Youtube quando o vídeo está pausado */}
                <div className="absolute top-0 left-0 w-full h-[60px] bg-transparent z-10" title="" />
              </div>
            )}
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
              <p className="text-[#1A1A1A] text-sm font-black italic">Resposta: 3s</p>
              <p className="text-[#888888] text-[10px] font-bold uppercase tracking-widest">Escala Instantânea</p>
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
              <p className="text-[#1A1A1A] text-sm font-black italic">Filtro Inteligente</p>
              <p className="text-[#888888] text-[10px] font-bold uppercase tracking-widest">Qualificador de Leads</p>
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
