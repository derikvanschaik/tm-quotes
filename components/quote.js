import styles from '../styles/Home.module.css';
import { useEffect, useRef } from 'react';

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
            <li  style={styles} className={styles.quote} onClick={handleClick} ref={quoteRef}>
                <p>{quote}</p>
                <h3>{author}</h3>
            </li>
        )
    }
    return(
        <li className={styles.quote} ref={quoteRef}>
            <p>{quote}</p>
            <h3>{author}</h3>
        </li>
    )
    
}