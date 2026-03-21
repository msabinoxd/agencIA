import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// ─── FLUXOS DE RESPOSTA DA IA ─────────────────────────────────────────────────
// Cada entrada detecta palavras-chave e retorna respostas em sequência
// Simula os 7 Pilares da Persuasão: rapport, sondagem, implicação,
// ancoragem de valor, quebra de objeção e fechamento consultivo

const FLOWS = [
    {
        id: 'formatura',
        triggers: ['formatura', 'casamento', 'festa', 'evento', 'meses', 'prazo', 'data', 'urgente'],
        responses: [
            'Que ótimo — você me contou isso na hora certa! 🎓 Com 3 meses de antecedência dá para começar o Invisalign e já ver o resultado visível para o grande dia.',
            'Para garantir que o seu sorriso vai estar exatamente como você quer na formatura, preciso de uma avaliação ainda essa semana — a agenda costuma fechar rápido nessa época. Você prefere manhã ou tarde?',
        ],
    },
    {
        id: 'preco',
        triggers: ['custa', 'preço', 'valor', 'quanto', 'caro', 'investimento', 'parcela', 'financiamento'],
        responses: [
            'Entendo que o investimento é uma parte importante da decisão! But antes de falar em valores, preciso entender o seu caso — cada sorriso é único e o custo varia muito. 😊',
            'Me conta: o que mais te incomoda no seu sorriso hoje? Isso me ajuda a mostrar o que faz mais sentido para você — às vezes o tratamento ideal é bem mais acessível do que as pessoas imaginam.',
        ],
    },
    {
        id: 'dor',
        triggers: ['dor', 'medo', 'doer', 'machuca', 'anestesia', 'agulha', 'nervosa', 'nervoso', 'assustada'],
        responses: [
            'Essa preocupação é super comum e totalmente válida! O Invisalign é justamente o tratamento mais confortável que existe — sem bráquetes, sem arames, sem os desconfortos tradicionais. 🙌',
            'A maioria dos pacientes descreve como uma leve pressão nos primeiros dias, nada que atrapalhe a rotina. Quer agendar uma avaliação para você conhecer o processo pessoalmente e tirar todas as dúvidas?',
        ],
    },
    {
        id: 'comparando',
        triggers: ['outra', 'clínica', 'pesquisei', 'comparando', 'concorrente', 'outras', 'pesquisando', 'vendo'],
        responses: [
            'Faz todo sentido pesquisar e comparar! É um investimento importante e você merece fazer com segurança. 👍',
            'O que a maioria dos pacientes percebe quando compara: o diferencial não está só no preço, mas em quem vai acompanhar o seu caso do início ao fim. Que tal uma avaliação gratuita para você conhecer a nossa clínica pessoalmente?',
        ],
    },
    {
        id: 'tempo',
        triggers: ['tempo', 'demora', 'quanto tempo', 'rapidez', 'rápido', 'quando fica', 'prazo de tratamento'],
        responses: [
            'Boa pergunta! O Invisalign costuma ser mais rápido que o aparelho tradicional — dependendo do caso, pode ser de 6 a 18 meses.',
            'Para saber o prazo exato do SEU caso, preciso ver a sua arcada. Cada sorriso é diferente. Me conta: o que mais te incomoda hoje — alinhamento, espaçamento, ou rotação dos dentes?',
        ],
    },
    {
        id: 'agendamento',
        triggers: ['sim', 'quero', 'agendar', 'marcar', 'consulta', 'avaliação', 'ok', 'aceito', 'vamos', 'bora', 'pode'],
        responses: [
            'Perfeito! Tenho horários disponíveis amanhã às 14h ou sexta-feira às 10h. Qual fica melhor para você? 📅',
        ],
    },
    {
        id: 'confirmacao',
        triggers: ['amanhã', 'sexta', '14h', '10h', 'segunda', 'terça', 'quarta', 'quinta', 'manhã', 'tarde', 'qualquer'],
        responses: [
            'Consulta confirmada! ✅ Vou te enviar um áudio de confirmação agora mesmo. Até lá — qualquer dúvida, estou aqui. 😊',
        ],
        after: 'system',
    },
    {
        id: 'sorriso',
        triggers: ['sorriso', 'dente', 'alinhamento', 'espaço', 'torto', 'espaçado', 'separado'],
        responses: [
            'Entendi! Esse é exatamente o tipo de caso que o Invisalign resolve muito bem — e o resultado costuma ser impressionante. ✨',
            'Para eu te mostrar como ficaria o SEU sorriso, a melhor forma é uma avaliação rápida de 20 minutos. Posso te encaixar ainda essa semana. O que acha?',
        ],
    },
    {
        id: 'default',
        triggers: [],
        responses: [
            'Entendi! Me conta um pouco mais sobre o que está buscando — assim consigo te ajudar da melhor forma. 😊',
            'Você já chegou a fazer alguma avaliação antes, ou seria sua primeira vez?',
        ],
    },
]

// Mensagens iniciais que aparecem automaticamente ao carregar
const INITIAL_MESSAGES = [
    {
        type: 'ai',
        text: 'Olá! Vi que você veio do anúncio de Invisalign. O que te motivou a pesquisar hoje? 😊',
    },
]

// Chips de atalho — simulam o lead dizendo as frases mais comuns
const CHIPS = [
    { label: 'Formatura em 3 meses', msg: 'Tenho uma formatura em 3 meses' },
    { label: 'Quanto custa?', msg: 'Quanto custa o Invisalign?' },
    { label: 'Tenho medo de dor', msg: 'Tenho medo de sentir dor' },
    { label: 'Já pesquisei em outras', msg: 'Já pesquisei em outras clínicas' },
]

// ─── COMPONENTE ───────────────────────────────────────────────────────────────
export default function InteractiveChatWidget() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES)
    const [inputVal, setInputVal] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isResponding, setIsResponding] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // Auto-scroll para última mensagem
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
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

        // Adiciona mensagem do usuário
        setMessages(prev => [...prev, { type: 'user', text: text.trim() }])

        const flow = detectFlow(text)
        const replies = flow.responses

        // Delay inicial + typing
        await new Promise(r => setTimeout(r, 600))
        setIsTyping(true)
        await new Promise(r => setTimeout(r, 900 + Math.random() * 500))
        setIsTyping(false)

        // Primeira resposta
        setMessages(prev => [...prev, { type: 'ai', text: replies[0] }])

        // Segunda resposta se houver
        if (replies[1]) {
            await new Promise(r => setTimeout(r, 500))
            setIsTyping(true)
            await new Promise(r => setTimeout(r, 800 + Math.random() * 400))
            setIsTyping(false)
            setMessages(prev => [...prev, { type: 'ai', text: replies[1] }])
        }

        // Mensagem de sistema (consulta agendada)
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
        // Card externo — CLASSES ORIGINAIS PRESERVADAS
        <div className="relative rounded-[32px] bg-white border border-[#E9ECEF] p-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-visible">

            {/* Header — PRESERVADO EXATAMENTE */}
            <div className="bg-[#F8F9FA] rounded-[24px] p-3 mb-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        {/* Ícone do bot — preservar SVG original */}
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
                    {/* Badge Response: 3s — PRESERVADO */}
                    <div className="bg-white rounded-xl px-2.5 py-1.5 border border-[#E9ECEF] shadow-sm flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-[#0090FF]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                        </svg>
                        <div>
                            <p className="text-[10px] font-bold text-[#1A1A1A] leading-none">Response: 3s</p>
                            <p className="text-[9px] text-[#9CA3AF] leading-none mt-0.5">CLOSER DIGITAL</p>
                        </div>
                    </div>
                </div>

                {/* Área de mensagens — altura fixa com scroll */}
                <div className="flex flex-col gap-2 h-[180px] overflow-y-auto pr-1 scroll-smooth">
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
                                    // Bolha de sistema — CLASSE ORIGINAL
                                    <div className="bg-[#0090FF]/8 border border-[#0090FF]/20 text-[#1A1A1A] p-3 rounded-2xl rounded-tl-none max-w-[88%] text-xs self-start w-full">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#22C55E]">✅</span>
                                            <span className="font-medium">Consulta agendada · Áudio de confirmação enviado</span>
                                        </div>
                                        <p className="text-[#6B7280] text-[10px] mt-1">No-show: 0% · Amanhã às 14h</p>
                                    </div>
                                ) : msg.type === 'ai' ? (
                                    // Bolha da IA — CLASSE ORIGINAL
                                    <div className="bg-white text-[#4A4A4A] p-3 rounded-2xl rounded-tl-none max-w-[88%] text-xs self-start shadow-[var(--sh)] border border-[#E9ECEF] leading-relaxed">
                                        {msg.text}
                                    </div>
                                ) : (
                                    // Bolha do usuário — CLASSE ORIGINAL (gradiente azul)
                                    <div className="bg-gradient-to-br from-[#0090FF] to-[#00D1FF] text-white p-3 rounded-2xl rounded-tr-none max-w-[88%] text-xs self-end shadow-[0_4px_14px_rgba(0,144,255,0.25)] leading-relaxed font-semibold">
                                        {msg.text}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Indicador de digitação */}
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

            {/* Campo de input interativo — NOVO (substitui o texto estático) */}
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

            {/* Chips de atalho — abaixo do input */}
            <div className="flex flex-wrap gap-1.5 px-1 pb-2 mt-1">
                <p className="w-full text-[9px] text-[#9CA3AF] uppercase tracking-wider font-semibold mb-0.5">
                    Simule um lead:
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

            {/* Labels laterais — PRESERVADOS (Smart Filtro / Closer IA) */}
            {/* Manter o JSX original dos labels flutuantes fora do card */}
        </div>
    )
}
