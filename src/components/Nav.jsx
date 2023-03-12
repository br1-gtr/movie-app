import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import '../css/Nav.css';
export function Nav() {
    return (
        <nav className='nav'>
            <GiHamburgerMenu size={35} />
            <ul className='nav__list-cont'>
                <li>Peliculas</li>
                <li>Series</li>
            </ul>
        </nav>
    )
}