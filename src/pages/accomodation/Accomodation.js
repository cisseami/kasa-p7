import React, { useEffect, useState } from 'react'

import Collapse from "../../components/collapse/Collapse"
import Carrousel from "../../components/carrousel/Carrousel"
import  GenericInfo  from '../../components/genericInfo/GenericInfo';

import { useParams } from "react-router-dom";
import Datas from '../../data/data'

import styles from "./Accomodation.module.css"




export default function Housing() {

    const [imageSlider, setImageSlider] = useState([]);

    const identity = useParams('id').id;
    const accomodationId = Datas.filter(data => data.id === identity)
    const monObjet = accomodationId[0]

    useEffect(() => {
        const accomodationId = Datas.filter(data => data.id === identity);
        setImageSlider(accomodationId[0].pictures);
    }, [identity]);


    const description = monObjet.description;
    const equipments = monObjet.equipments;


    return (

        <>
            <Carrousel imageSlider={imageSlider} />
            <GenericInfo accomodationId={monObjet} />
            <Collapse title={'Description'} content={description} />
            <Collapse title={'Équipements'} content={equipments.map((eq, spe) => (
                <li className={styles.li} key={spe}>{eq}</li>
            ))} />
        </>
    );
}
