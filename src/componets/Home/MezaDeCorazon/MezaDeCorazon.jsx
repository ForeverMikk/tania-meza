import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// import img7 from './../../../assets/img/img7.webp'
import './MezaDeCorazon.css'

const MezaDeCorazon = () => {

    return (
        <div className='meza-de-corazon'>
            <div className="meza-img">
                {/* <img src={img7} alt="" /> */}
            </div>

            <div className="meza-video">
                <div className="text" data-aos='fade-left' data-aos-duration="850">
                    #MEZALEDEL <br />CORAZON
                </div>

                <div className="video" data-aos='fade-left' data-aos-duration="850">
                    <iframe 
                        src="https://www.youtube.com/embed/_Tx1WpIWdW0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="media">
                    <a href="https://www.facebook.com/TaniaMezaEscorza?ref=page_internal" target="_blank" rel="noreferrer" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/taniameza_" target="_blank" rel="noreferrer" className="instagram"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/taniamezaescorza/" target="_blank" rel="noreferrer" className="twitter"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>     
        </div>
    )
}

export default MezaDeCorazon