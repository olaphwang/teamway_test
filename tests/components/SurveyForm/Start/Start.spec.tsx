import React from 'react';
import renderer from 'react-test-renderer';
import Start from '@components/SurveyForm/Start';
import { renderHook } from '@testing-library/react';
import useSurveyFormHook from '@components/SurveyForm/useSurveyFormHook';

describe('Start component', () => {
  test('should render component properly', () => {
    // when
    const {
      result: { current },
    } = renderHook(() => useSurveyFormHook());
    const { handleNext } = current;
    const componentRenderer = renderer.create(<Start handleNext={() => handleNext()} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
