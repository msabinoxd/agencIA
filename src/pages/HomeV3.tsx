import { useState, lazy, Suspense, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroV2 } from '../components/HeroV2';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { CookieBanner } from '../components/CookieBanner';
import { Footer } from '../components/Footer';
import { AnimatePresence } from 'motion/react';

const PainSolutionV2 = lazy(() => import('../components/PainSolutionV2').then(m => ({ default: m.PainSolutionV2 })));
const TwoPiecesBlock = lazy(() => import('../components/TwoPiecesBlock').then(m => ({ default: m.TwoPiecesBlock })));
const AiVideoDemo = lazy(() => import('../components/AiVideoDemo').then(m => ({ default: m.AiVideoDemo })));
const Solutions = lazy(() => import('../components/Solutions').then(m => ({ default: m.Solutions })));
const About = lazy(() => import('../components/About').then(m => ({ default: m.About })));
const Team = lazy(() => import('../components/Team').then(m => ({ default: m.Team })));
const HumanSupervision = lazy(() => import('../components/HumanSupervision').then(m => ({ default: m.HumanSupervision })));
const AutomationStack = lazy(() => import('../components/AutomationStack').then(m => ({ default: m.AutomationStack })));
const ConnectionBridge = lazy(() => import('../components/ConnectionBridge').then(m => ({ default: m.ConnectionBridge })));
const SocialProof = lazy(() => import('../components/SocialProof').then(m => ({ default: m.SocialProof })));
const FAQ = lazy(() => import('../components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinalV2 = lazy(() => import('../components/CTAFinalV2').then(m => ({ default: m.CTAFinalV2 })));

const AgentSimulator = lazy(() => import('../components/AgentSimulator').then(m => ({ default: m.AgentSimulator })));

export function HomeV3() {
  const [showSimulator, setShowSimulator] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Intalky — Você está perdendo pacientes que já queriam comprar. Veja por quê.';
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#0090FF]/20 selection:text-[#0090FF] transition-colors duration-500">
      <Header />
      <main>
        {/* 1. ATENÇÃO — Dor universal */}
        <HeroV2 onOpenSimulator={() => setShowSimulator(true)} />

        <Suspense fallback={<div className="min-h-[60vh] bg-[#F8F9FA]" />}>
          {/* 2. DOR — Custo quantificado */}
          <PainSolutionV2 />

          {/* 3. VIRADA — A IA não resolve sozinha (pico emocional, logo após a dor) */}
          <TwoPiecesBlock />

          {/* 4. DEMONSTRAÇÃO — Ver para crer */}
          <AiVideoDemo />

          {/* 5. COMO FUNCIONA — Clareza técnica (leitor já tem contexto emocional) */}
          <Solutions />

          {/* 6. AUTORIDADE — Quem somos (antes das features) */}
          <About />

          {/* 7. HUMANIZAÇÃO — Time real */}
          <Team />

          {/* 8. CONFIANÇA — Nossa plataforma */}
          <HumanSupervision />

          {/* 9. AUTORIDADE — Stack completo / Seis Pilares */}
          <AutomationStack />

          {/* 10. TRANSIÇÃO VISUAL */}
          <ConnectionBridge />

          {/* 11. PROVA SOCIAL — Cases, R$50M+, FOMO */}
          <SocialProof />

          {/* 12. OBJEÇÕES — Remoção de risco */}
          <FAQ />

          {/* 13. AÇÃO — Merecimento + filtro + aplicação */}
          <CTAFinalV2 />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppFloat />
      <CookieBanner />

      <AnimatePresence>
        {showSimulator && (
          <Suspense fallback={null}>
            <AgentSimulator onClose={() => setShowSimulator(false)} />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
