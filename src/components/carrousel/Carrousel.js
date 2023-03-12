
import ArrowRight from '../../assets/chevron-right.png'
import ArrowLeft from '../../assets/chevron-left.png'
import { useState } from 'react'
import styles from "./Carrousel.module.css"

export default function Slider({ imageSlider }) {

    const pictures = imageSlider

    const [currentPicture, setCurrentPicture] = useState(0)

    const getClassName = (i) => {
        if (i === currentPicture) return `${styles.show}`;
        return "";
    }

    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length)
    }

    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
            return
        }
        setCurrentPicture(currentPicture - 1)
    }

    return (
        <div className={styles.contCar}>
            <div className={styles.carrou}>
                {pictures.map((pic, i) =>
                    <img id={styles.coo} key={pic} src={pic} alt={styles.appartement} className={getClassName(i)}></img>)}
            </div>
            {pictures.length > 1 && 
                <>
                    <img className={`${styles.arrow } ${styles.arrowRight}`} src={ArrowRight} alt="next" onClick={moveToNext}></img>
                    <img className={`${styles.arrow } ${styles.arrowLeft}`} src={ArrowLeft} alt="previous" onClick={moveToPrevious}></img>
                    <p className={styles.countPicture}>{currentPicture + 1} / {imageSlider.length}</p>
                </>
            }
        </div>
    )


}