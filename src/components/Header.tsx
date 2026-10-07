import React from 'react';
import { RotateCcw, Heart } from 'lucide-react';

interface HeaderProps {
  onRestart: () => void;
  currentStep: string;
}

export const Header: React.FC<HeaderProps> = ({
  onRestart,
  currentStep,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-rose-100/80 px-4 sm:px-8 py-3 transition-colors">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-slate-800 text-base sm:text-lg tracking-tight font-sans">
            Unnati’s Love Portal
          </span>
        </div>

        {/* Actions (Restart when active) */}
        <div className="flex items-center gap-2">
          {currentStep !== 'welcome' && (
            <button
              onClick={onRestart}
              aria-label="Restart Application"
              className="px-3 h-9 flex items-center gap-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
