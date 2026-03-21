import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Como Funciona', href: '#solucoes' },
  { label: 'Cases', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo className="h-8" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#4A4A4A]">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#0090FF] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <a
            href="#/funil"
            className="inline-block bg-gradient-to-r from-[#0090FF] to-[#00D1FF] hover:opacity-90 text-white px-6 py-2.5 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all hover:scale-105 shadow-[0_4px_14px_rgba(0,144,255,0.3)]"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Abrir menu de navegação"
          className="md:hidden text-[#4A4A4A] p-2 bg-[#F1F3F5] rounded-xl border border-[#E9ECEF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#E9ECEF] shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#4A4A4A] hover:text-[#0090FF] font-black uppercase tracking-[0.2em] text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#/funil"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center bg-gradient-to-r from-[#0090FF] to-[#00D1FF] text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg"
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
