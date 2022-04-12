import React from 'react'

import video1 from './../../assets/video/SeguridadVF.mp4'
import video2 from './../../assets/video/DerechosHumanos.mp4'
import video3 from './../../assets/video/Perros.mp4'
import video4 from './../../assets/video/Economia.mp4'
import video5 from './../../assets/video/Sustentabilidad.mp4'
import tania from './../../assets/img/tania.jpeg'

import './MisCausas.css'

const MisCausas = () => {
    return(
        <section className='mis-causas'>
            <div className="vision">
                <div className="first">
                    <img src={tania} alt="" data-aos='fade-right' data-aos-duration="850"/>
                    <div className="text" data-aos='fade-left' data-aos-duration="850">
                        <h2>Mi Visión</h2>
                        <p>Tengo una gran historia con la comunidad y llevo mucho tiempo dedicándome a ella. He participado con organizaciones a lo largo y ancho del país, en especial dentro de la ciudad de Pachuca. <br /> Mi compromiso inamovible ha sido y continuará siendo impulsar el cambio,  asumiendo el liderazgo en los momentos en los que es necesario tomar decisión y acción.</p>
                    </div>    
                </div>

                <div className="second" data-aos='fade-left' data-aos-duration="850">
                    <p>Desde hace 25 años hallé mi propósito personal y profesional en la lucha por los derechos humanos. Objetivo que persigo incansablemente desde entonces, en cada uno de los espacios en los que he logrado incidir activamente. Razón por la cual mis principales causas resultan ser el eco de los temas que más nos duelen como mujeres, hijas, madres de familia, ciudadanas de una sociedad desigual y con carencias. Mi día a día consiste en perseguir las oportunidades para hacer que el piso sea más parejo para todas y todos, por eso pongo en alto las banderas que me representan a mi y a mis luchas...</p>
                </div>
            </div>

            <div className="causas">
                <h2 data-aos='fade-up' data-aos-duration="850">Mis Causas</h2>

                <div className="videos" data-aos='fade-up' data-aos-duration="850">
                    <div className="video">
                        <video height='550px' width='auto' controls>
                            <source src={video1} type="video/mp4" />
                        </video>
                        <p>PACHUCA SEGURO</p>
                    </div>

                    <div className="video">
                        <video height='550px' width='auto' controls>
                            <source src={video2} type="video/mp4" />
                        </video>
                        <p>DERECHOS HUMANOS</p>
                    </div>

                    <div className="video">
                        <video height='550px' width='auto' controls>
                            <source src={video3} type="video/mp4" />
                        </video>
                        <p>PERRITOS CALLEJEROS</p>
                    </div>

                    <div className="video">
                        <video height='550px' width='auto' controls>
                            <source src={video4} type="video/mp4" />
                        </video>
                        <p>EMPRENDIMIENTO E INNOVACIÓN</p>
                    </div>

                    <div className="video">
                        <video height='550px' width='auto' controls>
                            <source src={video5} type="video/mp4" />
                        </video>
                        <p>DESARROLLO SUSTENTABLE</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MisCausas