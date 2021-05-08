import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routers from './routers';

const Routes = routers.map(([path, component]) => {
  return <Route exact path={path} component={component} key={path} />;
});

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback>
        <Switch>{Routes}</Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
