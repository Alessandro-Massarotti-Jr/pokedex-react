import { useState, useEffect } from 'react'
import styles from './pokemonStats.module.css'
import pokeball from '../../assets/img/pokeball.png'



function PokemonStats({ id }) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    let types = []
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id).then((resp) => resp.json()).then((data) => { setPokemon(data); setLoading(false); setLoaded(true); }).catch((err) => { console.log(err) })
    }, [id])

    return (<>
    {loading && 
     <div className={styles.loading}>
         <div className={styles.image}>
             <img src={pokeball} alt="pokeball" />
         </div>
     </div>
    }
    {loaded &&
        <div className={styles.pokemonStats}>
            <h2>Stats</h2>
            <div className={styles.stats}>
                <ul>
                    <li>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</li>
                    <li>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</li>
                    <li>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</li>
                </ul>
                <ul>
                <li>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</li>
                <li>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</li>
                <li>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</li>
                </ul>
            </div>
        </div>
     }
        </>
    );
}

export default PokemonStats;