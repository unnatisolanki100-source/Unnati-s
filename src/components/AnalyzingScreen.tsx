import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface AnalyzingScreenProps {
  applicantName: string;
  onComplete: () => void;
}

const CHECKPOINTS = [
  'Cross-referencing 1:00 AM overthinking patience...',
  'Analyzing cuddle compatibility & chipku stamina...',
  'Evaluating long-walk endurance & yapping attention...',
  'Verifying serious long-term intent (Zero casuals!)...',
  'Computing final Unnati compatibility quotient...',
];

export const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({
  applicantName,
  onComplete,
}) => {
  const [percent, setPercent] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + 1;
        const stepIndex = Math.min(Math.floor((next / 100) * CHECKPOINTS.length), CHECKPOINTS.length - 1);
        setActiveStep(stepIndex);
        return next;
      });
    }, 32); // Takes ~3.2 seconds total

    return () => clearInterval(timer);
  }, []);

  const isFinished = percent === 100;

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-10 sm:py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
        Analyzing Your Answers…
      </h2>

      <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
        Reviewing answers for <strong className="text-slate-700">“{applicantName}”</strong> through Unnati’s love assessment.
      </p>

      {/* Main Analysis Card */}
      <div className="mt-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 text-left shadow-sm relative overflow-hidden">
        {/* Subtle washi tape */}
        <div className="absolute -top-3 left-8 w-24 h-4 washi-tape rotate-[-2deg] rounded-xs" />

        {/* Big percentage display */}
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
            Match Index Progress
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-sans">
            {percent}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60 mb-6">
          <div
            className="h-full bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400 rounded-full transition-all duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Checklist Diagnostics */}
        <div className="space-y-3">
          {CHECKPOINTS.map((item, idx) => {
            const isDone = idx < activeStep || isFinished;
            const isCurrent = idx === activeStep && !isFinished;

            return (
              <div
                key={item}
                className={`flex items-center gap-3 text-xs sm:text-sm transition-opacity duration-200 ${
                  isDone
                    ? 'text-slate-800 font-medium'
                    : isCurrent
                    ? 'text-purple-600 font-semibold'
                    : 'text-slate-300'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : isCurrent ? (
                  <div className="w-4 h-4 rounded-full border-2 border-purple-500 border-t-transparent animate-spin shrink-0" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-200 shrink-0" />
                )}
                <span>{item}</span>
              </div>
            );
          })}
        </div>

        {/* Stat badges */}
        {percent >= 70 && (
          <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-2xl">
              <div className="text-[11px] font-semibold text-rose-600">Vibe Resonance</div>
              <div className="text-lg font-bold text-rose-900 font-sans">99.4%</div>
            </div>
            <div className="p-3 bg-purple-50/70 border border-purple-100 rounded-2xl">
              <div className="text-[11px] font-semibold text-purple-600">Green Flag Rating</div>
              <div className="text-lg font-bold text-purple-900 font-sans">100%</div>
            </div>
          </div>
        )}

        {/* Final Trigger Button (Stable width, no shrinking inward on click) */}
        {isFinished && (
          <div className="mt-6 pt-3">
            <button
              onClick={onComplete}
              className="w-full py-4 px-5 bg-gradient-to-r from-rose-500 via-rose-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md shadow-rose-500/25 flex items-center justify-center gap-2 transition-all hover:brightness-105 active:brightness-95 cursor-pointer"
            >
              <span>Sure For Unnati • Proceed To Final Step ❤️</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
