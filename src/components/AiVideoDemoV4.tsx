import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Database, Target, Calendar, Sparkles,
  MessageSquare, Bot, CheckCircle2, Circle, Loader2, Smartphone,
} from 'lucide-react';
import ConfirmationChatWidgetV4 from './ConfirmationChatWidgetV4';
import { ScrollIndicator } from './ScrollIndicator';

const workflowCards = [
  {
    id: 'leads', icon: MessageSquare, title: 'Análise de Leads',
    badge: 'Motor NLP',
    description: 'Processamento de linguagem natural para extrair intenção de compra em milissegundos.',
    textColor: 'text-[#0090FF]', iconHover: 'group-hover:text-[#0090FF]',
    bgGlow: 'bg-[#0090FF]/20', gradient: 'from-[#0090FF]/5 to-transparent',
    borderHover: 'hover:border-[#0090FF]/30', glow: 'hover:shadow-[0_8px_24px_rgba(0,144,255,0.15)]'
  },
  {
    id: 'qualify', icon: Target, title: 'Qualificação IA',
    badge: 'Pontuação Inteligente',
    description: 'Filtro inteligente de objeções e cálculo de probabilidade de fechamento em tempo real.',
    textColor: 'text-[#00D1FF]', iconHover: 'group-hover:text-[#00D1FF]',
    bgGlow: 'bg-[#0090FF]/20', gradient: 'from-[#0090FF]/5 to-transparent',
    borderHover: 'hover:border-[#0090FF]/30', glow: 'hover:shadow-[0_8px_24px_rgba(0,144,255,0.15)]'
  },
  {
    id: 'crm', icon: Database, title: 'Gestão de CRM',
    badge: 'Sinc. Automática',
    description: 'Sincronização bidirecional. Atualiza funil, tags e histórico sem nenhum toque humano.',
    textColor: 'text-[#0090FF]', iconHover: 'group-hover:text-[#0090FF]',
    bgGlow: 'bg-[#0090FF]/20', gradient: 'from-[#0090FF]/5 to-transparent',
    borderHover: 'hover:border-[#0090FF]/30', glow: 'hover:shadow-[0_8px_24px_rgba(0,144,255,0.15)]'
  },
  {
    id: 'calendar', icon: Calendar, title: 'Agendamentos',
    badge: 'Agenda Inteligente',
    description: 'Confirmação de consultas e marcação direto na agenda da clínica. Zero faltas.',
    textColor: 'text-[#1A1A1A]', iconHover: 'group-hover:text-[#0090FF]',
    bgGlow: 'bg-[#0090FF]/20', gradient: 'from-[#0090FF]/5 to-transparent',
    borderHover: 'hover:border-[#0090FF]/30', glow: 'hover:shadow-[0_8px_24px_rgba(0,144,255,0.15)]'
  },
];

const tasks = [
  'Lead capturado do anúncio de Invisalign',
  'Qualificando: queixa, urgência e verba',
  'Consulta agendada na agenda da clínica',
  'Confirmação enviada 24h antes (áudio)',
  'Paciente confirmou presença ✅'
];


export function AiVideoDemoV4() {
  const [activeTab, setActiveTab] = useState<'chat' | 'workflow'>('workflow');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (activeTab === 'workflow') {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(p => (p < tasks.length ? p + 1 : 0));
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Dois Planos. Um Resultado.
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-tight">
                Da captação à confirmação de consulta.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Sem faltas. Sem depender de SDR.</span>
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Veja como a Intalky AI qualifica o lead, agenda a consulta e ainda confirma a presença — <strong className="text-[#1A1A1A]">tudo automaticamente</strong>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] flex items-center justify-center shrink-0 group-hover:border-[#0090FF]/50 group-hover:bg-[#0090FF]/10 transition-colors duration-300 shadow-[var(--sh)]">
                  <Database className="w-6 h-6 text-[#0090FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#0090FF] transition-colors duration-300">Confirmação Inteligente</h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    A IA envia áudios de confirmação, detecta não-respostas e reengaja proativamente. Redução de faltas de até 70%.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF] flex items-center justify-center shrink-0 group-hover:border-[#0090FF]/50 group-hover:bg-[#0090FF]/10 transition-colors duration-300 shadow-[var(--sh)]">
                  <Target className="w-6 h-6 text-[#0090FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#0090FF] transition-colors duration-300">SDR Digital Permanente</h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    Treinada com os 7 Pilares da Persuasão. Atende às 23h, não pede aumento e nunca pede demissão.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <div className="relative h-[700px] md:h-[540px] bg-white rounded-2xl border border-[#E9ECEF] shadow-[0_8px_40px_rgba(0,0,0,0.1)] flex flex-col">

              {/* Window Controls & Toggle Header */}
              <div className="flex flex-col border-b border-[#E9ECEF] bg-[#F8F9FA] rounded-t-2xl">
                <div className="flex items-center px-4 py-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <div className="ml-auto flex items-center gap-2 text-[10px] text-emerald-600 font-mono uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Sistema Online
                  </div>
                </div>

                <div className="flex justify-center pb-4">
                  <div className="bg-[#F1F3F5] p-1 rounded-xl flex gap-1 border border-[#E9ECEF]">
                    <button
                      onClick={() => setActiveTab('workflow')}
                      className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'workflow'
                          ? 'bg-white text-[#1A1A1A] shadow-[var(--sh)] border border-[#E9ECEF]'
                          : 'text-[#888888] hover:text-[#4A4A4A] hover:bg-white/50'
                      }`}
                    >
                      <Bot className="w-4 h-4" />
                      Automação
                    </button>
                    <button
                      onClick={() => setActiveTab('chat')}
                      className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'chat'
                          ? 'bg-white text-[#1A1A1A] shadow-[var(--sh)] border border-[#E9ECEF]'
                          : 'text-[#888888] hover:text-[#4A4A4A] hover:bg-white/50'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat ao Vivo
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative p-4 md:p-6 bg-[#F8F9FA] rounded-b-2xl overflow-y-auto md:overflow-visible">
                <AnimatePresence mode="wait">
                  {activeTab === 'workflow' ? (
                    <motion.div
                      key="workflow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full relative flex flex-col md:flex-row gap-4 md:gap-6"
                    >
                      {/* Left: Folders Grid */}
                      <div className="grid grid-cols-2 gap-4 w-full md:w-[240px] h-fit shrink-0">
                        {workflowCards.map((card, i) => (
                          <div
                            key={i}
                            className={`group relative bg-white border border-[#E9ECEF] p-4 rounded-2xl transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-3 aspect-square hover:z-50 hover:scale-105 ${card.borderHover} ${card.glow}`}
                          >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative p-3 rounded-full bg-[#F8F9FA] border border-[#E9ECEF] group-hover:scale-110 transition-transform duration-500 z-10">
                              <div className={`absolute inset-0 rounded-full ${card.bgGlow} blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                              <card.icon className={`relative w-6 h-6 text-[#888888] ${card.iconHover} transition-colors duration-500 z-10`} />
                            </div>
                            <span className="relative text-[11px] text-[#4A4A4A] group-hover:text-[#1A1A1A] font-medium text-center leading-tight z-10 transition-colors duration-500">
                              {card.title}
                            </span>

                            {/* Rich Tooltip */}
                            <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-56 bg-white border border-[#E9ECEF] p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.1)] z-[100] pointer-events-none scale-95 group-hover:scale-100 origin-bottom">
                              <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-30 rounded-xl`} />
                              <div className="relative z-10 flex flex-col gap-2">
                                <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${card.textColor}`}>
                                  <Sparkles className="w-3 h-3" />
                                  {card.badge}
                                </div>
                                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-[#E9ECEF] transform rotate-45" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Floating Panels */}
                      <div className="flex-1 relative flex flex-col gap-4 min-h-[300px]">

                        {/* Progress List */}
                        <div className="flex-1 bg-white border border-[#E9ECEF] rounded-2xl p-5 shadow-[var(--sh)] flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">Progresso da IA</h4>
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded border border-emerald-500/20">
                              {Math.round((progress / tasks.length) * 100)}%
                            </span>
                          </div>
                          <div className="space-y-4 flex-1">
                            {tasks.map((task, i) => {
                              const isActive = progress === i;
                              const isDone = progress > i;
                              return (
                                <div key={i} className="flex items-start gap-3 relative">
                                  {i !== tasks.length - 1 && (
                                    <div className={`absolute left-2 top-5 bottom-[-16px] w-px ${isDone ? 'bg-emerald-500/50' : 'bg-[#E9ECEF]'}`} />
                                  )}

                                  <div className="relative z-10 bg-white">
                                    {isDone ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    ) : isActive ? (
                                      <Loader2 className="w-4 h-4 text-[#0090FF] animate-spin shrink-0 mt-0.5" />
                                    ) : (
                                      <Circle className="w-4 h-4 text-[#E9ECEF] shrink-0 mt-0.5" />
                                    )}
                                  </div>

                                  <span className={`text-xs leading-tight transition-all duration-300 ${
                                    isDone ? 'text-[#888888] line-through' :
                                    isActive ? 'text-[#0090FF] font-medium' :
                                    'text-[#E9ECEF]'
                                  }`}>
                                    {task}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Context Sidebar */}
                        <div className="bg-white border border-[#E9ECEF] rounded-2xl p-4 shadow-[var(--sh)]">
                          <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-3">Contexto Integrado</h4>
                          <div className="flex gap-3">
                            <div className="flex-1 bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-colors cursor-pointer group">
                              <Smartphone className="w-4 h-4 text-[#888888] group-hover:text-emerald-500 transition-colors" />
                              <span className="text-[9px] text-[#888888] group-hover:text-[#4A4A4A]">WhatsApp</span>
                            </div>
                            <div className="flex-1 bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:border-[#0090FF]/30 hover:bg-[#0090FF]/5 transition-colors cursor-pointer group">
                              <Database className="w-4 h-4 text-[#888888] group-hover:text-[#0090FF] transition-colors" />
                              <span className="text-[9px] text-[#888888] group-hover:text-[#4A4A4A]">CRM</span>
                            </div>
                            <div className="flex-1 bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors cursor-pointer group">
                              <Calendar className="w-4 h-4 text-[#888888] group-hover:text-violet-500 transition-colors" />
                              <span className="text-[9px] text-[#888888] group-hover:text-[#4A4A4A]">Agenda</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <ConfirmationChatWidgetV4 />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-12 flex justify-center">
          <ScrollIndicator text="Veja o passo a passo" />
        </div>
      </div>
    </section>
  );
}
