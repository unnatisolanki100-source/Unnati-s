export interface QuestionOption {
  id: string;
  label: string;
  subtext?: string;
  reaction: string;
  points: number;
  isDisqualifying?: boolean;
}

export interface Question {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  note: string;
  options: QuestionOption[];
}

export interface ApplicationState {
  step: 'welcome' | 'quiz' | 'rejected' | 'analyzing' | 'proposal' | 'celebration';
  applicantName: string;
  currentQuestionIndex: number;
  answers: Record<number, string>;
  selectedReactions: Record<number, string>;
}
