import React, { useEffect, useState } from 'react'

import Collapse from "../../components/collapse/Collapse"
import Carrousel from "../../components/carrousel/Carrousel"
import GenericInfo from '../../components/genericInfo/GenericInfo';

import { useParams } from "react-router-dom";
import Datas from '../../data/data'

import styles from "./Accomodation.module.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'
import NotFound from './../notfound/NotFound'




export default function Housing() {

    const [imageSlider, setImageSlider] = useState([]);

    const identity = useParams('id').id;
    const accomodationId = Datas.filter(data => data.id === identity)
    const monObjet = accomodationId[0]

    useEffect(() => {
        const accomodationId = Datas.filter(data => data.id === identity);
        setImageSlider(monObjet !== undefined ? accomodationId[0].pictures : null);
        
    }, [identity, monObjet]);



    return (
                monObjet !== undefined  ? (
        <>
            <Header />
            <Main>
                <Carrousel imageSlider={imageSlider} />
                <GenericInfo accomodationId={monObjet} />
                <>
                <Collapse title={'Description'} content={monObjet.description} />
                <Collapse title={'Équipements'} content={monObjet.equipments.map((eq, spe) => (
                    <li className={styles.li} key={spe}>{eq}</li>
                ))} />
                </>

            </Main>
            <Footer />
        </>
                ) : <NotFound/>
    );
}
