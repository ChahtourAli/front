import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';
import _ from 'lodash';
import customStyles from './styles';

const Select = ({
  id,
  input: { name, value, onChange, onFocus },
  options,
  multi = false,
  meta: { submitFailed, error, warning },
  isClearable = false,
  isSearchable = false,
  label,
  changeHandler,
}) => {
  const transformedValue = transformValue(value, options, multi);

  const handleChange = event => {
    if (changeHandler) changeHandler(event);
    if (multi) {
      return multiChangeHandler(onChange)(event);
    }

    return singleChangeHandler(onChange)(event);
  };

  return (
    <div
      className={`form-group ${submitFailed &&
        (error || warning) &&
        'u-has-error'}`}
    >
      <label className="form-label" htmlFor={id}>
        <span className="d-flex justify-content-between align-items-center">
          {label}
        </span>
      </label>
      <ReactSelect
        valueKey="value"
        name={name}
        value={transformedValue || ''}
        isMßulti={multi}
        options={options}
        isClearable={isClearable}
        isSearchable={isSearchable}
        styles={customStyles}
        onChange={handleChange}
        onFocus={onFocus}
      />
      {submitFailed &&
        ((error && (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            {error}
          </div>
        )) ||
          (warning && (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              {warning}
            </div>
          )))}
    </div>
  );
};

const singleChangeHandler = func => {
  return value => {
    func(value ? value.value : '');
  };
};

const multiChangeHandler = func => {
  return values => {
    func(values.map(value => value.value));
  };
};

const transformValue = (value, options, multi) => {
  if (multi && typeof value === 'string') return [];

  const filteredOptions =
    options &&
    typeof options === typeof [] &&
    options.filter(option => {
      return multi
        ? value.indexOf(option.value) !== -1
        : _.isEqual(option.value, value);
    });

  if (multi) return filteredOptions;
  if (filteredOptions) return filteredOptions[0];

  return undefined;
};

Select.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.object,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  multi: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  changeHandler: PropTypes.func,
};

export default Select;
