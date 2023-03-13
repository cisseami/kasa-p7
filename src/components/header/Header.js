import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import styles from "./Header.module.css"


export default function Header() {

    const currentPage = window.location.pathname
    
    return (

        <div className={styles.header}>
            <img className={styles.kasaHead} src={Logo} alt="logo" />
            <div className={styles.nav}>
                <Link to="/" className={currentPage === '/' ? `${styles.effective}` : `${styles.noneEffective}`} >
                    <div className={styles.accueil}>Accueil</div>
                </Link>
                <Link to="/about" className={currentPage === '/about' ? `${styles.effective}` : `${styles.noneEffective}`}>
                    <div className={styles.about}>A Propos</div>
                </Link>
            </div>
        </div>

    )
}
