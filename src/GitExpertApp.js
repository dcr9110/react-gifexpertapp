import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = ( {defaultCategories = ['Samurai X'] } ) => {

    const [categorias, setCategorias] = useState(defaultCategories);
   
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr/>
            
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
