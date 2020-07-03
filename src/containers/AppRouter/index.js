import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import React from 'react';
import Signin from 'pages/Signin';
import Commande from 'pages/Commande';
import Navbar from 'components/Navbar/Navbar';
import Versement from 'pages/Versement/Versement';
import HistoriqueOperation from 'pages/HistoriqueOperation/HistoriqueOperation';
import HomePageSiege from 'pages/HomePageSiege/HomePageSiege';

const App = () => {
  let location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Switch>
        <Route exact path="/versement" component={Versement} />
        <Route
          exact
          path="/HistoriqueOperation"
          component={HistoriqueOperation}
        />
        <Route exact path="/homesiege" component={HomePageSiege} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={Signin} />
        <Route exact path="/Commande" component={Commande} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
