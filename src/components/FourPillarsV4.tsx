import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, UserCircle, Users, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'Tráfego Pago',
    desc: 'Anúncios que chegam na pessoa certa, na hora certa.',
    color: '#0090FF',
    bg: '#EBF5FF',
  },
  {
    icon: UserCircle,
    title: 'Especialista Estratégico',
    desc: 'Processo desenhado com os 7 Pilares da Persuasão.',
    color: '#7C3AED',
    bg: '#F3EEFF',
  },
  {
    icon: Users,
    title: 'Comercial',
    desc: 'Contratação · Integração · Treinamento da equipe.',
    color: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: CheckCircle,
    title: 'Acompanhamento',
    desc: 'Consultoria semanal e suporte contínuo.',
    color: '#D97706',
    bg: '#FFFBEB',
  },
];

// How much each card peeks out from behind (px)
const PEEK = 28;

export function FourPillarsV4() {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ padding: '56px 0', background: '#fff', borderBottom: '1px solid #E9ECEF' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#0090FF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Como funciona
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, color: '#1A1A1A', margin: 0 }}>
            4 Pilares do Sistema Intalky
          </h2>
        </motion.div>

        {/* Stacked Card Deck */}
        <div
          style={{
            position: 'relative',
            /* Total height = card height + peeking of other cards */
            height: '260px',
            maxWidth: '420px',
            margin: '0 auto',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const total = pillars.length;
            const isTop = i === total - 1;

            // In stacked state: each card peeks from behind by PEEK * i
            // When hovered: fan out horizontally or vertically
            const stackedTop = (total - 1 - i) * PEEK;

            // Fan spread: top card goes to index 0 position, bottom goes to index 3
            // We spread vertically downward so you see all 4
            const spreadTop = i * 72;

            return (
              <motion.div
                key={p.title}
                initial={false}
                animate={{
                  top: hovered ? spreadTop : stackedTop,
                  scale: hovered ? 1 : 1 - (total - 1 - i) * 0.04,
                  zIndex: hovered ? total - i : i + 1,
                  boxShadow: hovered
                    ? '0 8px 28px rgba(0,0,0,0.10)'
                    : isTop
                    ? '0 8px 28px rgba(0,0,0,0.12)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                  opacity: hovered ? 1 : i === 0 ? 0.55 : i === 1 ? 0.75 : i === 2 ? 0.9 : 1,
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 26, delay: hovered ? (total - 1 - i) * 0.04 : i * 0.03 }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  borderRadius: '20px',
                  background: '#fff',
                  border: `1.5px solid ${p.bg}`,
                  padding: '24px 24px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '18px',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: p.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: '26px', height: '26px', color: p.color }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '13px', fontWeight: 800, color: '#1A1A1A', margin: '0 0 4px 0', letterSpacing: '0.01em' }}>
                    {p.title}
                  </p>
                  <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>

                {/* Color accent bar */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '18px',
                  bottom: '18px',
                  width: '3px',
                  borderRadius: '0 3px 3px 0',
                  background: p.color,
                }} />
              </motion.div>
            );
          })}
        </div>

        {/* Hint text */}
        <motion.p
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          style={{ textAlign: 'center', fontSize: '12px', color: '#aaa', marginTop: '16px' }}
        >
          Passe o mouse para ver todos os pilares ↑
        </motion.p>

      </div>
    </section>
  );
}
