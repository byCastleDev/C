import React from 'react'

export default function Footer() {
  return (
    <div className='contenedor-Footer'>
        <div className="footer-informacion">
            <div className="contacto">
                <h3>Contactos</h3>
                <ul className="lista-contactos">
                    <li className="whatsapp">Whatsapp</li>
                    <li className="ig">Instagra</li>
                    <li className="git">Github</li>
                </ul>
            </div>
            <div className="Suscripcion">
                <h3>Suscripcion</h3>
                <div className="contenedor-suscripcion">
                    <input type="text" />
                    <button>Suscribirse</button>
                </div>
            </div>
        </div>
        <br />
        <img src="" alt="logo" />
    </div>
  )
}
