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
    answer: "O Intalky Essencial é focado no topo do processo: a IA atende, filtra e agenda a consulta. Sua equipe assume para o fechamento. O Intalky Pro vai além: a IA gerencia o sistema de gestão completo, faz acompanhamento ativo com pacientes que não responderam, cuida do pós-venda, reativação de pacientes inativos e toda a jornada de valor. Nenhum paciente esquecido."
  },
  {
    question: "Como fica a supervisão? Posso confiar 100% na IA?",
    answer: "Você tem acesso a um painel completo para acompanhar todas as conversas em tempo real. Além disso, nossa equipe supervisiona ativamente o sistema de gestão, fazemos treinamento semanal com Danilo Oliveira (simulação de atendimento, objeções, análise de resultados) e consultoria de marketing com Marcos. Suporte em horário comercial sempre disponível."
  },
  {
    question: "Funciona com meu CRM atual?",
    answer: "Sim! Integramos com os principais sistemas de gestão (RD Station, HubSpot, ActiveCampaign, Kommo, Pipedrive, entre outros). A IA atualiza o processo, adiciona tags e salva o histórico das conversas automaticamente, sem nenhum clique do seu time."
  },
  {
    question: "Quanto tempo leva para colocar no ar?",
    answer: "O setup, mapeamento de processos e treinamento da IA levam de 7 a 14 dias. Cuidamos de toda a parte técnica e entregamos a solução pronta, testada e integrada ao seu ecossistema."
  },
  {
    question: "Como a IA reduz as faltas dos pacientes?",
    answer: "A Intalky AI dispara uma sequência de confirmação 24h antes da consulta — mensagem de texto + áudio humanizado com a voz do assistente. Se o paciente não responder, a IA reengaja ativamente com uma nova mensagem personalizada. Se ainda não houver resposta, o sistema alerta sua equipe para ligação manual. Com esse processo, nossas clínicas parceiras registram redução média de 70% nas faltas."
  },
  {
    question: "A IA substitui minha equipe de atendimento?",
    answer: "Não substitui — complementa de forma estratégica. A IA cuida do volume 24/7: atende todos os contatos, filtra, agenda e faz acompanhamento. Seus atendentes humanos focam nos pacientes de maior valor e nos fechamentos complexos, onde o toque humano importa. E o melhor: quando um atendente sai (e eles saem), a metodologia dos 7 Pilares da Persuasão continua operando na IA. Sem tempo de adaptação. Sem risco."
  },
  {
    question: "Qual o investimento?",
    answer: "Varia de acordo com o plano (Essencial ou Pro) e o volume de leads da sua clínica. Agende uma conversa de 20 minutos — calculamos o ROI do seu negócio na hora e apresentamos uma proposta personalizada sem compromisso."
  }
];

export function FAQV4() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (activeIndex !== null) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section id="FAQV4" className="py-24 md:py-32 bg-[#F8F9FA] relative border-t border-[#E9ECEF] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] text-[#0090FF] text-[10px] font-black uppercase tracking-widest shadow-sm mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Suporte Estratégico
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Frequentes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Questions List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {FAQV4s.map((FAQV4, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div key={idx} className="flex flex-col gap-3">
                  <button
                    onClick={() => setActiveIndex(isActive ? null : idx)}
                    className={`w-full text-left px-6 py-5 rounded-[24px] transition-all duration-500 flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] shadow-2xl'
                        : 'bg-white border border-[#E9ECEF] hover:border-[#0090FF]'
                    }`}
                  >
                    <span className={`text-sm md:text-base font-bold transition-colors duration-500 pr-5 ${
                      isActive ? 'text-white' : 'text-[#4A4A4A] group-hover:text-[#1A1A1A]'
                    }`}>
                      {FAQV4.question}
                    </span>
                    <ArrowRight className={`hidden md:block w-5 h-5 shrink-0 transition-all duration-500 ${
                      isActive ? 'text-[#0090FF] translate-x-1' : 'text-[#888888] opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                    }`} />
                    <ChevronDown className={`md:hidden w-5 h-5 shrink-0 transition-transform duration-500 ${
                      isActive ? 'text-white rotate-180' : 'text-[#888888]'
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="p-6 bg-white rounded-[24px] border border-[#E9ECEF] shadow-lg">
                          <p className="text-[#4A4A4A] leading-relaxed text-base font-medium italic">
                            {FAQV4.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Answer Display (SaaS Cockpit style) */}
          <div className="hidden lg:flex lg:col-span-7 lg:sticky lg:top-24">
            <div className="glass-card rounded-[40px] shadow-[var(--sh-deep)] overflow-hidden flex flex-col min-h-[500px] w-full border-white">
              <div className="px-8 py-6 border-b border-[#E9ECEF]/50 bg-white/50 flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0090FF] flex items-center justify-center shadow-lg animate-pulse">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-black text-lg tracking-tight">Closer Digital AI</h3>
                  <p className="text-[#0090FF] text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0090FF]"></span>
                    Análise em tempo real
                  </p>
                </div>
              </div>

              <div className="flex-1 p-10 flex flex-col gap-10 bg-gradient-to-br from-[#F8F9FA] to-white">
                {activeIndex !== null ? (
                  <>
                    <motion.div
                      key={`q-${activeIndex}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="self-end max-w-[85%]"
                    >
                      <div className="bg-[#1A1A1A] text-white text-base p-5 rounded-[24px] rounded-tr-none shadow-xl font-medium">
                        {FAQV4s[activeIndex].question}
                      </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                      {isTyping ? (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="self-start glass-card p-4 rounded-2xl rounded-tl-none flex items-center gap-2"
                        >
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-[#0090FF] rounded-full" />
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-[#0090FF] rounded-full" />
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-[#0090FF] rounded-full" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`a-${activeIndex}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="self-start max-w-[90%]"
                        >
                          <div className="text-[#4A4A4A] text-lg leading-relaxed font-bold italic border-l-4 border-[#0090FF] pl-8">
                            {FAQV4s[activeIndex].answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-[#888888] gap-4">
                    <Bot className="w-12 h-12 opacity-20" />
                    <p className="font-black text-xs uppercase tracking-widest">Aguardando interação...</p>
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
