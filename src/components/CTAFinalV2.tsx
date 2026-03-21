import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, X, Check } from 'lucide-react';
import { waURL, CONFIG } from '../config';
import { fadeUp, stagger, scaleIn } from '../shared/animations';

const notForYou = [
  "Não investem em tráfego pago",
  "Querem apenas 'um robozinho de WhatsApp'",
  "Não têm disposição para implementar processos",
  "Buscam resultado sem comprometimento da equipe",
];

const forYou = [
  "Já investem em tráfego e querem converter mais",
  "Entendem que automação + processo + time = resultado",
  "Estão prontas para escalar com estrutura",
  "Querem previsibilidade, não sorteio",
];

const checklist = [
  "IA customizada para sua clínica",
  "CRM + funil estruturado",
  "Treinamento da equipe",
  "Acompanhamento semanal de resultados",
];

export function CTAFinalV2() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#F8F9FA] border-t border-[#E9ECEF]">
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            Não é para todo mundo
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 tracking-tight leading-[1.1] text-center"
        >
          Atenção: trabalhamos com um{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">número limitado</span>{' '}
          de clínicas por vez.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#4A4A4A] mb-14 text-center"
        >
          E por isso somos criteriosos sobre com quem trabalhamos.
        </motion.p>

        {/* Filter lists */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        >
          {/* Not for you */}
          <motion.div
            variants={fadeUp}
            className="bg-white border border-red-100 rounded-3xl p-6"
          >
            <h3 className="text-base font-bold text-red-500 mb-4 flex items-center gap-2">
              <X className="w-5 h-5" />
              Não atendemos clínicas que:
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
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
            <h3 className="text-base font-bold text-[#0090FF] mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Atendemos clínicas que:
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                  <CheckCircle2 className="w-4 h-4 text-[#0090FF] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Body paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-12"
        >
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            Se você chegou até aqui, leu tudo e se reconheceu no segundo grupo — provavelmente temos algo importante para conversar.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            Nossa conversa inicial é uma <strong className="text-[#1A1A1A]">análise do seu processo comercial atual.</strong> Identificamos onde estão os maiores buracos e mostramos, com números, o que dá para recuperar. Sem promessas vazias.
          </p>
        </motion.div>

        {/* Checklist */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left sm:text-center max-w-4xl mx-auto"
        >
          {checklist.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group flex items-center justify-start sm:justify-center gap-3 text-[#1A1A1A] font-medium bg-white hover:bg-[#F1F3F5] border border-[#E9ECEF] hover:border-[#0090FF]/20 rounded-xl py-4 px-5 transition-all duration-300 shadow-[var(--sh)]"
            >
              <CheckCircle2 className="w-5 h-5 text-[#0090FF] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Vagas limitadas por capacidade de entrega — não por estratégia de marketing.
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <motion.a
              href={waURL(CONFIG.wa.msgFinal)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-10 py-5 rounded-full font-bold text-lg transition-all overflow-hidden"
              style={{ animation: 'ctaPulse 2.5s ease-in-out infinite' }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              Enviar minha aplicação
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-[#888888] font-medium bg-white px-4 py-2 rounded-full border border-[#E9ECEF] shadow-[var(--sh)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0090FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0090FF]"></span>
              </span>
              Abre o WhatsApp · Resposta em até 24h
            </div>
            <p className="text-xs text-[#888888]">Análise gratuita · Sem compromisso · Resposta em até 24h</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
