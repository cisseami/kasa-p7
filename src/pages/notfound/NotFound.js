import React from 'react'

import Header from '../../components/header/Header'

import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

import Main from '../../components/main/Main'

export default function error() {
  return (
    <>
      <Header />
      <Main>
        <div className={styles.error}>
          <h1 className={styles.notFound}>404</h1>
          <h2 className={styles.anounce}>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/" >
            <p className={styles.backHome}>Retourner sur la page d'accueil</p>
          </Link>
        </div>
      </Main>
    </>
  )
}
