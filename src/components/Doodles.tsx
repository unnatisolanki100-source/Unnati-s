import React from 'react';

export const HeartDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = 'w-6 h-6', style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const StarDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = 'w-5 h-5', style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L14.4 8.6L21.5 9.2L16 13.8L17.7 20.8L12 17.2L6.3 20.8L8 13.8L2.5 9.2L9.6 8.6L12 2Z" />
  </svg>
);

export const SparkleDoodle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = 'w-5 h-5', style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path d="M12 0L14 9L23 11L14 13L12 22L10 13L1 11L10 9L12 0Z" />
  </svg>
);

export const ArrowDoodle: React.FC<{ className?: string }> = ({ className = 'w-12 h-6' }) => (
  <svg
    viewBox="0 0 80 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M5 20 C 25 25, 45 5, 70 12" />
    <path d="M62 6 L 73 13 L 64 21" />
  </svg>
);

export const PaperClipDoodle: React.FC<{ className?: string }> = ({ className = 'w-5 h-8' }) => (
  <svg
    viewBox="0 0 24 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M8 12 L 8 28 A 4 4 0 0 0 16 28 L 16 8 A 6 6 0 0 0 4 8 L 4 30 A 8 8 0 0 0 20 30 L 20 14" />
  </svg>
);

export const WaxSealDoodle: React.FC<{ className?: string; text?: string }> = ({
  className = 'w-20 h-20',
  text = 'APPROVED',
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full text-rose-500 fill-current opacity-90 drop-shadow-sm">
      <path d="M50 0 C60 5, 75 2, 85 15 C95 28, 92 45, 98 55 C104 65, 96 82, 85 90 C74 98, 58 95, 48 98 C38 101, 20 95, 12 85 C4 75, 8 60, 2 48 C-4 36, 5 20, 15 12 C25 4, 40 -5, 50 0 Z" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#FAF8F5" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.8" />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none text-center">
      <span className="text-[9px] font-bold tracking-widest uppercase opacity-90">UNNATI</span>
      <span className="text-[11px] font-extrabold tracking-tight font-sans">{text}</span>
      <span className="text-[8px] tracking-wider opacity-85">100% MATCH</span>
    </div>
  </div>
);

export const BabyChickIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Chick Body */}
    <ellipse cx="18" cy="21" rx="13" ry="11" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
    {/* Chick Head */}
    <circle cx="18" cy="12" r="9" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
    {/* Top Tuft / Feather */}
    <path d="M18 3 C17 0, 19 0, 18 3" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19.5 4 C21 1.5, 22 2, 19.5 4" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
    {/* Cute Eyes */}
    <ellipse cx="14.5" cy="11.5" rx="1.5" ry="2" fill="#1E293B" />
    <ellipse cx="21.5" cy="11.5" rx="1.5" ry="2" fill="#1E293B" />
    <circle cx="15.2" cy="10.8" r="0.6" fill="#FFFFFF" />
    <circle cx="22.2" cy="10.8" r="0.6" fill="#FFFFFF" />
    {/* Cute Cheeks */}
    <circle cx="12" cy="14" r="1.5" fill="#FDA4AF" opacity="0.8" />
    <circle cx="24" cy="14" r="1.5" fill="#FDA4AF" opacity="0.8" />
    {/* Beak */}
    <path d="M16 13.5 L20 13.5 L18 16.5 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="0.8" />
    {/* Wings */}
    <path d="M6 19 C5 22, 8 25, 10 24" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.2" />
    <path d="M30 19 C31 22, 28 25, 26 24" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.2" />
    {/* Feet */}
    <path d="M14 31 L14 33 M13 33 L15 33" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 31 L22 33 M21 33 L23 33" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

