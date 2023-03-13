import React from 'react'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import styles from "./Home.module.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'


export default function home() {

  return (
    <>
      <Header />
      <Main>
        <Banner className={styles.homeBanner} />
        <Gallery />
      </Main>
      <Footer />
    </>
  )
}

