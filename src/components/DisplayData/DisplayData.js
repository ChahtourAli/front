import PropTypes from 'prop-types';
import React from 'react';

const DisplayData = ({ title, value, className }) => {
  return (
    <li className="h5 d-sm-flex justify-content-sm-between py-1">
      <span className="font-weight-bold">{`${title}:`}</span>
      <span className={`${className}`}>{value}</span>
    </li>
  );
};

DisplayData.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default DisplayData;
