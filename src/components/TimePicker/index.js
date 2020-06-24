/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TimeKeeper from 'react-timekeeper';
import moment from 'moment';

const TimePicker = ({
  input: { onChange, value: initialValue },
  id,
  label,
  meta: { submitFailed, error, warning },
}) => {
  const [time, setTime] = useState(initialValue || moment().format('LT'));
  const [showTimeSelector, setShowTimeSelector] = useState(false);

  useEffect(() => {
    onChange(time);
  }, [time]);

  const handleTimeChange = newTime => {
    setTime(newTime.formatted12.toUpperCase());
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
      <div>
        <input
          readOnly
          className="form-control"
          value={time}
          onFocus={() => setShowTimeSelector(true)}
        />
        {showTimeSelector && (
          <TimeKeeper
            switchToMinuteOnHourSelect
            onDoneClick={() => setShowTimeSelector(false)}
            time={time}
            onChange={handleTimeChange}
          />
        )}
      </div>

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

TimePicker.propTypes = {
  value: PropTypes.string,
  input: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
};

export default TimePicker;
