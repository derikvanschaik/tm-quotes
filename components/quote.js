import styles from '../styles/Home.module.css';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Quote({ quote , author, background, handleClick}){
    const quoteRef = useRef(null);
    useEffect(
        ()=>{
            if(background && quoteRef.current){
                quoteRef.current.style['background-image'] = `url(${background})`;
                
            }
            if(!background && quoteRef.current){
                quoteRef.current.style['background-image'] = null;

            }
        }
    , [quoteRef, background]);

    if(handleClick){
        return(
            <li  style={styles} className={styles.quote} ref={quoteRef}>
                <p onClick={handleClick}>'{quote}'</p>
                <Link href={`/authors/${author}`}>
                    <h3>{author}</h3>
                </Link>
            </li>
        )
    }
    return(
        <li className={styles.quote} ref={quoteRef}>
            <p >'{quote}'</p>
            <Link href={`/authors/${author}`}>
                <h3>{author}</h3>
            </Link>
        </li>
    )
    
}