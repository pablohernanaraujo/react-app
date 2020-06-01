import React, { FunctionComponent } from 'react';

import { ThemeProvider as Provider } from './styled-components';
import { Palette, Emphasis } from './index';

const ThemeProvider: FunctionComponent = ({ children }) => (
  <Provider
    theme={{
      Palette,
      Emphasis,
    }}
  >
    <>{children}</>
  </Provider>
);

export default ThemeProvider;
