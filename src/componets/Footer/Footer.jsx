import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

import logo from './../../assets/img/tania-meza.png'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="hashtag">
                <h3>#Mezale <br />delcorazon</h3>
                <p>Pachuca Hidalgo <br /><br /> Col. Centro </p>
            </div>
            
            <div className="tania-meza">
                <img src={logo} alt="" />
                <h3>Activista Social</h3>
                <div>
                    <a href="https://www.facebook.com/TaniaMezaEscorza?ref=page_internal" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/taniameza_" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/taniamezaescorza/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                <a className='binaria-link' href='https://binahria.com.mx/'>© 2021 Tania Meza. Creado por Binahria Analytics</a>
            </div>
            
            {/* <div className="suscribete">
                <p className='title'><span>Suscríbete al Boletín </span> <br /> &nbsp;&nbsp;&nbsp;&nbsp; Recibe mis análisis más relevantes</p>
                
                <Link className='suscribete-button' to='/contactanos'> Suscríbete </Link>

                <p className='sub-text'>
                    Incluyen temas sobre derechos humanos, estudios de género y <br /> 
                    estadísticas relevantes semanalmente. <br />
                    SIN COSTO, puedes cancelar tu suscripción en cualquier momento.
                </p>
            </div> */}
        </footer>
    )
}

export default Footer