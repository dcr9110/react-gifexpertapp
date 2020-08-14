import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {


    return (
        <div className="card animate__animated animate__jello">
            <h4>{ title } </h4>
            <img src={ url } alt={ title } />           
        </div>
    )
}

