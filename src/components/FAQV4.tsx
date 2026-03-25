import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { CONFIG } from '../config';

const FAQV4s = [
  {
    question: "Funciona para clínica odontológica?",
    answer: "Sim, é nossa especialidade. Trabalhamos com OdontoCompany, Sorridents, Odonto Special, B Facial Clinic e Cotia Clínica, entre outras. A Intalky AI é treinada para o fluxo específico de clínicas: anúncio → lead → qualificação → agendamento de avaliação → fechamento do plano de tratamento."
  },
  {
    question: "A IA vai parecer um robô e afastar meus pacientes?",
    answer: "Não. A Intalky AI é treinada com os 7 Pilares da Persuasão de Danilo Oliveira para conversar de forma natural e empática. Ela entende contexto, intenção e até manda áudios com tom humano — seu paciente não vai perceber que é IA."
  },
  {
    question: "Qual a diferença entre Intalky Essencial e Pro?",
    answer: "O Intalky Essencial é focado no topo do funil: a IA atende, qualifica e agenda a consulta. Sua equipe assume para o fechamento. O Intalky Pro vai além: a IA gerencia o CRM completo, faz follow-up ativo com leads que não responderam, cuida do pós-venda, reativação de pacientes inativos e toda a jornada de valor do cliente. Zero lead esquecido."
  },
  {
    question: "Como fica a supervisão? Posso confiar 100% na IA?",
    answer: "Você tem acesso a um painel completo para monitorar todas as conversas em tempo real. Além disso, nossa equipe supervisiona ativamente o CRM, fazemos treinamento semanal com Danilo Oliveira (roleplay, objeções, análise de métricas) e consultoria de marketing com Marcos. Suporte em horário comercial sempre disponível."
  },
  {
    question: "Funciona com meu CRM atual?",
    answer: "Sim! Integramos com os principais CRMs (RD Station, HubSpot, ActiveCampaign, Kommo, Pipedrive, entre outros). A IA atualiza o funil, adiciona tags e salva o histórico das conversas automaticamente, sem nenhum clique do seu time."
  },
  {
    question: "Quanto tempo leva para colocar no ar?",
    answer: "O setup, mapeamento de processos e treinamento da IA levam de 7 a 14 dias. Cuidamos de toda a parte técnica e entregamos a solução pronta, testada e integrada ao seu ecossistema."
  },
  {
    question: "Como a IA reduz o no-show?",
    answer: "A Intalky AI dispara uma sequência de confirmação 24h antes da consulta — mensagem de texto + áudio humanizado com a voz do assistente. Se o paciente não responder, a IA reengaja ativamente com uma nova mensagem personalizada. Se ainda não houver resposta, o sistema alerta sua equipe para ligação manual. Com esse fluxo, nossas clínicas parceiras registram redução média de 70% nos no-shows."
  },
  {
    question: "A IA substitui minha equipe de SDR?",
    answer: "Não substitui — complementa de forma estratégica. A IA cuida do volume 24/7: atende todos os leads, qualifica, agenda e faz follow-up. Seus SDRs humanos focam nos leads de maior valor e nos fechamentos complexos, onde o toque humano importa. E o melhor: quando um SDR sai (e eles saem), a metodologia dos 7 Pilares da Persuasão continua operando na IA. Zero ramp-up. Zero risco."
  },
  {
    question: "Qual o investimento?",
    answer: "Varia de acordo com o plano (Essencial ou Pro) e o volume de leads da sua clínica. Agende uma conversa de 20 minutos — calculamos o ROI do seu negócio na hora e apresentamos uma proposta personalizada sem compromisso."
  }
];

export function FAQV4() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isTyping, setIsTyping] = useState(false);

  // Simula o tempo de digitação da IA quando troca de pergunta
  useEffect(() => {
    if (activeIndex !== null) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section id="FAQV4" className="py-24 bg-[#F8F9FA] relative border-t border-[#E9ECEF] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Base de Conhecimento
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Frequentes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Questions List (Prompts) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {FAQV4s.map((FAQV4, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#0090FF]/5 border border-[#0090FF]/20 shadow-[0_0_20px_rgba(0,144,255,0.08)]'
                        : 'bg-white border border-[#E9ECEF] hover:bg-[#F8F9FA] hover:border-[#0090FF]/20'
                    }`}
                  >
                    <span className={`text-sm md:text-base font-medium transition-colors duration-300 pr-4 ${
                      isActive ? 'text-[#0090FF]' : 'text-[#4A4A4A] group-hover:text-[#1A1A1A]'
                    }`}>
                      {FAQV4.question}
                    </span>
                    {/* Desktop Arrow */}
                    <ArrowRight className={`hidden lg:block w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isActive ? 'text-[#0090FF] translate-x-1' : 'text-[#888888] group-hover:text-[#4A4A4A]'
                    }`} />
                    {/* Mobile Chevron */}
                    <ChevronDown className={`lg:hidden w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isActive ? 'text-[#0090FF] rotate-180' : 'text-[#888888] group-hover:text-[#4A4A4A]'
                    }`} />
                  </button>

                  {/* Mobile Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="pt-2 pb-2">
                          <div className="bg-white border border-[#E9ECEF] p-4 rounded-2xl rounded-tl-sm flex gap-3 items-start shadow-[var(--sh)]">
                            <div className="w-7 h-7 rounded-full bg-[#0090FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Bot className="w-4 h-4 text-[#0090FF]" />
                            </div>
                            <div className="flex-1 text-[#4A4A4A] text-sm leading-relaxed min-h-[28px] flex items-center">
                              {isTyping ? (
                                <div className="flex items-center gap-1.5 h-full">
                                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-[#0090FF] rounded-full" />
                                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#0090FF] rounded-full" />
                                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#0090FF] rounded-full" />
                                </div>
                              ) : (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                  {FAQV4.answer}
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Answer Display (AI Chat Interface - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-7 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-[#E9ECEF] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col min-h-[450px] w-full">

              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-[#E9ECEF] bg-[#F8F9FA] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0090FF] to-[#00D1FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,144,255,0.3)]">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-medium text-sm">{CONFIG.brand.name} AI</h3>
                  <p className="text-[#0090FF] text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF] animate-pulse"></span>
                    Respondendo em tempo real
                  </p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-6 flex flex-col gap-6 bg-[#F8F9FA]">

                {activeIndex !== null ? (
                  <>
                    {/* User Question Bubble */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`q-${activeIndex}`}
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="self-end max-w-[85%]"
                      >
                        <div className="bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white text-sm md:text-base p-4 rounded-2xl rounded-tr-sm shadow-sm">
                          {FAQV4s[activeIndex].question}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* AI Answer Bubble / Typing Indicator */}
                    <AnimatePresence mode="wait">
                      {isTyping ? (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="self-start bg-white border border-[#E9ECEF] p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-sm"
                        >
                          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-[#0090FF] rounded-full" />
                          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-[#0090FF] rounded-full" />
                          <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-[#0090FF] rounded-full" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`a-${activeIndex}`}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="self-start max-w-[95%]"
                        >
                          <div className="bg-white border border-[#E9ECEF] text-[#4A4A4A] text-sm md:text-base leading-relaxed p-5 rounded-3xl rounded-tl-sm shadow-[var(--sh)]">
                            {FAQV4s[activeIndex].answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-[#888888] text-sm">
                    Selecione uma pergunta ao lado para ver a resposta.
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
