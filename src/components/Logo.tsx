import { CONFIG } from '../config';

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-full aspect-square">
        {/* Intalky Icon */}
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="intalky-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0090FF" />
              <stop offset="100%" stopColor="#00D1FF" />
            </linearGradient>
          </defs>
          {/* Head Shape */}
          <path
            d="M50 5C25.1 5 5 25.1 5 50c0 9.8 3.1 18.9 8.5 26.3L5 95l18.7-8.5c7.4 5.4 16.5 8.5 26.3 8.5 24.9 0 45-20.1 45-45S74.9 5 50 5z"
            fill="url(#intalky-gradient)"
          />
          {/* Horizontal Lines (Features) */}
          <rect x="25" y="35" width="40" height="6" rx="3" fill="white" fillOpacity="0.9" />
          <rect x="25" y="48" width="50" height="6" rx="3" fill="white" fillOpacity="0.9" />
          <rect x="25" y="61" width="35" height="6" rx="3" fill="white" fillOpacity="0.9" />
          {/* Face Profile */}
          <path d="M78 50c0 15.5-12.5 28-28 28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase italic">Intalky</span>
        <span className="text-[10px] font-medium text-[#4A4A4A] tracking-widest uppercase">Assessoria & Automação</span>
      </div>
    </div>
  );
}
