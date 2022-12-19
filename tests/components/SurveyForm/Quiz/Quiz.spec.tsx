import React from 'react';
import Quiz from '@components/SurveyForm/Quiz';
import { renderHook, screen, render } from '@testing-library/react';
import useSurveyFormHook from '@components/SurveyForm/useSurveyFormHook';

describe('Quiz component', () => {
  test('should render component properly', async () => {
    // when
    const {
      result: { current },
    } = renderHook(() => useSurveyFormHook());
    render(<Quiz {...current} questionIndex={0} />);

    // then
    expect(await screen.findAllByRole('radio')).toHaveLength(4);
    expect(await screen.findAllByRole('button')).toHaveLength(2);

    expect(screen.getByRole('button', { name: 'Next >' })).toHaveProperty('disabled');
    expect(screen.getByRole('button', { name: 'Next >' }).getAttribute('disabled')).toBe('');

    expect(screen.getByRole('button', { name: '< Prev' })).toHaveProperty('disabled');
    expect(screen.getByRole('button', { name: '< Prev' }).getAttribute('disabled')).toBe('');
  });
});
