import React from "react";
import { Card } from "./Card";
import '../css/Section.css';

import { useRef } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Section({ title, dataApi }) {

    const sliderRef = useRef([]);

    function clickHandlerL() {
        sliderRef.current.scrollLeft -= 220;
    }
    function clickHandlerR() {
        sliderRef.current.scrollLeft += 220;
    }

    return (
        (title !== 'Continuar Viendo')
            ? (title === 'Mi Lista') // MI LISTA
                ? <div className='section' id={`${title}`}>
                    <h3 className='section__title'>{title}</h3>
                    <button className='section__btn btn-l' onClick={clickHandlerL}>L</button>
                    <button className='section__btn btn-r' onClick={clickHandlerR}>R</button>
                    <div className='section__items' ref={sliderRef}>
                        {
                            (dataApi.length !== 0)
                                ? dataApi.map(item => {
                                    return <Card
                                        key={item}
                                        img={item}
                                        title={title}
                                    />
                                })
                                : <div className='list__empty'>
                                    <AiOutlinePlusCircle size={100} />
                                </div>
                        }
                    </div>
                </div>
                : <div className='section' id={`${title}`}>
                    <h3 className='section__title'>{title}</h3>
                    <button className='section__btn btn-l' onClick={clickHandlerL}>L</button>
                    <button className='section__btn btn-r' onClick={clickHandlerR}>R</button>
                    <div className='section__items' ref={sliderRef}>
                        {
                            (dataApi.length !== 0)
                                ? dataApi.results.map(item => {
                                    return <Card
                                        key={item.id}
                                        img={item.poster_path}
                                        title={title}
                                    />
                                })
                                : <>Cargando...</>
                        }
                    </div>
                </div>
            //CONTINUAR VIENDO
            : <div className='section' id={`${title}`}>
                <h3 className='section__title'>{title}</h3>
                <button className='section__btn btn-l' onClick={clickHandlerL}>L</button>
                <button className='section__btn btn-r' onClick={clickHandlerR}>R</button>
                <div className='section__items' ref={sliderRef}>
                    {
                        (dataApi.length !== 0)
                            ? dataApi.results.map(item => {
                                return <Card
                                    key={item.id}
                                    img={item.poster_path}
                                    title={title}
                                    cv={true}
                                />
                            })
                            : <>Cargando...</>
                    }
                </div>
            </div>

    )
}