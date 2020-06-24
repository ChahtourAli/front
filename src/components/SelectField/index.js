import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'components/Select';

const SelectField = ({ label, name, placeholder, options, validate, getSelectedValue, ...props }) => {
  return (
    <Field
      label={label}
      name={name}
      component={Select}
      placeholder={placeholder}
      aria-label={name}
      id={name}
      validate={validate}
      options={options}
      changeHandler={getSelectedValue}
      {...props}
    />
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  validate: PropTypes.array,
  getSelectedValue: PropTypes.func,
};

export default SelectField;
