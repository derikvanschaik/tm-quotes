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
  const backgroundImage1 = `https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80`
  const backgroundImage = `https://media.istockphoto.com/id/1417164659/photo/a-golden-background-for-the-new-year-with-an-image-of-strength-in-the-brushstrokes-celebrate.jpg?s=1024x1024&w=is&k=20&c=vh4YeQK012AoKsHMk9vqoaucdY9mvsJlcu7ydhNb8jk=`;
  const [modalQuote, setModalQuote] = useState(null);
  // const [open, setOpen] = useState(false);
  // const modal = useRef(null);



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
      background={backgroundImage1} 
      isOpen={modalQuote !== null}
      onClose={() => setModalQuote(null)} />
    {/* <dialog ref={modal}>
        { 
        modalQuote &&
        <Quote 
          quote={modalQuote.quote} 
          author={modalQuote.author}
          background={backgroundImage1}
          />
        }
        <button onClick={hideModal}>Dismiss</button>
    </dialog> */}
    </>
  )
}
