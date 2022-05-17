/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import Card from '../ui/card';
import Button from '../ui/button';
import classes from './Hooks.module.css';

const Callback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  //   const addTodo = () => {
  //     setTodos((t) => [...t, 'New Todo']);
  //   };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo']);
  }, [todos]);

  return (
    <Card className={classes.item} title={'useCallback'}>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <Button onClick={increment}>+</Button>
      </div>
    </Card>
  );
};

const Todos = ({ todos, addTodo }) => {
  console.log('child render');
  return (
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
  );
};

export default Callback;
