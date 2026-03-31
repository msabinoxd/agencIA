import { useState, lazy, Suspense, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroV4 } from '../components/HeroV4';
import { WhatsAppFloatV4 } from '../components/WhatsAppFloatV4';
import { FourPillarsV4 } from '../components/FourPillarsV4';
import { CookieBanner } from '../components/CookieBanner';
import { FooterV4 } from '../components/FooterV4';
import { AnimatePresence } from 'motion/react';

const PainSolutionV4 = lazy(() => import('../components/PainSolutionV4').then(m => ({ default: m.PainSolutionV4 })));
const TwoPiecesBlockV4 = lazy(() => import('../components/TwoPiecesBlockV4').then(m => ({ default: m.TwoPiecesBlockV4 })));
const AiVideoDemoV4 = lazy(() => import('../components/AiVideoDemoV4').then(m => ({ default: m.AiVideoDemoV4 })));
const SolutionsV4 = lazy(() => import('../components/SolutionsV4').then(m => ({ default: m.SolutionsV4 })));
const AboutV4 = lazy(() => import('../components/AboutV4').then(m => ({ default: m.AboutV4 })));
const TeamV4 = lazy(() => import('../components/TeamV4').then(m => ({ default: m.TeamV4 })));
const HumanSupervisionV4 = lazy(() => import('../components/HumanSupervisionV4').then(m => ({ default: m.HumanSupervisionV4 })));
const AutomationStackV4 = lazy(() => import('../components/AutomationStackV4').then(m => ({ default: m.AutomationStackV4 })));
const ConnectionBridgeV4 = lazy(() => import('../components/ConnectionBridgeV4').then(m => ({ default: m.ConnectionBridgeV4 })));
const SocialProofV4 = lazy(() => import('../components/SocialProofV4').then(m => ({ default: m.SocialProofV4 })));
const FAQV4 = lazy(() => import('../components/FAQV4').then(m => ({ default: m.FAQV4 })));
const CTAFinalV4 = lazy(() => import('../components/CTAFinalV4').then(m => ({ default: m.CTAFinalV4 })));

const AgentSimulator = lazy(() => import('../components/AgentSimulator').then(m => ({ default: m.AgentSimulator })));

export function HomeV4() {
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
        <HeroV4 onOpenSimulator={() => setShowSimulator(true)} />

        {/* 1.5 PILARES — 4 botões após o Hero */}
        <FourPillarsV4 />

        <Suspense fallback={<div className="min-h-[60vh] bg-[#F8F9FA]" />}>
          {/* 2. DOR — Custo quantificado */}
          <PainSolutionV4 />

          {/* 3. VIRADA — A IA não resolve sozinha (pico emocional, logo após a dor) */}
          <TwoPiecesBlockV4 />

          {/* 4. DEMONSTRAÇÃO — Ver para crer */}
          <AiVideoDemoV4 />

          {/* 5. COMO FUNCIONA — Clareza técnica (leitor já tem contexto emocional) */}
          <SolutionsV4 />

          {/* 6. AUTORIDADE — Quem somos (antes das features) */}
          <AboutV4 />

          {/* 7. HUMANIZAÇÃO — Time real */}
          <TeamV4 />

          {/* 8. CONFIANÇA — Nossa plataforma */}
          <HumanSupervisionV4 />

          {/* 9. AUTORIDADE — Stack completo / Seis Pilares */}
          <AutomationStackV4 />

          {/* 10. TRANSIÇÃO VISUAL */}
          <ConnectionBridgeV4 />

          {/* 11. PROVA SOCIAL — Cases, R$50M+, FOMO */}
          <SocialProofV4 />

          {/* 12. OBJEÇÕES — Remoção de risco */}
          <FAQV4 />

          {/* 13. AÇÃO — Merecimento + filtro + aplicação */}
          <CTAFinalV4 />
        </Suspense>
      </main>

      <FooterV4 />
      <WhatsAppFloatV4 />
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
