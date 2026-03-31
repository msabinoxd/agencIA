import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '5511988652345'

const WHATSAPP_MSG = encodeURIComponent(
  'Olá! Acabei de preencher a aplicação no site da Intalky. Gostaria de agendar minha sessão estratégica gratuita.'
)

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(5)
  const [pulseActive, setPulseActive] = useState(true)

  useEffect(() => {
    document.title = 'Obrigado — Intalky'
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) { clearInterval(t); return 0 }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setPulseActive(false)
      setTimeout(() => setPulseActive(true), 200)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center px-4 py-16 font-sans">

      {/* Logo */}
      <Link to="/" className="mb-12 flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="w-7 h-7 rounded-lg bg-[#0090FF] flex items-center justify-center text-white text-sm font-bold">
          I
        </span>
        <span className="text-sm font-semibold text-[#1A1A1A]">Intalky</span>
      </Link>

      {/* Card principal */}
      <div className="w-full max-w-lg bg-white rounded-2xl border border-[#E9ECEF] shadow-sm overflow-hidden">

        {/* Barra de sucesso no topo */}
        <div className="h-1.5 bg-gradient-to-r from-[#0090FF] to-[#00D1FF]" />

        <div className="px-8 py-10 text-center">

          {/* Ícone de sucesso */}
          <div className="w-16 h-16 rounded-full bg-[rgba(0,144,255,0.08)] flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✅</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-3 leading-snug">
            Aplicação recebida.
            <br />
            <span className="text-[#0090FF]">Próximo passo: WhatsApp.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-[#6B7280] text-base leading-relaxed mb-2">
            Nossa equipe vai analisar seu perfil e entrar em contato em até{' '}
            <strong className="text-[#1A1A1A]">1 hora</strong> em horário comercial.
          </p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8">
            Para acelerar o processo, clique no botão abaixo e inicie a
            conversa agora. Já deixamos a mensagem pronta para você.
          </p>

          {/* CTA WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-full flex items-center justify-center gap-3 py-4 px-6
              rounded-xl bg-[#25D366] hover:bg-[#20BD5A]
              text-white font-semibold text-base
              transition-all duration-200 active:scale-[0.98]
              shadow-[0_4px_24px_rgba(37,211,102,0.3)]
              ${pulseActive ? 'scale-100' : 'scale-[0.99]'}
            `}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Iniciar conversa no WhatsApp
          </a>

          {/* Urgência sutil */}
          <p className="mt-4 text-xs text-[#C1C9D2]">
            {countdown > 0
              ? <>Nossa equipe está disponível agora — <span className="text-[#0090FF] font-medium">{countdown === 1 ? '1 pessoa' : `${countdown} pessoas`} aguardando</span></>
              : 'Nossa equipe está disponível agora'
            }
          </p>
        </div>

        {/* Rodapé do card */}
        <div className="px-8 pb-8">
          <div className="border-t border-[#F1F3F5] mb-6" />

          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-4">
            O que acontece agora
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                step: '1',
                title: 'Nossa equipe analisa sua aplicação',
                desc: 'Verificamos o perfil e preparamos o diagnóstico da sua operação.',
              },
              {
                step: '2',
                title: 'Você recebe um contato em até 1 hora',
                desc: 'Por WhatsApp, em horário comercial. Sem ligação surpresa.',
              },
              {
                step: '3',
                title: 'Sessão estratégica de 20 minutos',
                desc: 'Mapeamos seus gargalos e mostramos o que está custando sua clínica.',
              },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0090FF] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] leading-tight mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#9CA3AF] leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Link de volta */}
      <Link
        to="/"
        className="mt-8 text-xs text-[#C1C9D2] hover:text-[#9CA3AF] transition-colors"
      >
        ← Voltar ao site
      </Link>
    </div>
  )
}
