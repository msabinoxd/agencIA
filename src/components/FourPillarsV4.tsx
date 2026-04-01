import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Zap, UserCircle, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const targetAudience = [
  {
    icon: Users,
    title: 'Negócios e Clínicas de Elite',
    desc: 'Que recebem muitas mensagens no WhatsApp, mas não conseguem dar conta de responder todo mundo com agilidade.',
    color: '#0090FF',
    rotation: -8,
    y: 20
  },
  {
    icon: Zap,
    title: 'Gestores Comerciais',
    desc: 'Que buscam escalar o atendimento sem precisar contratar dezenas de secretárias e manter a qualidade 24/7.',
    color: '#00D1FF',
    rotation: -3,
    y: 0
  },
  {
    icon: UserCircle,
    title: 'Profissionais e Especialistas',
    desc: 'Que querem um processo de triagem inteligente para filtrar clientes qualificados antes de chegarem ao agendamento.',
    color: '#0090FF',
    rotation: 4,
    y: 10
  },
  {
    icon: Filter,
    title: 'Empresas de Serviços',
    desc: 'Que já rodam anúncios de tráfego pago, mas percebem que o gargalo da conversão está na demora do atendimento humano.',
    color: '#00D1FF',
    rotation: 9,
    y: 30
  },
];

export function FourPillarsV4() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] overflow-hidden relative border-b border-[#E9ECEF]">
      <style>{`
        .stacked-swiper {
          overflow: visible !important;
          width: 100% !important;
          max-width: 780px !important;
          margin: 0 auto;
          padding: 60px 0 120px !important;
        }

        .stacked-swiper .swiper-wrapper {
          overflow: visible !important;
          display: flex;
        }

        .stacked-swiper .swiper-slide {
          width: 300px !important;
          margin-right: -140px !important;
          transition: all 0.3s !important;
        }

        .stacked-swiper .swiper-slide:last-child {
          margin-right: 0 !important;
        }

        @media (max-width: 1024px) {
          .stacked-swiper { max-width: 680px !important; }
          .stacked-swiper .swiper-slide { width: 260px !important; margin-right: -120px !important; }
        }

        @media (max-width: 767px) {
          .stacked-swiper { max-width: 400px !important; }
          .stacked-swiper .swiper-slide {
            width: 220px !important;
            margin-right: -160px !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4 tracking-tight">
            Para quem é o Sistema Intalky?
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[EffectCreative]}
            slidesPerView={'auto'}
            centeredSlides={false}
            grabCursor={true}
            className="stacked-swiper"
          >
            {targetAudience.map((item, i) => (
              <SwiperSlide key={i} style={{ zIndex: hoveredIdx === i ? 50 : i }}>
                <motion.div
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  initial={false}
                  animate={{
                    rotate: hoveredIdx === i ? 0 : item.rotation,
                    y: hoveredIdx === i ? -40 : item.y,
                    scale: hoveredIdx === i ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white rounded-3xl border border-[#E9ECEF] p-8 h-[380px] flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative overflow-hidden group cursor-pointer"
                >
                  {/* Decorative bar */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1.5 transition-all duration-300"
                    style={{ background: item.color, opacity: hoveredIdx === i ? 1 : 0.3 }}
                  />
                  
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: `${item.color}10` }}
                  >
                    <item.icon size={32} color={item.color} className="group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0090FF] transition-colors">{item.title}</h3>
                    <p className="text-base text-[#4A4A4A] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Question */}
        <div className="mt-8 text-center max-w-3xl mx-auto border-t border-[#E9ECEF] pt-8">
          <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-6 italic">
            "Eu nunca tive uma IA atendendo meus clientes, é para mim?"
          </h3>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            Sim, e você terá nossa assessoria para configurar do jeito certo desde o início, sem erros e com a inteligência necessária para converter curiosos em clientes reais.
          </p>
        </div>
      </div>
    </section>
  );
}
