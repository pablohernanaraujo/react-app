import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

it('runs the first test', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(getByText('My App')).toBeInTheDocument();
});
