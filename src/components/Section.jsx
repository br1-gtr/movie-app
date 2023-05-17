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
            ? <div className='section'>
                <h3 className='section__title'>{title}</h3>
                <button onClick={clickHandlerL}>L</button>
                <button onClick={clickHandlerR}>R</button>
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
            : <div className='section'>
                <h3 className='section__title'>{title}</h3>
                <div className='section__items'>
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