import React from "react";
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import '../css/Card.css';
import { useStoreML } from '../store/store-mi-lista.jsx';

export function Card({ img, cv = false }) {

    const iconSize = 65;
    const cvProgres = Math.floor((Math.random() * (98 - 40 + 1)) + 40);


    const addML = useStoreML(state => state.addML);

    const styleDivCv = {
        width: `${cvProgres}%`,
        height: "5px",
        position: "absolute",
        bottom: "0",
        left: "0",
        backgroundColor: "rgb(216, 255, 44)",
        borderTopRightRadius: "20px"
    }

    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w200${img}`} alt="" className='card__img' />
            <div className='card__btn-cont'>
                <AiOutlinePlayCircle size={iconSize} className='card__btn card__btn--play' />
                <AiOutlinePlusCircle size={iconSize} className='card__btn card__btn--add-list' onClick={() => { addML(img) }} />
            </div>
            {cv && <div style={styleDivCv}></div>}
        </div>
    )
}