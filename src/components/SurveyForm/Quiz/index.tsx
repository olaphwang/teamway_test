import React, { useRef, Dispatch } from 'react';
import AnswerComponent from '@components/SurveyForm/Answer';
import { SelectedAnswers, Answer, Questions } from '@stypes/questions';
import { uniqueIdGenerator } from '@sutils/index';
import styles from './index.scss';

interface QuizProps {
  questionIndex: number;
  selectedAnswers: SelectedAnswers;
  setselectedAnswers: Dispatch<SelectedAnswers>;
  quetionsData: Questions[];
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
        questionId: questionIndex,
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
      <div className={styles.questionText}>{quetionsData[questionIndex].text}</div>
      <form>
        {quetionsData[questionIndex].answers.map((element: Answer, index: number) => {
          return (
            <AnswerComponent
              onInputChange={onInputChange(index)}
              answer={element.text}
              key={index}
              answerId={uniqueIdGenerator(quetionsData[questionIndex].text, element.text, index)}
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
      <div className={styles.buttonGroup}>
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
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Quiz;
