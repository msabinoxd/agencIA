import { motion } from 'motion/react';
import { ArrowRight, X, Check, CheckCircle2 } from 'lucide-react';
import strategicGrowthImg from '../assets/mockups/strategic_growth.png';
import { scaleIn } from '../shared/animations';

const notForYou = [
  "Você quer só \"mais um robô de WhatsApp barato\"",
  "Sua clínica recebe menos de 30 leads por mês",
  "Você não está disposto a estruturar processos e treinar equipe",
  "Você quer resultado sem envolver o comercial interno da clínica",
];

const forYou = [
  "Você investe em anúncios e sabe que perde pacientes no atendimento",
  "Você quer previsibilidade de caixa, não depender da sorte da equipe",
  "Você entende que tecnologia + processo + pessoas = crescimento real",
  "Você está pronto para transformar sua clínica numa operação de alta performance",
];

export function CTAFinalV4() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[var(--color-bg-gradient)] border-t border-[#E9ECEF]">
      {/* Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 md:mb-32">
          
          {/* Imagem à Esquerda com Card SaaS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative max-w-[480px] floating">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0090FF]/20 to-[#00D1FF]/20 rounded-[40px] blur-2xl opacity-50" />
              <div className="relative rounded-[32px] overflow-hidden glass-card p-2 bg-white/40">
                <div className="rounded-[24px] overflow-hidden border border-[#E9ECEF]">
                  <img
                    src={strategicGrowthImg}
                    alt="Crescimento Estratégico"
                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto à Direita - Centralizado no Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="space-y-8 max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.05]">
                Não trabalhamos com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">todo mundo.</span>{' '}
                E isso é proposital.
              </h2>

              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-medium">
                Limitamos o número de clínicas que assessoramos ao mesmo tempo. Não por falta de demanda — por compromisso real com o seu resultado.
              </p>

              <div className="bg-[#1A1A1A] text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0090FF]/20 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <p className="relative z-10 text-lg leading-relaxed font-medium italic">
                  "Se você chegou até aqui, é provável que sua clínica esteja pronta para o próximo nível."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-red-100 rounded-[32px] p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-xs font-black text-red-500 mb-8 flex items-center gap-2 uppercase tracking-[0.2em]">
              <X className="w-4 h-4" />
              Não é para você se:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#4A4A4A] font-medium">
                  <X className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#0090FF]/10 rounded-[32px] p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-xs font-black text-[#0090FF] mb-8 flex items-center gap-2 uppercase tracking-[0.2em]">
              <Check className="w-4 h-4" />
              É para você se:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#4A4A4A] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0090FF] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Final CTA Area */}
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter leading-tight"
          >
            <span className="text-[#1A1A1A]">Esta é a decisão mais rentável que sua clínica</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">pode tomar nos próximos 12 meses.</span>
          </motion.h3>

          <div className="flex flex-col items-center gap-8">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500"></div>
              <a
                href="#/funil"
                className="relative flex items-center justify-center gap-4 bg-[#1A1A1A] text-white px-12 py-6 rounded-full font-black text-sm md:text-base uppercase tracking-widest transition-all hover:scale-[1.05] shadow-2xl"
              >
                Quero minha sessão estratégica gratuita
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-[#E9ECEF] shadow-[var(--sh)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold text-[#4A4A4A]">Conversa de 20 min · Sem pitch · Zero compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
