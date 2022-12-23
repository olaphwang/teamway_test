import React from 'react';
import { SelectedAnswers } from '@stypes/questions';
import styles from './index.scss';

interface ResultProps {
  selectedAnswers: SelectedAnswers;
}

const Result = ({ selectedAnswers }: ResultProps) => {
  const score = Object.values(selectedAnswers).reduce((total, v) => (total += v.value), 0);
  return (
    <div className={styles.result}>
      <div className={styles['result-header']}>
        <strong>{score}</strong>
      </div>

      <div className={styles.title}>Your personality trait</div>

      <div className={styles.description}>Your score is {score}</div>
    </div>
  );
};

export default Result;
