import React from 'react';
//impt
import PropTypes from 'prop-types';

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__animated animate__jello">
            <p>{ title } </p>
            <img src={ url } alt={ title } />           
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}