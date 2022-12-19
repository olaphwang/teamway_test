import React from 'react';
import styles from './index.scss';

interface AnswerProps {
  answerId: string;
  answer: string;
  onInputChange: (index: string) => void;
  checked: boolean;
}
export const Answer = ({ answerId, answer, onInputChange, checked }: AnswerProps) => {
  return (
    <div className={styles.answerWrapper}>
      <input
        type="radio"
        name="answer"
        id={answerId}
        onChange={() => {
          onInputChange(answer);
        }}
        checked={checked}
      />
      <label id={answerId} htmlFor={answerId} className={styles.answerWord}>
        {answer}
      </label>
    </div>
  );
};

export default Answer;
