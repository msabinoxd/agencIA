import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import aiDashboardImg from '../assets/mockups/ai_dashboard.png';
import humanTrustImg from '../assets/mockups/human_trust.png';

export function TwoPiecesBlockV4() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white border-t border-b border-[#E9ECEF]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-[10px] font-black uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            Transparência Total
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-tight text-center mb-20 max-w-4xl mx-auto"
        >
          A IA resolve{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">metade do problema.</span>{' '}
          Só metade.
        </motion.h2>

        {/* PARTE 1 — O que a IA faz */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-6 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tight">
                O Atendimento 24/7
              </h3>
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-medium">
                A Intalky AI atende, filtra e agenda em 3 seg, 24/7. Sem humor ruim, sem férias, sem rescisão.
              </p>
              <p className="text-lg text-[#0090FF] leading-relaxed font-bold bg-[#0090FF]/5 p-4 rounded-2xl border border-[#0090FF]/10">
                Um vendedor digital que nunca dorme. Clínicas parceiras registraram <strong className="text-[#1A1A1A]">+70% em agendamentos</strong> e queda expressiva nas faltas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative max-w-[480px] floating">
              <div className="absolute -inset-4 bg-[#0090FF]/10 rounded-[32px] blur-xl opacity-50" />
              <div className="relative rounded-[32px] overflow-hidden glass-card p-2 bg-white/50">
                <img
                  src={aiDashboardImg}
                  alt="Agendamento Inteligente"
                  className="relative rounded-[24px] border border-[#E9ECEF] w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divisor visual (But) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center my-16 md:my-24"
        >
          <div className="w-full border-t border-[#E9ECEF]" />
          <div className="absolute bg-white px-6 text-[#1A1A1A] text-sm font-black uppercase tracking-widest italic">
            Mas cuidado...
          </div>
        </motion.div>

        {/* PARTE 2 — A virada narrativa */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative max-w-[480px] floating" style={{ animationDelay: '1s' }}>
              <div className="absolute -inset-4 bg-[#00D1FF]/10 rounded-[32px] blur-xl opacity-50" />
              <div className="relative rounded-[32px] overflow-hidden glass-card p-2 bg-white/50">
                <img
                  src={humanTrustImg}
                  alt="Confiança e Conexão Humana"
                  className="relative rounded-[24px] border border-[#E9ECEF] w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="space-y-6 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-black text-red-500 tracking-tight">
                O Fator Humano
              </h3>
              <p className="text-lg md:text-xl text-[#1A1A1A] font-bold leading-relaxed">
                Nenhum vendedor de software vai te contar isso.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed font-medium">
                Quando o paciente senta na cadeira, quem vende é o ser humano. Se a recepção não criar conexão nos primeiros 2 min, a venda morre antes de começar.
              </p>
              <div className="border-l-4 border-red-500 pl-6 py-2">
                <p className="text-2xl md:text-3xl text-[#1A1A1A] font-black tracking-tighter leading-tight">
                  A IA fez a parte dela. O processo humano destruiu a venda em três minutos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Parágrafo de fechamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[32px] p-8 md:p-12 mb-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed font-medium">
            É por isso que a <strong className="text-[#0090FF]">Intalky Group</strong> não vende software. Nós construímos a máquina de vendas inteira — da primeira mensagem no WhatsApp até o{' '}
            <strong className="text-[#1A1A1A] border-b-2 border-[#0090FF]">"sim" na cadeira.</strong>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="#/funil"
            className="group relative inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:scale-[1.05] shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] opacity-0 group-hover:opacity-10 transition-opacity" />
            Quero ver como funciona o sistema completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

