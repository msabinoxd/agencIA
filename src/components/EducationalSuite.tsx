import { motion } from 'motion/react';
import { Play, Tv, GraduationCap, Mail, ChevronRight, Award, Clock } from 'lucide-react';

const courses = [
    { id: 1, title: 'Masterclass: Escala com IA', duration: '45 min', category: 'Estratégia' },
    { id: 2, title: 'Automação de Vendas 2.0', duration: '1h 20min', category: 'Tecnologia' },
    { id: 3, title: 'Neuromarketing no WhatsApp', duration: '30 min', category: 'Vendas' },
    { id: 4, title: 'CRM Avançado: n8n Workflow', duration: '55 min', category: 'Sistemas' },
];

export function EducationalSuite() {
    return (
        <section id="educacional" className="py-32 bg-[#F8F9FA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Content */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0090FF]/10 border border-[#0090FF]/20 text-[#0090FF] text-sm font-bold tracking-widest uppercase mb-6"
                        >
                            <Tv className="w-4 h-4" />
                            Netflix-Style Learning
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight"
                        >
                            Educação e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0090FF] to-[#00D1FF]">Autoridade</span> em um só lugar.
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-[#4A4A4A] max-w-sm md:text-right"
                    >
                        Transforme seu conhecimento em um império digital com plataformas exclusivas de e-Learning e Webinars.
                    </motion.p>
                </div>

                {/* Netflix Grid */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-[#0090FF]" />
                            Plataforma de Alunos (LMS)
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {courses.map((course, idx) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#0090FF]/20 to-[#00D1FF]/10 border border-[#E9ECEF] cursor-pointer hover:shadow-[0_8px_24px_rgba(0,144,255,0.15)] transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
                                    <div className="absolute inset-0 bg-[#0090FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                                        <span className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-widest">{course.category}</span>
                                        <h4 className="text-sm font-bold text-white leading-tight group-hover:text-[#00D1FF] transition-colors line-clamp-1">{course.title}</h4>
                                        <div className="flex items-center gap-3 text-[10px] text-white/60 pt-1">
                                            <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</div>
                                            <div className="flex items-center gap-1"><Award className="w-3 h-3 text-emerald-400" /> Certificado</div>
                                        </div>
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-110 group-hover:scale-100">
                                        <Play className="w-5 h-5 text-white fill-white" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Features Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Tv,
                                title: 'Webinars Automáticos',
                                desc: 'Realize vendas em massa com transmissões que parecem ao vivo, mas são 100% automatizadas.'
                            },
                            {
                                icon: Mail,
                                title: 'E-mail Marketing Infinito',
                                desc: 'Nutrição de leads com sequências lógicas baseadas no comportamento do aluno na plataforma.'
                            },
                            {
                                icon: Award,
                                title: 'Sistema de Provas & Certificados',
                                desc: 'Gere autoridade imediata liberando certificados personalizados automaticamente no final do curso.'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="p-8 rounded-[32px] bg-white border border-[#E9ECEF] shadow-[var(--sh)] hover:shadow-[0_8px_24px_rgba(0,144,255,0.1)] hover:border-[#0090FF]/20 transition-all group"
                            >
                                <div className="w-12 h-12 bg-[#0090FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-[#0090FF] group-hover:to-[#00D1FF] group-hover:scale-110 transition-all duration-500">
                                    <feature.icon className="w-6 h-6 text-[#0090FF] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#0090FF] transition-colors">{feature.title}</h3>
                                <p className="text-[#888888] text-sm leading-relaxed">{feature.desc}</p>
                                <div className="mt-6 flex items-center gap-2 text-xs font-black text-[#0090FF] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                    Saiba mais <ChevronRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0090FF]/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D1FF]/5 blur-[100px] rounded-full" />
        </section>
    );
}
