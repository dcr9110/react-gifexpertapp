import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category );  
/* 
    const [images, setImages] = useState([]);

      */
/*
    useEffect( () => {
        getGifs( category )
            .then( setImages );
        
    }, [ category ] );
 */
    return (
        <>
            <h3> { category }</h3>
              {loading && <h2 className='animate__animated animate__backInDown'>Cargando...</h2> }
            <div className="card-grid">
                {
                    images.map( img =>(
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
         </>
    )
}
