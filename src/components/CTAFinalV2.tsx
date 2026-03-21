import { motion } from 'motion/react';
import { ArrowRight, X, Check, CheckCircle2 } from 'lucide-react';
import { waURL, CONFIG } from '../config';
import { fadeUp, stagger, scaleIn } from '../shared/animations';

const notForYou = [
  "Você quer só \"mais um robô de WhatsApp barato\"",
  "Sua clínica recebe menos de 30 leads por mês",
  "Você não está disposto a estruturar processos e treinar equipe",
  "Você quer resultado sem envolver o comercial interno da clínica",
];

const forYou = [
  "Você investe em tráfego e sabe que perde leads no atendimento",
  "Você quer previsibilidade de caixa, não depender da sorte da equipe",
  "Você entende que tecnologia + processo + pessoas = escala real",
  "Você está pronto para transformar sua clínica numa operação de alta performance",
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

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-5 tracking-tight leading-[1.1] text-center"
        >
          Não trabalhamos com{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">todo mundo.</span>{' '}
          E isso é proposital.
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#4A4A4A] mb-12 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Implementar um ecossistema comercial completo leva tempo, atenção e presença real da nossa equipe. Por isso, limitamos o número de clínicas que assessoramos ao mesmo tempo.
        </motion.p>

        {/* 4 parágrafos de corpo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4 mb-14 text-center"
        >
          <p className="text-[#4A4A4A] leading-relaxed font-semibold">
            Não por falta de demanda. Por responsabilidade com o resultado.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            Quando a Intalky Group entra numa clínica, implantamos a IA, estruturamos o funil, configuramos o CRM, treinamos a equipe e acompanhamos a operação semana a semana. Isso só funciona quando a clínica tem estrutura para absorver — e o dono tem disposição para mudar o processo, não só adicionar uma ferramenta.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            Clínicas que querem <em>"mais um robô de WhatsApp"</em> não são o nosso perfil. Empresários que entenderam que o gargalo é o processo comercial — e que estão prontos para construir algo previsível — são exatamente quem buscamos.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed italic">
            Se você chegou até aqui, é provável que você seja um deles.
          </p>
        </motion.div>

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
          className="text-center text-lg font-bold text-[#1A1A1A] mb-6"
        >
          Preencha a aplicação. Nossa equipe analisa e entra em contato em até 24 horas.
        </motion.p>

        {/* Microcopy acima do botão */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[#888888] mb-6 max-w-lg mx-auto"
        >
          Apenas clínicas com perfil adequado são convidadas para uma sessão estratégica. Vagas limitadas por capacidade de entrega da equipe.
        </motion.p>

        {/* Scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Vagas abertas para análise — número limitado por capacidade de entrega
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
            <p className="text-xs text-[#888888]">Resposta em até 24h úteis · Sem compromisso · Vagas limitadas</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
