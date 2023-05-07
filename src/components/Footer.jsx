import React from "react";
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti';
import '../css/Footer.css';
export function Footer() {
    const sizeIconRrSs = 30;
    return (
        <footer className='footer'>
            <div className='footer__item rrss-cont'>
                <TiSocialTwitter size={sizeIconRrSs} />
                <TiSocialInstagram size={sizeIconRrSs} />
                <TiSocialFacebook size={sizeIconRrSs} />
            </div>
            <div className='footer__item legal-cont'>
                <p>Próximamente</p>
                <p>Preguntas Frecuntes</p>
                <p>Privacidad</p>
                <p>Contactos de Prensa</p>
            </div>
            <div className='footer__item suscription-cont'>
                <button className="btn-susc">Suscribirse</button>
            </div>

        </footer>
    )
}
