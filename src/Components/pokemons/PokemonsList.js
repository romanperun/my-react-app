/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './styles.css';

const PokemonsList = ({ pokemons }) => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        console.log(total, item);
        return total + ', ' + item;
      })
    : '';

  const isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

  if (!pokemons) return <p>Submit number</p>;
  if (!pokemons.length) return <p>No pokemons, sorry</p>;

  return (
    <div className="poc">
      <div>{`Your favourite pokemons: ${checkedItems}`}</div>
      <div className="checkList">
        <div className="title">Your Pokemons List:</div>
        <div className="list-container">
          {pokemons.map((pok, index) => (
            <div key={index}>
              <input value={pok.name} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(pok)}>{pok.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonsList;
