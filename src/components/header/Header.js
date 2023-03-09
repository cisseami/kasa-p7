import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

export default function Header() {
    return (

        <div className='header'>
            <img className='kasa_head' src={Logo} alt="logo" />
            <div className='nav'>
                <Link to="/" >
                    <div className='accueil'>Accueil</div>
                </Link>
                <Link to="/about">
                    <div className='about'>A Propos</div>
                </Link>
            </div>
        </div>

    )
}
