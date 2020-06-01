import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import ThemeProvider from './theme/context';
import Header from './components/header';
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
