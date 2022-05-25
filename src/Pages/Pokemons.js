import React, { useState } from 'react';
import WithLoading from '../Components/hocs/Loading';
import PokemonsList from '../Components/pokemons/PokemonsList';

const PokemonsWithLoading = WithLoading(PokemonsList);

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const getAllPokemons = () => {
      setIsLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTimeout(() => {
            setIsLoading(false);
            setPokemon(res.results.map((p) => p));
          }, 1500);
        });
    };
    getAllPokemons();
  };

  return (
    <div>
      <div>Please, enter number of pokemons you want to see!</div>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Input Number:{' '}
          <input
            type="text"
            placeholder="ex. 5"
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <PokemonsWithLoading isLoading={isLoading} pokemons={pokemon} />
    </div>
  );
};

export default Pokemons;
