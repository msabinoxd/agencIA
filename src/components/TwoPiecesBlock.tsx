import { motion } from 'motion/react';
import { Bot, User, ArrowRight, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { waURL, CONFIG } from '../config';
import { fadeUp, stagger } from '../shared/animations';

export function TwoPiecesBlock() {
  return (
    <section className="relative py-24 overflow-hidden bg-white border-t border-b border-[#E9ECEF]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0090FF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            A Virada que a Maioria Ignora
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            A IA mais avançada do mundo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">não vai salvar sua clínica</span>{' '}
            sozinha.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#4A4A4A] text-lg mb-16 max-w-2xl mx-auto"
        >
          E não é pessimismo — é o que os dados mostram depois de trabalhar com dezenas de clínicas.
        </motion.p>

        {/* Two pieces cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Peça 1 — IA Closer (positive) */}
          <motion.div
            variants={fadeUp}
            className="relative bg-gradient-to-br from-[#F0F9FF] to-white border border-[#0090FF]/20 rounded-3xl p-8 flex flex-col gap-5"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0090FF]/10 border border-[#0090FF]/20 flex items-center justify-center shrink-0">
                <Bot className="w-7 h-7 text-[#0090FF]" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0090FF]/10 text-[#0090FF] text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Topo do funil dominado
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-tight">
                Peça 1: A Intalky AI como Closer Digital
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed">
                Ela qualifica o lead, identifica a dor real, espelha a linguagem do paciente, contorna objeções e agenda a consulta. Sozinha. 24 horas por dia, 7 dias por semana. Sem humor ruim, sem pedir aumento, sem se demitir na segunda-feira.
              </p>
            </div>

            {/* Visual indicator */}
            <div className="mt-auto pt-4 border-t border-[#0090FF]/10 flex items-center gap-2 text-[#0090FF] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0090FF] animate-pulse" />
              Ativo 24h/dia, 365 dias/ano
            </div>
          </motion.div>

          {/* Peça 2 — Processo Humano (warning) */}
          <motion.div
            variants={fadeUp}
            className="relative bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-3xl p-8 flex flex-col gap-5"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                <User className="w-7 h-7 text-amber-600" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                Onde 80% das clínicas perdem
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-tight">
                Peça 2: Mas e quando o paciente chega na clínica?
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed">
                Se a recepcionista não sabe ancorar valor, se a apresentação de tratamento é fraca, se não existe um script de fechamento — o paciente que a IA trouxe vai embora com uma <em>"vou pensar"</em>. A IA encheu o funil. O processo humano furado esvazia.
              </p>
            </div>

            {/* Visual indicator */}
            <div className="mt-auto pt-4 border-t border-amber-100 flex items-center gap-2 text-amber-600 text-xs font-bold">
              <AlertTriangle className="w-3.5 h-3.5" />
              Ponto crítico ignorado pela maioria
            </div>
          </motion.div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-3xl p-8 text-center mb-10"
        >
          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-3xl mx-auto">
            É por isso que a Intalky não vende apenas IA. Vendemos o{' '}
            <strong className="text-[#1A1A1A]">ecossistema completo:</strong>{' '}
            IA que qualifica e agenda + CRM estruturado + treinamento de equipe + gestão de processo. As clínicas que crescem de verdade entendem que não adianta a ponta ser boa se o{' '}
            <strong className="text-red-500">meio está furado.</strong>
          </p>
        </motion.div>

        {/* CTA outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={waURL(CONFIG.wa.msgHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#F0F9FF] text-[#0090FF] border-2 border-[#0090FF] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,144,255,0.15)]"
          >
            Quero conhecer o ecossistema completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
