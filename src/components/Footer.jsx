import React from "react";
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import '../css/Footer.css';

import { Link as LinkScroll } from 'react-scroll';

export function Footer({ title }) {
    const sizeIconRrSs = 30;
    return (
        <footer className='footer' id={`${title}`}>
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
            <LinkScroll activeClass="active" to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                <BsFillArrowUpCircleFill size={35} className='footer__btn-return' />
            </LinkScroll>
        </footer>
    )
}
