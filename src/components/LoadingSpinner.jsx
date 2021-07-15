import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = (props) => {
  const containerStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: props.isLoading ? 'block' : 'none',
  };

  const spinnerStyle = {
    height: `${props.size}rem`,
    width: `${props.size}rem`,
    border: `0.4em solid ${props.spinnerColor}`,
    borderRightColor: 'transparent',
  };

  return (
    <div style={containerStyle}>
      <Spinner animation='border' role='status' style={spinnerStyle}>
        {props.innerChild}
      </Spinner>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  isLoading: true,
  size: 4,
  spinnerColor: '#84bcda',
};

export default LoadingSpinner;
