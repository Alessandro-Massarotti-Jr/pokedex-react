import { useState, useEffect } from 'react'
import pokeball from "../../assets/img/pokeball.png"
import styles from "./pokemonCard.module.css"


function PokemonCard({ id }) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    let types = []
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id).then((resp) => resp.json()).then((data) => { setPokemon(data); setLoading(false); setLoaded(true); }).catch((err) => { console.log(err) })
    }, [id])

    if (loaded) {
        pokemon.types.forEach((type) => {
            types.push(<span key={type.type.name} className={styles.type + ' ' + styles[type.type.name]}>{type.type.name}</span>);
        })
    }
    return (<>
        {loading && <div className={styles.loading}>
            <div className={styles.image}>
                <img src={pokeball} alt="pokeball" />
            </div>
        </div>}
        {loaded &&
            <div className={styles.pokemonCard}>
                <div className={styles.types}>{types}</div>
                <div className={styles.image}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                </div>
                <h2 className={styles.name}>{pokemon.name}</h2>
            </div>
        }
    </>

    );
}

export default PokemonCard;