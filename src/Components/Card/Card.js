import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Card = (props) => {
    
    const { imageUrl, location, googleMapsUrl, title, startDate, endDate, description } = props;


    return (
    <article className="card-container">
        <img src={imageUrl} alt="" className="card__img" />
        <div className="card__text-container">
            <p className="card__text__country"><FontAwesomeIcon icon={faMapMarkerAlt} className="card__text__country__icon" /> {location}</p>
            <a className="card__text__google-maps-link" href={googleMapsUrl}>View on Google Maps</a>
            <h2 className="card__text__title">{title}</h2>
            <p className="card__text__date">{startDate} - {endDate}</p>
            <p className="card__text__description">{description}</p>
        </div>
    </article>
)}

export default Card