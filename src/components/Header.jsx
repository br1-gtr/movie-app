import React from "react";
import { Nav } from "./Nav.jsx";
import { BiUserCircle } from 'react-icons/bi';
import '../css/Header.css';
export function Header() {
    return (
        <header className='header'>
            <Nav />
            <div className='title'>
                <h1 className='title__main'>BLOCKBUSTER</h1>
                <p className='title__sub'>max</p>
            </div>
            <div className='user'>
                <BiUserCircle size={40} />
                <p className='user__name'>Usuario</p>
            </div>
        </header>
    )
}