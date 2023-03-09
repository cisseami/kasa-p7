import React from "react";
import starGrey from '../../assets/star-grey.png';
import starRed from '../../assets/star-red.png';

export default function GenericInfo(props){



    const accomodationId = props.accomodationId
    console.log(accomodationId);

    const name = accomodationId.host.name.split(' ');
    const rating = accomodationId.rating;

    return(
        <div>
            <div className="appartement-header">
                <div className="appartement-title">
                    <h1 className='appart'>{accomodationId.title}</h1>
                    <h2 className='localisation'>{accomodationId.location}</h2>
                    <div className="appartement-tags">
                        {accomodationId.tags.map((tag, index) => {
                            return (
                                <span className="appartement-tag" key={index}>{tag}</span>
                            )
                        })}
                    </div>
                </div>
                <div className="appartement-owner">
                    <div className="appartement-owner-details">
                        <h3 className='owne'>
                            <span>{name[0]}</span>
                            <span>{name[1]}</span>
                        </h3>
                        <img className="appartement-owner-badge" src={accomodationId.host.picture} alt="host of this accomodation" />
                    </div>
                    <div className="appartement-owner-stars">
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