import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import loading from './Loading';

export default combineReducers({
  form,
  loading,
});
