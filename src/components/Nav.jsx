import React from "react";

import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti';
import '../css/Nav.css';
export function Nav() {

    return (
        <>
            <nav className='nav'>
                <GiHamburgerMenu size={35} />
                <ul className='nav__list-cont'>
                    <li>Peliculas</li>
                    <li>Series</li>
                </ul>
                <div className='nav-mobile'>
                    <GrClose size={15} className='btn-close-nav' />
                    <BiUserCircle size={75} />
                    <ul className='nav-mobile__list-cont'>
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Tendencias</li>
                        <li>Continuar Viendo</li>
                        <li>Selección para mi</li>
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