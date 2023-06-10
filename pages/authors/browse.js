import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'
import quotesService from '../../utils/api/quotes'
import Link from 'next/link'

export async function getStaticProps() {
  console.log('here')
  const quotes = quotesService.getQuotes();
  const authorsMap = {};
  for(const quote of quotes){
      authorsMap[quote.a] = null;
  }
  const data = Object.keys(authorsMap);
  console.log(data)

  return {
    props: {
      data,
    },
  };
}

export default function Author({ data }) {

  return (
    <div className={styles.container}>
        <div className={styles.grid}>
        {
            data.map(author =>{
                return(
                    <Link href={`/authors/${author}`} className={styles.card}>
                        <h3>{author} &rarr;</h3>
                        <p>View author profile.</p>
                    </Link>
                )
            })
        }
        </div>
    </div>
  )
}
