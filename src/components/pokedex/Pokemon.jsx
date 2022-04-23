import { useState, useEffect } from 'react'
import styles from './Pokemon.module.css'
import pokeball from '../../assets/img/pokeball.png'



function Pokemon({ id, changeActive,active }) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [addActive, setAddActive] = useState(' ');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id).then((resp) => resp.json()).then((data) => { setPokemon(data); setLoading(false); setLoaded(true); }).catch((err) => { console.log(err) })
    }, [])
  
   useEffect(()=>{ 
    if(id==active){
        setAddActive('active');
      }
      else{
          setAddActive(' ');
      }
},[active])

    return (<>
        {loading &&
            <div className={styles.loading}>
                <h4 className={styles.nome}><span className={styles.circle}><img src={pokeball} alt="pokeball" /></span> Loading...</h4>
            </div>
        }
        {loaded &&
            <div onClick={()=> changeActive(id)} className={styles.pokemon+' '+styles[addActive]}>
                <div className={styles.icone}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                </div>
                <h4 className={styles.nome}><span className={styles.circle}><img src={pokeball} alt="pokeball" /></span> {pokemon.name}</h4>
            </div>
        }
    </>
    );
}

export default Pokemon;