export interface SelectedAnswer {
  question: number;
  answerId: number;
  value: number;
}
export interface SelectedAnswers {
  [key: number]: SelectedAnswer;
}

export interface Answer {
  answer: string;
  value: number;
}

export interface QuetionsData {
  question: string;
  answers: Array<Answer>;
}
