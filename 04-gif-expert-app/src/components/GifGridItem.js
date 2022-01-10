import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ({title, url}) => { //crea la caja con la imagen y titulo

    return (
        <div className='card animate__animated animate__fadeIN'>
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


/*
1-Añadir proptypes- url- title
2- enviar el title y el url a la hora de utiliizar shallow()
3-actualizar su snapshot con los cambios.
*/