import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const styles = {
  li: {
    display: 'flex',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
    width: '25%',
  },

  head: {
    marginLeft: '2.5rem',
  },
};

function App() {
  return (
    <div>
      {/* <Welcome name="React !" /> */}
      <nav>
        <ul>
          <li style={styles.li}>
            <Link to="/">Home</Link>
          </li>
          <li style={styles.li}>
            <Link to="/hocs">Hocs</Link>
          </li>
          <li style={styles.li}>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li style={styles.li}>
            <Link to="/refs">Refs</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact>
          {/* <Home /> */}
        </Route>
        <Route path="/hocs" component={Hocs} exact>
          {/* <Hocs /> */}
        </Route>
        <Route path="/hooks" exact>
          <Hooks />
        </Route>
        <Route path="/refs" exact>
          <Refs />
        </Route>
      </Switch>

      {/* <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch> */}
    </div>
  );
}

// function Welcome(props) {
//   return <h1 style={styles.head}>Привіт, {props.name}</h1>;
// }

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Hocs() {
  return (
    <div>
      <h2>Hocs</h2>
    </div>
  );
}

function Hooks() {
  return (
    <div>
      <h2>Hooks</h2>
    </div>
  );
}

function Refs() {
  return (
    <div>
      <h2>Refs</h2>
    </div>
  );
}

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h2>ID: {id}</h2>
//     </div>
//   )
// }

export default App;
