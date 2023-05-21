import React from "react";
import { AiOutlinePlayCircle, AiOutlinePlusCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import '../css/Card.css';
import { useStoreML } from '../store/store-mi-lista.jsx';

export function Card({ img, cv = false, title }) {

    const iconSize = 65;

    const cvProgres = Math.floor((Math.random() * (98 - 40 + 1)) + 40); //Random para % de barra reprodución

    const addML = useStoreML(state => state.addML);
    const removeML = useStoreML(state => state.removeML);
    const mi_lista = useStoreML(state => state.mi_lista);

    const handlerAddMovie = () => {
        if (!mi_lista.includes(img)) { addML(img) }
    }
    const handlerRemoveMovie = () => {
        const newList = mi_lista.filter(el => el !== img);
        removeML(newList);
    }

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
                {
                    (title === 'Mi Lista')
                        ? <AiOutlineCloseCircle size={iconSize} className='card__btn card__btn--remove-list' onClick={handlerRemoveMovie} />
                        : <AiOutlinePlusCircle size={iconSize} className='card__btn card__btn--add-list' onClick={handlerAddMovie} />
                }
            </div>
            {cv && <div style={styleDivCv}></div> /*Suma barra de reproducciónc SI CV=TRUE*/}
        </div>
    )
}