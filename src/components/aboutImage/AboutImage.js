import React from "react";
import Mount from "../../assets/img1.png"
import styles from "./AboutImage.module.css"


export default function aboutImage() {
  return (
    <>
      <img className={styles.nature} src={Mount} alt="images" />
    </>
  )
}
