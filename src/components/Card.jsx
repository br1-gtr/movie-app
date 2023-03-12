import React from "react";
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import '../css/Card.css'
export function Card({ img }) {
    const iconSize = 65;
    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w200${img}`} alt="" className='card__img' />
            <div className='card__btn-cont'>
                <AiOutlinePlayCircle size={iconSize} className='card__btn card__btn--play' />
                <AiOutlinePlusCircle size={iconSize} className='card__btn card__btn--add-list' />
            </div>
        </div>
    )
}