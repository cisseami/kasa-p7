import React from 'react'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import "./Home.css"



export default function home() {

  return (
    <>
      <Banner className="homeBanner" />
      <Gallery />
    </>
  )
}

