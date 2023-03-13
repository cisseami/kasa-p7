import React from "react";
import styles from "./Main.module.css"


function Main({ children }) {
    return <div className={styles.main}>{children}</div>;
}

export default Main;