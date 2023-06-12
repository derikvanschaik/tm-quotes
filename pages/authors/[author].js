import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router'
import quotesService from '../../utils/api/quotes'

import Link from 'next/link'

export async function getServerSideProps(context) {
  const { query } = context;
  const author = query.author;
  const data = quotesService.getBio(author);

  return {
    props: {
      data,
    },
  };
}

export default function Author({ data }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={'author'}>
        <div className={'author-header'}>
          <h1>{router.query.author}</h1>
          <Link href={{ pathname: '/quotes', query: {author: router.query.author}}}>
            <h3>Browse quotes by {router.query.author} &rarr;</h3>
          </Link>
        </div>
        <hr className={'border'}/>
        <p className={'bio'}>{data.b}</p>
      </div>
        <style jsx>{`
          .author{
            display: flex;
            width: 80%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .author-bio{
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .bio{
            font-size: 1.25rem;
            line-height: 1.5;
          }
          .border{
            border-bottom: 0.3em solid black;
            width: 100%;
          }
          .author-header{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
          }
          @media (max-width: 768px) {
            .author-header {
              flex-direction: column;
            }
          }
          

        `}</style>
    </div>
  )
}
