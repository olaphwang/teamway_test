import { useState, useCallback, useEffect } from 'react';
import { Questions, SelectedAnswers } from '@stypes/questions';
import questions from '@mockData/questions';

const useSurveyFormHook = () => {
  const [questionIndex, setquestionIndex] = useState<number>(-1);
  const [selectedAnswers, setselectedAnswers] = useState<SelectedAnswers>({});
  const [quetionsData, setquestionsData] = useState<Questions[]>([]);

  useEffect(() => {
    setquestionsData(questions.map((q) => ({ ...q, answers: q.answers.sort(() => 0.5 - Math.random()) })));
  }, []);

  const handleNext = useCallback(() => {
    if (questionIndex !== quetionsData.length) setquestionIndex((questionIndex) => questionIndex + 1);
  }, [questionIndex, quetionsData]);

  const handlePrev = useCallback(() => {
    if (questionIndex !== 0) setquestionIndex((questionIndex) => questionIndex - 1);
  }, [questionIndex, quetionsData]);

  return {
    questionIndex,
    setquestionIndex,
    selectedAnswers,
    setselectedAnswers,
    quetionsData,
    setquestionsData,
    handleNext,
    handlePrev,
  };
};

export default useSurveyFormHook;
