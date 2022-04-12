import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './RedesSociales.css'

const RedesSociales = () => {
    return (
        <section className='redes-sociales'>
            <h2 data-aos='fade-up' data-aos-duration="850">Sígueme en redes sociales</h2>
            <div className="logos">
                <a href="https://www.facebook.com/TaniaMezaEscorza?ref=page_internal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/taniamezaescorza/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/taniameza_" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
        </section>
    )
} 

export default RedesSociales