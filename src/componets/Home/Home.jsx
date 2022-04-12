import React from 'react'

import MezaCarousel from './MezaCarousel/MezaCarousel';
import MezaDeCorazon from './MezaDeCorazon/MezaDeCorazon';
import Conoceme from './Conoceme/Conoceme';
import AcercaDe from './AcercaDe/AcercaDe';
import Trayectoria from './Trayectoria/Trayectoria';
import { News } from '../Noticias/Noticias';
import RedesSociales from './RedesSociales/RedesSociales';

import { noticiasItems } from '../../variables/noticiasItem';

import './Home.css'
import '../Noticias/Noticias.css'

const Home = () => {

    const tresNoticias = noticiasItems.slice(0,3)

    return(
        <section className='home-section'>
            <MezaCarousel />
            <MezaDeCorazon />
            {/* <Conoceme /> */}
            <AcercaDe />
            <Trayectoria />
            <div className='noticias-home'>
                <h3 className='subtitle' data-aos='fade-up' data-aos-duration="850"> Noticias de Tania Meza</h3>
                <h2 className='title' data-aos='fade-up' data-aos-duration="850">Notas Relevantes</h2>
                
                {tresNoticias.map(({className, text, title, url, date, src}, index) => (
                    <News className={className} text={text} title={title} url={url} date={date} src={src} key={index} />
                ))}
            </div>
            <RedesSociales />
        </section>
    )
}

export default Home