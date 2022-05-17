/* eslint-disable react/prop-types */
import React, { useEffect, useReducer } from 'react';
import Card from '../ui/card';
import Button from '../ui/button';
import classes from './Hooks.module.css';

function reducer(state, action) {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'minus':
      return {
        ...state,
        count: state.count - 1,
      };
    default: {
      return state;
    }
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const { count } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'plus' });
    }, 1000000);
    return () => clearInterval(id);
  }, []);

  return (
    <Card className={classes.item} title={'useReducer'}>
      <label>Counter: {count}</label>
      <Button
        className={classes.button}
        onClick={() => dispatch({ type: 'plus' })}
      >
        increase
      </Button>
      <Button onClick={() => dispatch({ type: 'minus' })}>decrease</Button>
    </Card>
  );
}

export default Reducer;
