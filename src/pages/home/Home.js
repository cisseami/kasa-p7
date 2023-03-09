import React from 'react'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'

import styles from "./Home.module.css"


export default function home() {

  return (
    <>
      <Banner className={styles.homeBanner} />
      <Gallery />
    </>
  )
}

