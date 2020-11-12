import React from 'react';
import '../stylesheet/App.scss';
import pokemonArray from '../data/pokemon.json';
import PokeList from './PokeList';

function App() {
  return (
    <div>
      <PokeList data={pokemonArray} />
    </div>
  );
}

export default App;
