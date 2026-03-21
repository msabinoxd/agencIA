import { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { CookieBanner } from './components/CookieBanner';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'motion/react';

// Funil de vendas — ordem cronológica de conversão (neuromarketing)
const PainSolution = lazy(() => import('./components/PainSolution').then(m => ({ default: m.PainSolution })));
const AiVideoDemo = lazy(() => import('./components/AiVideoDemo').then(m => ({ default: m.AiVideoDemo })));
const Solutions = lazy(() => import('./components/Solutions').then(m => ({ default: m.Solutions })));
const HumanSupervision = lazy(() => import('./components/HumanSupervision').then(m => ({ default: m.HumanSupervision })));
const AutomationStack = lazy(() => import('./components/AutomationStack').then(m => ({ default: m.AutomationStack })));
const ConnectionBridge = lazy(() => import('./components/ConnectionBridge').then(m => ({ default: m.ConnectionBridge })));
const SocialProof = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinal = lazy(() => import('./components/CTAFinal').then(m => ({ default: m.CTAFinal })));

// Modal — só carrega ao clicar
const AgentSimulator = lazy(() => import('./components/AgentSimulator').then(m => ({ default: m.AgentSimulator })));

export default function App() {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#0090FF]/20 selection:text-[#0090FF] transition-colors duration-500">
      <Header />
      <main>
        {/* 1. ATENÇÃO — Promessa principal */}
        <Hero onOpenSimulator={() => setShowSimulator(true)} />

        <Suspense fallback={<div className="min-h-[60vh] bg-[#F8F9FA]" />}>
          {/* 2. DOR → SOLUÇÃO — Gatilho: medo de perda */}
          <PainSolution />

          {/* 3. DEMONSTRAÇÃO — Ver para crer */}
          <AiVideoDemo />

          {/* 4. COMO FUNCIONA — Clareza e confiança */}
          <Solutions />

          {/* 5. CONFIANÇA — "IA com supervisão humana" */}
          <HumanSupervision />

          {/* 6. AUTORIDADE — Stack completo */}
          <AutomationStack />

          {/* 7. TRANSIÇÃO VISUAL */}
          <ConnectionBridge />

          {/* 8. PROVA SOCIAL — Validação, FOMO */}
          <SocialProof />

          {/* 9. CREDIBILIDADE — Quem somos */}
          <About />

          {/* 10. HUMANIZAÇÃO — Time real */}
          <Team />

          {/* 11. OBJEÇÕES — Remoção de risco */}
          <FAQ />

          {/* 12. AÇÃO — Urgência + escassez */}
          <CTAFinal />
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
