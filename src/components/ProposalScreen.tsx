import React, { useState } from 'react';
import { Heart, AlertCircle, Smile } from 'lucide-react';
import { WaxSealDoodle } from './Doodles';

interface ProposalScreenProps {
  applicantName: string;
  onAccept: () => void;
}

const PLAYFUL_REJECTION_MESSAGES = [
  'Let me think about it...',
  'Wait! Puppy eyes mode 🥺',
  'Are you suuuure? 👀',
  'Option blocked by Unnati 🚫',
  'Resistance is futile 😂',
  'Okay fine, clicking YES! ❤️',
];

export const ProposalScreen: React.FC<ProposalScreenProps> = ({
  applicantName,
  onAccept,
}) => {
  const [rejectAttemptCount, setRejectAttemptCount] = useState(0);
  const [showWarningModal, setShowWarningModal] = useState(false);

  const currentRejectionText =
    PLAYFUL_REJECTION_MESSAGES[Math.min(rejectAttemptCount, PLAYFUL_REJECTION_MESSAGES.length - 1)];

  const handleAlternativeHover = () => {
    setRejectAttemptCount((prev) => prev + 1);
  };

  const handleAlternativeClick = () => {
    setRejectAttemptCount((prev) => prev + 1);
    setShowWarningModal(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 text-center relative">
      {/* Perfectly Positioned & Symmetrically Aligned Header Decorator */}
      <div className="flex flex-col items-center justify-center mb-6 w-full">
        {/* Unnati Matched Sticker - Centered & Crisp */}
        <div className="mb-3 flex items-center justify-center">
          <WaxSealDoodle className="w-20 h-20 drop-shadow-sm" text="MATCHED" />
        </div>

        {/* Final Decision Chamber Badge with Perfectly Aligned Symmetrical Flanking Lines */}
        <div className="flex items-center justify-center gap-3 w-full max-w-md mx-auto px-2">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-rose-300 flex-1" />
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-rose-50 border border-rose-200/80 rounded-full text-xs font-bold text-rose-700 tracking-wider uppercase shadow-2xs shrink-0">
            <span>Final Decision Chamber</span>
          </div>
          <div className="h-px bg-gradient-to-l from-transparent via-rose-200 to-rose-300 flex-1" />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-snug">
        Will you officially become <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500">
          Unnati’s Boyfriend?
        </span>
      </h1>

      <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
        Dear <strong className="text-slate-800">{applicantName}</strong>, your application has passed with the highest honors. There is only one final protocol left to execute.
      </p>

      {/* Interactive Proposal Card (No awkward washi-tape border artifact) */}
      <div className="mt-8 bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-sm relative text-center">
        {/* Unnati's Personal Note */}
        <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-2xl text-left mb-6 flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
            <Smile className="w-4 h-4" />
          </div>
          <div className="text-xs text-amber-900 leading-relaxed font-sans">
            <span className="font-bold">Memo from Unnati:</span> "You passed all the questions with flying colors! No takesies-backsies, no terms & conditions violations. Do you accept the title?"
          </div>
        </div>

        {/* Decision Action Buttons (Stable layout, no weird dodge displacement into under-space) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          {/* Big YES Option */}
          <button
            type="button"
            onClick={onAccept}
            className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-rose-500 via-rose-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.99] active:brightness-95 cursor-pointer whitespace-nowrap"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white animate-pulse" />
            <span>YES! Best Decision Ever</span>
          </button>

          {/* Playful Alternative Option */}
          <button
            type="button"
            onClick={handleAlternativeClick}
            onMouseEnter={handleAlternativeHover}
            className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200/80 text-slate-600 font-semibold text-xs sm:text-sm rounded-2xl border border-slate-200/80 transition-all shadow-2xs active:scale-[0.99] active:brightness-95 cursor-pointer whitespace-nowrap"
          >
            <span>{currentRejectionText}</span>
          </button>
        </div>

        {/* Counter of how many times he tried alternative */}
        {rejectAttemptCount > 0 && (
          <div className="mt-4 text-xs font-handwriting text-rose-500 text-base">
            ~ You tried avoiding YES {rejectAttemptCount} time{rejectAttemptCount > 1 ? 's' : ''}! Resistance is futile ~
          </div>
        )}
      </div>

      {/* Playful Warning Modal if he actually clicks alternative */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-xl border border-rose-200 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Protocol Violation Detected! 🚨
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              According to Section 1 of Unnati's Boyfriend Regulations, any candidate with a 99.9% compatibility score is strictly barred from choosing anything other than <strong>YES</strong>!
            </p>
            <div className="mt-5 space-y-2">
              <button
                onClick={() => {
                  setShowWarningModal(false);
                  onAccept();
                }}
                className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-rose-500/20 cursor-pointer"
              >
                Accept My Fate & Say YES! ❤️
              </button>
              <button
                onClick={() => setShowWarningModal(false)}
                className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close & click YES myself
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
