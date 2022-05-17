import { useState, useEffect, useRef } from 'react';
import Button from '../ui/button';
import Card from '../ui/card';
import classes from '../hooks/Hooks.module.css';

const Ref = () => {
  const [value, setValue] = useState('useRef');
  const renderCount = useRef(1);
  const inputRef = useRef(null);

  useEffect(() => {
    renderCount.current++;
  });

  const focus = () => inputRef.current.focus();

  return (
    <Card className={classes.item} title={'useRef'}>
      <label>Number of renders: {renderCount.current}</label>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button onClick={focus}>Focus</Button>
    </Card>
  );
};

export default Ref;
