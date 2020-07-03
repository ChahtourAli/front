import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import loading from './Loading';
import agence from './agence';

export default combineReducers({
  form,
  loading,
  agence,
});
