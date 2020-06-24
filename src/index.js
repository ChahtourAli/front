import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import * as serviceWorker from 'serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/AppRouter';
import store from 'store';

toast.configure({
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  className: 'toast-container',
});
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Root} />
        <ToastContainer />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
