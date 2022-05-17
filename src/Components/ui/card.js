/* eslint-disable react/prop-types */
import React from 'react';

import classes from './card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Card;
