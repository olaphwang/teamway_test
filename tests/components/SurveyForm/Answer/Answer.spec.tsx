import React from 'react';
import renderer from 'react-test-renderer';
import Answer from '@components/SurveyForm/Answer';

describe('Answer component', () => {
  test('should render component properly', () => {
    // when
    const componentRenderer = renderer.create(<Answer answerId="1" checked={true} answer="11" onInputChange={null} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
