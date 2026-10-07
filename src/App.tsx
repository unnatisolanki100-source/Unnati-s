/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { RejectionScreen } from './components/RejectionScreen';
import { AnalyzingScreen } from './components/AnalyzingScreen';
import { ProposalScreen } from './components/ProposalScreen';
import { CelebrationScreen } from './components/CelebrationScreen';
import { playSound } from './utils/audio';
import { HeartDoodle, StarDoodle } from './components/Doodles';
import { Heart } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'rejected' | 'analyzing' | 'proposal' | 'celebration'>('welcome');
  const [applicantName, setApplicantName] = useState('Lucky Candidate');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedReactions, setSelectedReactions] = useState<Record<number, string>>({});

  // Restore candidate name if in sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('unnati_bf_app_name');
      if (saved) setApplicantName(saved);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const handleStart = (name: string) => {
    setApplicantName(name);
    try {
      sessionStorage.setItem('unnati_bf_app_name', name);
    } catch {}
    playSound('pop', false);
    setStep('quiz');
  };

  const handleSelectOption = (
    questionId: number,
    optionId: string,
    reaction: string,
    points: number,
    isDisqualifying?: boolean
  ) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setSelectedReactions((prev) => ({ ...prev, [questionId]: reaction }));

    // If candidate picked a casual / timepass dealbreaker, immediately reject!
    if (isDisqualifying) {
      playSound('pop', false);
      setTimeout(() => {
        setStep('rejected');
      }, 350);
      return;
    }

    playSound('select', false);
  };

  const handleNextQuestion = () => {
    playSound('pop', false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    playSound('pop', false);
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  const handleSubmitQuiz = () => {
    // Check if the final question was disqualifying
    const q10Answer = answers[10];
    if (q10Answer === '10b' || q10Answer === '10c') {
      setStep('rejected');
      return;
    }

    playSound('chime', false);
    setStep('analyzing');
  };

  const handleAnalysisComplete = () => {
    playSound('pop', false);
    setStep('proposal');
  };

  const handleAcceptProposal = () => {
    playSound('cheer', false);
    setStep('celebration');
  };

  const handleRestart = () => {
    playSound('pop', false);
    setStep('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSelectedReactions({});
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col relative overflow-x-hidden bg-grid-pattern">
      {/* Subtle background ambient decorations (clean, no distracting yellow stars) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-25">
        <div className="absolute top-12 left-6 text-rose-300">
          <HeartDoodle className="w-10 h-10" />
        </div>
        <div className="absolute bottom-20 left-10 text-purple-200">
          <HeartDoodle className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 right-12 text-rose-300">
          <HeartDoodle className="w-8 h-8" />
        </div>
      </div>

      {/* Top Header with Baby Chick & Love Portal */}
      <Header
        onRestart={handleRestart}
        currentStep={step}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center relative z-10">
        {step === 'welcome' && (
          <WelcomeScreen
            onStart={handleStart}
            initialName={applicantName === 'Lucky Candidate' ? '' : applicantName}
          />
        )}

        {step === 'quiz' && (
          <QuizScreen
            applicantName={applicantName}
            currentIndex={currentQuestionIndex}
            answers={answers}
            selectedReactions={selectedReactions}
            onSelectOption={handleSelectOption}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {step === 'rejected' && (
          <RejectionScreen
            applicantName={applicantName}
            onRestart={handleRestart}
          />
        )}

        {step === 'analyzing' && (
          <AnalyzingScreen
            applicantName={applicantName}
            onComplete={handleAnalysisComplete}
          />
        )}

        {step === 'proposal' && (
          <ProposalScreen
            applicantName={applicantName}
            onAccept={handleAcceptProposal}
          />
        )}

        {step === 'celebration' && (
          <CelebrationScreen
            applicantName={applicantName}
            answers={answers}
            onRestart={handleRestart}
            onPlayChime={() => playSound('cheer', false)}
          />
        )}
      </main>

      {/* Subtle Footer */}
      <footer className="w-full py-4 px-6 border-t border-rose-100/60 bg-white/90 text-center text-xs text-slate-400 relative z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-slate-500 font-medium">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Unnati’s Love Portal • Screening Office</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 font-sans">
            <span>Made for Unnati with love & care</span>
            <span className="text-rose-400">♥</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
