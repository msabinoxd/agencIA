import { useEffect } from 'react';
import { Logo } from '../components/Logo';
import QualificationFunnel from '../components/QualificationFunnel';

export function FunilPage() {
  useEffect(() => {
    document.title = 'Aplicação — Intalky';
  }, []);

  return (
    <div className="min-h-screen font-sans" style={{ background: 'var(--color-bg-gradient)' }}>
      {/* Header consistente com o site */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E9ECEF]">
        <div className="section-container flex items-center justify-between h-16">
          <a href="#/">
            <Logo className="h-8" />
          </a>
          <a
            href="#/v4"
            className="text-sm font-medium text-[#888888] hover:text-[#1A1A1A] transition-colors flex items-center gap-1"
          >
            ← Voltar ao site
          </a>
        </div>
      </header>

      <main className="py-12 md:py-20 flex flex-col items-center justify-center">
        {/* Subtle glow behind the funnel */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0090FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative w-full">
          <QualificationFunnel />
        </div>
      </main>
    </div>
  );
}
