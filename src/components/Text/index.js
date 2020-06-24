import PropTypes from 'prop-types';
import React from 'react';

const Text = ({ value }) => {
  return <div>{value}</div>;
};

Text.propTypes = {
  value: PropTypes.string,
};

export default Text;
