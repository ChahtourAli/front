import { change, unregisterField } from 'redux-form';

export default (formName, fieldsArray, dispatch) => {
  fieldsArray.forEach(field => {
    dispatch(change(formName, field, undefined));
    dispatch(unregisterField(formName, field));
  });
};
