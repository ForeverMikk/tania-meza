import React from 'react';

import './Contactanos.css'

const Contactanos = () => {
    return (
        <section className="contactanos">
            <h3 className='subtitle' data-aos='fade-up' data-aos-duration="850">Contáctame</h3>
            <h2 className='title' data-aos='fade-up' data-aos-duration="850">¡Cuéntame tus ideas!</h2>
            <p>Para prensa y consultas generales, por favor proporciona tus datos de contacto:</p>
            
            <form action="" data-aos='fade-up' data-aos-duration="850">
                <h3>Pachuca Hidalgo Col. Centro</h3>
                <h2>Elige Una Opción de Contacto</h2>
                
                <div className="checkbox">
                    <label htmlFor="prensa">
                        <input type="checkbox" name="prensa" id="prensa" /> 
                        Prensa
                    </label>
                
                    <label htmlFor="contacto">
                        <input type="checkbox" name="contacto" id="contacto" /> 
                        Contacto
                    </label>
                
                    <label htmlFor="volun">
                        <input type="checkbox" name="volun" id="volun" /> 
                        Voluntariado
                    </label>
                
                    <label htmlFor="otro">
                        <input type="checkbox" name="otro" id="otro" /> 
                        Otro
                    </label>
                </div>

                <div className="inputs">
                    <div className="first">
                        <div className='input-1'>
                            <input type="text" name="nombre" id="nombre" className='input' placeholder='Nombre Completo'/>
                            <input type="text" name="cp" id="cp" className='input' placeholder='Código Postal'/>
                        </div>
                        <div className='input-2'>
                            <input type="email" name="email" id="email" className='input' placeholder='Email'/>
                            <input type="number" name="numero" id="numero" className='input' placeholder='Teléfono'/>
                        </div>
                    </div>

                    <div className="second">
                        <textarea name="mensaje" id="mensaje"></textarea>
                        <button>Envíar</button>
                    </div>

                </div>
            </form>

        </section>
    )
}

export default Contactanos