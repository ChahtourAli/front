import { Field } from 'redux-form';
import ImagePicker from 'components/ImagePicker';
import PropTypes from 'prop-types';
import React from 'react';

const ImagePickerField = ({ name, validate, maxFiles, label }) => {
  return <Field name={name} id={name} component={ImagePicker} validate={validate} maxFiles={maxFiles} label={label} />;
};

ImagePickerField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.array,
  maxFiles: PropTypes.number,
  label: PropTypes.string,
};

export default ImagePickerField;
