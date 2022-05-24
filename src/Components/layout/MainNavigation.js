import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Course</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hocs">Hocs</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li>
            <Link to="/refs">Refs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
