import React from 'react'

import Header from '../../components/header/Header'

import { Link } from "react-router-dom"
import './NotFound.css'


export default function error() {
  return (
    <>
      <Header />
      <div className="error">
        <h1 className="notFound">404</h1>
        <h2 className='anounce'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" >
          <p className='back_home'>Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </>
  )
}
