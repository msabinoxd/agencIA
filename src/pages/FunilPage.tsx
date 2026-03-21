import { useEffect } from 'react';
import QualificationFunnel from '../components/QualificationFunnel';

export function FunilPage() {
  useEffect(() => {
    document.title = 'Aplicação — Intalky';
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Header mínimo */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E9ECEF] px-6 py-4 flex items-center justify-between">
        <span className="text-[#0090FF] font-black text-lg tracking-tight">INTALKY</span>
        <a href="#/v3" className="text-sm text-[#888888] hover:text-[#1A1A1A] transition-colors">
          ← Voltar para o site
        </a>
      </header>
      <main>
        <QualificationFunnel />
      </main>
    </div>
  );
}
