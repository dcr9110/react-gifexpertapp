import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {


    const [categorias, setCategorias] = useState(['Samurai X']);

   /*  const handleAdd = () =>{
        setcategorias( ['HunterXHunter', ...categorias] );
        //setcategorias(cats => ['HunterXHunter', ...categorias] );
    }; */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            
            {
                categorias.map( category  => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ))
            }
        </div>
    )
}
