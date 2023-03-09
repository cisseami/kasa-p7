import React from "react";
import "./Collapse.css"
import { useState } from 'react';
import chevron from "../../assets/chevron-up.png"


export default function Collapse(props) {

    const [turn, setTurn] = useState(false);

    return (
        <div className="appartement_des">
            <div className="description_title" onClick={() => setTurn(!turn)} >
                <span className="des_title"> {props.title} </span>
                <img
                    className={turn ? 'chevron chevron_up' : 'chevron chevron_down'}
                    src={chevron}
                    alt="show content"
                />
            </div>
            <div className={turn ? 'collapse_content' : 'collapse_content_hidden'}>{props.content}</div>
        </div>
    )
}
