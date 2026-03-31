import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { fadeUp, stagger } from '../shared/animations';
import { CONFIG } from '../config';

const values = [
  {
    icon: Target,
    title: "Método Validado",
    desc: "Testados em OdontoCompany, Sorridents e Cotia Clínica. R$50M+ em resultados reais."
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
    <section id="sobre" className="py-16 md:py-20 bg-[#F8F9FA] relative overflow-hidden border-t border-[#E9ECEF]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Right Content - Visual (Inverted to Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center order-2 lg:order-1"
          >
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#E9ECEF_1px,transparent_1px),linear-gradient(to_bottom,#E9ECEF_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Main Visual Card */}
            <div className="relative w-full max-w-md bg-white border border-[#E9ECEF] shadow-[0_8px_40px_rgba(0,0,0,0.1)] rounded-3xl p-5 md:p-8">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0090FF]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00D1FF]/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#E9ECEF]">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0090FF] to-[#00D1FF] flex items-center justify-center shadow-[0_4px_14px_rgba(0,144,255,0.3)]">
                    <span className="text-2xl font-bold text-white">IN</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">{CONFIG.brand.name}</h3>
                    <p className="text-[#0090FF] text-sm font-medium">{CONFIG.brand.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Método dos 7 Pilares da Persuasão",
                    "IA treinada para conduzir vendas",
                    "Treinamento semanal da equipe",
                    "Consultoria de marketing semanal"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0090FF] shrink-0" />
                      <span className="text-[#4A4A4A] font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[#E9ECEF]">
                  <div className="bg-[#0090FF]/5 border border-[#0090FF]/20 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-[#888888] text-xs uppercase tracking-wider font-semibold mb-1">Nossa Missão</p>
                      <p className="text-[#0090FF] font-medium text-sm">Erradicar o amadorismo comercial e transformar a venda em consequência inevitável.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Content (Text - Inverted to Right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-xs font-semibold uppercase tracking-wider mb-6">
                Sobre a {CONFIG.brand.name}
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">
                Muito mais que automação. Um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">método de R$ 50 milhões.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-[#4A4A4A] leading-relaxed">
                <strong className="text-[#1A1A1A]">Danilo Oliveira</strong> (R$50M+ em vendas no nicho de saúde) + <strong className="text-[#1A1A1A]">Marcos</strong> (Full Stack Marketer, 10+ anos em performance). A venda como consequência inevitável.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white border border-[#E9ECEF] shadow-[var(--sh)] p-5 rounded-2xl hover:border-[#0090FF]/20 hover:shadow-[0_4px_14px_rgba(0,144,255,0.08)] transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#0090FF]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#0090FF]" />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">{item.desc}</p>
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
