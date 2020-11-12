import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <>
        <h2>Mi lista de Pokemon</h2>
        <Pokemon />
      </>
    );
  }
}
export default PokeList;
