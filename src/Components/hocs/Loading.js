/* eslint-disable react/prop-types */
import React from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

const WithLoading = (Component) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <LoadingSpinner></LoadingSpinner>;
  };
};

export default WithLoading;
