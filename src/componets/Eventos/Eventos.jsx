import React from 'react'

import { eventosItems } from '../../variables/eventosItem'
import './Eventos.css'

const Eventos = () => {

    return(
        <section className='eventos'>
            {/* <h3 className='subtitle' data-aos='fade-up' data-aos-duration="850"> Noticias de Tania Meza</h3> */}
            <h2 className='title' data-aos='fade-up' data-aos-duration="850">Eventos</h2>

            <div className="event-cards" data-aos='fade-up' data-aos-duration="850">
                {eventosItems.map((item, index)=> (
                    <div className="card" key={index}>
                        <div className="img">
                            <img src={item.src} alt="" />
                        </div>

                        <div className="event-data">
                            {/* <p className='status'>{item.status}</p> */}
                            <h3>{item.title}</h3>
                            <div className='text'>
                                <p>{item.date}</p>
                                <p>{item.type}</p>
                            </div>
                            <button>Detalles</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Eventos