import './Carrousel.css'
import ArrowRight from '../../assets/chevron-right.png'
import ArrowLeft from '../../assets/chevron-left.png'
import { useState } from 'react'

export default function Slider({ imageSlider }) {

    const pictures = imageSlider

    const [currentPicture, setCurrentPicture] = useState(0)
    
    const getClassName = (i) => {
        if (i === currentPicture) return "show";
        return "";
    }

    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length)
    }

    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture -1
        if (newCurrentPicture < 0){
            setCurrentPicture(pictures.length -1);
            return
        }
        setCurrentPicture(currentPicture - 1) 
    }

    return (
        <div className='cont-car'>
            <div className='carrou'>
                {pictures.map((pic, i) =>
                    <img id='coo' key={pic} src={pic} alt="appartement" className={getClassName(i)}></img>)}
            </div>
            <img className='arrow arrow-right' src={ArrowRight} alt="next" onClick={moveToNext}></img>
            <img className='arrow arrow-left' src={ArrowLeft} alt="previous" onClick={moveToPrevious}></img>
            <p className='count-picture'>{currentPicture + 1} / {imageSlider.length}</p>
        </div>
    )


}