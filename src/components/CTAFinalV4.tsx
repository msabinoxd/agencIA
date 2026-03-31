import { motion } from 'motion/react';
import { ArrowRight, X, Check, CheckCircle2 } from 'lucide-react';
import strategicGrowthImg from '../assets/mockups/strategic_growth.png';
import { waURL, CONFIG } from '../config';
import { fadeUp, stagger, scaleIn } from '../shared/animations';

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
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#F8F9FA] border-t border-[#E9ECEF]">
      {/* Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0090FF]/8 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D1FF]/8 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagem à Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#0090FF]/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={strategicGrowthImg}
              alt="Crescimento Estratégico"
              className="relative rounded-2xl border border-[#E9ECEF] shadow-xl w-full h-auto"
            />
          </motion.div>

          {/* Texto à Direita */}
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-5 tracking-tight leading-[1.1]"
            >
              Não trabalhamos com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">todo mundo.</span>{' '}
              E isso é proposital.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#4A4A4A] mb-8 leading-relaxed"
            >
              Limitamos o número de clínicas que assessoramos ao mesmo tempo. Não por falta de demanda — por compromisso com o resultado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              <p className="text-[#4A4A4A] leading-relaxed">
                Implantamos IA, montamos o processo de vendas, configuramos o sistema de gestão, treinamos equipe e acompanhamos semana a semana.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed italic font-semibold">
                Se você chegou até aqui, é provável que você esteja pronto.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filter lists */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {/* Not for you */}
          <motion.div
            variants={fadeUp}
            className="bg-white border border-red-100 rounded-3xl p-6"
          >
            <h3 className="text-sm font-bold text-red-500 mb-4 flex items-center gap-2 uppercase tracking-wider">
              <X className="w-4 h-4" />
              Provavelmente não é para você se:
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A] leading-relaxed">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For you */}
          <motion.div
            variants={fadeUp}
            className="bg-white border border-[#0090FF]/20 rounded-3xl p-6"
          >
            <h3 className="text-sm font-bold text-[#0090FF] mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Check className="w-4 h-4" />
              É para você se:
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#0090FF] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Headline acima do CTA */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold mb-4 leading-snug"
        >
          <span className="text-[#1A1A1A]">Esta pode ser a decisão mais rentável</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">que sua clínica toma este ano.</span>
        </motion.p>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6 max-w-lg mx-auto space-y-2"
        >
          <p className="text-sm text-[#4A4A4A] leading-relaxed">
            Em 20 minutos de conversa, nossa equipe mapeia os gargalos comerciais da sua clínica e mostra — com números reais — quanto você está deixando na mesa todo mês.
          </p>
          <p className="text-sm text-[#888888] italic leading-relaxed">
            Sem pitch de vendas. Sem pressão. Se não fizer sentido para os dois lados, encerramos a conversa sem compromisso.
          </p>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(0,144,255,0.08)] border border-[#0090FF]/20 text-[#0090FF] text-sm font-bold">
            ⚡ Resposta em até 1 hora em horário comercial
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <motion.a
              href="#/funil"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-10 py-5 rounded-full font-bold text-lg transition-all overflow-hidden"
              style={{ animation: 'ctaPulse 2.5s ease-in-out infinite' }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              Quero minha sessão estratégica gratuita
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-[#888888] font-medium bg-white px-4 py-2 rounded-full border border-[#E9ECEF] shadow-[var(--sh)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0090FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0090FF]"></span>
              </span>
              Leva menos de 2 minutos · Resposta em até 1h · Sem compromisso
            </div>
            <p className="text-xs text-[#888888]">🔒 Seus dados são confidenciais · Sem spam · Cancele quando quiser</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
