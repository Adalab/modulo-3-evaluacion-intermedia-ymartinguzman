import React, { useState } from 'react';
import '../stylesheet/App.scss';
import pokemonArray from '../data/pokemon.json';
import PokeList from './PokeList';
import { unstable_concurrentAct } from 'react-dom/test-utils';

function App() {
  const [pokemonData, setPokemonData] = useState(pokemonArray);
  console.log({ setPokemonData });

  return (
    <div>
      <PokeList data={pokemonArray} />
    </div>
  );
}

export default App;
