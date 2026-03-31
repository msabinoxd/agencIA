import { motion } from 'motion/react';
import { Eye, UserCog, ShieldAlert, Activity } from 'lucide-react';

export function HumanSupervisionV4() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E9ECEF] shadow-[var(--sh)] mb-8"
          >
            <ShieldAlert className="w-4 h-4 text-[#0090FF]" />
            <span className="text-[10px] font-black text-[#4A4A4A] uppercase tracking-widest leading-none">Intalky Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#1A1A1A] mb-8 tracking-tighter leading-tight"
          >
            IA executa em escala. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Nós garantimos o resultado.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-medium"
          >
            Não basta automatizar. É preciso supervisão estratégica e treinamento contínuo para transformar interesse em faturamento real.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Item 1 */}
            <div className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0090FF]/10 flex items-center justify-center border border-[#0090FF]/20 shrink-0 z-10 group-hover:bg-[#0090FF] transition-colors duration-500">
                  <Eye className="w-6 h-6 text-[#0090FF] group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="w-px h-32 md:h-40 bg-gradient-to-b from-[#0090FF]/30 to-transparent relative flex justify-center my-4">
                  <motion.div
                    animate={{ y: [0, 100, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-[#0090FF] shadow-[0_0_15px_rgba(0,144,255,1)] absolute top-2"
                  />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-[#1A1A1A] font-black text-2xl md:text-3xl mb-4 tracking-tight">Supervisão Ativa da Intalky</h3>
                <p className="text-[#4A4A4A] leading-relaxed text-lg font-medium max-w-md">
                  Nossa equipe monitora todas as interações da IA no sistema de gestão, ajustando fluxos em tempo real para maximizar os fechamentos.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#00D1FF]/10 flex items-center justify-center border border-[#00D1FF]/20 shrink-0 z-10 group-hover:bg-[#00D1FF] transition-colors duration-500">
                  <UserCog className="w-6 h-6 text-[#00D1FF] group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-[#1A1A1A] font-black text-2xl md:text-3xl mb-4 tracking-tight">Treinamento Semanal + Consultoria</h3>
                <p className="text-[#4A4A4A] leading-relaxed text-lg font-medium max-w-md">
                  Mentorias semanais de vendas e consultoria de marketing ativa. Você nunca joga sozinho — somos seu braço comercial externo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Radar - Wrapped in Premium Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center floating bg-gradient-to-br from-[#F8F9FA] to-white rounded-[40px] border border-[#E9ECEF] shadow-[var(--sh-deep)] p-8">
              {/* Radar Logic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-white border border-[#0090FF]/20 flex items-center justify-center relative z-10 shadow-2xl">
                  <Activity className="w-16 h-16 md:w-20 md:h-20 text-[#0090FF] animate-pulse" />

                  {/* Órbitas Progressivas */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute inset-[-40px] md:inset-[-60px] border border-dashed border-[#0090FF]/10 rounded-full"
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-[#E9ECEF] shadow-[var(--sh)] rounded-2xl flex items-center justify-center">
                      <Eye className="w-5 h-5 text-[#0090FF]" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-[-90px] md:inset-[-120px] border border-dashed border-[#00D1FF]/10 rounded-full"
                  >
                    <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-white border border-[#E9ECEF] shadow-[var(--sh)] rounded-2xl flex items-center justify-center">
                      <UserCog className="w-5 h-5 text-[#00D1FF]" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
