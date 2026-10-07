import React from 'react';
import { ArrowLeft, ArrowRight, Check, Heart } from 'lucide-react';
import { QUESTIONS } from '../data/questions';

interface QuizScreenProps {
  applicantName: string;
  currentIndex: number;
  answers: Record<number, string>;
  selectedReactions: Record<number, string>;
  onSelectOption: (questionId: number, optionId: string, reaction: string, points: number, isDisqualifying?: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  applicantName,
  currentIndex,
  answers,
  selectedReactions,
  onSelectOption,
  onNext,
  onPrev,
  onSubmit,
}) => {
  const currentQuestion = QUESTIONS[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === QUESTIONS.length - 1;
  const currentSelectedId = answers[currentQuestion.id];
  const currentReaction = selectedReactions[currentQuestion.id];

  const handleOptionClick = (optionId: string, reaction: string, points: number, isDisqualifying?: boolean) => {
    onSelectOption(currentQuestion.id, optionId, reaction, points, isDisqualifying);
  };

  const progressPercentage = Math.round(((currentIndex + 1) / QUESTIONS.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-10">
      {/* Top Progress & Category bar */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-rose-600 font-bold">
              {currentQuestion.category}
            </span>
          </div>
          <span className="text-slate-600 font-semibold font-sans">
            Question {currentIndex + 1} of {QUESTIONS.length}
          </span>
        </div>

        {/* Progress Bar with Soft Pastel Gradient */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Question Card with sticky note accents */}
      <div className="relative bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        {/* Floating subtle tape */}
        <div className="absolute -top-3.5 right-8 w-20 h-5 washi-tape-lavender rotate-[2deg] rounded-xs" />

        {/* Sticky Note Pin from Unnati */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/80 rounded-xl text-amber-800 text-xs font-medium rotate-[-1deg] shadow-2xs">
          <span className="font-handwriting text-base font-bold text-amber-700">Note:</span>
          <span>{currentQuestion.note}</span>
        </div>

        {/* Question Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-snug">
          {currentQuestion.title}
        </h2>
        
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
          {currentQuestion.subtitle}
        </p>

        {/* Interactive Answer Options */}
        <div className="mt-6 space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = currentSelectedId === option.id;
            const letter = String.fromCharCode(65 + idx);

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleOptionClick(option.id, option.reaction, option.points, option.isDisqualifying)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-start gap-3.5 group cursor-pointer relative ${
                  isSelected
                    ? option.isDisqualifying
                      ? 'bg-rose-100/90 border-rose-500 ring-2 ring-rose-500/20 shadow-xs'
                      : 'bg-rose-50/80 border-rose-400 ring-2 ring-rose-400/20 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-purple-300 hover:bg-slate-50/60'
                }`}
              >
                {/* Option Letter Circle */}
                <div
                  className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? option.isDisqualifying
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-rose-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-purple-100 group-hover:text-purple-700'
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : letter}
                </div>

                {/* Option text */}
                <div className="flex-1 pr-2">
                  <div className={`text-sm font-semibold leading-snug ${isSelected ? (option.isDisqualifying ? 'text-rose-900' : 'text-rose-950') : 'text-slate-800'}`}>
                    {option.label}
                  </div>
                  {option.subtext && (
                    <div className="mt-1 text-xs text-slate-500 leading-normal">
                      {option.subtext}
                    </div>
                  )}
                </div>

                {/* Heart badge on selected */}
                {isSelected && !option.isDisqualifying && (
                  <div className="shrink-0 text-rose-500">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation Action Footer */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors ${
              isFirst
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:scale-95 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {isLast ? (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!currentSelectedId}
              className={`min-h-[44px] px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer ${
                currentSelectedId
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:from-rose-600 hover:to-purple-700 shadow-rose-500/20 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <span>Submit for Compatibility Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              disabled={!currentSelectedId}
              className={`min-h-[44px] px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer ${
                currentSelectedId
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
