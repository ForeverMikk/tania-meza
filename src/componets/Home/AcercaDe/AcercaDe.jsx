import React from 'react';

import './AcercaDe.css'
import cond1 from './../../../assets/img/acerca-de/2010.jpeg'
import cond2 from './../../../assets/img/acerca-de/2014.jpg'
import cond3 from './../../../assets/img/acerca-de/2017_Sector.jpg'
import cond4 from './../../../assets/img/acerca-de/2017_Premio.jpg'
import cond5 from './../../../assets/img/acerca-de/2018.jpg'
import cond6 from './../../../assets/img/acerca-de/2019.jpg'

export const array = ['acerca-de']

const AcercaDe = () => {

    return (
        <section className='acerca-de' id='acerca-de'>
            <div className="texto" data-aos='fade' data-aos-duration="850">
                <h2>Acerca de mí</h2>
                <p className='p1'>Soy la doctora Tania Meza Escorza; Licenciada en Ciencias de la Comunicación, Maestra en Comunicación y Cultura, y Doctora en Ciencias Políticas y Sociales, con orientación en Comunicación y Género. En los tres casos soy egresada de la UNAM.
                <br />
                Y estoy diplomada en Marketing Político, así como en Comunicación y Cultura Organizacional, por el Tecnológico de Monterrey.
                </p>
                <p className='p2'>
                En 2020, fui Presidenta del Concejo Municipal Interino de Pachuca, durante 100 días de gobierno ciudadano.
                <br />
                Tengo 25 años como académica y activista por los Derechos Humanos en los ámbitos estatal, nacional e internacional, durante los cuales he recibido las siguientes condecoraciones:
                </p>
            </div>

            <div className="condecoraciones">
                <ul className="timeline">
                    <li>
                        <div className="direction-left" data-aos='fade-up' data-aos-duration="850">
                            <div className="description">
                                <h3 className='date'>2010</h3>    
                                <p className='text'>Mención Honorífica del Premio Nacional de Periodismo contra la Discriminación 2010, otorgado por el Alto Comisionado de la ONU para los Derechos Humanos en México.</p>
                            </div>
                            <div className="img">
                                <img src={cond1} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-right" data-aos='fade-up' data-aos-duration="850">
                            <div className="img">
                                <img src={cond2} alt="" />
                            </div>
                            <div className="description">
                                <h3 className="date">2014</h3>
                                <p className="text">Premio Nacional de Investigación Académica, FIMPES 2014.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-left" data-aos='fade-up' data-aos-duration="850">
                            <div className="description">
                                <h3 className='date'>2017</h3>    
                                <p className='text'>Premio Internacional al Mérito Ciudadano 2017 por labor social, otorgado por el sector empresarial de Latinoamérica.</p>
                            </div>
                            <div className="img">
                                <img src={cond3} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-right" data-aos='fade-up' data-aos-duration="850">
                            <div className="img">
                                <img src={cond4} alt="" />
                            </div>
                            <div className="description">
                                <h3 className="date">2017</h3>
                                <p className="text">Premio al Mérito Periodístico con perspectiva de Género 2017, otorgado por el Senado de la República.</p>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div className="direction-left" data-aos='fade-up' data-aos-duration="850">
                            <div className="description">
                                <h3 className='date'>2018</h3>    
                                <p className='text'>Medalla al Mérito en la Promoción y Defensa de los Derechos Humanos 2018, otorgado por la Comisión de Derechos Humanos del Estado de Hidalgo.</p>
                            </div>
                            <div className="img">
                                <img src={cond5} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-right" data-aos='fade-up' data-aos-duration="850">
                            <div className="img">
                                <img src={cond6} alt="" />
                            </div>
                            <div className="description">
                                <h3 className="date">2019</h3>
                                <p className="text">Premio “La mujer del año” al Mérito Social 2019, otorgado por el sector empresarial hidalguense.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AcercaDe