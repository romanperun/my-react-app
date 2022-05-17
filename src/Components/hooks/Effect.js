import React, { useState, useEffect } from 'react';
import Card from '../ui/card';
import Button from '../ui/button';

import classes from './Hooks.module.css';

const Effect = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [effectLogs, setEffectLogs] = useState([]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [
      ...prevEffectLogs,
      'effect fn has been invoked',
    ]);
  }, [randomNumber]);

  return (
    <Card className={classes.item} title="useEffect">
      <label>{randomNumber}</label>
      <Button
        className={classes.button}
        onClick={() => {
          setRandomNumber(Math.random());
        }}
      >
        Generate random number!
      </Button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'*'.repeat(index) + effect}</div>
        ))}
      </div>
    </Card>
  );
};

export default Effect;
