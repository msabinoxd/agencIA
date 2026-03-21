import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FLOWS = [
  {
    id: 'confirmacao_positiva',
    triggers: ['sim','confirmo','confirmar','estarei','vou','ok','certo','claro',
               'tá bom','tá certo','pode','com certeza','lógico','ótimo','perfeito'],
    responses: [
      'Perfeito! ✅ Já enviei o endereço completo da clínica e uma dica de estacionamento para o seu WhatsApp.',
      'Te esperamos amanhã às 14h. Se precisar remarcar, é só me avisar com antecedência — tenho outros horários disponíveis! 😊',
    ],
    after: 'system_success',
  },
  {
    id: 'confirmacao_negativa',
    triggers: ['não','nao','cancelar','cancela','remarcar','não posso','nao posso',
               'impossível','ocupado','ocupada','esqueci','outro dia'],
    responses: [
      'Sem problema! Vamos remarcar. 📅 Tenho disponibilidade esta semana na quinta às 10h ou sexta às 16h. Qual fica melhor?',
    ],
    after: 'rescheduled',
  },
  {
    id: 'duvida_local',
    triggers: ['onde','endereço','localização','como chego','mapa','bairro','rua'],
    responses: [
      'Claro! A clínica fica na Rua das Flores, 142 — bem próximo ao metrô. Vou te enviar o pin no WhatsApp agora. 📍',
      'Confirma sua presença para amanhã às 14h e já te mando o trajeto completo! 😊',
    ],
  },
  {
    id: 'duvida_horario',
    triggers: ['horário','horas','que horas','hora','quando','atraso','atrasada','atrasado'],
    responses: [
      'Sua consulta está marcada para amanhã às 14h. Tente chegar 5 minutinhos antes para a gente começar no horário! ⏰',
      'Você confirma a presença? 😊',
    ],
  },
  {
    id: 'duvida_preparo',
    triggers: ['precisa','preparar','jejum','trazer','documento','levar','antes'],
    responses: [
      'Não precisa de nenhum preparo especial! Apenas traga um documento com foto. 📋',
      'A avaliação é tranquila e dura cerca de 30 minutos. Você confirma amanhã às 14h? 😊',
    ],
  },
  {
    id: 'default',
    triggers: [],
    responses: [
      'Entendi! Mas não esqueça — sua consulta é amanhã às 14h na Clínica Sorriso. 😊',
      'Você confirma sua presença?',
    ],
  },
]

const INITIAL_MSG = {
  type: 'ai',
  text: 'Oi! Sua consulta é amanhã às 14h na Clínica Sorriso. Você confirma a presença? 😊',
}

const CHIPS = [
  { label: '✅ Confirmo!', msg: 'Sim! Confirmo.' },
  { label: '📍 Onde fica?', msg: 'Qual o endereço?' },
  { label: '⏰ Que horas?', msg: 'Que horas é mesmo?' },
  { label: '❌ Preciso remarcar', msg: 'Não posso ir amanhã' },
]

export default function ConfirmationChatWidget() {
  const [messages, setMessages] = useState([INITIAL_MSG])
  const [inputVal, setInputVal] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isResponding, setIsResponding] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  function detectFlow(text) {
    const lower = text.toLowerCase()
    for (const flow of FLOWS) {
      if (flow.id === 'default') continue
      if (flow.triggers.some(t => lower.includes(t))) return flow
    }
    return FLOWS.find(f => f.id === 'default')
  }

  async function sendMessage(text) {
    if (!text.trim() || isResponding) return
    setIsResponding(true)
    setInputVal('')

    setMessages(prev => [...prev, { type: 'patient', text: text.trim() }])

    const flow = detectFlow(text)

    await new Promise(r => setTimeout(r, 500))
    setIsTyping(true)
    await new Promise(r => setTimeout(r, 800 + Math.random() * 400))
    setIsTyping(false)

    setMessages(prev => [...prev, { type: 'ai', text: flow.responses[0] }])

    if (flow.responses[1]) {
      await new Promise(r => setTimeout(r, 400))
      setIsTyping(true)
      await new Promise(r => setTimeout(r, 700))
      setIsTyping(false)
      setMessages(prev => [...prev, { type: 'ai', text: flow.responses[1] }])
    }

    if (flow.after === 'system_success') {
      await new Promise(r => setTimeout(r, 500))
      setMessages(prev => [...prev, {
        type: 'system',
        text: '🔔 [Sistema] No-show evitado. Taxa de comparecimento: 94%.',
        variant: 'success'
      }])
    }

    if (flow.after === 'rescheduled') {
      await new Promise(r => setTimeout(r, 400))
      setMessages(prev => [...prev, {
        type: 'system',
        text: '📅 [Sistema] Consulta reagendada automaticamente. CRM atualizado.',
        variant: 'info'
      }])
    }

    setIsResponding(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(inputVal)
    }
  }

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl border border-[#E9ECEF] overflow-hidden relative">

      {/* Chat Header */}
      <div className="bg-[#F8F9FA] px-4 py-3 border-b border-[#E9ECEF] flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0090FF] to-[#00D1FF] flex items-center justify-center shadow-[0_4px_10px_rgba(0,144,255,0.3)]">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H3a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13c-.83 0-1.5.67-1.5 1.5S6.67 16 7.5 16s1.5-.67 1.5-1.5S8.33 13 7.5 13zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
          </svg>
        </div>
        <div>
          <p className="text-[#1A1A1A] font-medium text-xs">Assistente Intalky</p>
          <p className="text-[#0090FF] text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse inline-block" />
            Online
          </p>
        </div>
      </div>

      {/* Mensagens */}
      <div ref={containerRef} className="flex-1 overflow-y-auto flex flex-col gap-2.5 p-4 scroll-smooth bg-[#F8F9FA]">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.type === 'patient' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'ai' && (
                <div className="max-w-[85%] text-sm shadow-[var(--sh)] bg-gradient-to-br from-[#0090FF] to-[#00D1FF] text-white p-3.5 rounded-2xl rounded-tl-sm self-start shadow-[0_4px_14px_rgba(0,144,255,0.25)]">
                  {msg.text}
                </div>
              )}
              {msg.type === 'patient' && (
                <div className="max-w-[85%] text-sm shadow-[var(--sh)] bg-white text-[#4A4A4A] p-3.5 rounded-2xl rounded-tr-sm self-end border border-[#E9ECEF]">
                  {msg.text}
                </div>
              )}
              {msg.type === 'system' && (
                <div className={`max-w-[85%] text-sm p-3.5 rounded-2xl rounded-tl-sm self-start w-full ${
                  msg.variant === 'success'
                    ? 'bg-[#F0FDF4] border border-[#86EFAC] text-[#15803D]'
                    : 'bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1]'
                }`}>
                  {msg.text}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-br from-[#0090FF] to-[#00D1FF] p-3.5 rounded-2xl rounded-tl-sm flex items-center gap-1">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/70"
                  style={{ animation: `bounce 1.2s infinite ${i * 0.2}s` }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Chips de resposta rápida */}
      <div className="px-4 pb-2 pt-2 flex flex-wrap gap-1.5 border-t border-[#F8F9FA] bg-white">
        {CHIPS.map(chip => (
          <button
            key={chip.label}
            onClick={() => sendMessage(chip.msg)}
            disabled={isResponding}
            className="text-[10px] px-2.5 py-1 rounded-full bg-[#F8F9FA] border border-[#E9ECEF] text-[#6B7280] hover:bg-[#0090FF] hover:text-white hover:border-[#0090FF] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-[#E9ECEF] bg-white shrink-0">
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isResponding}
          placeholder="Digite sua mensagem..."
          className="flex-1 text-sm text-[#4A4A4A] bg-transparent outline-none placeholder:text-[#C1C9D2] disabled:opacity-50"
        />
        <button
          onClick={() => sendMessage(inputVal)}
          disabled={isResponding || !inputVal.trim()}
          className="w-7 h-7 rounded-full bg-[#0090FF] flex items-center justify-center disabled:opacity-30 hover:bg-[#007EE0] transition-colors flex-shrink-0"
        >
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
