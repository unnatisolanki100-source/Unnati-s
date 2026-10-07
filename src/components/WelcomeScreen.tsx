import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileText, Heart } from 'lucide-react';
import { HeartDoodle, StarDoodle } from './Doodles';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
  initialName: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, initialName }) => {
  const [name, setName] = useState(initialName || '');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name or nickname to proceed!');
      return;
    }
    setError('');
    onStart(name.trim());
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Top playful sticker label with heart */}
      <div className="relative mb-6">
        <div className="absolute -top-3 -left-4 w-12 h-4 washi-tape rotate-[-8deg] rounded-xs" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 border border-rose-200/80 rounded-full text-xs font-semibold text-rose-700 tracking-wide uppercase shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Unnati’s Official Evaluation Form</span>
        </div>
      </div>

      {/* Hero Title & Framing */}
      <div className="text-center relative mb-8">
        <div className="absolute -top-6 -right-6 text-amber-400 opacity-80 hidden sm:block">
          <StarDoodle className="w-8 h-8 animate-spin" style={{ animationDuration: '16s' }} />
        </div>
        <div className="absolute -top-4 -left-8 text-rose-400 opacity-80 hidden sm:block">
          <HeartDoodle className="w-7 h-7" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
          Unnati’s Boyfriend <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500">
            Application
          </span>
        </h1>
        
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
          Think you have what it takes? Complete this 10-question realistic vibe assessment to test your compatibility and earn your official Boyfriend License.
        </p>

        {/* Handwritten subtitle note */}
        <div className="mt-2 text-rose-600 font-handwriting text-xl sm:text-2xl font-bold rotate-[-1.5deg]">
          ~ answer honestly, casual candidates will be disqualified ~
        </div>
      </div>

      {/* Main Card with soft cream background & sticky-note accents */}
      <div className="w-full relative bg-white/95 rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        {/* Top Washi Tape accent */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 washi-tape-pink rotate-1 rounded-xs z-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column: Requirements & Perks */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <FileText className="w-4 h-4 text-purple-500" />
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Candidate Core Criteria
              </h2>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Active 1:00 AM overthinking patience & soothing skills</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Unlimited cuddle stamina for Unnati’s chipku cuddle cravings</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Stamina for late-night romantic walks & nonstop yapping</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>100% intentional, serious & long-term commitment (No casuals!)</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Name Input & Start Action */}
          <div className="md:col-span-5 bg-[#FFFDF8] rounded-2xl border border-amber-200/70 p-5 relative shadow-xs">
            {/* Sticky tape badge */}
            <div className="absolute -top-3.5 right-6 w-16 h-4 washi-tape rotate-[-4deg] rounded-xs" />

            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Candidate Registry
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="applicantName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Name / Nickname <span className="text-rose-500">*</span>
                </label>
                <input
                  id="applicantName"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g. The Luckiest Guy Alive"
                  maxLength={40}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-2xs"
                  autoFocus
                />
                {error && (
                  <p className="mt-1.5 text-xs text-rose-600 font-medium">
                    {error}
                  </p>
                )}
              </div>

              <div className="text-[11px] text-slate-500 leading-relaxed">
                By starting, you agree to answer 10 real-life questions truthfully. Casual answers will result in immediate disqualification.
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold text-sm rounded-xl shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] group cursor-pointer"
              >
                <span>Start Application</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Sticky Note from Unnati */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end">
          <div className="font-handwriting text-slate-600 text-lg flex items-center gap-1.5">
            <span>"Good luck, don't mess up Question 10!"</span>
            <HeartDoodle className="w-4 h-4 text-rose-500 inline" />
          </div>
        </div>
      </div>
    </div>
  );
};
