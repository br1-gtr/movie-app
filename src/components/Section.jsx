import React from "react";
import { Card } from "./Card";
import '../css/Section.css';
import { useRef } from 'react';

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
                ? <div className='section'>
                    <h3 className='section__title'>{title}</h3>
                    <button className='section__btn btn-l' onClick={clickHandlerL}>L</button>
                    <button className='section__btn btn-r' onClick={clickHandlerR}>R</button>
                    <div className='section__items' ref={sliderRef}>
                        {
                            (dataApi.length !== 0)
                                ? dataApi.map(item => {
                                    return <Card
                                        img={item}
                                    />
                                })
                                : <>Cargando...</>
                        }
                    </div>
                </div>
                : <div className='section'>
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
                                    />
                                })
                                : <>Cargando...</>
                        }
                    </div>
                </div>
            //CONTINUAR VIENDO
            : <div className='section'>
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
                                    cv={true}
                                />
                            })
                            : <>Cargando...</>
                    }
                </div>
            </div>

    )
}