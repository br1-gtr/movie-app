import React from "react";
import { Card } from "./Card";
import '../css/Section.css';
import { motion } from 'framer-motion';
export function Section({ title, dataApi }) {
    //const widthNav = window.innerWidth;
    return (
        <div className='section'>
            <h3 className='section__title'>{title}</h3>
            <motion.div className='section__items' drag='x' dragConstraints={{ right: 0, left: -3056 }}>
                {
                    (dataApi.length !== 0)
                        ? dataApi.results.map(item => {
                            return <motion.div>
                                <Card
                                    key={item.id}
                                    img={item.poster_path}
                                />
                            </motion.div>
                        })
                        : <>Cargando...</>
                }
            </motion.div>
        </div>
    )
}