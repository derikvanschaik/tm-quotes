// pages/_app.js
import '../styles/globals.css'
import styles from '../styles/Home.module.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <div className={styles.logo}>
            <a href="#">Quotes R Us</a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quotes</a></li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <style jsx>
      {`
      header {
        background-color: #f2f2f2;
      }
      
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
      }
      `}
      </style>
  </>
  )
}