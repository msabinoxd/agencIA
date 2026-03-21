import { useState, lazy, Suspense, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroV2 } from '../components/HeroV2';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { CookieBanner } from '../components/CookieBanner';
import { FooterV3 } from '../components/FooterV3';
import { AnimatePresence } from 'motion/react';

const PainSolutionV3 = lazy(() => import('../components/PainSolutionV3').then(m => ({ default: m.PainSolutionV3 })));
const TwoPiecesBlockV3 = lazy(() => import('../components/TwoPiecesBlockV3').then(m => ({ default: m.TwoPiecesBlockV3 })));
const AiVideoDemo = lazy(() => import('../components/AiVideoDemo').then(m => ({ default: m.AiVideoDemo })));
const Solutions = lazy(() => import('../components/Solutions').then(m => ({ default: m.Solutions })));
const AboutV3 = lazy(() => import('../components/AboutV3').then(m => ({ default: m.AboutV3 })));
const TeamV3 = lazy(() => import('../components/TeamV3').then(m => ({ default: m.TeamV3 })));
const HumanSupervisionV3 = lazy(() => import('../components/HumanSupervisionV3').then(m => ({ default: m.HumanSupervisionV3 })));
const AutomationStackV3 = lazy(() => import('../components/AutomationStackV3').then(m => ({ default: m.AutomationStackV3 })));
const ConnectionBridge = lazy(() => import('../components/ConnectionBridge').then(m => ({ default: m.ConnectionBridge })));
const SocialProofV3 = lazy(() => import('../components/SocialProofV3').then(m => ({ default: m.SocialProofV3 })));
const FAQ = lazy(() => import('../components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinalV3 = lazy(() => import('../components/CTAFinalV3').then(m => ({ default: m.CTAFinalV3 })));

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
          <PainSolutionV3 />

          {/* 3. VIRADA — A IA não resolve sozinha (pico emocional, logo após a dor) */}
          <TwoPiecesBlockV3 />

          {/* 4. DEMONSTRAÇÃO — Ver para crer */}
          <AiVideoDemo />

          {/* 5. COMO FUNCIONA — Clareza técnica (leitor já tem contexto emocional) */}
          <Solutions />

          {/* 6. AUTORIDADE — Quem somos (antes das features) */}
          <AboutV3 />

          {/* 7. HUMANIZAÇÃO — Time real */}
          <TeamV3 />

          {/* 8. CONFIANÇA — Nossa plataforma */}
          <HumanSupervisionV3 />

          {/* 9. AUTORIDADE — Stack completo / Seis Pilares */}
          <AutomationStackV3 />

          {/* 10. TRANSIÇÃO VISUAL */}
          <ConnectionBridge />

          {/* 11. PROVA SOCIAL — Cases, R$50M+, FOMO */}
          <SocialProofV3 />

          {/* 12. OBJEÇÕES — Remoção de risco */}
          <FAQ />

          {/* 13. AÇÃO — Merecimento + filtro + aplicação */}
          <CTAFinalV3 />
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
