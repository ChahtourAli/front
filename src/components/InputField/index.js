import { Field } from 'redux-form';
import Input from 'components/Input';
import PropTypes from 'prop-types';
import React from 'react';

const InputField = ({
  label,
  name,
  placeholder,
  type = 'text',
  forgotPasswordLink,
  forgotPasswordMessage,
  validate,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const isPassword = type === 'password';

  return (
    <Field
      name={name}
      id={name}
      label={label}
      component={Input}
      isPassword={isPassword}
      forgotPasswordLink={forgotPasswordLink}
      placeholder={placeholder}
      forgotPasswordMessage={forgotPasswordMessage}
      type={type}
      aria-label="name"
      className={className}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      validate={validate}
      {...props}
    />
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  forgotPasswordLink: PropTypes.string,
  forgotPasswordMessage: PropTypes.string,
  validate: PropTypes.array,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  className: PropTypes.string,
};

export default InputField;
