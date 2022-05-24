/* eslint-disable react/prop-types */
import React from 'react';

const PokemonsList = ({ pokemons }) => {
  if (!pokemons) return <p>Submit number</p>;
  if (!pokemons.length) return <p>No pokemons, sorry</p>;
  return (
    <ul>
      {pokemons.map((pok, index) => {
        return <li key={index}>{pok.name}</li>;
      })}
    </ul>
  );
};

export default PokemonsList;
