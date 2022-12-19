import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SurveyForm from '@components/SurveyForm';
import style from './index.scss';

const App = (): JSX.Element => (
  <div className={style.componentWrapper}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
