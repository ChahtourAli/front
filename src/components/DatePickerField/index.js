import DatePicker from 'components/DatePicker';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import React from 'react';

const DatePickerField = ({ label, name, placeholder, validate }) => {
  return (
    <Field label={label} name={name} component={DatePicker} placeholder={placeholder} aria-label={name} id={name} validate={validate} />
  );
};

DatePickerField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.array,
};

export default DatePickerField;
