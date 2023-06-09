import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Navbar({ }){
    const router = useRouter();
    const [open, setOpen] = useState(false);

    // when user uses mobile nav bar to navigate, 
    // should be set to false so doesn't stay open on
    // same page
    useEffect(() =>{
        setOpen(false);
    }, [router.pathname]);

    const toggleMobileNavbar = () =>{
        setOpen(!open);
    }

    return(
        <header className={styles.header}>
        <nav className={styles.nav}>
            {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
            <svg onClick={toggleMobileNavbar} className={styles.hamburger} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            </svg>
          <div className={styles.logo}>
            <Link href="/">Xen quotes</Link>
          </div>

          <ul className={styles['nav-links']}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quotes">Quotes</Link></li>
          </ul>
        </nav>
        {
            open &&
            <ul className={styles['nav-links-mobile']}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/quotes">Quotes</Link></li>
            </ul>
        }

      </header>
    )
}