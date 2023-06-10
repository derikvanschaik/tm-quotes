// import Head from 'next/head';
import { useState } from "react";
import styles from '../styles/Home.module.css';
import Quote from '../components/quote';
import QuoteModal from '../components/quoteModal';
import quotesService  from '../utils/api/quotes'

export async function getServerSideProps(context) {
  const { query } = context;
  const author = query.author;
  let data;

  if (author) {
    data = quotesService.getQuotesByAuthor(author);
  }else{
    data = quotesService.getQuotes();
  }

  return {
    props: {
      data,
    },
  };
}

export default function Quotes({ data }) {
  const [modalQuote, setModalQuote] = useState(null);

  return (
    <>
    <div className={styles.container}>
            <ul className={styles.grid}>
                {
                    data.map(quote =>{
                        return (
                          <Quote 
                            quote={quote.q} 
                            author={quote.a} 
                            handleClick={() => setModalQuote({ quote: quote.q, author: quote.a})}
                            />
                        )
                    })
                }

            </ul>
    </div>

    <QuoteModal 
      modalQuote = {modalQuote} 
      isOpen={modalQuote !== null}
      onClose={() => setModalQuote(null)} />
    </>
  )
}
