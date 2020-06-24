import PropTypes from 'prop-types';
import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

const override = css``;

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="loader">
          <div className="sweet-loading">
            <ScaleLoader
              css={override}
              sizeUnit="px"
              size={35}
              color="#4a90e2"
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
