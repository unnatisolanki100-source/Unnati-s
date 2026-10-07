import React from 'react';
import { XCircle, ShieldAlert, RotateCcw, HeartCrack, AlertTriangle, Heart } from 'lucide-react';

interface RejectionScreenProps {
  applicantName: string;
  onRestart: () => void;
}

export const RejectionScreen: React.FC<RejectionScreenProps> = ({
  applicantName,
  onRestart,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 sm:py-14 text-center">
      {/* Top Disqualification Seal */}
      <div className="relative inline-block mb-4">
        <div className="w-20 h-20 rounded-full bg-rose-100 border-2 border-rose-300 flex items-center justify-center mx-auto shadow-sm">
          <HeartCrack className="w-10 h-10 text-rose-600 animate-pulse" />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-rose-600 text-white rounded-full p-1 shadow-xs">
          <XCircle className="w-5 h-5" />
        </div>
      </div>

      {/* Disqualification Notice */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 border border-rose-300 rounded-full text-xs font-bold text-rose-800 tracking-wider uppercase shadow-2xs mb-4">
        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
        <span>Application Terminated • Dealbreaker Activated</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        APPLICATION REJECTED ❌ <br />
        <span className="text-rose-600">
          Not A Suitable Candidate For Unnati
        </span>
      </h1>

      <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-md mx-auto">
        Candidate <strong className="text-slate-900 font-semibold">"{applicantName}"</strong> has been disqualified immediately.
      </p>

      {/* Main Rejection Letter Card */}
      <div className="mt-8 bg-white rounded-3xl border-2 border-rose-200 p-6 sm:p-8 text-left shadow-sm relative overflow-hidden">
        {/* Disqualified Stamp in Corner */}
        <div className="absolute top-4 right-4 rotate-12 border-2 border-rose-500/80 border-dashed rounded-lg px-3 py-1 text-rose-600 font-black text-xs uppercase tracking-widest bg-rose-50/50">
          DISQUALIFIED ❌
        </div>

        <div className="flex items-center gap-2.5 pb-4 border-b border-rose-100 mb-4">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Official Reason For Rejection
          </h2>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-rose-50/80 rounded-2xl border border-rose-100 flex items-start gap-3">
            <span className="text-lg">🚫</span>
            <div>
              <span className="font-bold text-rose-900">Fatal Disqualification: Casual Mindset</span>
              <p className="mt-1 text-rose-800 text-xs">
                You selected casual / timepass on Question 10. Unnati is NOT looking for casual dating, half-baked efforts, or confusion.
              </p>
            </div>
          </div>

          <p>
            Unnati is a girl of deep emotions, pure loyalty, and big love. She deserves someone who is:
          </p>

          <ul className="space-y-2 pl-2">
            <li className="flex items-center gap-2 text-slate-800 font-medium">
              <span className="text-rose-500">✕</span>
              <span>100% all-in with zero hesitation or mixed signals</span>
            </li>
            <li className="flex items-center gap-2 text-slate-800 font-medium">
              <span className="text-rose-500">✕</span>
              <span>Ready for an intentional, serious, and lasting future</span>
            </li>
            <li className="flex items-center gap-2 text-slate-800 font-medium">
              <span className="text-rose-500">✕</span>
              <span>Proud to protect her heart and stand by her through everything</span>
            </li>
          </ul>

          {/* Unnati verdict message */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5 text-xs text-rose-900 bg-rose-50/80 p-3 rounded-2xl">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 shrink-0" />
            <span>
              <strong>Verdict from Unnati:</strong> "No casual timepass around here! Either you want my whole heart forever, or you get nothing at all! ❤️"
            </span>
          </div>
        </div>

        {/* Action to Retry / Rectify */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
          <button
            onClick={onRestart}
            className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Re-evaluate Life Choices & Retake Test (Choose Long-Term!)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
