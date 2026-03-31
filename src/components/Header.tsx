import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        <a href="#">
          <Logo className="h-8" />
        </a>
      </div>
    </header>
  );
}
