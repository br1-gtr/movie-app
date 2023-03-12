import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../css/Slider.css';
import { Carousel } from 'react-responsive-carousel';

export function Slider({ data }) {

    let arrCarr = [];

    if (data.results) {
        for (let i = 1; i < 6; i++) {
            arrCarr.push(data.results[i])
        }
    }
    return (
        (arrCarr)
            ? (
                <Carousel infiniteLoop={true}
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    showArrows={false}
                    showStatus={false}
                    className='carr'>

                    {arrCarr.map(element => {
                        return <div className='carr__item'>
                            <img src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`} alt="dsa" />
                        </div>
                    })}

                </Carousel>
            )
            : <></>

    )
}