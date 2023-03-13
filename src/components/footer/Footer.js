import React from "react";
import logo from "../../assets/logoW.png"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
        <img className={styles.logFoot} src={logo} alt="logo"/>
        <p className={styles.certification}>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
