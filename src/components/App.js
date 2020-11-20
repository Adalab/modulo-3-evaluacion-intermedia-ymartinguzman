import React, { useState } from 'react';
import '../stylesheet/App.scss';
import pokemonArray from '../data/pokemon.json';
import PokeList from './PokeList';

function App() {
  const [pokemonData, setPokemonData] = useState(pokemonArray);

  return (
    <div>
      <header>
        <h2 className="title">Mi lista de Pokemon</h2>
      </header>
      <main>
        <PokeList data={pokemonData} />
      </main>
    </div>
  );
}

export default App;
