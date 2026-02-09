export type Category = 'health' | 'finance' | 'home' | 'support' | 'coverage';

export interface Option {
  id: string;
  text: string;
  score: number; // 0 to 10
}

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: Option[];
}

export interface UserAnswers {
  [questionId: number]: Option;
}

export interface UserProfile {
  name: string;
  email: string;
  age: string;
}

export interface CategoryScore {
  category: Category;
  label: string;
  score: number;
  maxScore: number;
}