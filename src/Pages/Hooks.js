import React from 'react';
import Callback from '../Components/hooks/Callback';
import Effect from '../Components/hooks/Effect';
import Memo from '../Components/hooks/Memo';
import Reducer from '../Components/hooks/Reducer';
import Ref from '../Components/hooks/Ref';
import State from '../Components/hooks/State';

const style = {
  textAlign: 'center',
  fontSize: '2.5rem',
};

function Hooks() {
  return (
    <section>
      <h1 style={style}>All Examples of Hooks</h1>
      <State />
      <Effect />
      <Ref />
      <Memo />
      <Callback />
      <Reducer />
    </section>
  );
}

export default Hooks;
