import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './Card.css'

const Card = (props) => (
    <article className="card-container">
        <img src={props.item.imageUrl} alt="" className="card__img" />
        <div className="card__text-container">
            <p className="card__text__country"><FontAwesomeIcon icon={faMapMarkerAlt} className="card__text__country__icon" /> {props.item.location}</p>
            <a className="card__text__google-maps-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
            <h2 className="card__text__title">{props.item.title}</h2>
            <p className="card__text__date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="card__text__description">{props.item.description}</p>
        </div>
    </article>
)

export default Card