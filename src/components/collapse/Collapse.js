import React from "react";

import { useState } from 'react';
import chevron from "../../assets/chevron-up.png"
import styles from "./Collapse.module.css"

export default function Collapse(props) {

    const [turn, setTurn] = useState(false);

    return (
        <div className={styles.appartementDes}>
            <div className={styles.descriptionTitle} onClick={() => setTurn(!turn)} >
                <span className={styles.desTitle}> {props.title} </span>
                <img
                    className={turn ? `${styles.chevron} ${styles.chevronUp}`: `${styles.chevron} ${styles.chevronDown}`}
                    src={chevron}
                    alt="show content"
                />
            </div>
            <div className={turn ? `${styles.collapseContent}` : `${styles.collapseContentHidden}`}>{props.content}</div>
        </div>
    )
}
