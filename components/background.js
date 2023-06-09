import styles from '../styles/Home.module.css';

export default function Background({open, activeIdx, backgrounds, handleSetBackground }){
    return (
        open ?
        <div className={styles.grid}>
          {
            backgrounds.map((name, i) =>{
              return(
                <a 
                  className={activeIdx == i? styles['card-selected']: styles.card}
                  onClick={() => handleSetBackground(i)}>
                <h3>{name}</h3>
              </a>
              )
            })
          }
      </div>
      :
      null
    )
}