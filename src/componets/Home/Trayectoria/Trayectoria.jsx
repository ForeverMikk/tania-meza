import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Popup from 'reactjs-popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './Trayectoria.css'

import img1 from './../../../assets/img/trayectoria/card1.jpg'
import img2 from './../../../assets/img/trayectoria/card2.jpg'
import img3 from './../../../assets/img/trayectoria/card3.jpg'
import img4 from './../../../assets/img/trayectoria/card4.jpg'
import img5 from './../../../assets/img/trayectoria/card5.jpg'
import img6 from './../../../assets/img/trayectoria/card6.jpg'


const Trayectoria = () => {
    return (
        <section className="trayectoria">
            <h2 className='title' data-aos='fade-up' data-aos-duration="850">Mi Trayectoria</h2>
            <Carousel
                showStatus={false}
                showArrows={true} 
                showIndicators={false} 
                showThumbs={false}
                swipeable={true}
                className='trayectoria-carousel'
            >
                <Popup modal={true} trigger={
                    <div className='trigger trigger-1'>
                        <span>2013 Tula. Foros para tipificación del feminicidio</span>
                    </div>
                }>
                    {(close) => (
                        <div className="popup popup-1">
                            <div className="img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="text">
                                <span>2013 Tula. Foros para <br /> tipificación del feminicidio</span>
                                <button onClick={close}>
                                    <FontAwesomeIcon icon={faClose} size='3x' />
                                </button>
                            </div>
                        </div>
                    )}  
                </Popup>
                

                <Popup modal={true} trigger={
                    <div className='trigger trigger-2'>
                        <span>2013. Capacitación sobre DDHH en Valle del Mezquital 1</span>
                    </div>
                }>
                    {(close) => (
                        <div className="popup popup-1">
                            <div className="img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="text">
                                <span>2013. Capacitación sobre DDHH <br /> en Valle del Mezquital 1</span>
                                <button onClick={close}>
                                    <FontAwesomeIcon icon={faClose} size='3x' />
                                </button>
                            </div>
                        </div>
                    )}  
                </Popup>

                <Popup modal={true} trigger={
                    <div className='trigger trigger-3'>
                        <span>2013. Capacitación sobre DDHH en Valle del Mezquital 2</span>
                    </div>
                }>
                    {(close) => (
                        <div className="popup popup-1">
                            <div className="img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="text">
                                <span>2013. Capacitación sobre DDHH <br /> en Valle del Mezquital 2</span>
                                <button onClick={close}>
                                    <FontAwesomeIcon icon={faClose} size='3x' />
                                </button>
                            </div>
                        </div>
                    )}  
                </Popup>

                <Popup modal={true} trigger={
                    <div className='trigger trigger-4'>
                        <span>2014. Pachuca. Entrevista por trayectoria para Canal 3</span>
                    </div>
                }>
                    {(close) => (
                        <div className="popup popup-1">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="text">
                                <span>2014. Pachuca. Entrevista por <br /> trayectoria para Canal 3</span>
                                <button onClick={close}>
                                    <FontAwesomeIcon icon={faClose} size='3x' />
                                </button>
                            </div>
                        </div>
                    )}  
                </Popup>

                <Popup modal={true} trigger={
                    <div className='trigger trigger-5'>
                        <span>2015 Pachuca. Presentación Libro Marcela Lagarde</span>
                    </div>
                }>
                    {(close) => (
                        <div className="popup popup-1">
                            <div className="img">
                                <img src={img5} alt="" />
                            </div>
                            <div className="text">
                                <span>2015 Pachuca. Presentación <br /> Libro Marcela Lagarde</span>
                                <button onClick={close}>
                                    <FontAwesomeIcon icon={faClose} size='3x' />
                                </button>
                            </div>
                        </div>
                    )}  
                </Popup>

                <Popup modal={true} trigger={
                    <div className='trigger trigger-6'>
                        <span>2015 Pachuca. Protesta ciudadana vs feminicidios</span>
                    </div>
                }>
                    {(close) => (
                        <div className="popup popup-1">
                            <div className="img">
                                <img src={img6} alt="" />
                            </div>
                            <div className="text">
                                <span>2015 Pachuca. <br /> Protesta ciudadana vs feminicidios</span>
                                <button onClick={close}>
                                    <FontAwesomeIcon icon={faClose} size='3x' />
                                </button>
                            </div>
                        </div>
                    )}  
                </Popup>

                

            </Carousel>
        </section>
    )
}

export default Trayectoria