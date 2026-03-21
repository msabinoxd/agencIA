import { motion } from 'motion/react';
import { Newspaper, Flame, ThermometerSun, MousePointerClick, ArrowRight } from 'lucide-react';

const articles = [
    { id: 1, title: 'Como a IA está reduzindo o custo por lead em 40%', tag: 'Case de Sucesso' },
    { id: 2, title: 'Por que seu atendimento humano está matando suas vendas', tag: 'Análise' },
];

export function BlogNourishment() {
    return (
        <section id="blog" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Visual: Lead Temperature */}
                    <div className="flex-1 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-10 rounded-[40px] bg-[#F8F9FA] border border-[#E9ECEF] overflow-hidden shadow-[var(--sh)]"
                        >
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-tight">Lead Temperature</h3>
                                    <ThermometerSun className="w-6 h-6 text-orange-500 animate-pulse" />
                                </div>

                                {/* Cold Lead */}
                                <div className="p-5 rounded-2xl bg-white border border-[#E9ECEF] opacity-60">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#0090FF]/10 flex items-center justify-center text-[#0090FF] font-bold italic">?</div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1A1A1A]">Lead Frio</p>
                                            <p className="text-xs text-[#888888]">Acabou de clicar no anúncio</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-4 h-8">
                                    <div className="w-px bg-gradient-to-b from-[#0090FF] to-orange-500" />
                                </div>

                                {/* Warming Up (Blog) */}
                                <div className="p-6 rounded-3xl bg-[#0090FF]/5 border border-[#0090FF]/20 relative shadow-[0_4px_14px_rgba(0,144,255,0.1)] scale-105 z-20">
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white text-[10px] font-black uppercase tracking-widest rounded-full">Blog & Conteúdo</div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0090FF]/10 flex items-center justify-center">
                                            <Newspaper className="w-6 h-6 text-[#0090FF]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1A1A1A]">Aquecimento Estratégico</p>
                                            <p className="text-xs text-[#0090FF] font-medium">Consumindo autoridade e quebrando objeções</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-4 h-8">
                                    <div className="w-px bg-gradient-to-b from-orange-500 to-rose-500" />
                                </div>

                                {/* Hot lead */}
                                <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center tracking-tighter text-orange-500 font-black">$$$</div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1A1A1A]">Lead no Ponto de Compra</p>
                                            <p className="text-xs text-orange-500">Pronto para fechar com o Closer</p>
                                        </div>
                                        <Flame className="w-5 h-5 text-orange-500 ml-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0090FF]/5 blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 blur-3xl" />
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold tracking-widest uppercase"
                        >
                            <Flame className="w-4 h-4" />
                            Lead Nourishment
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight"
                        >
                            Crie Desejo antes <br /> do <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Primeiro "Olá"</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-[#4A4A4A] leading-relaxed"
                        >
                            Um blog não serve apenas para SEO. Ele é a sua máquina de doutrinação que prepara o lead para comprar de você antes mesmo de falar com um vendedor.
                        </motion.p>

                        <div className="space-y-4 max-w-md">
                            {articles.map((article, idx) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-5 rounded-2xl bg-white border border-[#E9ECEF] shadow-[var(--sh)] hover:border-[#0090FF]/30 hover:shadow-[0_4px_14px_rgba(0,144,255,0.1)] transition-all flex items-center justify-between group cursor-pointer"
                                >
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase text-[#0090FF] tracking-widest">{article.tag}</span>
                                        <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#0090FF] transition-colors">{article.title}</h4>
                                    </div>
                                    <MousePointerClick className="w-5 h-5 text-[#E9ECEF] group-hover:text-[#0090FF] transition-all" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-[0_4px_14px_rgba(0,144,255,0.3)]"
                        >
                            Falar sobre Estratégia <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
