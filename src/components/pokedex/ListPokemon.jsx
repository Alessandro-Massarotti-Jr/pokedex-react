import Pokemon from './Pokemon';
import styles from './listPokemon.module.css'


function ListPokemon({changePokemon,activeID}) {
    var rows = [];
    for (var i = 1; i <= 151; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<Pokemon key={i} id ={i} active={activeID} changeActive={changePokemon} />);
    }
  return (
      <div className={styles.listPokemon}>{rows}</div>  
)
}

export default ListPokemon;