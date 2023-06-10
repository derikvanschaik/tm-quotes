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
        <style jsx>{`
            @media screen and (max-width: 768px) {
              div {
                height: 300px; /* Adjust the height as needed */
                overflow: scroll;
              }
            }
        `}
        </style>
      </div>
      :
      null
    )
}