import { motion } from 'motion/react';
import { fadeUp, stagger } from '../shared/animations';

import marcosImg from '../assets/team/Marcos.png';
import daniloImg from '../assets/team/Danilo.jpg';
import leticiaImg from '../assets/team/Letícia.jpeg';
import rafaelaImg from '../assets/team/Rafaela.jpeg';
import edileuzaImg from '../assets/team/Edileuza.png';

const team = [
  {
    name: 'Marcos',
    role: 'Full Stack Marketer',
    description: 'Full Stack Marketer formado pela Digital Marketer · 10+ anos em marketing de performance · Estrategista do ecossistema digital da Intalky.',
    image: marcosImg,
  },
  {
    name: 'Danilo',
    role: 'Expert em Vendas & Persuasão',
    description: 'Criador dos 7 Pilares da Persuasão · R$50M+ em vendas no nicho de saúde · Mentor de equipes de alta performance · OdontoCompany · Sorridents.',
    image: daniloImg,
  },
  {
    name: 'Letícia',
    role: 'Atendimento Comercial',
    description: 'Especialista em filtragem de pacientes · Treinada com os 7 Pilares da Persuasão · Atendimento de alta conversão.',
    image: leticiaImg,
  },
  {
    name: 'Rafaela',
    role: 'Atendimento Comercial',
    description: 'Relacionamento comercial · Pós-venda e acompanhamento do paciente · Atendimento humanizado de alta performance.',
    image: rafaelaImg,
  },
  {
    name: 'Edileuza',
    role: 'Tráfego Pago',
    description: 'Especialista em Meta Ads & Google Ads · Menor custo por paciente e maior retorno para clínicas de saúde · Rastreamento e otimização de campanhas.',
    image: edileuzaImg,
  },
];

export function TeamV4() {
  return (
    <section id="equipe" className="py-16 md:py-32 bg-[#F8F9FA] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
              <span className="text-xs font-black text-[#4A4A4A] uppercase tracking-widest">Especialistas em Escala</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              A inteligência por trás da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF] italic">Automação</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-[#4A4A4A] font-medium tracking-tight">
              Nossa equipe combina expertise humana com inteligência artificial para entregar resultados fora da curva.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="group relative h-[450px] rounded-[40px] overflow-hidden bg-[#E9ECEF] border border-[#E9ECEF] hover:border-[#0090FF]/30 transition-all duration-500 shadow-[var(--sh)]"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=0090FF&color=fff&size=512&font-size=0.33`;
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                <div className="transform md:translate-y-20 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 backdrop-blur-md">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#00D1FF]">{member.role}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 italic">{member.name}</h3>

                  <p className="text-sm text-zinc-300 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed font-medium">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Top Glow Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
