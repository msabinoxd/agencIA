import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { waURL, CONFIG } from '../config';

export function TwoPiecesBlock() {
  return (
    <section className="relative py-24 overflow-hidden bg-white border-t border-b border-[#E9ECEF]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0090FF]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">

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
          className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight text-center mb-16"
        >
          A IA resolve{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">metade do problema.</span>{' '}
          Só metade.
        </motion.h2>

        {/* PARTE 1 — O que a IA faz */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 mb-12"
        >
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            Vamos começar pelo que a Intalky AI faz de verdade.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed text-lg">
            Ela atende em menos de 3 segundos. A qualquer hora. Sem humor ruim, sem dia difícil, sem pedir aumento. Ela lê a mensagem do lead, identifica a dor por trás da pergunta, ajusta o tom de voz e conduz a conversa com a mesma fluidez de um consultor experiente. Manda áudio quando a situação pede. Contorna objeção de preço sem gaguejar. Agenda a avaliação e confirma a presença no dia anterior.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed">
            É um closer digital que trabalha 24 horas por dia, 7 dias por semana. Sem folga. Sem rescisão.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed">
            E funciona. Clínicas que implantaram a Intalky AI registraram aumento de até{' '}
            <strong className="text-[#1A1A1A]">70% na taxa de agendamentos</strong>{' '}
            e queda expressiva no no-show. Os números são reais — você vai ver os cases mais abaixo.
          </p>
        </motion.div>

        {/* Divisor visual */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center my-12"
        >
          <div className="w-full border-t border-[#E9ECEF]" />
          <div className="absolute bg-white px-4 text-[#888888] text-xs font-bold uppercase tracking-widest">
            mas
          </div>
        </motion.div>

        {/* PARTE 2 — A virada narrativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 mb-12"
        >
          <p className="text-lg text-[#1A1A1A] font-bold leading-relaxed">
            Mas aqui está o que nenhum vendedor de software vai te contar.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed text-lg">
            Quando esse paciente — qualificado pela IA, aquecido durante dias de conversa, convicto de que sua clínica é a certa — finalmente senta na cadeira de avaliação, o jogo muda completamente.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed font-semibold">
            Porque agora quem vende é o ser humano.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed">
            E se a sua recepcionista não souber criar conexão nos primeiros dois minutos, o paciente fecha emocionalmente antes de ouvir qualquer proposta. Se o seu avaliador não tiver um CRM que mostre o histórico da conversa, ele vai começar do zero — sem saber que o paciente tem medo de agulha, que tem uma formatura em três meses e que já pesquisou três clínicas antes de escolher a sua.
          </p>

          <p className="text-[#4A4A4A] leading-relaxed">
            E se, na hora de apresentar o plano de tratamento, ninguém tiver ancorado o valor antes de falar o número... o paciente ouve R$4.800 e pensa uma única coisa:{' '}
            <em>"vou pesquisar mais."</em>
          </p>

          <p className="text-xl text-[#1A1A1A] font-bold leading-snug">
            A IA fez a parte dela com perfeição. O processo humano destruiu a venda em três minutos.
          </p>
        </motion.div>

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
            href={waURL(CONFIG.wa.msgHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#F0F9FF] text-[#0090FF] border-2 border-[#0090FF] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(0,144,255,0.15)]"
          >
            Quero ver como funciona o ecossistema completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
