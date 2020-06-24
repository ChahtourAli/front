/* eslint-disable react-hooks/exhaustive-deps */
import 'react-dates/initialize';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

const DatePicker = ({
  input: { onChange, value: initialValue, onFocus, onBlur },
  id,
  label,
  meta: { active, submitFailed, error, warning },
  withFullScreenPortal = true,
}) => {
  const [date, setDate] = useState(initialValue || moment());

  useEffect(() => {
    onChange(date);
  }, [date]);

  const handleDateChange = newDate => {
    setDate(newDate);
  };
  const blurField = () => {
    onBlur();
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

      <SingleDatePicker
        date={date}
        onDateChange={handleDateChange}
        focused={active}
        onFocusChange={active ? blurField : onFocus}
        withFullScreenPortal={withFullScreenPortal}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        customCloseIcon={<div>DONE</div>}
        readOnly
        id={id}
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

DatePicker.propTypes = {
  value: PropTypes.string,
  input: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  withFullScreenPortal: PropTypes.bool,
  meta: PropTypes.object,
};

export default DatePicker;
