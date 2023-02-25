import React from "react";
import { Card } from "./Card";
import '../css/Section.css';
export function Section({ title, data }) {
    return (
        <div className='section'>
            <h3 className='section__title'>{title}</h3>
            <div className='section__items'>
                {console.log(data)}
                {
                    data.map(item => {
                        return <Card
                            key={item.id}
                            img={item.poster_path}
                        />
                    })
                }
            </div>
        </div>
    )
}