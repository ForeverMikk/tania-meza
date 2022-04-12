import React from 'react'

import { noticiasItems } from '../../variables/noticiasItem'

import './Noticias.css'

const Noticias = () => {
    return(
        <section className="noticias">
            <h3 className='subtitle' data-aos='fade-up' data-aos-duration="850"> Noticias de Tania Meza</h3>
            <h2 className='title' data-aos='fade-up' data-aos-duration="850">Notas Relevantes</h2>
            {noticiasItems.map(({className, text, title, url, date, src}, index) => (
                <News className={className} text={text} title={title} url={url} date={date} src={src} key={index} />
            ))}
        </section>
    )
}

export const News= ({className, text, title, url, date, src, index}) => {
    return (
        <>
            <div className={className} key={index} data-aos='fade-up'>
                <div className="img">
                    <img src={src} alt={title} />
                </div>

                <div className="data">
                    <div className="text">
                        <span className="date">{date}</span>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
                </div>
            </div>
        </>
    )
}
export default Noticias