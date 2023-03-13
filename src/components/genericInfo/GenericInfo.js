import React from "react";
import starGrey from '../../assets/star-grey.png';
import starRed from '../../assets/star-red.png';
import styles from "./GenericInfo.module.css"

export default function GenericInfo(props) {

    const accomodationId = props.accomodationId
    const name = accomodationId.host.name.split(' ');
    const rating = accomodationId.rating;

    return (
        <div>
            <div className={styles.appartementHeader}>
                <div className={styles.appartementTitle}>
                    <h1 className={styles.appart}>{accomodationId.title}</h1>
                    <h2 className={styles.localisation}>{accomodationId.location}</h2>
                    <div className={styles.appartementTags}>
                        {accomodationId.tags.map((tag, index) => {
                            return (
                                <span className={styles.appartementTag} key={index}>{tag}</span>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.appartementOwner}>
                    <div className={styles.appartementOwnerDetails}>
                        <h3 className={styles.owne}>
                            <span>{name[0]}</span>
                            <span>{name[1]}</span>
                        </h3>
                        <img className={styles.appartementOwnerBadge} src={accomodationId.host.picture} alt="host of this accomodation" />
                    </div>
                    <div className={styles.appartementOwnerStars}>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <img key={index} src={ratingValue <= rating ? starRed : starGrey} alt="star" />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}