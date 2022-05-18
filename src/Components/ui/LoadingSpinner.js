import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes.spinner__container}>
      <div className={classes.loading__spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
