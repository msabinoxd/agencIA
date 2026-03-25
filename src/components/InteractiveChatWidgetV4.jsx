import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const FLOWS = [
    {
        id: 'urgencia',
        triggers: ['prazo', 'deadline', 'urgente', 'rápido', 'logo', 'quanto antes', 'essa semana'],
        responses: [
            'Ótimo — você me disse isso na hora certa! ⚡ Com esse prazo, consigo mapear seu processo hoje mesmo e mostrar onde estão os gargalos antes de você perder mais oportunidades.',
            'Para garantir que vamos atacar o ponto certo, preciso de uma conversa rápida ainda essa semana. Você prefere manhã ou tarde?',
        ],
    },
    {
        id: 'preco',
        triggers: ['custa', 'preço', 'valor', 'quanto', 'caro', 'investimento', 'parcela', 'financiamento'],
        responses: [
            'Entendo que o investimento é uma parte importante da decisão! Mas antes de falar em valores, preciso entender o seu caso — cada operação é diferente e o custo varia muito. 😊',
            'Me conta: qual é o maior gargalo do seu processo comercial hoje? Isso me ajuda a mostrar o que faz mais sentido — às vezes a solução ideal é bem mais acessível do que as pessoas imaginam.',
        ],
    },
    {
        id: 'medo',
        triggers: ['medo', 'risco', 'funciona', 'resultado', 'garantia', 'prova', 'confiança', 'dúvida'],
        responses: [
            'Essa preocupação é totalmente válida! Por isso trabalhamos com diagnóstico antes de qualquer proposta — você vê exatamente o que vai mudar, com números reais do seu negócio. 🙌',
            'A maioria dos clientes que chegam com dúvida saem da primeira conversa com clareza total. Quer marcar essa sessão diagnóstico gratuita para tirar todas as suas dúvidas?',
        ],
    },
    {
        id: 'comparando',
        triggers: ['outra', 'empresa', 'pesquisei', 'comparando', 'concorrente', 'outras', 'pesquisando', 'vendo', 'agência'],
        responses: [
            'Faz todo sentido pesquisar e comparar! É um investimento importante e você merece fazer a escolha certa. 👍',
            'O que a maioria percebe quando compara: o diferencial não está só no preço, mas em quem vai estruturar o processo do zero ao resultado. Que tal uma sessão gratuita para você conhecer nossa metodologia de perto?',
        ],
    },
    {
        id: 'tempo',
        triggers: ['tempo', 'demora', 'quanto tempo', 'rapidez', 'quando', 'prazo de resultado'],
        responses: [
            'Boa pergunta! Depende muito da maturidade atual do seu processo comercial. Em geral, os primeiros resultados aparecem em 2 a 4 semanas após a implantação.',
            'Para saber o prazo real do SEU caso, preciso entender onde você está hoje. Me conta: o maior problema é atrair pacientes, atendimento ou fechamento?',
        ],
    },
    {
        id: 'agendamento',
        triggers: ['sim', 'quero', 'agendar', 'marcar', 'conversa', 'reunião', 'ok', 'aceito', 'vamos', 'bora', 'pode'],
        responses: [
            'Perfeito! Tenho horários disponíveis amanhã às 14h ou sexta-feira às 10h. Qual fica melhor para você? 📅',
        ],
    },
    {
        id: 'confirmacao',
        triggers: ['amanhã', 'sexta', '14h', '10h', 'segunda', 'terça', 'quarta', 'quinta', 'manhã', 'tarde', 'qualquer'],
        responses: [
            'Reunião confirmada! ✅ Vou te enviar um áudio de confirmação agora mesmo. Até lá — qualquer dúvida, estou aqui. 😊',
        ],
        after: 'system',
    },
    {
        id: 'lead',
        triggers: ['lead', 'cliente', 'venda', 'conversão', 'funil', 'tráfego', 'anúncio', 'perder'],
        responses: [
            'Entendi! Esse é exatamente o tipo de problema que resolvemos — paciente que chega mas não fecha costuma ser sinal de gargalo no atendimento ou no processo de filtragem. 🎯',
            'Para mapear onde está o seu gargalo específico, a melhor forma é uma sessão diagnóstico de 20 minutos. Posso te encaixar ainda essa semana. O que acha?',
        ],
    },
    {
        id: 'default',
        triggers: [],
        responses: [
            'Entendi! Me conta um pouco mais sobre o que está buscando — assim consigo te ajudar da melhor forma. 😊',
            'Você já tentou alguma solução antes para esse problema, ou seria a primeira vez?',
        ],
    },
]

const INITIAL_MESSAGES = [
    {
        type: 'ai',
        text: 'Olá! Vi que você está buscando otimizar seu processo comercial. O que te motivou a pesquisar hoje? 😊',
    },
]

const CHIPS = [
    { label: 'Quero resultados rápidos', msg: 'Preciso de resultados rápidos, é urgente' },
    { label: 'Quanto custa?', msg: 'Quanto custa a solução?' },
    { label: 'Já tentei outras soluções', msg: 'Já pesquisei em outras empresas' },
    { label: 'Como funciona na prática?', msg: 'Tenho dúvidas se realmente funciona' },
]

export default function InteractiveChatWidgetV4() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES)
    const [inputVal, setInputVal] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isResponding, setIsResponding] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const messagesEndRef = useRef(null)
    const messagesContainerRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
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

        setMessages(prev => [...prev, { type: 'user', text: text.trim() }])

        const flow = detectFlow(text)
        const replies = flow.responses

        await new Promise(r => setTimeout(r, 600))
        setIsTyping(true)
        await new Promise(r => setTimeout(r, 900 + Math.random() * 500))
        setIsTyping(false)

        setMessages(prev => [...prev, { type: 'ai', text: replies[0] }])

        if (replies[1]) {
            await new Promise(r => setTimeout(r, 500))
            setIsTyping(true)
            await new Promise(r => setTimeout(r, 800 + Math.random() * 400))
            setIsTyping(false)
            setMessages(prev => [...prev, { type: 'ai', text: replies[1] }])
        }

        if (flow.after === 'system') {
            await new Promise(r => setTimeout(r, 600))
            setShowSuccess(true)
            setMessages(prev => [...prev, { type: 'system' }])
        }

        setIsResponding(false)
    }

    function handleChip(msg) {
        if (isResponding) return
        sendMessage(msg)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage(inputVal)
        }
    }

    return (
        <div className="relative rounded-[32px] bg-white border border-[#E9ECEF] p-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-visible">

            <div className="bg-[#F8F9FA] rounded-[24px] p-3 mb-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#0090FF]/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#0090FF]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7H3a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13c-.83 0-1.5.67-1.5 1.5S6.67 16 7.5 16s1.5-.67 1.5-1.5S8.33 13 7.5 13zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[#1A1A1A] font-bold text-sm">Intalky AI</p>
                            <p className="text-[#0090FF] text-xs font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse inline-block" />
                                Atendendo Agora
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl px-2.5 py-1.5 border border-[#E9ECEF] shadow-sm flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-[#0090FF]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                        </svg>
                        <div>
                            <p className="text-[10px] font-bold text-[#1A1A1A] leading-none">Resposta: 3s</p>
                            <p className="text-[9px] text-[#9CA3AF] leading-none mt-0.5">VENDEDOR DIGITAL</p>
                        </div>
                    </div>
                </div>

                <div ref={messagesContainerRef} className="flex flex-col gap-2 h-[180px] lg:h-[380px] overflow-y-auto pr-1 scroll-smooth">
                    <AnimatePresence initial={false}>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.type === 'system' ? (
                                    <div className="bg-[#0090FF]/8 border border-[#0090FF]/20 text-[#1A1A1A] p-3 rounded-2xl rounded-tl-none max-w-[88%] text-xs self-start w-full">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#22C55E]">✅</span>
                                            <span className="font-medium">Reunião agendada · Confirmação enviada</span>
                                        </div>
                                        <p className="text-[#6B7280] text-[10px] mt-1">Taxa de comparecimento: 94% · Amanhã às 14h</p>
                                    </div>
                                ) : msg.type === 'ai' ? (
                                    <div className="bg-white text-[#4A4A4A] p-3 rounded-2xl rounded-tl-none max-w-[88%] text-xs self-start shadow-[var(--sh)] border border-[#E9ECEF] leading-relaxed">
                                        {msg.text}
                                    </div>
                                ) : (
                                    <div className="bg-gradient-to-br from-[#0090FF] to-[#00D1FF] text-white p-3 rounded-2xl rounded-tr-none max-w-[88%] text-xs self-end shadow-[0_4px_14px_rgba(0,144,255,0.25)] leading-relaxed font-semibold">
                                        {msg.text}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="bg-white border border-[#E9ECEF] p-3 rounded-2xl rounded-tl-none shadow-[var(--sh)] flex items-center gap-1">
                                {[0, 1, 2].map(i => (
                                    <span
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-[#9CA3AF]"
                                        style={{ animation: `bounce 1.2s infinite ${i * 0.2}s` }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            <div className="flex items-center gap-2 px-1 pb-1">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isResponding}
                    placeholder="Responda como o paciente..."
                    className="flex-1 text-xs text-[#4A4A4A] bg-[#F8F9FA] border border-[#E9ECEF] rounded-xl px-3 py-2 outline-none focus:border-[#0090FF] focus:bg-white transition-colors placeholder:text-[#C1C9D2] disabled:opacity-50"
                />
                <button
                    onClick={() => sendMessage(inputVal)}
                    disabled={isResponding || !inputVal.trim()}
                    className="w-8 h-8 rounded-full bg-[#0090FF] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#007EE0] transition-colors flex-shrink-0"
                >
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-wrap gap-1.5 px-1 pb-2 mt-1">
                <p className="w-full text-[9px] text-[#9CA3AF] uppercase tracking-wider font-semibold mb-0.5">
                    Simule um paciente:
                </p>
                {CHIPS.map(chip => (
                    <button
                        key={chip.label}
                        onClick={() => handleChip(chip.msg)}
                        disabled={isResponding}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] hover:bg-[#0090FF] hover:text-white hover:border-[#0090FF] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        {chip.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
