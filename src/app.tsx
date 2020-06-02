import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import ThemeProvider from 'Theme/context';
import Header from 'Ui/header';
import routes from './routes';

const App: FunctionComponent = () => {
  const routesMap = routes.map((route) => (
    <Route key={route.path} {...route} />
  ));

  return (
    <>
      <ThemeProvider>
        <Header />
        <Switch>{routesMap}</Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
