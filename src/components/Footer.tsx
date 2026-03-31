import { useState } from 'react';
import { CONFIG } from '../config';
import { PrivacyPolicy } from './PrivacyPolicy';

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-[#1A1A1A] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0090FF] to-[#00D1FF] flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] font-black">IN</span>
            </div>
            <span className="text-[#888888] text-sm">
              © {new Date().getFullYear()} {CONFIG.brand.name}. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-[#888888] hover:text-white transition-colors"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-[#888888] hover:text-white transition-colors"
            >
              LGPD
            </button>
          </div>
        </div>
      </footer>

      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </>
  );
}
