import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar({ }){
    return(
        <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">Xen quotes</Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quotes">Quotes</Link></li>
          </ul>
        </nav>
      </header>
    )
}