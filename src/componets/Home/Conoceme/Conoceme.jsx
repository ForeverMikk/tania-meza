import React from 'react'
import { Link } from 'react-router-dom'

import './Conoceme.css'
import sobre from './../../../assets/img/sobre-mi.png'
import causas from './../../../assets/img/causas.png'
// import aportar from './../../../assets/img/aportar.png'
import suscribete from './../../../assets/img/suscribete.png'
import voluntariado from './../../../assets/img/voluntariado.png'

const scrollToElement = (element) => {
    const scrolledElement = document.getElementById(element)

    scrolledElement.scrollIntoView()
}

const Conoceme = () => {
    return (
        <section className='conoceme'>

            <div className="conoceme-buttons">
                <h2>Conóceme</h2>
                <div className="buttons">
                    <div className="button sobre-button">
                        <img src={sobre} alt="Sobre mí" />
                        <button data-aos='fade-up' data-aos-duration="850" className='link-button' onClick={() => {
                            scrollToElement('acerca-de')
                        }}>Sobre Mí</button>
                    </div>

                    <div className="button causas-button">
                        <img src={causas} alt="Sobre mí" />
                        <Link data-aos='fade-up' data-aos-duration="850" to='/mis-causas' className='link-button'>Mis Causas</Link>
                    </div>
                </div>

            </div>

            <div className="sumate-buttons">
                <h2>Súmate a mis causas</h2>
                <div className="buttons">
                    {/* <div className="button aportar-button">
                        <img src={aportar} alt="Sobre mí" />
                        <a href=''>Aportar</a>
                    </div> */}

                    <div className="button suscribete-button">
                        <img src={suscribete} alt="Sobre mí" />
                        <button data-aos='fade-up' data-aos-duration="850" className='link-button' onClick={() => {
                            scrollToElement('footer')
                        }}>Suscribirse</button>
                    </div>

                    <div className="button voluntariado-button">
                        <img src={voluntariado} alt="Sobre mí" />
                        <Link data-aos='fade-up' data-aos-duration="850" to='/contactanos' className='link-button'>Voluntariado</Link>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Conoceme