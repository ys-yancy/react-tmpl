import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './routers/app/App';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
