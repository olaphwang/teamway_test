import React from 'react';
import renderer from 'react-test-renderer';
import Result from '@components/SurveyForm/Result';
import { renderHook } from '@testing-library/react';
import useSurveyFormHook from '@components/SurveyForm/useSurveyFormHook';

describe('Result component', () => {
  test('should render component properly', () => {
    // when
    const {
      result: { current },
    } = renderHook(() => useSurveyFormHook());
    const { handleHome, handleReStart, selectedAnswers } = current;
    const componentRenderer = renderer.create(
      <Result
        handleHome={() => handleHome()}
        handleReStart={() => handleReStart()}
        selectedAnswers={selectedAnswers}
      />,
    );
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
