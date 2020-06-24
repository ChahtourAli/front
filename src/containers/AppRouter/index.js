import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import React from 'react';
import Signin from 'pages/Signin';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
