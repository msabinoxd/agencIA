import { useState, lazy, Suspense, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroV4 } from '../components/HeroV4';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { CookieBanner } from '../components/CookieBanner';
import { FooterV3 } from '../components/FooterV3';
import { AnimatePresence } from 'motion/react';

const PainSolutionV4 = lazy(() => import('../components/PainSolutionV4').then(m => ({ default: m.PainSolutionV4 })));
const TwoPiecesBlockV4 = lazy(() => import('../components/TwoPiecesBlockV4').then(m => ({ default: m.TwoPiecesBlockV4 })));
const AiVideoDemo = lazy(() => import('../components/AiVideoDemo').then(m => ({ default: m.AiVideoDemo })));
const Solutions = lazy(() => import('../components/Solutions').then(m => ({ default: m.Solutions })));
const AboutV3 = lazy(() => import('../components/AboutV3').then(m => ({ default: m.AboutV3 })));
const TeamV3 = lazy(() => import('../components/TeamV3').then(m => ({ default: m.TeamV3 })));
const HumanSupervisionV3 = lazy(() => import('../components/HumanSupervisionV3').then(m => ({ default: m.HumanSupervisionV3 })));
const AutomationStackV4 = lazy(() => import('../components/AutomationStackV4').then(m => ({ default: m.AutomationStackV4 })));
const ConnectionBridge = lazy(() => import('../components/ConnectionBridge').then(m => ({ default: m.ConnectionBridge })));
const SocialProofV3 = lazy(() => import('../components/SocialProofV3').then(m => ({ default: m.SocialProofV3 })));
const FAQ = lazy(() => import('../components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinalV4 = lazy(() => import('../components/CTAFinalV4').then(m => ({ default: m.CTAFinalV4 })));

const AgentSimulator = lazy(() => import('../components/AgentSimulator').then(m => ({ default: m.AgentSimulator })));

export function HomeV4() {
  const [showSimulator, setShowSimulator] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Intalky — Você está perdendo clientes que já queriam comprar. Veja por quê.';
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#0090FF]/20 selection:text-[#0090FF] transition-colors duration-500">
      <Header />
      <main>
        {/* 1. ATENÇÃO — Dor universal */}
        <HeroV4 onOpenSimulator={() => setShowSimulator(true)} />

        <Suspense fallback={<div className="min-h-[60vh] bg-[#F8F9FA]" />}>
          {/* 2. DOR — Custo quantificado */}
          <PainSolutionV4 />

          {/* 3. VIRADA — A IA não resolve sozinha */}
          <TwoPiecesBlockV4 />

          {/* 4. DEMONSTRAÇÃO — Ver para crer */}
          <AiVideoDemo />

          {/* 5. COMO FUNCIONA — Clareza técnica */}
          <Solutions />

          {/* 6. AUTORIDADE — Quem somos */}
          <AboutV3 />

          {/* 7. HUMANIZAÇÃO — Time real */}
          <TeamV3 />

          {/* 8. CONFIANÇA — Nossa plataforma */}
          <HumanSupervisionV3 />

          {/* 9. AUTORIDADE — Stack completo */}
          <AutomationStackV4 />

          {/* 10. TRANSIÇÃO VISUAL */}
          <ConnectionBridge />

          {/* 11. PROVA SOCIAL */}
          <SocialProofV3 />

          {/* 12. OBJEÇÕES */}
          <FAQ />

          {/* 13. AÇÃO */}
          <CTAFinalV4 />
        </Suspense>
      </main>

      <FooterV3 />
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
