import React from "react";
import { Link } from "react-router-dom"
import styles from "./Card.module.css"


export default function Card({id, title, cover}) {
    return (
        <Link to = {`/${id}`} className={styles.house_link}> 
            <div className={styles.house} >
                <img className={styles.house_img} src={cover} alt={title} />

                <div className={styles.house_name}>{title}</div>
            </div>
        </Link>
    )
}