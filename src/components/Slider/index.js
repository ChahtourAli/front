/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import MuiSlider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import formatPrice from 'helpers/formatPrice';

const Slider = ({
  input: { onChange, value: initalValue },
  min,
  max,
  label,
  id,
  unit,
}) => {
  const [value, setValue] = useState(
    initalValue || (typeof min === 'number' && max ? [min, max] : min || max),
  );

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        <span className="d-flex justify-content-between align-items-center">
          {`${label} entre ${formatPrice(value[0], unit)} et ${formatPrice(
            value[1],
            unit,
          )} `}
        </span>
      </label>
      <MuiSlider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="text-primary"
      />
    </>
  );
};

Slider.propTypes = {
  input: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
  id: PropTypes.string,
  unit: PropTypes.string,
};

export default Slider;
