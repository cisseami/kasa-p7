import React from "react";
import "./Card.css"
import { Link } from "react-router-dom"

export default function Card({id, title, cover}) {
    return (
        <Link to = {`/kasa/${id}`} className="house_link"> 
            <div className="house" >
                <img className="house_img" src={cover} alt={title} />

                <div className="house_name">{title}</div>
            </div>
        </Link>
    )
}