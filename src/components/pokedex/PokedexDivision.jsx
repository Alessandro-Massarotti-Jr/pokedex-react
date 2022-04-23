import styles from './pokedexDivision.module.css'
import pokeball from '../../assets/img/pokeball.png'


function PokedexDivision() {
  return (
      <div className={styles.pokedexDivision}>
          <div className={styles.imageTop}><img src={pokeball} alt="pokeball" /></div>
          <div className={styles.bar}></div>
          <div className={styles.imageBottom}><img src={pokeball} alt="pokeball" /></div>
      </div>  
)
}

export default PokedexDivision;