import React from "react";
import '../css/Card.css'
export function Card({ img }) {
    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w200${img}`} alt="" />
        </div>
    )
}