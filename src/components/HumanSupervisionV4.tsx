import { motion } from 'motion/react';
import { Eye, UserCog, ShieldAlert, Activity } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

export function HumanSupervisionV4() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] shadow-[var(--sh)] mb-6"
          >
            <ShieldAlert className="w-4 h-4 text-[#0090FF]" />
            <span className="text-xs font-medium text-[#4A4A4A] uppercase tracking-wider">O Nosso Diferencial</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-tight"
          >
            IA executa em escala. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Nós garantimos o resultado.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4A4A4A] leading-relaxed"
          >
            Não basta automatizar. É preciso supervisão estratégica e treinamento contínuo para cada lead virar faturamento.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Visual Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[220px] sm:max-w-sm mx-auto">
              {/* Círculo Central (IA) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border border-[#0090FF]/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(0,144,255,0.15)]">
                  <Activity className="w-12 h-12 md:w-16 md:h-16 text-[#0090FF] animate-pulse" />

                  {/* Órbitas */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute inset-[-30px] md:inset-[-40px] border border-dashed border-[#E9ECEF] rounded-full"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-[#E9ECEF] shadow-[var(--sh)] rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-[#0090FF]" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-[-60px] md:inset-[-80px] border border-[#E9ECEF] rounded-full"
                  >
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-white border border-[#E9ECEF] shadow-[var(--sh)] rounded-full flex items-center justify-center">
                      <UserCog className="w-4 h-4 text-[#00D1FF]" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-0"
          >
            {/* Item 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#0090FF]/10 flex items-center justify-center border border-[#0090FF]/20 shrink-0 z-10">
                  <Eye className="w-5 h-5 text-[#0090FF]" />
                </div>
                <div className="w-px h-24 md:h-32 bg-gradient-to-b from-[#0090FF]/50 to-[#00D1FF]/50 relative flex justify-center my-2">
                  <motion.div
                    animate={{ y: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-[#0090FF] shadow-[0_0_10px_rgba(0,144,255,0.8)] absolute top-2"
                  />
                </div>
              </div>

              <div className="pt-2 pb-8">
                <h3 className="text-[#1A1A1A] font-semibold text-xl md:text-2xl mb-3">Supervisão Ativa da Intalky</h3>
                <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
                  Nossa equipe monitora todas as interações da IA no CRM, ajustando fluxos em tempo real para maximizar a conversão.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00D1FF]/10 flex items-center justify-center border border-[#00D1FF]/20 shrink-0 z-10">
                  <UserCog className="w-5 h-5 text-[#00D1FF]" />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-[#1A1A1A] font-semibold text-xl md:text-2xl mb-3">Treinamento Semanal + Consultoria</h3>
                <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
                  Mentorias semanais de vendas e consultoria de marketing ativa. Você nunca joga sozinho.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-24 flex justify-center">
          <ScrollIndicator text="Veja os resultados" />
        </div>
      </div>
    </section>
  );
}
