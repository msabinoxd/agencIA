import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BarChart3, UserCircle, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'Tráfego Pago',
    desc: 'Anúncios que chegam na pessoa certa, na hora certa.',
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
  const [canNext, setCanNext] = useState(false);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth > el.clientWidth + 4;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(scrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const slideW = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 12 : 280;
    el.scrollBy({ left: dir === 'next' ? slideW : -slideW, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '48px 0', background: '#fff', borderBottom: '1px solid #E9ECEF' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* Prev Arrow */}
        {canPrev && (
          <button
            onClick={() => scroll('prev')}
            aria-label="Anterior"
            style={{
              position: 'absolute',
              left: '-4px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#0090FF',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,144,255,0.35)',
            }}
          >
            <ChevronLeft style={{ width: '18px', height: '18px', color: '#fff' }} />
          </button>
        )}

        {/* Scrollable Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '12px',
            overflowX: 'auto',
            overflowY: 'visible',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '8px 2px 12px 2px', /* top padding so hover shadow isn't clipped */
          }}
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
                  flexShrink: 0,
                  flexGrow: 0,
                  width: 'calc(25% - 9px)',
                  minWidth: '200px',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  padding: '20px',
                  borderRadius: '16px',
                  background: '#F8F9FA',
                  border: '1px solid #E9ECEF',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                  boxSizing: 'border-box',
                }}
                whileHover={{
                  boxShadow: '0 4px 20px rgba(0,144,255,0.12)',
                  borderColor: 'rgba(0,144,255,0.3)',
                  background: '#fff',
                }}
              >
                {/* Icon box */}
                <motion.div
                  whileHover={{ scale: 1.1, background: '#0090FF' }}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0,144,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s, transform 0.3s',
                    flexShrink: 0,
                  }}
                >
                  <Icon style={{ width: '24px', height: '24px', color: '#0090FF' }} />
                </motion.div>

                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  {p.title}
                </h3>

                <p style={{
                  fontSize: '12px',
                  color: '#888888',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Next Arrow */}
        {canNext && (
          <button
            onClick={() => scroll('next')}
            aria-label="Próximo"
            style={{
              position: 'absolute',
              right: '-4px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#0090FF',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,144,255,0.35)',
            }}
          >
            <ChevronRight style={{ width: '18px', height: '18px', color: '#fff' }} />
          </button>
        )}

        {/* Hide scrollbar webkit */}
        <style>{`
          div[data-pillars-track]::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
