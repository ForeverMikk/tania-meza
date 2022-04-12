import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import { menuItems } from '../../variables/menuItems'
import './Navbar.css'

const Navbar = () => {

    const [buttonClicked, setButtonClicked] = useState(false)

    const handleClick = () => {
        setButtonClicked(!buttonClicked)
    }
    
    const scrollToElement = (element) => {
        const scrolledElement = document.getElementById(element)

        handleClick()
        scrolledElement.scrollIntoView()
    }
    
    return(
        <nav className='navbar'>
            <Link className='nav-logo' to='/'>
                <span>Tania Meza</span>
                <p>Activista Social</p>
            </Link>
            
            <button className="menu-icon" onClick={handleClick}>
                <FontAwesomeIcon icon={ buttonClicked ? faTimes : faBars} size='2x' />
            </button>
            
            <ul className={ buttonClicked ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' className='nav-links' onClick={() => {scrollToElement('acerca-de')}}>
                        Acerca de mí
                    </Link>
                </li>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} className={item.className} onClick={handleClick}>{item.title}</Link>
                    </li>
                ))}
            </ul>

            {/* <div className="nav-buttons">
                <button className='nav-button' onClick={() => {scrollToElement('footer')}}>
                    Suscríbete
                </button>
                <Link to='/contactanos' className='nav-button'>Súmate</Link>
            </div> */}
            
        </nav>
    )
}

export default Navbar