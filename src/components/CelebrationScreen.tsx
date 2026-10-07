import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  Gift,
} from 'lucide-react';
import { sendAnswersToUnnatiEmail } from '../utils/emailService';

interface CelebrationScreenProps {
  applicantName: string;
  answers?: Record<number, string>;
  onRestart: () => void;
  onPlayChime: () => void;
}

export const CelebrationScreen: React.FC<CelebrationScreenProps> = ({
  applicantName,
  answers = {},
  onRestart,
  onPlayChime,
}) => {
  const letterRef = useRef<HTMLDivElement>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  // Trigger confetti bursts upon mounting & automatically dispatch answers to Unnati's email in background
  const triggerConfetti = () => {
    onPlayChime();

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#F43F5E', '#EC4899', '#A855F7', '#FBBF24', '#F472B6'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#F43F5E', '#C084FC', '#FDE047'],
      });
    }, 200);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#F43F5E', '#C084FC', '#FDE047'],
      });
    }, 400);
  };

  useEffect(() => {
    triggerConfetti();

    // Silently and automatically send answers to unnatisolanki400@gmail.com in the background
    sendAnswersToUnnatiEmail({
      applicantName,
      answers,
      decision: 'YES! Best Decision Ever',
    }).catch((err) => {
      console.warn('Background dispatch error', err);
    });
  }, []);

  const handleToggleLetter = () => {
    if (!isLetterOpen) {
      triggerConfetti();
      setIsLetterOpen(true);
      setTimeout(() => {
        letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 120);
    } else {
      setIsLetterOpen(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:py-12 space-y-6 sm:space-y-8">
      {/* 1. Original Open Celebration Banner with Candidate Name (No box) */}
      <div className="text-center relative">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
          Congratulations <span className="text-rose-600">{applicantName}</span>! <br className="hidden sm:inline" />
          You have been selected — <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-600 to-amber-500">
            You are officially Unnati’s Boyfriend ❤️
          </span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto">
          Your application passed with flying colors. You are now officially locked in with Unnati forever.
        </p>

        {/* Shoot More Confetti Button */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={triggerConfetti}
            className="px-4 py-2 bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold text-xs rounded-full flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs"
          >
            <span>🎉 Shoot More Confetti!</span>
          </button>
        </div>
      </div>

      {/* 2. The Cute Interactive Gift Button */}
      <div className="text-center w-full max-w-lg mx-auto">
        <div className="p-5 sm:p-6 bg-gradient-to-r from-rose-50/90 via-purple-50/70 to-pink-50/90 rounded-3xl border border-rose-200 shadow-xs relative">
          <div
            className="text-rose-600 text-2xl sm:text-3xl font-bold tracking-normal mb-3 text-center italic"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Unnati left a secret surprise for you!
          </div>

          <button
            type="button"
            onClick={handleToggleLetter}
            className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 via-rose-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Gift className="w-5 h-5 text-white" />
            <span>{isLetterOpen ? 'Fold Secret Letter' : 'A Special Gift For You (Click to Open)'}</span>
          </button>
        </div>
      </div>

      {/* 3. The Secret Letter Directly In The Portal (No modal, 100% mobile friendly!) */}
      {isLetterOpen && (
        <div
          ref={letterRef}
          className="w-full max-w-lg mx-auto animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="relative bg-[#FFFDF7] rounded-3xl border-2 border-amber-200/90 p-6 sm:p-8 shadow-md text-slate-800">
            {/* Washi Tape top */}
            <div className="absolute -top-3.5 left-10 w-28 h-5 washi-tape-pink rotate-[-2deg] rounded-xs shadow-xs" />

            {/* Letter Header */}
            <div className="flex items-center justify-between pb-3 border-b border-amber-200/80 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Secret Letter from Unnati
              </span>
              <span
                className="text-rose-500 font-bold text-lg italic"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                for your eyes only
              </span>
            </div>

            {/* Letter Content written in Unnati's authentic, sweet voice */}
            <div
              className="text-slate-800 text-xl sm:text-2xl leading-relaxed space-y-3.5 italic"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-rose-600 not-italic">
                My Baby,
              </p>
              <p>
                I love you so much {applicantName}! Thank you meri saari baatein sunne ke liye, meri endless yapping ko jhelne ke liye, aur mere mood swings ko itne pyaar se handle karne ke liye.
              </p>
              <p>
                Thank you raat ko 1:00 baje meri overthinking ko shaant karne ke liye aur mujhe hamesha itna safe and special feel karwane ke liye. Tum sach me mere sabse favourite insaan ho pure universe me.
              </p>
              <p className="font-bold text-rose-600 text-2xl sm:text-3xl pt-1 leading-snug not-italic">
                Ab tum officially sirf aur sirf mere ho, forever and always! I love you the mostest!
              </p>
            </div>

            {/* Letter Footer */}
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center justify-between">
              <div
                className="text-2xl font-bold text-slate-800 italic"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                — Yours forever and ever, Unnati
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="text-center pt-2 pb-6">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Retake Application / Start Over</span>
        </button>
      </div>
    </div>
  );
};
