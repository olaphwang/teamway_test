import React from 'react';
import styles from './index.scss';

interface StartProps {
  handleNext: () => void;
}
const Start = ({ handleNext }: StartProps) => {
  return (
    <div className={styles.start}>
      <h3 className={styles.title}>
        <strong>Personality trait</strong>
      </h3>

      <p className={styles.description}>
        Build a simple personality test application, that takes 3-5 different questions, maps them into a score and
        produces a personality trait of either Introvert or Extrovert.
      </p>

      <div className={styles['start-button-container']} onClick={handleNext}>
        Start
      </div>
    </div>
  );
};

export default Start;
