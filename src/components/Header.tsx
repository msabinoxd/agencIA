import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { waURL, CONFIG } from '../config';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-10" />
        </a>

        <nav className="hidden xl:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#4A4A4A]">
          <a href="#automacao" className="hover:text-[#0090FF] transition-colors">Automação</a>
          <a href="#marketing" className="hover:text-[#0090FF] transition-colors">Marketing</a>
          <a href="#jornada" className="hover:text-[#0090FF] transition-colors">Jornada</a>
          <a href="#educacional" className="hover:text-[#0090FF] transition-colors">Educacional</a>
          <a href="#blog" className="hover:text-[#0090FF] transition-colors">Blog</a>
          <a href="#faq" className="hover:text-[#0090FF] transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:block">
          <a
            href={waURL(CONFIG.wa.msgHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#0090FF] to-[#00D1FF] hover:opacity-90 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all transform hover:scale-105 shadow-[0_4px_14px_rgba(0,144,255,0.3)]"
          >
            Falar com Especialista
          </a>
        </div>

        <button
          aria-label="Abrir menu de navegação"
          className="xl:hidden text-[#4A4A4A] p-2 bg-[#F1F3F5] rounded-xl border border-[#E9ECEF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-[96px] left-0 right-0 bg-white border-b border-[#E9ECEF] shadow-lg p-8 flex flex-col gap-6"
          >
            {[
              { label: 'Automação', href: '#automacao' },
              { label: 'Marketing', href: '#marketing' },
              { label: 'Jornada', href: '#jornada' },
              { label: 'Educacional', href: '#educacional' },
              { label: 'Blog', href: '#blog' },
              { label: 'FAQ', href: '#faq' }
            ].map(link => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-[#4A4A4A] hover:text-[#0090FF] font-black uppercase tracking-[0.2em] text-xs transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href={waURL(CONFIG.wa.msgHero)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-center bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs mt-4 shadow-lg"
            >
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
