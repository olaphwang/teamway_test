import { useState, useCallback, useEffect } from 'react';
import questions from '@components/SurveyForm/questions';
import { QuetionsData } from '@components/SurveyForm/types';

const useSurveyFormHook = () => {
  const [questionIndex, setquestionIndex] = useState<number>(-1);
  const [selectedAnswers, setselectedAnswers] = useState({});
  const [quetionsData, setquestionsData] = useState<QuetionsData[]>([]);

  useEffect(() => {
    setquestionsData(questions);
  }, [quetionsData]);

  const handleNext = useCallback(() => {
    if (questionIndex !== quetionsData.length) setquestionIndex((questionIndex) => questionIndex + 1);
  }, [questionIndex, quetionsData]);

  const handlePrev = useCallback(() => {
    if (questionIndex !== 0) setquestionIndex((questionIndex) => questionIndex - 1);
  }, [questionIndex, quetionsData]);

  const handleReStart = useCallback(() => {
    setquestionIndex(0);
    setselectedAnswers({});
  }, [questionIndex]);

  const handleHome = useCallback(() => {
    setquestionIndex(-1);
    setselectedAnswers({});
  }, [questionIndex]);

  return {
    questionIndex,
    setquestionIndex,
    selectedAnswers,
    setselectedAnswers,
    quetionsData,
    setquestionsData,
    handleReStart,
    handleHome,
    handleNext,
    handlePrev,
  };
};

export default useSurveyFormHook;
