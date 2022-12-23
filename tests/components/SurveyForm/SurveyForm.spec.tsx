import React from 'react';
import renderer from 'react-test-renderer';
import { renderHook, render, screen, fireEvent } from '@testing-library/react';
import SurveyForm from '@components/SurveyForm';
import { uniqueIdGenerator } from '@sutils/index';
import useSurveyFormHook from '@components/SurveyForm/useSurveyFormHook';

describe('App component', () => {
  test('should render component properly', () => {
    // when
    const componentRenderer = renderer.create(<SurveyForm />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});

describe('utils test', () => {
  test('uniqueIdGenerator should return right value', () => {
    const questionWord = 'This is random question.';
    const answer = 'This is random answer.';
    const index = 1;
    const generatedWord = uniqueIdGenerator(questionWord, answer, index);
    const lastRandomNumber = generatedWord.split('_')[3];
    expect(generatedWord).toBe(questionWord + '_' + answer + '_' + index + '_' + lastRandomNumber);
  });
});

describe('useSurveyFormHook', () => {
  it('should return the correct values via custom hook', () => {
    const { result } = renderHook(() => useSurveyFormHook());
    const { quetionsData, selectedAnswers, questionIndex } = result.current;
    expect(quetionsData.length).toEqual(14);
    expect(selectedAnswers).toEqual({});
    expect(questionIndex).toEqual(-1);
  });
});

describe('workflow', () => {
  it('should work as expected', async () => {
    render(<SurveyForm />);
    fireEvent.click(screen.getByText(/start/i));
    expect(await screen.findAllByRole('radio')).toHaveLength(4);
    expect(await screen.findAllByRole('button')).toHaveLength(2);

    expect(screen.getByRole('button', { name: 'Next >' })).toHaveProperty('disabled');
    expect(screen.getByRole('button', { name: 'Next >' }).getAttribute('disabled')).toBe('');

    expect(screen.getByRole('button', { name: '< Prev' })).toHaveProperty('disabled');
    expect(screen.getByRole('button', { name: '< Prev' }).getAttribute('disabled')).toBe('');

    for (let k = 0; k < 14; k++) {
      fireEvent.click(screen.getAllByRole('radio')[0]);
      fireEvent.click(screen.getByText(/Next >/i));
    }
    expect(await screen.getByText(/Your personality trait/i).getAttribute('class')).toBe('title');
  });
});
