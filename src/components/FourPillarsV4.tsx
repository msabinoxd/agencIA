import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BarChart3, UserCircle, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'Tráfego Pago',
    desc: 'Anúncios que chegam na pessoa certa, na hora certa.',
    svgPath: 'M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3',
  },
  {
    icon: UserCircle,
    title: 'Especialista Estratégico',
    desc: 'Processo desenhado com os 7 Pilares da Persuasão.',
  },
  {
    icon: Users,
    title: 'Comercial',
    desc: 'Contratação · Integração · Treinamento da equipe.',
  },
  {
    icon: CheckCircle,
    title: 'Acompanhamento',
    desc: 'Consultoria semanal e suporte contínuo.',
  },
];

export function FourPillarsV4() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const CARD_WIDTH = 300; // approx card + gap

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    return () => el.removeEventListener('scroll', updateArrows);
  }, []);

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? CARD_WIDTH : -CARD_WIDTH, behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#E9ECEF] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Prev Arrow */}
        <button
          onClick={() => scroll('prev')}
          disabled={!canPrev}
          aria-label="Anterior"
          style={{
            position: 'absolute',
            left: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: canPrev ? '#0090FF' : '#E9ECEF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: canPrev ? 'pointer' : 'default',
            transition: 'all 0.2s',
            boxShadow: canPrev ? '0 4px 14px rgba(0,144,255,0.3)' : 'none',
          }}
        >
          <ChevronLeft
            style={{ width: '18px', height: '18px', color: canPrev ? '#fff' : '#aaa' }}
          />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '4px',
          }}
          className="[&::-webkit-scrollbar]:hidden"
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  flex: '0 0 calc(25% - 9px)',
                  minWidth: '200px',
                  scrollSnapAlign: 'start',
                }}
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
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => scroll('next')}
          disabled={!canNext}
          aria-label="Próximo"
          style={{
            position: 'absolute',
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: canNext ? '#0090FF' : '#E9ECEF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: canNext ? 'pointer' : 'default',
            transition: 'all 0.2s',
            boxShadow: canNext ? '0 4px 14px rgba(0,144,255,0.3)' : 'none',
          }}
        >
          <ChevronRight
            style={{ width: '18px', height: '18px', color: canNext ? '#fff' : '#aaa' }}
          />
        </button>

      </div>
    </section>
  );
}
