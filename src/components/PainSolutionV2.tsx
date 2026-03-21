import { motion } from 'motion/react';
import { CalendarX, UserMinus, Clock, Bot, MoonStar } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

const pains = [
  {
    icon: CalendarX,
    title: "Lead agenda. Cadeira vazia.",
    scenario: "Você investiu em tráfego, o lead agendou a avaliação. No dia marcado: cadeira vazia. Sem aviso.",
    impact: "3 no-shows/dia × R$800 = R$52.800/mês perdido"
  },
  {
    icon: UserMinus,
    title: "Você treina. Ela pede demissão.",
    scenario: "3 meses de treinamento com o método do Danilo. Ela aprendeu tudo. Na semana seguinte: pediu demissão.",
    impact: "1 SDR que sai = R$12.000 em custo + 90 dias de ramp-up do próximo"
  },
  {
    icon: Clock,
    title: "Lead quente. Resposta fria.",
    scenario: "O anúncio funcionou. O lead clicou. Mas sua equipe estava ocupada — ou a clínica estava fechada.",
    impact: "78% das vendas vão para quem responde primeiro"
  },
  {
    icon: Bot,
    title: "Bot que responde FAQ. Lead que abandona.",
    scenario: "Você tem um \"robô\". Mas ele só manda tabela de preços. O lead perguntou algo diferente e sumiu.",
    impact: "Leads não convertidos por bot genérico: 60-85% do total"
  },
  {
    icon: MoonStar,
    title: "18h: a clínica fechou. 20h: o lead chegou.",
    scenario: "O anúncio rodou à noite. O lead entrou em contato. Ninguém respondeu. Você ligou no dia seguinte.",
    impact: "\"Já resolvi com outra clínica.\" — frase que mais dói."
  }
];

export function PainSolutionV2() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#F8F9FA]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header V2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-red-500 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Diagnóstico da sua operação
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            A maioria das clínicas está{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">sangrando dinheiro em silêncio.</span>{' '}
            A sua também pode estar.
          </h2>
          <p className="text-lg text-[#4A4A4A] mb-8">
            E o pior: ninguém percebe porque as perdas acontecem aos poucos.
          </p>

          {/* 3 intro paragraphs */}
          <div className="space-y-4 text-left bg-white border border-[#E9ECEF] rounded-2xl p-6 shadow-[var(--sh)]">
            <p className="text-[#4A4A4A] leading-relaxed">
              Você sabe exatamente quanto gasta com tráfego todo mês. Mas sabe quanto desse dinheiro está sendo jogado fora porque o lead <strong className="text-[#1A1A1A]">some antes de virar paciente?</strong>
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              O problema raramente é o anúncio. É o que acontece <strong className="text-[#1A1A1A]">depois:</strong> o lead chega, ninguém responde rápido, o SDR não sabe conduzir a conversa, o follow-up não existe. O lead foi embora com seu dinheiro de mídia paga.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed font-medium">
              Mapeamos os <strong className="text-red-500">5 pontos de sangramento</strong> que mais afetam clínicas odontológicas e estéticas. Identifique os que existem na sua operação:
            </p>
          </div>
        </motion.div>

        {/* Pain Cards Grid: 3 top + 2 bottom centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {pains.slice(0, 3).map((pain, idx) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white border border-[#E9ECEF] hover:border-red-200 rounded-3xl p-6 flex flex-col gap-4 shadow-[var(--sh)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)] transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-100 transition-colors shrink-0">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-bold text-lg mb-2 leading-tight">{pain.title}</h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{pain.scenario}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#E9ECEF] group-hover:border-red-100 transition-colors">
                  <p className="text-red-500 text-xs font-bold font-mono">{pain.impact}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[16.67%]">
          {pains.slice(3).map((pain, idx) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (idx + 3) * 0.1 }}
                className="group bg-white border border-[#E9ECEF] hover:border-red-200 rounded-3xl p-6 flex flex-col gap-4 shadow-[var(--sh)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)] transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-100 transition-colors shrink-0">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-[#1A1A1A] font-bold text-lg mb-2 leading-tight">{pain.title}</h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{pain.scenario}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#E9ECEF] group-hover:border-red-100 transition-colors">
                  <p className="text-red-500 text-xs font-bold font-mono">{pain.impact}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6 text-center"
        >
          <div className="relative flex items-center justify-center w-full">
            <div className="w-px h-16 bg-gradient-to-b from-red-300 via-[#E9ECEF] to-[#0090FF]/60" />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute w-2.5 h-2.5 rounded-full bg-[#0090FF] shadow-[0_0_12px_rgba(0,144,255,0.6)]"
            />
          </div>

          <p className="text-2xl md:text-3xl font-bold text-[#4A4A4A] max-w-2xl">
            E se você nunca mais tivesse{' '}
            <span className="text-[#1A1A1A]">nenhum desses problemas?</span>
          </p>

          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              A Intalky resolve cada uma delas.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Em 3 segundos, 24/7, sem depender de SDR.</span>
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              <strong className="text-[#1A1A1A]">78% das vendas</strong> vão para quem responde primeiro. Com o método dos{' '}
              <strong className="text-[#0090FF]">7 Pilares da Persuasão</strong> e IA treinada para conduzir a negociação, seus leads viram agendamentos confirmados — dia e noite.
            </p>
          </div>
        </motion.div>

      </div>

      <div className="mt-16 flex justify-center">
        <ScrollIndicator text="Veja como funciona" />
      </div>
    </section>
  );
}
