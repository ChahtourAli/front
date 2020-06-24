import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'components/Slider';

const SliderField = ({ name, label, min, max, unit }) => {
  return <Field name={name} id={name} component={Slider} label={label} min={min} max={max} unit={unit} />;
};

SliderField.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  unit: PropTypes.string,
};

export default SliderField;
