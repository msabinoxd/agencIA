import { motion, AnimatePresence } from 'motion/react';
import { Bot, ArrowRight, Zap, MessageSquareCode, Play, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ScrollIndicator } from './ScrollIndicator';
import { stagger } from '../shared/animations';
import InteractiveChatWidget from './InteractiveChatWidget';
import { Counter } from '../shared/Counter';

export function HeroV4({ onOpenSimulator }: { onOpenSimulator?: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showSimulateOverlay, setShowSimulateOverlay] = useState(false);

  // Timer para mostrar o overlay de simulação (3m30s = 210s)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && !showChat) {
      timer = setTimeout(() => {
        setShowSimulateOverlay(true);
      }, 210000); // 3m30s
    }
    return () => clearTimeout(timer);
  }, [isPlaying, showChat]);

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-[var(--color-bg-gradient)]">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] shadow-[var(--sh)] mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#0090FF] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-[#4A4A4A] uppercase tracking-widest">
            Ecossistema Comercial para Clínicas de Elite
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-6"
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
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl font-medium mb-10"
        >
          Até quando você vai ficar trocando de agência achando que o problema é tráfego? Pare de perder vendas no WhatsApp.
        </motion.p>

        {/* Main Media Container (Video/Chat Switcher) */}
        <div className="relative w-full max-w-4xl aspect-video rounded-[32px] overflow-hidden glass-card shadow-[var(--sh-deep)] mb-12 group">
          <AnimatePresence mode="wait">
            {!showChat ? (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full"
              >
                {!isPlaying ? (
                  <div 
                    className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img 
                      src="https://img.youtube.com/vi/exPRy-IeD7s/maxresdefault.jpg" 
                      alt="Video Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,144,255,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <span className="relative z-10 text-white font-bold mt-5 tracking-[0.2em] text-xs uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      Assistir VSL de Apresentação
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/exPRy-IeD7s?autoplay=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
                      title="VSL"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Overlay de Simulação Estratégico */}
                    <AnimatePresence>
                      {showSimulateOverlay && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center p-8 z-50 text-white"
                        >
                          <h3 className="text-2xl font-black mb-4 tracking-tight">O que você faria com um Closer Digital 24/7?</h3>
                          <p className="text-white/80 mb-8 max-w-sm">Assista ao restante do vídeo ou teste a nossa IA agora mesmo.</p>
                          <div className="flex gap-4">
                            <button 
                              onClick={() => setShowChat(true)}
                              className="bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-widest shadow-xl hover:scale-105 transition-transform"
                            >
                              Simular Atendimento Agora
                            </button>
                            <button 
                              onClick={() => setShowSimulateOverlay(false)}
                              className="text-white/60 hover:text-white transition-colors font-bold"
                            >
                              Continuar assistindo
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 w-full h-full bg-white p-4 overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-50">
                  <button 
                    onClick={() => setShowChat(false)}
                    className="flex items-center gap-2 text-[#888888] hover:text-[#1A1A1A] transition-colors font-bold text-xs uppercase tracking-widest bg-white/80 backdrop-blur px-3 py-2 rounded-xl border border-[#E9ECEF]"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Voltar para o Vídeo
                  </button>
                </div>
                <div className="h-full pt-10">
                  <InteractiveChatWidget />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick CTA below console */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <a
              href="#/funil"
              className="relative flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-xl"
            >
              Quero entender onde meu processo comercial tem furos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {!showChat && (
            <button
              onClick={() => setShowChat(true)}
              className="flex items-center justify-center gap-2 bg-white hover:bg-[#F1F3F5] text-[#1A1A1A] border border-[#E9ECEF] px-8 py-5 rounded-2xl font-bold text-sm transition-all shadow-[var(--sh)]"
            >
              <Bot className="w-5 h-5 text-[#0090FF]" />
              Simular Atendimento IA
            </button>
          )}
        </div>

        {/* Stats - Live Cockpit Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-[#E9ECEF] pt-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl lg:text-5xl font-black text-[#0090FF] italic tracking-tighter">
              <Counter value={80} prefix="R$" suffix="M+" />
            </span>
            <span className="text-[10px] font-black text-[#888888] uppercase tracking-[0.2em] mt-2">Vendas Geradas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl lg:text-5xl font-black text-[#0090FF] italic tracking-tighter">
              <Counter value={4} suffix="x" />
            </span>
            <span className="text-[10px] font-black text-[#888888] uppercase tracking-[0.2em] mt-2">Ticket Médio</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl lg:text-5xl font-black text-red-500 italic tracking-tighter">
              <Counter value={70} prefix="-" suffix="%" />
            </span>
            <span className="text-[10px] font-black text-[#888888] uppercase tracking-[0.2em] mt-2">Não Comparecimento</span>
          </div>
        </div>

      </div>

      <div className="mt-16 flex justify-center">
        <ScrollIndicator text="Descubra a estratégia por trás dos números" />
      </div>
    </section>
  );
}

