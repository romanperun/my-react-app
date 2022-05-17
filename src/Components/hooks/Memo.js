import React, { useState, useMemo } from 'react';
import Card from '../ui/card';
import Button from '../ui/button';
import classes from './Hooks.module.css';

const expensiveCalculation = (num) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //   const calculation = expensiveCalculation(count);
  //   const calculation = useMemo(() => expensiveCalculation(count));
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };

  return (
    <Card className={classes.item} title={'useMemo'}>
      <div>
        <label>My Todos</label>
        {todos.map((todo, index) => {
          return (
            <p key={index}>
              {index + 1}.{todo}
            </p>
          );
        })}
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
      <hr />
      <div>
        Count: {count}
        <Button onClick={increment}>+</Button>
        <label>Expensive Calculation</label>
        {calculation}
      </div>
    </Card>
  );
};

export default Memo;
