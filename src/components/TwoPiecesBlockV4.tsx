import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import aiDashboardImg from '../assets/mockups/ai_dashboard.png';
import humanTrustImg from '../assets/mockups/human_trust.png';

export function TwoPiecesBlockV4() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white border-t border-b border-[#E9ECEF]">
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
            Antes de falar da solução, precisamos ser honestos com você
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight text-center mb-10"
        >
          A IA resolve{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">metade do problema.</span>{' '}
          Só metade.
        </motion.h2>

        {/* PARTE 1 — O que a IA faz */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-xl text-[#4A4A4A] leading-relaxed">
              A Intalky AI atende, filtra e agenda em 3 seg, 24/7. Sem humor ruim, sem férias, sem rescisão.
            </p>

            <p className="text-lg text-[#4A4A4A] leading-relaxed font-semibold">
              Um vendedor digital que nunca dorme. Clínicas parceiras registraram <strong className="text-[#1A1A1A]">+70% em agendamentos</strong> e queda expressiva nas faltas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#0090FF]/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={aiDashboardImg}
              alt="Agendamento Inteligente"
              className="relative rounded-2xl border border-[#E9ECEF] shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Divisor visual */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center my-8"
        >
          <div className="w-full border-t border-[#E9ECEF]" />
          <div className="absolute bg-white px-4 text-[#888888] text-xs font-bold uppercase tracking-widest">
            mas
          </div>
        </motion.div>

        {/* PARTE 2 — A virada narrativa */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-[#00D1FF]/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={humanTrustImg}
              alt="Confiança e Conexão Humana"
              className="relative rounded-2xl border border-[#E9ECEF] shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 order-1 lg:order-2"
          >
            <p className="text-xl text-[#1A1A1A] font-bold leading-relaxed">
              Mas nenhum vendedor de software vai te contar isso.
            </p>

            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              Quando o paciente senta na cadeira, quem vende é o ser humano. Se a recepção não criar conexão nos primeiros 2 min, a venda morre antes de começar.
            </p>

            <p className="text-2xl text-[#1A1A1A] font-black tracking-tight leading-tight">
              A IA fez a parte dela. O processo humano destruiu a venda em três minutos.
            </p>
          </motion.div>
        </div>

        {/* Parágrafo de fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-2xl p-6 mb-10"
        >
          <p className="text-[#4A4A4A] leading-relaxed italic text-center">
            É por isso que a Intalky Group não vende software. Nós construímos a máquina de vendas inteira — da primeira mensagem no WhatsApp até o{' '}
            <strong className="text-[#1A1A1A] not-italic">"sim" na cadeira.</strong>
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
            href="#/funil"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#F0F9FF] text-[#0090FF] border-2 border-[#0090FF] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,144,255,0.15)]"
          >
            Quero ver como funciona o sistema completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
