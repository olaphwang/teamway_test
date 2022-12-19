import React from 'react';
import { SelectedAnswers } from '@components/SurveyForm/types';
import styles from './index.scss';

interface ResultProps {
  handleHome: () => void;
  handleReStart: () => void;
  selectedAnswers: SelectedAnswers;
}

const Result = ({ handleHome, handleReStart, selectedAnswers }: ResultProps) => {
  const score = Object.values(selectedAnswers).reduce((total, v) => (total += v.value), 0);
  return (
    <div className={styles.result}>
      <div className={styles['result-header']}>
        <strong>{score}</strong>
      </div>

      <div className={styles.title}>Your personality trait</div>

      <div className={styles.description}>Your score is {score}</div>

      <div className={`${styles['home-button-container']} ${styles['button-container']}`} onClick={handleHome}>
        Home
      </div>
      <div className={`${styles['restart-button-container']} ${styles['button-container']}`} onClick={handleReStart}>
        Restart
      </div>
    </div>
  );
};

export default Result;
