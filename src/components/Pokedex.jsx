import { useState } from 'react'
import styles from "./pokedex.module.css"
import ListPokemon from "./pokedex/ListPokemon";
import PokemonCard from "./pokedex/PokemonCard";
import PokedexDivision from "./pokedex/PokedexDivision";
import PokemonStats from './pokedex/PokemonStats';

function Pokedex() {

  const [activeId, setActiveId] = useState('1');

  function changeActive(selectedId) {
    setActiveId(selectedId);
  }

  return (
    <div className={styles.pokedex}>
      <div>
        <PokemonCard id={activeId} />
        <PokemonStats id={activeId} />
      </div>
      <PokedexDivision />
      <ListPokemon activeID={activeId} changePokemon={changeActive} />
    </div>

  )
}

export default Pokedex;
