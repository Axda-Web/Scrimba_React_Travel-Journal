import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => (
    <header className="header-container">
        <FontAwesomeIcon icon={faGlobeEurope} className="header__title__icon" />
        <h1 className="header__title"> my travel journal.</h1>
    </header>
)

export default Header