/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hooks from './Pages/Hooks';
import Home from './Pages/Home';
import Layout from './Components/layout/Layout';
import Hocs from './Pages/Hocs';
import Refs from './Pages/Refs';
import Pokemons from './Pages/Pokemons';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hocs">
          <Hocs />
          {/* <Callback /> */}
        </Route>
        <Route path="/hooks">
          <Hooks />
        </Route>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
        <Route path="/refs">
          <Refs />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
