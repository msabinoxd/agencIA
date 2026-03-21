import { motion } from 'motion/react';
import { Network, Database, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { waURL } from '../config';

const automations = [
    {
        title: 'Tráfego & Funil',
        desc: 'Meta Ads e Google Ads calibrados para o ICP da sua clínica + funil desenhado com os 7 Pilares da Persuasão de Danilo Oliveira.',
        icon: Network,
        features: ['ICP validado', 'Pixel de rastreamento', 'Funil de alta conversão'],
        waMsg: 'Olá! Quero saber mais sobre Tráfego & Funil da Intalky.'
    },
    {
        title: 'Intalky AI',
        desc: 'A única IA do mercado treinada com neurociência de vendas. Atende, qualifica, faz follow-up e gerencia o CRM 24/7.',
        icon: Database,
        features: ['Resposta em < 3s', 'Follow-up automático', 'Integração total CRM'],
        waMsg: 'Olá! Quero saber mais sobre a Intalky AI para minha clínica.'
    },
    {
        title: 'Gestão & Treinamento',
        desc: 'Treinamento semanal da equipe com Danilo Oliveira + consultoria de marketing com Marcos + suporte em horário comercial.',
        icon: Users,
        features: ['Roleplay semanal', 'Consultoria de vendas', 'Suporte comercial'],
        waMsg: 'Olá! Quero saber mais sobre Gestão & Treinamento da Intalky.'
    }
];

export function AutomationStack() {
    return (
        <section id="automacao" className="py-32 bg-[#F8F9FA] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#E9ECEF_1px,transparent_1px),linear-gradient(to_bottom,#E9ECEF_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <Zap className="w-5 h-5 text-[#0090FF]" />
                        <span className="text-sm font-bold text-[#0090FF] tracking-widest uppercase">Nossa Plataforma</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-6"
                    >
                        O arsenal que nenhum concorrente <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">tem ao mesmo tempo.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#4A4A4A]"
                    >
                        Método testado em R$50M+ em vendas. Tecnologia de ponta. Time especializado. Tudo junto, funcionando 24/7.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {automations.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative p-8 rounded-[32px] bg-white border border-[#E9ECEF] hover:border-[#0090FF]/30 hover:shadow-[0_8px_30px_rgba(0,144,255,0.12)] transition-all duration-500 overflow-hidden shadow-[var(--sh)]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0090FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-[#F1F3F5] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#0090FF] group-hover:to-[#00D1FF] group-hover:rotate-6 transition-all duration-500">
                                        <Icon className="w-7 h-7 text-[#0090FF] group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0090FF] transition-colors">{item.title}</h3>
                                    <p className="text-[#4A4A4A] leading-relaxed mb-8">{item.desc}</p>

                                    <ul className="space-y-3">
                                        {item.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-[#4A4A4A] font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-[#0090FF] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-6 border-t border-[#E9ECEF] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <a
                                            href={waURL(item.waMsg)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-[#0090FF] text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
                                        >
                                            Ver detalhes <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Integration Showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                    {['OdontoCompany', 'Sorridents', 'Odonto Special', 'B Facial Clinic', 'Cotia Clínica', 'RD Station'].map(brand => (
                        <span key={brand} className="inline-flex items-center px-5 py-2.5 rounded-xl border border-[#E9ECEF] bg-white text-sm font-bold text-[#4A4A4A] tracking-tight shadow-[var(--sh)]">{brand}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
