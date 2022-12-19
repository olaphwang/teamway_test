import React, { useRef, Dispatch } from 'react';
import Answer from '@components/SurveyForm/Answer';
import { SelectedAnswers, QuetionsData } from '@components/SurveyForm/types';
import { uniqueIdGenerator } from '../utils';
import styles from './index.scss';

interface QuizProps {
  questionIndex: number;
  selectedAnswers: SelectedAnswers;
  setselectedAnswers: Dispatch<SelectedAnswers>;
  quetionsData: QuetionsData[];
  handleNext: () => void;
  handlePrev: () => void;
}

const uncheckRadioInputs = (inputParents: any) => {
  for (let i = 0; i < inputParents.length; i++) {
    inputParents[i].children[0].checked = false;
  }
};

const Quiz = ({
  questionIndex,
  selectedAnswers,
  setselectedAnswers,
  quetionsData,
  handleNext,
  handlePrev,
}: QuizProps) => {
  const quiz = useRef<HTMLDivElement>(null);

  const onInputChange = (index: number) => (word: string) => {
    setselectedAnswers({
      ...selectedAnswers,
      [questionIndex]: {
        question: questionIndex,
        answerId: index,
        value: quetionsData[questionIndex].answers[index].value,
      },
    });
  };

  return quetionsData.length ? (
    <div ref={quiz}>
      <div className={styles.questionsCounter}>
        Question {questionIndex + 1} / {quetionsData.length}
      </div>
      <div className={styles.questionText}>{quetionsData[questionIndex].question}</div>
      <form>
        {quetionsData[questionIndex].answers.map((element, index) => {
          return (
            <Answer
              onInputChange={onInputChange(index)}
              answer={element.answer}
              key={index}
              answerId={uniqueIdGenerator(quetionsData[questionIndex].question, element.answer, index)}
              checked={
                index ===
                (selectedAnswers[questionIndex]
                  ? selectedAnswers[questionIndex].answerId
                  : selectedAnswers[questionIndex])
              }
            />
          );
        })}
      </form>
      <button
        className={styles.checkAnswer + ' ' + styles.next}
        onClick={() => {
          uncheckRadioInputs(quiz.current.children[2].children);
          handleNext();
        }}
        disabled={questionIndex === quetionsData.length || selectedAnswers[questionIndex] === undefined}
      >
        Next &gt;
      </button>
      <button
        className={styles.checkAnswer + ' ' + styles.prev}
        onClick={() => {
          uncheckRadioInputs(quiz.current.children[2].children);
          handlePrev();
        }}
        disabled={!questionIndex}
      >
        &lt; Prev
      </button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Quiz;
