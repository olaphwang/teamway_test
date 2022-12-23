export interface SelectedAnswers {
  [key: number]: {
    questionId: number;
    answerId: number;
    value: number;
  };
}

export interface Answer {
  text: string;
  value: number;
}

export interface Questions {
  text: string;
  answers: Array<Answer>;
}
