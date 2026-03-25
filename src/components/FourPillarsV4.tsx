import { motion } from 'motion/react';
import { BarChart3, UserCircle, Users, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'Tráfego Pago',
    desc: 'Ads que chegam na pessoa certa, na hora certa.',
  },
  {
    icon: UserCircle,
    title: 'Especialista Estratégico',
    desc: 'Funil desenhado com os 7 Pilares da Persuasão.',
  },
  {
    icon: Users,
    title: 'Comercial',
    desc: 'Contratação · Onboard · Treinamento da equipe.',
  },
  {
    icon: CheckCircle,
    title: 'Acompanhamento',
    desc: 'Consultoria semanal e suporte contínuo.',
  },
];

export function FourPillarsV4() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E9ECEF]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#F8F9FA] border border-[#E9ECEF] hover:border-[#0090FF]/30 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,144,255,0.1)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0090FF]/10 flex items-center justify-center group-hover:bg-[#0090FF] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#0090FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-[#1A1A1A] leading-tight">{p.title}</h3>
                <p className="text-xs text-[#888888] leading-snug">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
