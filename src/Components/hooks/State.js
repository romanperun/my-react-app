import React, { useState } from 'react';
import Card from '../ui/card';
import Button from '../ui/button';

import classes from './Hooks.module.css';

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <Card className={classes.item} title="useState">
      <label>Counter: {count}</label>
      <Button className={classes.button} onClick={() => setCount(count + 1)}>
        increase
      </Button>
      <Button onClick={() => setCount(count - 1)}>decrease</Button>
    </Card>
  );
};

export default State;
