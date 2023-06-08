// import Head from 'next/head';
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';

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

  return (
    <div className={styles.container}>
            <ul className={styles.grid}>
                {
                    data.map(quote =>{
                        return(
                            <li className={styles.quote}>
                                <p>{quote.q}</p>
                                <h3>{quote.a}</h3>
                            </li>
                        )
                    })
                }

            </ul>
    </div>
  )
}
