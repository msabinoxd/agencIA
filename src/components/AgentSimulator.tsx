import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, User, Send, X, Activity, Cpu, Database, 
  ShieldCheck, TerminalSquare, Network, LayoutDashboard, 
  MessageSquare, Users, Settings, Bell, Search,
  CheckCircle2, Clock, Sparkles, BarChart3
} from 'lucide-react';
import { CONFIG } from '../config';

interface Message {
  id: string;
  type: 'user' | 'agent';
  text: string;
  timestamp: string;
}

interface AgentSimulatorProps {
  onClose: () => void;
}

export function AgentSimulator({ onClose }: AgentSimulatorProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'agent',
      text: `Olá! Sou o Agente IA da ${CONFIG.brand.name}. Detectei seu interesse em automação. Como posso ajudar a escalar sua operação hoje?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [leadScore, setLeadScore] = useState(35);
  const [extractedData, setExtractedData] = useState<{ label: string; value: string }[]>([]);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Neural network visual effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nodes = Array.from({ length: 8 }, () => Math.floor(Math.random() * 16));
      setActiveNodes(nodes);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const handlePromptClick = (text: string) => {
    if (isTyping) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);
    
    // Simulate data extraction and scoring
    setTimeout(() => {
      setLeadScore(prev => Math.min(prev + 25, 98));
      
      if (text.includes('preço')) {
        setExtractedData(prev => [...prev, { label: 'Intenção', value: 'Pricing' }]);
      } else if (text.includes('CRM')) {
        setExtractedData(prev => [...prev, { label: 'Dúvida Técnica', value: 'Integração CRM' }]);
      } else {
        setExtractedData(prev => [...prev, { label: 'Interesse', value: 'Agendamento' }]);
      }
    }, 1000);

    setTimeout(() => {
      let responseText = '';
      if (text.includes('preço')) {
        responseText = 'Nossos planos são personalizados de acordo com o volume de leads da sua operação. Posso agendar uma call rápida de 15min com nosso especialista para te passar um orçamento exato. Qual o melhor horário para você?';
      } else if (text.includes('CRM')) {
        responseText = 'Sim! Integramos nativamente com RD Station, HubSpot, ActiveCampaign, Kommo e vários outros via Webhook/API. A IA atualiza os cards do CRM em tempo real, movendo o lead de etapa automaticamente.';
      } else {
        responseText = 'Perfeito. Nossa IA consegue qualificar o lead, quebrar objeções e fazer o agendamento direto na sua agenda. Quer ver como funciona na prática para o seu nicho?';
      }

      const newAgentMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, newAgentMsg]);
      setIsTyping(false);
    }, 2500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#0B0F19] text-slate-300 flex overflow-hidden font-sans selection:bg-blue-500/30"
    >
      {/* Global Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-20 border-r border-slate-800/60 bg-[#0B0F19]/90 backdrop-blur-xl flex flex-col items-center py-6 gap-8 z-20 relative shadow-[4px_0_24px_rgba(0,0,0,0.4)]">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <nav className="flex flex-col gap-6 w-full items-center">
          {[LayoutDashboard, MessageSquare, Users, BarChart3, Settings].map((Icon, i) => (
            <button key={i} className={`p-3 rounded-xl transition-all duration-300 relative group ${i === 1 ? 'bg-blue-500/10 text-blue-400' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'}`}>
              <Icon className="w-6 h-6" />
              {i === 1 && (
                <motion.div layoutId="active-nav" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              )}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col relative z-10">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800/60 bg-[#0B0F19]/80 backdrop-blur-md flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              Omnia AI Workspace
            </h1>
            <div className="h-4 w-px bg-slate-700" />
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Agente Online
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Buscar atendimento..." className="bg-[#151C2C] border border-slate-800 rounded-full py-1.5 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 w-64 transition-all" />
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0B0F19]" />
            </button>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2">
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Main Workspace */}
        <main className="flex-1 flex overflow-hidden">
          
          {/* Left Panel: Chat List (Mock) */}
          <div className="w-80 border-r border-slate-800/60 bg-[#0F1423]/80 backdrop-blur-sm flex flex-col">
            <div className="p-4 border-b border-slate-800/60 flex gap-2">
              <button className="flex-1 py-1.5 text-sm font-medium text-blue-400 border-b-2 border-blue-500">Atendendo</button>
              <button className="flex-1 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-300">Aguardando</button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {/* Active Chat Item */}
              <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 cursor-pointer relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="flex justify-between items-start mb-1 pl-2">
                  <span className="font-semibold text-slate-200 text-sm">Visitante LP</span>
                  <span className="text-xs text-blue-400">Agora</span>
                </div>
                <p className="text-xs text-slate-400 truncate pl-2">Simulação interativa em andamento...</p>
                <div className="mt-2 pl-2 flex gap-1.5">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/20">IA Ativa</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">Qualificando</span>
                </div>
              </div>
              
              {/* Mock Inactive Chats */}
              {[
                { name: 'Danilo Oliveira', time: '10:07', msg: 'Pode me mandar a apresentação?' },
                { name: 'Edileuza', time: '09:26', msg: 'As campanhas já estão rodando.' },
                { name: 'Lead #4092', time: 'Ontem', msg: 'Qual o valor da implantação?' }
              ].map((chat, i) => (
                <div key={i} className="p-3 rounded-xl hover:bg-slate-800/50 border border-transparent cursor-pointer transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-slate-300 text-sm">{chat.name}</span>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{chat.msg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Panel: Active Chat */}
          <div className="flex-1 flex flex-col relative bg-[#0B0F19]">
            {/* Chat Header */}
            <div className="h-14 border-b border-slate-800/60 flex items-center px-6 bg-[#0F1423]/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-200">Visitante LP</h2>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 relative">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex gap-4 max-w-3xl ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border mt-1 ${
                      msg.type === 'agent' 
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                        : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}>
                      {msg.type === 'agent' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    
                    <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-medium text-slate-500">
                          {msg.type === 'agent' ? 'Agente IA' : 'Você'}
                        </span>
                        <span className="text-[10px] text-slate-600">{msg.timestamp}</span>
                      </div>
                      <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                        msg.type === 'agent'
                          ? 'bg-[#151C2C] border border-slate-800 text-slate-200 rounded-tl-sm'
                          : 'bg-blue-600 text-white rounded-tr-sm shadow-blue-900/20'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4 max-w-3xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)] mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-[#151C2C] border border-slate-800 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2 h-[46px]">
                      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#0F1423] border-t border-slate-800/60">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    "Como funciona a integração com CRM?",
                    "Qual o preço da automação?",
                    "A IA consegue agendar reuniões?"
                  ].map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handlePromptClick(prompt)}
                      disabled={isTyping}
                      className="text-[11px] bg-[#151C2C] hover:bg-blue-500/10 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 px-3 py-1.5 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3" />
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="relative flex items-center bg-[#0B0F19] border border-slate-700 rounded-xl overflow-hidden focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all">
                  <input 
                    type="text"
                    disabled
                    placeholder="Selecione uma das opções acima para interagir..."
                    className="w-full bg-transparent py-3.5 pl-4 pr-12 text-sm text-slate-200 focus:outline-none disabled:opacity-50"
                  />
                  <button disabled className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:bg-slate-800 disabled:text-slate-500 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Intelligence & CRM Sync */}
          <div className="w-80 border-l border-slate-800/60 bg-[#0F1423]/80 backdrop-blur-sm flex flex-col p-5 overflow-y-auto gap-6">
            
            {/* Lead Score */}
            <div className="bg-[#0B0F19] border border-slate-800 rounded-xl p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-[11px] text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
                <Activity className="w-3.5 h-3.5 text-blue-400" /> Qualificação do Lead
              </h3>
              <div className="flex items-end justify-between mb-2">
                <span className="text-3xl font-bold text-white">{leadScore}</span>
                <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">/ 100</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${leadScore}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Atualizado em tempo real
              </p>
            </div>

            {/* Extracted Data */}
            <div>
              <h3 className="text-[11px] text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> Dados Extraídos
              </h3>
              <div className="space-y-2">
                <AnimatePresence>
                  {extractedData.length === 0 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-slate-500 italic p-3 bg-[#0B0F19] rounded-lg border border-slate-800 border-dashed">
                      Aguardando interações para extrair dados...
                    </motion.div>
                  ) : (
                    extractedData.map((data, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-2.5 bg-[#0B0F19] border border-slate-800 rounded-lg group hover:border-cyan-500/30 transition-colors"
                      >
                        <span className="text-xs text-slate-400">{data.label}</span>
                        <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {data.value}
                        </span>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Neural Processing */}
            <div>
              <h3 className="text-[11px] text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
                <Network className="w-3.5 h-3.5 text-violet-400" /> Processamento NLP
              </h3>
              <div className="bg-[#0B0F19] border border-slate-800 rounded-xl p-4">
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-6 rounded-[4px] border transition-all duration-300 ${
                        activeNodes.includes(i) 
                          ? 'bg-violet-500/30 border-violet-500/50 shadow-[0_0_8px_rgba(139,92,246,0.5)]' 
                          : 'bg-slate-800/50 border-slate-700/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500">Status da Rede</span>
                  <span className="text-violet-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" /> Ativa
                  </span>
                </div>
              </div>
            </div>

            {/* System Logs */}
            <div className="flex-1 flex flex-col min-h-[150px]">
              <h3 className="text-[11px] text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2 font-semibold">
                <TerminalSquare className="w-3.5 h-3.5 text-emerald-400" /> Terminal de Ações
              </h3>
              <div className="flex-1 bg-[#0B0F19] border border-slate-800 rounded-xl p-3 overflow-hidden relative font-mono text-[9px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19] z-10 pointer-events-none" />
                <div className="space-y-1.5 text-slate-500">
                  <div className="text-emerald-500/70">[{new Date().toLocaleTimeString()}] SYS_INIT: Agent ready.</div>
                  {messages.map((msg, i) => (
                    <div key={i} className="animate-fade-in-up">
                      <span className="text-blue-500/50">[{msg.timestamp}]</span> 
                      {msg.type === 'user' ? ' RECV: ' : ' SEND: '}
                      <span className="text-slate-400 truncate block">
                        {msg.text.substring(0, 30)}...
                      </span>
                      {msg.type === 'user' && (
                        <div className="pl-3 border-l border-slate-700 mt-1 ml-1 text-cyan-400/70">
                          ↳ Intent mapped. Triggering workflow...
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="animate-pulse text-blue-400">
                      <span className="text-blue-500/50">[{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]</span> 
                      {' '}GENERATING_RESPONSE...
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </motion.div>
  );
}
