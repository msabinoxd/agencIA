import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';
import { PrivacyPolicy } from './PrivacyPolicy';

const CONSENT_KEY = 'intalky_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Pequeno delay para não aparecer imediatamente junto com o carregamento
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[150]"
          >
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#0090FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-4 h-4 text-[#0090FF]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Este site usa cookies</p>
                  <p className="text-[#888888] text-xs leading-relaxed">
                    Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
                    <button
                      onClick={() => setShowPolicy(true)}
                      className="text-[#0090FF] hover:underline"
                    >
                      Política de Privacidade
                    </button>.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={accept}
                  className="flex-1 py-2.5 rounded-xl bg-[#0090FF] text-white text-sm font-bold hover:bg-[#007ACC] transition-colors"
                >
                  Aceitar
                </button>
                <button
                  onClick={decline}
                  className="flex-1 py-2.5 rounded-xl bg-white/10 text-[#888888] text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  Recusar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPolicy && <PrivacyPolicy onClose={() => setShowPolicy(false)} />}
      </AnimatePresence>
    </>
  );
}
