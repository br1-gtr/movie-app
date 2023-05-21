import React from "react";
import { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti';
import '../css/Nav.css';

import { Link as LinkScroll } from 'react-scroll';

export function Nav() {
    const menuMobileRef = useRef([]);

    const handlerMenuMobile = () => {
        menuMobileRef.current.classList.toggle("nav-display-none")
    }
    const handlerCloseMenuMobile = () => {
        menuMobileRef.current.classList.toggle("nav-display-none")
    }

    return (
        <>
            <nav className='nav'>
                <GiHamburgerMenu size={35} className='nav__icon' onClick={handlerMenuMobile} />
                <ul className='nav__list-cont'>
                    <LinkScroll activeClass="active" to="Tendencias" spy={true} smooth={true} offset={0} duration={500}>
                        <li>Peliculas</li>
                    </LinkScroll>
                    <LinkScroll activeClass="active" to="Tendencias" spy={true} smooth={true} offset={0} duration={500}>
                        <li>Series</li>
                    </LinkScroll>
                </ul>
                <div className='nav-mobile nav-display-none' ref={menuMobileRef}>
                    <GrClose size={15} className='btn-close-nav' onClick={handlerCloseMenuMobile} />
                    <BiUserCircle size={75} />
                    <ul className='nav-mobile__list-cont'>
                        <LinkScroll activeClass="active" to="Tendencias" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Peliculas</li>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="Tendencias" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Series</li>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="Tendencias" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Tendencias</li>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="Continuar Viendo" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Continuar Viendo</li>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="Selección para mi" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Selección para mi</li>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="Mi Lista" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Mi Lista</li>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="Contacto" spy={true} smooth={true} offset={0} duration={500}>
                            <li onClick={handlerCloseMenuMobile}>Contacto</li>
                        </LinkScroll>
                        <div className='nav-mobile_rrss'>
                            <TiSocialTwitter size={20} />
                            <TiSocialInstagram size={20} />
                            <TiSocialFacebook size={20} />
                        </div>
                    </ul>
                </div>

            </nav>
        </>
    )
}