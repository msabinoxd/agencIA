import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, UserCircle, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export function FourPillarsV4() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const CARD_W = 280;
  const OVERLAP = -140; // margin-right negativo agressivo para o efeito de cartas de baralho

  return (
    <section className="py-16 bg-white border-b border-[#E9ECEF] overflow-hidden">
      <style>{`
        /* Container principal */
        .stacked-swiper {
          overflow: visible !important; /* ← CRUCIAL para o efeito stacked */
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0 60px !important;
        }

        .stacked-swiper .swiper-wrapper {
          overflow: visible !important;
        }

        .stacked-swiper .swiper-slide {
          width: ${CARD_W}px !important;
          margin-right: ${OVERLAP}px !important; /* ← Sobreposição */
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s, z-index 0.1s !important;
          cursor: pointer;
          position: relative;
        }

        /* Lógica de Z-Index e Scale baseada nas classes do Swiper */
        
        /* Card Ativo (Topo) */
        .stacked-swiper .swiper-slide-active {
          z-index: 10 !important;
          transform: scale(1) !important;
          opacity: 1 !important;
        }

        /* Próximo Card (Atrás do ativo) */
        .stacked-swiper .swiper-slide-next {
          z-index: 5 !important;
          transform: scale(0.92) !important;
          opacity: 0.8 !important;
        }

        /* Cards seguintes */
        .stacked-swiper .swiper-slide-next ~ .swiper-slide {
          z-index: 1 !important;
          transform: scale(0.85) !important;
          opacity: 0.5 !important;
        }

        /* Card Anterior (.prev) */
        .stacked-swiper .swiper-slide-prev {
          z-index: 4 !important;
          transform: scale(0.9) translateX(-20px) !important;
          opacity: 0.6 !important;
        }

        /* Efeito de HOVER (Elevação) */
        .stacked-swiper .swiper-slide:hover {
          transform: translateY(-15px) !important;
          z-index: 20 !important;
          opacity: 1 !important;
        }

        /* Custom Navigation */
        .nav-btn {
          width: 44px;
          height: 44px;
          background: #0090FF;
          border-radius: 50%;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 144, 255, 0.3);
          transition: all 0.2s;
          position: absolute;
          top: 50%;
          margin-top: -50px;
          z-index: 30;
        }
        .nav-btn:hover { background: #007BD9; transform: scale(1.1); }
        .nav-btn.swiper-button-disabled { background: #E9ECEF; color: #ADB5BD; box-shadow: none; cursor: default; }
        
        .prev-pill { left: -10px; }
        .next-pill { right: -10px; }

        @media (max-width: 767px) {
          .stacked-swiper .swiper-slide {
            margin-right: -40px !important; /* Reduz sobreposição no mobile */
          }
          .prev-pill { left: 0; }
          .next-pill { right: 0; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0090FF] font-bold text-xs uppercase tracking-widest mb-2">Engrenagens do Sucesso</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Os 4 Pilares do Sistema Intalky</h2>
        </div>

        <div className="relative pt-4">
          <button className="nav-btn prev-pill"><ChevronLeft size={20} /></button>
          <button className="nav-btn next-pill"><ChevronRight size={20} /></button>

          <Swiper
            modules={[Navigation, Pagination, EffectCreative]}
            navigation={{
              prevEl: '.prev-pill',
              nextEl: '.next-pill',
            }}
            pagination={{ clickable: true }}
            slidesPerView={'auto'}
            centeredSlides={false}
            grabCursor={true}
            className="stacked-swiper"
            onSlideChange={() => console.log('slide change')}
          >
            {pillars.map((p, i) => (
              <SwiperSlide key={i}>
                <div 
                  className="bg-white rounded-2xl border-2 border-[#E9ECEF] p-8 h-full flex flex-col gap-5 transition-all duration-300"
                  style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    borderColor: hoveredIdx === i ? p.color : '#E9ECEF'
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: p.lightBg }}
                  >
                    <p.icon size={28} style={{ color: p.color }} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{p.desc}</p>
                  </div>

                  <div 
                    className="mt-auto pt-4"
                    style={{ borderTop: '1px solid #F1F3F5' }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-tighter text-[#ADB5BD]">Pilar {(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
