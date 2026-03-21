import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// ─── PERGUNTAS ────────────────────────────────────────────────────────────────
const STEPS = [

  // ETAPA 1 — Ativação da dor (não desqualifica — instala consciência)
  {
    id: 'sensacao',
    type: 'choice',
    question: 'Seja honesto: quando você pensa no atendimento de leads da sua clínica hoje, qual é a sensação mais frequente?',
    subtitle: 'Não existe resposta errada. Queremos entender o ponto de partida.',
    options: [
      {
        icon: '😰',
        label: 'Ansiedade',
        sublabel: 'Sei que estou perdendo vendas mas não sei exatamente onde',
        value: 'ansiedade',
      },
      {
        icon: '😤',
        label: 'Frustração',
        sublabel: 'Invisto em tráfego e os leads somem sem explicação',
        value: 'frustracao',
      },
      {
        icon: '😞',
        label: 'Resignação',
        sublabel: 'Já tentei melhorar mas nada parece funcionar de verdade',
        value: 'resignacao',
      },
      {
        icon: '😐',
        label: 'Controle razoável',
        sublabel: 'Meu processo está ok, só preciso de mais volume',
        value: 'controle',
      },
    ],
  },

  // ETAPA 2 — Implicação financeira (força o lead a calcular a própria perda)
  {
    id: 'leads_perdidos',
    type: 'choice',
    question: 'Pense no último mês. Quantos leads chegaram e não viraram pacientes — por qualquer razão?',
    subtitle: 'Não respondeu rápido, sumiu, não fechou na avaliação. Some tudo.',
    options: [
      {
        icon: '📉',
        label: 'Menos de 10 leads perdidos',
        sublabel: 'Minha conversão está razoável',
        value: 'menos_10',
      },
      {
        icon: '📊',
        label: 'Entre 10 e 30 leads perdidos',
        sublabel: 'Perco alguns, mas não sei quantificar',
        value: '10_30',
      },
      {
        icon: '📈',
        label: 'Entre 30 e 60 leads perdidos',
        sublabel: 'É significativo — sinto no faturamento',
        value: '30_60',
      },
      {
        icon: '🚨',
        label: 'Mais de 60 leads perdidos',
        sublabel: 'É a maior sangria da clínica hoje',
        value: 'mais_60',
      },
    ],
  },

  // ETAPA 3 — Localização do buraco (diagnóstico cirúrgico)
  {
    id: 'onde_morre',
    type: 'choice',
    question: 'Onde a venda costuma morrer na sua clínica? Seja específico.',
    subtitle: 'Isso vai definir onde começamos a implementação.',
    options: [
      {
        icon: '📵',
        label: 'Na primeira resposta',
        sublabel: 'Demorei ou perdi o lead antes de nem falar com ele',
        value: 'primeira_resposta',
      },
      {
        icon: '👻',
        label: 'No follow-up',
        sublabel: 'O lead sumiu e ninguém foi atrás de forma estruturada',
        value: 'follow_up',
      },
      {
        icon: '🪑',
        label: 'No no-show',
        sublabel: 'Agendou, confirmou e não apareceu',
        value: 'no_show',
      },
      {
        icon: '💸',
        label: 'Na avaliação',
        sublabel: 'O paciente chegou mas não fechou o tratamento',
        value: 'avaliacao',
      },
    ],
  },

  // ETAPA 4 — Tentativas anteriores (valida que ele já falhou sozinho)
  {
    id: 'ja_tentou',
    type: 'choice',
    question: 'Você já tentou resolver esse gargalo? O que já testou?',
    subtitle: 'Sua resposta nos ajuda a não repetir o que não funcionou.',
    options: [
      {
        icon: '🤷',
        label: 'Nunca tentei resolver',
        sublabel: 'Deixei quieto ou achei que era normal',
        value: 'nunca_tentou',
      },
      {
        icon: '🤖',
        label: 'Tentei com chatbot ou automação genérica',
        sublabel: 'Não resolveu — o robô não sabia vender',
        value: 'chatbot',
      },
      {
        icon: '👤',
        label: 'Tentei contratando e treinando pessoas',
        sublabel: 'Não sustentou — turnover alto ou inconsistência',
        value: 'pessoas',
      },
      {
        icon: '🔀',
        label: 'Tentei várias coisas',
        sublabel: 'Nada funcionou de verdade ou de forma previsível',
        value: 'varias_coisas',
      },
    ],
  },

  // ETAPA 5 — Volume real (qualificação objetiva — desqualifica se < 30)
  {
    id: 'volume_leads',
    type: 'choice',
    question: 'Quantos novos leads entram na sua clínica por mês, em média?',
    subtitle: 'Considere todas as fontes: tráfego pago, orgânico, indicações.',
    options: [
      {
        icon: '🌱',
        label: 'Menos de 30 leads/mês',
        sublabel: 'Ainda estou construindo o volume',
        value: 'menos_30',
        disqualify: true,
      },
      {
        icon: '📊',
        label: 'Entre 30 e 80 leads/mês',
        sublabel: 'Tenho volume, mas a conversão é o problema',
        value: '30_80',
      },
      {
        icon: '📈',
        label: 'Entre 80 e 200 leads/mês',
        sublabel: 'Volume bom — o gargalo é o processo',
        value: '80_200',
      },
      {
        icon: '🚀',
        label: 'Mais de 200 leads/mês',
        sublabel: 'Alto volume, mas operação não acompanha',
        value: 'mais_200',
      },
    ],
  },

  // ETAPA 6 — Estrutura humana (define escopo da entrega)
  {
    id: 'equipe',
    type: 'choice',
    question: 'Além de você, tem alguém responsável pelo atendimento ou vendas na clínica hoje?',
    subtitle: 'Não perguntamos quantidade — perguntamos sobre a qualidade da operação.',
    options: [
      {
        icon: '👤',
        label: 'Sou eu quem faz tudo',
        sublabel: 'Não tenho equipe dedicada a atendimento ou vendas',
        value: 'so_eu',
      },
      {
        icon: '👥',
        label: 'Tenho 1 a 2 pessoas, sem processo',
        sublabel: 'Existe equipe mas não há método estruturado',
        value: '1_2_sem_processo',
      },
      {
        icon: '👨‍👩‍👧',
        label: 'Tenho equipe, mas depende de quem está de plantão',
        sublabel: 'O resultado varia muito de pessoa para pessoa',
        value: 'equipe_inconsistente',
      },
      {
        icon: '🏢',
        label: 'Tenho equipe e processo minimamente estruturado',
        sublabel: 'Funciona, mas sei que tem muito a melhorar',
        value: 'equipe_estruturada',
      },
    ],
  },

  // ETAPA 7 — Urgência (fecha o comprometimento — define quão quente é o lead)
  {
    id: 'urgencia',
    type: 'choice',
    question: 'O que vai acontecer com sua clínica se você não resolver isso nos próximos 6 meses?',
    subtitle: 'Seja realista. Essa resposta define como priorizamos sua implementação.',
    options: [
      {
        icon: '😌',
        label: 'Provavelmente nada',
        sublabel: 'Vou continuar como estou — não é urgente',
        value: 'nao_urgente',
      },
      {
        icon: '📉',
        label: 'Vou continuar perdendo dinheiro',
        sublabel: 'Mas sobrevivendo — é incômodo, não crítico',
        value: 'perdendo_dinheiro',
      },
      {
        icon: '⚠️',
        label: 'Vou estagnar enquanto concorrentes crescem',
        sublabel: 'O mercado não vai esperar eu me organizar',
        value: 'estagnacao',
      },
      {
        icon: '🔥',
        label: 'Não consigo escalar sem resolver isso',
        sublabel: 'É o principal bloqueio do crescimento da clínica',
        value: 'bloqueio_urgente',
      },
    ],
  },

  // ETAPA 8 — Contato (depois de todo comprometimento emocional instalado)
  {
    id: 'contato',
    type: 'contact',
    question: 'Sua clínica tem o perfil que buscamos.',
    subtitle: 'Preencha seus dados. Nossa equipe entra em contato em até 24 horas úteis para uma sessão estratégica gratuita.',
  },
]

// ─── MENSAGEM DE DESQUALIFICAÇÃO ──────────────────────────────────────────────
const DISQUALIFY_MSG = {
  menos_30: {
    titulo: 'Obrigado pela honestidade.',
    texto:
      'Com menos de 30 leads por mês, o investimento em um ecossistema comercial completo pode não se pagar agora. O caminho mais inteligente neste momento é estruturar a geração de demanda primeiro. Quando atingir esse volume, volte — teremos muito a construir juntos.',
  },
}

// ─── COMPONENTE ───────────────────────────────────────────────────────────────
export default function QualificationFunnel() {
  const [step, setStep]           = useState(0)
  const [answers, setAnswers]     = useState({})
  const [selected, setSelected]   = useState(null)
  const [disqualified, setDisq]   = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(1)
  const [contact, setContact]     = useState({ nome: '', clinica: '', whatsapp: '' })
  const [submitting, setSubmitting] = useState(false)

  const current   = STEPS[step]
  const total     = STEPS.length
  const progress  = Math.round((step / (total - 1)) * 100)

  // ── Selecionar opção ────────────────────────────────────────────────────────
  function pick(opt) {
    setSelected(opt.value)
    setTimeout(() => {
      if (opt.disqualify) {
        setDisq(opt.value)
        return
      }
      const next = { ...answers, [current.id]: opt.value }
      setAnswers(next)
      if (step < total - 1) {
        setDirection(1)
        setStep(s => s + 1)
        setSelected(null)
      }
    }, 380)
  }

  // ── Voltar ──────────────────────────────────────────────────────────────────
  function back() {
    if (step > 0) {
      setDirection(-1)
      setStep(s => s - 1)
      setSelected(null)
    }
  }

  // ── Enviar ──────────────────────────────────────────────────────────────────
  async function submit(e) {
    e.preventDefault()
    setSubmitting(true)

    const payload = {
      ...answers,
      ...contact,
      score: calcScore(answers),
      timestamp: new Date().toISOString(),
      origem: window.location.href,
    }

    // TODO: substituir pela URL do webhook (Make, N8N, Zapier, etc.)
    // await fetch('https://hook.make.com/SEU_WEBHOOK', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // })

    console.log('Lead qualificado:', payload)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  // ── Score automático para o vendedor ────────────────────────────────────────
  function calcScore(a) {
    let score = 0
    // Dor alta = mais pontos
    if (['frustracao','resignacao'].includes(a.sensacao))      score += 2
    if (['30_60','mais_60'].includes(a.leads_perdidos))        score += 2
    if (a.ja_tentou === 'chatbot' || a.ja_tentou === 'varias_coisas') score += 2
    // Volume qualificado
    if (['80_200','mais_200'].includes(a.volume_leads))        score += 3
    // Urgência alta
    if (['estagnacao','bloqueio_urgente'].includes(a.urgencia)) score += 3
    // Equipe treinável
    if (a.equipe !== 'so_eu')                                   score += 1
    return score // máx ~13 — acima de 8 = lead quente
  }

  // ── TELA DESQUALIFICAÇÃO ────────────────────────────────────────────────────
  if (disqualified) {
    const msg = DISQUALIFY_MSG[disqualified]
    return (
      <section className="py-8 px-4 w-full">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6 text-3xl">
            🤝
          </div>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{msg.titulo}</h2>
          <p className="text-[#6B7280] leading-relaxed text-base mb-8">{msg.texto}</p>
          <button
            onClick={() => { setDisq(null); setStep(0); setAnswers({}); setSelected(null) }}
            className="text-[#0090FF] text-sm underline hover:opacity-70 transition-opacity"
          >
            ← Recomeçar o questionário
          </button>
        </div>
      </section>
    )
  }

  // ── TELA SUCESSO ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section className="py-8 px-4 w-full">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[rgba(0,144,255,0.08)] flex items-center justify-center mx-auto mb-6 text-4xl">
            ✅
          </div>
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">Aplicação recebida.</h2>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-2">
            Nossa equipe vai analisar o perfil da sua clínica e entrar em
            contato em até{' '}
            <strong className="text-[#1A1A1A]">24 horas úteis</strong>.
          </p>
          <p className="text-[#9CA3AF] text-sm">
            Fique atento ao WhatsApp:{' '}
            <strong className="text-[#6B7280]">{contact.whatsapp}</strong>
          </p>
        </div>
      </section>
    )
  }

  // ── FUNIL PRINCIPAL ─────────────────────────────────────────────────────────
  return (
    <section className="py-8 px-4 w-full" id="aplicacao">
      <div className="max-w-2xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 bg-[rgba(0,144,255,0.08)] text-[#0090FF] text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF] animate-pulse" />
            APLICAÇÃO · VAGAS LIMITADAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-3">
            Não trabalhamos com todo mundo.
            <br />
            <span className="text-[#0090FF]">E isso é proposital.</span>
          </h2>
          <p className="text-[#6B7280] text-base max-w-lg mx-auto">
            Responda as perguntas abaixo para descobrir se sua clínica tem
            o perfil para o ecossistema Intalky.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#E9ECEF] shadow-sm overflow-hidden">

          {/* Barra de progresso */}
          <div className="h-1.5 bg-[#F1F3F5]">
            <motion.div
              className="h-full bg-[#0090FF] rounded-r-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>

          {/* Contador */}
          <div className="flex items-center justify-between px-8 pt-5 pb-1">
            <span className="text-xs text-[#9CA3AF]">
              Pergunta {step + 1} de {total}
            </span>
            <span className="text-xs font-semibold text-[#0090FF]">
              {progress}% concluído
            </span>
          </div>

          {/* Conteúdo animado */}
          <div className="px-8 pb-8 pt-3 min-h-[340px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                initial={{ opacity: 0, x: direction * 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -36 }}
                transition={{ duration: 0.26, ease: 'easeInOut' }}
              >
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
                  {current.question}
                </h3>
                {current.subtitle && (
                  <p className="text-sm text-[#9CA3AF] mb-6">{current.subtitle}</p>
                )}

                {/* Opções */}
                {current.type === 'choice' && (
                  <div className="flex flex-col gap-3">
                    {current.options.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => pick(opt)}
                        className={`
                          w-full text-left flex items-start gap-4 px-5 py-4 rounded-xl border
                          transition-all duration-200 group
                          ${selected === opt.value
                            ? 'border-[#0090FF] bg-[rgba(0,144,255,0.05)] shadow-sm'
                            : 'border-[#E9ECEF] bg-white hover:border-[#0090FF] hover:bg-[rgba(0,144,255,0.02)]'}
                        `}
                      >
                        {/* Ícone */}
                        <span className="text-2xl w-9 text-center flex-shrink-0 mt-0.5">
                          {opt.icon}
                        </span>

                        {/* Textos */}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold leading-tight mb-0.5
                            ${selected === opt.value ? 'text-[#0090FF]' : 'text-[#1A1A1A] group-hover:text-[#0090FF]'}`}>
                            {opt.label}
                          </p>
                          <p className="text-xs text-[#9CA3AF] leading-snug">
                            {opt.sublabel}
                          </p>
                        </div>

                        {/* Check */}
                        {selected === opt.value && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0090FF] flex items-center justify-center text-white text-[10px] font-bold mt-0.5"
                          >
                            ✓
                          </motion.span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Formulário de contato */}
                {current.type === 'contact' && (
                  <form onSubmit={submit} className="flex flex-col gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Seu nome completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. João Silva"
                        value={contact.nome}
                        onChange={e => setContact(c => ({ ...c, nome: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] bg-[#F8F9FA] text-[#1A1A1A] text-sm placeholder:text-[#C1C9D2] focus:outline-none focus:border-[#0090FF] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        Nome da clínica
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Clínica Exemplo"
                        value={contact.clinica}
                        onChange={e => setContact(c => ({ ...c, clinica: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] bg-[#F8F9FA] text-[#1A1A1A] text-sm placeholder:text-[#C1C9D2] focus:outline-none focus:border-[#0090FF] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">
                        WhatsApp com DDD
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={contact.whatsapp}
                        onChange={e => setContact(c => ({ ...c, whatsapp: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9ECEF] bg-[#F8F9FA] text-[#1A1A1A] text-sm placeholder:text-[#C1C9D2] focus:outline-none focus:border-[#0090FF] focus:bg-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting || !contact.nome || !contact.clinica || !contact.whatsapp}
                      className="mt-1 w-full py-4 rounded-xl bg-[#0090FF] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#007EE0] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar minha aplicação →'
                      )}
                    </button>

                    <p className="text-center text-xs text-[#C1C9D2]">
                      Resposta em até 24h úteis · Sem compromisso · Vagas limitadas
                    </p>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Voltar */}
          {step > 0 && current.type !== 'contact' && (
            <div className="px-8 pb-5 border-t border-[#F8F9FA] pt-4">
              <button
                onClick={back}
                className="text-xs text-[#C1C9D2] hover:text-[#9CA3AF] transition-colors flex items-center gap-1"
              >
                ← Voltar
              </button>
            </div>
          )}
        </div>

        {/* Rodapé de confiança */}
        <div className="flex items-center justify-center gap-5 mt-5 text-xs text-[#C1C9D2]">
          <span>🔒 Dados confidenciais</span>
          <span>·</span>
          <span>Análise em até 24h</span>
          <span>·</span>
          <span>Sem spam</span>
        </div>

      </div>
    </section>
  )
}
