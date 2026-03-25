import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, MessageSquare, Users, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { useRef } from 'react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#0090FF]" />,
    title: "1. Tráfego Pago Estratégico",
    description: "Ads que chegam na pessoa certa, na hora certa. Menos leads ruins, mais agenda cheia. Cada real investido é rastreado até o fechamento — sem achismo, só dado.",
    metric: "ROI médio: 8:1",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Bot className="w-6 h-6 text-[#0090FF]" />,
    title: "2. Funil de Vendas",
    description: "Funil desenhado com os 7 Pilares da Persuasão de Danilo Oliveira. Do clique no anúncio ao agendamento confirmado — cada etapa otimizada para converter.",
    metric: "Conversão: +3x",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#0090FF]" />,
    title: "3. Intalky Essencial",
    description: "A IA atende, qualifica e agenda consultas em menos de 3 segundos, 24 horas por dia. Inclui confirmação automática e redução ativa de no-show.",
    metric: "Resposta: < 3s",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0090FF]" />,
    title: "4. Intalky Pro",
    description: "O SDR digital que nunca pede demissão — follow-up, pós-venda e reativação de pacientes inativos. A IA gerencia o CRM completo. Churn zero. LTV máximo.",
    metric: "Follow-up: automático",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Users className="w-6 h-6 text-[#0090FF]" />,
    title: "5. Treinamento Semanal",
    description: "Sessões semanais com Danilo Oliveira para treinar sua equipe comercial: roleplay, gestão de objeções, análise de CRM e métricas. Porque quando o SDR humano aprender e sair, a metodologia fica na IA.",
    metric: "SDRs 2x mais eficientes",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#0090FF]" />,
    title: "6. Consultoria & Suporte",
    description: "Consultoria semanal de vendas e marketing com o time Intalky, alinhamento estratégico de crescimento e suporte em horário comercial. Você nunca está sozinho.",
    metric: "Suporte: horário comercial",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop"
  }
];

export function SolutionsV4() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="solucoes" className="py-24 bg-[#F8F9FA] relative overflow-hidden" ref={containerRef}>
      <div className="absolute -right-40 top-1/2 w-96 h-96 bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] shadow-[var(--sh)] mb-6"
          >
            <Bot className="w-4 h-4 text-[#0090FF]" />
            <span className="text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">O Ecossistema Completo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight"
          >
            Seis pilares que transformam leads <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">em faturamento previsível.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4A4A4A]"
          >
            Da captação ao pós-venda, cada etapa do seu funil coberta por especialistas e IA.
          </motion.p>
        </div>

        {/* Vertical Flow */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-[#E9ECEF] -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#0090FF] to-[#00D1FF]"
              style={{ height: pathHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Ponto na linha */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#E9ECEF] shadow-[var(--sh)] flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-3 h-3 rounded-full bg-[#0090FF] shadow-[0_0_10px_rgba(0,144,255,0.5)]"
                    />
                  </div>

                  {/* Conteúdo de Texto */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}
                  >
                    <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} gap-4`}>
                      <div className="w-12 h-12 bg-white border border-[#E9ECEF] shadow-[var(--sh)] rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
                        <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base mb-4">
                          {feature.description}
                        </p>

                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-mono font-medium ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          <BarChart3 className="w-3 h-3" />
                          {feature.metric}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Imagem */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className={`hidden md:flex md:w-1/2 ${isEven ? 'md:pr-16 justify-end' : 'md:pl-16 justify-start'}`}
                  >
                    <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#E9ECEF] shadow-[var(--sh)] group">
                      <div className="absolute inset-0 bg-[#0090FF]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
