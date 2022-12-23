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
    const { selectedAnswers } = current;
    const componentRenderer = renderer.create(<Result selectedAnswers={selectedAnswers} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
