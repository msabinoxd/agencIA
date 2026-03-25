import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, UserCircle, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'Tráfego Pago',
    desc: 'Anúncios que chegam na pessoa certa, na hora certa.',
    color: '#0090FF',
    lightBg: '#EBF5FF',
  },
  {
    icon: UserCircle,
    title: 'Especialista Estratégico',
    desc: 'Processo desenhado com os 7 Pilares da Persuasão.',
    color: '#7C3AED',
    lightBg: '#F3EEFF',
  },
  {
    icon: Users,
    title: 'Comercial',
    desc: 'Contratação · Integração · Treinamento da equipe.',
    color: '#059669',
    lightBg: '#ECFDF5',
  },
  {
    icon: CheckCircle,
    title: 'Acompanhamento',
    desc: 'Consultoria semanal e suporte contínuo.',
    color: '#D97706',
    lightBg: '#FFFBEB',
  },
];

// Position index relative to active: 0 = active, 1 = next, 2 = after-next, -1 = prev
function getRelativePos(cardIndex: number, activeIndex: number, total: number) {
  let rel = (cardIndex - activeIndex + total) % total;
  if (rel > total / 2) rel -= total; // wrap: -2 -1 0 1 2
  return rel;
}

// Styles per relative position (mirrors .swiper-slide-active, .swiper-slide-next etc.)
function getSlideStyle(rel: number): React.CSSProperties {
  // Overlap negative margin is applied globally; per-position only z/scale/opacity change
  if (rel === 0) {
    // .swiper-slide-active — front card
    return { zIndex: 10, transform: 'scale(1)', opacity: 1, filter: 'none' };
  } else if (rel === 1) {
    // .swiper-slide-next
    return { zIndex: 7, transform: 'scale(0.95)', opacity: 0.85, filter: 'brightness(0.96)' };
  } else if (rel === 2) {
    // two after active
    return { zIndex: 4, transform: 'scale(0.90)', opacity: 0.65, filter: 'brightness(0.88)' };
  } else if (rel === -1) {
    // .swiper-slide-prev
    return { zIndex: 6, transform: 'scale(0.93)', opacity: 0.55, filter: 'brightness(0.82)' };
  }
  // far behind
  return { zIndex: 2, transform: 'scale(0.86)', opacity: 0.40, filter: 'brightness(0.75)' };
}

export function FourPillarsV4() {
  const [active, setActive] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const total = pillars.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const CARD_W = 260; // card width px
  const OVERLAP = -110; // negative margin — cards overlap by 110px

  return (
    <section style={{ padding: '56px 0 48px', background: '#fff', borderBottom: '1px solid #E9ECEF' }}>
      {/* CSS: reproduzindo lógica do N-Carousel swiper */}
      <style>{`
        .fp-swiper-wrapper {
          display: flex;
          align-items: center;
          overflow: visible;  /* ← key: allows cards to show outside container */
        }
        .fp-slide {
          flex-shrink: 0;
          width: ${CARD_W}px;
          margin-right: ${OVERLAP}px; /* ← negative margin = sobreposição */
          transition:
            transform 0.5s cubic-bezier(0.4,0,0.2,1),
            opacity 0.5s cubic-bezier(0.4,0,0.2,1),
            filter 0.5s cubic-bezier(0.4,0,0.2,1),
            z-index 0s;
          position: relative;
          cursor: pointer;
        }
        /* Hover: translateY negativo para interatividade */
        .fp-slide:hover {
          transform: scale(1) translateY(-10px) !important;
          opacity: 1 !important;
          filter: none !important;
          z-index: 20 !important;
        }
        @media (max-width: 767px) {
          /* Mobile: desativa sobreposição */
          .fp-swiper-wrapper {
            flex-direction: column;
          }
          .fp-slide {
            width: 100%;
            margin-right: 0;
            margin-bottom: 12px;
          }
          .fp-slide:hover {
            transform: none !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#0090FF', letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Como funciona
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#1A1A1A', margin: 0 }}>
            Os 4 Pilares do Sistema Intalky
          </h2>
        </motion.div>

        {/* Carousel area */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>

          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Anterior"
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: '#0090FF', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,144,255,0.30)',
              flexShrink: 0,
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <ChevronLeft style={{ width: '20px', height: '20px', color: '#fff' }} />
          </button>

          {/* Swiper wrapper — overflow: visible to show stacked cards */}
          <div
            style={{
              overflow: 'visible',
              width: `${CARD_W + (total - 1) * Math.abs(OVERLAP) / 2}px`,
              maxWidth: '100%',
            }}
          >
            <div className="fp-swiper-wrapper">
              {/* Re-order so active card renders last (on top in DOM) */}
              {Array.from({ length: total }, (_, i) => {
                const cardIdx = (active + i) % total; // render from active outward
                const p = pillars[cardIdx];
                const rel = getRelativePos(cardIdx, active, total);
                const posStyle = getSlideStyle(rel);
                const Icon = p.icon;
                const isHov = hoveredIdx === cardIdx;

                return (
                  <div
                    key={p.title}
                    className="fp-slide"
                    style={{ ...posStyle }}
                    onClick={() => setActive(cardIdx)}
                    onMouseEnter={() => setHoveredIdx(cardIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Card face */}
                    <div style={{
                      background: '#fff',
                      border: `1.5px solid ${isHov ? p.color : '#E9ECEF'}`,
                      borderRadius: '20px',
                      padding: '28px 24px 24px',
                      boxShadow: rel === 0
                        ? '0 12px 32px rgba(0,0,0,0.12)'
                        : '0 4px 12px rgba(0,0,0,0.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {/* Top color bar */}
                      <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: '3px',
                        background: p.color,
                        borderRadius: '20px 20px 0 0',
                      }} />

                      {/* Slide number badge */}
                      <span style={{
                        position: 'absolute',
                        top: '14px', right: '16px',
                        fontSize: '11px', fontWeight: 700,
                        color: p.color,
                        background: p.lightBg,
                        borderRadius: '999px',
                        padding: '2px 10px',
                        letterSpacing: '0.08em',
                      }}>
                        {String(pillars.indexOf(p) + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <div style={{
                        width: '52px', height: '52px', borderRadius: '14px',
                        background: p.lightBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '8px',
                        transition: 'background 0.3s',
                      }}>
                        <Icon style={{ width: '26px', height: '26px', color: p.color }} />
                      </div>

                      {/* Title */}
                      <p style={{ fontSize: '15px', fontWeight: 800, color: '#1A1A1A', margin: 0 }}>
                        {p.title}
                      </p>

                      {/* Desc */}
                      <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.55, margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Próximo"
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: '#0090FF', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0,144,255,0.30)',
              flexShrink: 0,
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <ChevronRight style={{ width: '20px', height: '20px', color: '#fff' }} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Pilar ${i + 1}`}
              style={{
                width: i === active ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: i === active ? '#0090FF' : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.4s, background 0.3s',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
