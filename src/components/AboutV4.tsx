import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { fadeUp, stagger } from '../shared/animations';
import { CONFIG } from '../config';

const values = [
  {
    icon: Target,
    title: "Método Validado",
    desc: "Testados em OdontoCompany, Sorridents e Cotia Clínica. R$80M+ em resultados reais."
  },
  {
    icon: Lightbulb,
    title: "IA Persuasiva",
    desc: "Agente treinado para conduzir negociações, fazer acompanhamento e gerenciar o sistema de gestão como um atendente comercial de alta performance."
  },
  {
    icon: Rocket,
    title: "Equipe Completa",
    desc: "Tráfego, funil, IA, treinamento, consultoria e suporte. Tudo junto, toda semana."
  }
];

export function AboutV4() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden border-t border-[#E9ECEF]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual Side (Left on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md floating">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#0090FF]/20 to-[#00D1FF]/20 rounded-[40px] blur-3xl opacity-50" />
              
              {/* Main Visual Card */}
              <div className="relative glass-card border-white shadow-[var(--sh-deep)] rounded-[40px] p-8 md:p-10">
                <div className="flex items-center gap-5 mb-10 pb-8 border-b border-[#E9ECEF]/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0090FF] to-[#00D1FF] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-white italic">IN</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">{CONFIG.brand.name}</h3>
                    <p className="text-[#0090FF] text-sm font-bold uppercase tracking-widest">{CONFIG.brand.tagline}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    "Método dos 7 Pilares da Persuasão",
                    "IA treinada para conduzir vendas",
                    "Treinamento semanal da equipe",
                    "Consultoria estratégica de escala"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#0090FF]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#0090FF]" />
                      </div>
                      <span className="text-[#4A4A4A] font-bold text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-[#1A1A1A] rounded-2xl shadow-xl">
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-black mb-2">Missão</p>
                  <p className="text-white font-medium text-sm leading-relaxed">Erradicar o amadorismo comercial e transformar a venda em consequência inevitável.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side (Right on Desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-10 order-1 lg:order-2"
          >
            <div className="max-w-xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] text-[#1A1A1A] text-[10px] font-black uppercase tracking-widest shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0090FF]" />
                Sobre a {CONFIG.brand.name} Group
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-8">
                Muito mais que automação. Um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">método de R$ 80 milhões.</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-medium">
                <strong className="text-[#1A1A1A]">Danilo Oliveira</strong> (R$80M+ em vendas no nicho de saúde) + <strong className="text-[#1A1A1A]">Marcos</strong> (Full Stack Marketer, 10+ anos em performance). A venda como consequência inevitável.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="grid gap-5">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start bg-white border border-[#E9ECEF] p-6 rounded-3xl hover:border-[#0090FF]/30 transition-all hover:shadow-[var(--sh)] group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0090FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0090FF] transition-colors">
                    <item.icon className="w-6 h-6 text-[#0090FF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-black text-lg mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

