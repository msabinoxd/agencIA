import { useState, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AutomationStack } from './components/AutomationStack';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { AnimatePresence } from 'motion/react';

// Lazy-loaded: below-the-fold sections
const MarketingEngine = lazy(() => import('./components/MarketingEngine').then(m => ({ default: m.MarketingEngine })));
const CustomerJourney = lazy(() => import('./components/CustomerJourney').then(m => ({ default: m.CustomerJourney })));
const EducationalSuite = lazy(() => import('./components/EducationalSuite').then(m => ({ default: m.EducationalSuite })));
const BlogNourishment = lazy(() => import('./components/BlogNourishment').then(m => ({ default: m.BlogNourishment })));
const PainSolution = lazy(() => import('./components/PainSolution').then(m => ({ default: m.PainSolution })));
const AiVideoDemo = lazy(() => import('./components/AiVideoDemo').then(m => ({ default: m.AiVideoDemo })));
const Solutions = lazy(() => import('./components/Solutions').then(m => ({ default: m.Solutions })));
const ConnectionBridge = lazy(() => import('./components/ConnectionBridge').then(m => ({ default: m.ConnectionBridge })));
const HumanSupervision = lazy(() => import('./components/HumanSupervision').then(m => ({ default: m.HumanSupervision })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const SocialProof = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinal = lazy(() => import('./components/CTAFinal').then(m => ({ default: m.CTAFinal })));

// Lazy-loaded: modal, only shown on button click
const AgentSimulator = lazy(() => import('./components/AgentSimulator').then(m => ({ default: m.AgentSimulator })));

export default function App() {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#0090FF]/20 selection:text-[#0090FF] transition-colors duration-500">
      <Header />
      <main>
        <Hero onOpenSimulator={() => setShowSimulator(true)} />

        {/* Core AI Automation Stack */}
        <AutomationStack />

        <Suspense fallback={<div className="min-h-screen bg-[#F8F9FA]" />}>
          {/* Marketing Engine (LP, Pixel, Funnel) */}
          <MarketingEngine />

          {/* Interactive Customer Journey Game */}
          <CustomerJourney />

          {/* Educational Suite (Netflix Style) */}
          <EducationalSuite />

          {/* Lead Nourishment Blog */}
          <BlogNourishment />

          {/* Supporting Context & Authority */}
          <PainSolution />
          <AiVideoDemo />
          <Solutions />
          <ConnectionBridge />
          <HumanSupervision />
          <About />
          <SocialProof />
          <Team />
          <FAQ />
          <CTAFinal />
        </Suspense>
      </main>

      <WhatsAppFloat />

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
