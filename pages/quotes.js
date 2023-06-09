// import Head from 'next/head';
import { useEffect, useState, useRef } from "react";
import styles from '../styles/Home.module.css';
import Quote from '../components/quote';
import QuoteModal from '../components/quoteModal';

async function getQuotes(){
    const resp = await fetch("https://zenquotes.io/api/quotes",
    {
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
       }
    })
    const data = await resp.json()
    return data
}

export async function getStaticProps() {
  const data = await getQuotes()
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
