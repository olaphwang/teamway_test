import React from 'react';
import Quiz from '@components/SurveyForm/Quiz';
import Start from '@components/SurveyForm/Start';
import Result from '@components/SurveyForm/Result';
import useSurveyFormHook from './useSurveyFormHook';

const SurveyForm = () => {
  const hook = useSurveyFormHook();

  return (
    <React.Fragment>
      {hook.questionIndex === -1 && <Start handleNext={() => hook.handleNext()} />}
      {hook.questionIndex < hook.quetionsData.length && hook.questionIndex >= 0 && <Quiz {...hook} />}
      {hook.questionIndex === hook.quetionsData.length && <Result selectedAnswers={hook.selectedAnswers} />}
    </React.Fragment>
  );
};

export default SurveyForm;
