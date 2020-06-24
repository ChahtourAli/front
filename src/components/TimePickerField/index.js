import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import React from 'react';
import TimePicker from 'components/TimePicker';

const TimePickerField = ({ label, name, placeholder, validate }) => {
  return (
    <Field
      label={label}
      name={name}
      component={TimePicker}
      placeholder={placeholder}
      aria-label={name}
      id={name}
      validate={validate}
    />
  );
};

TimePickerField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.array,
};

export default TimePickerField;
