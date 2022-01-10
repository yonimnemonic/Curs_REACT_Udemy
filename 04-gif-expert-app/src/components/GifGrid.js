import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images,  loading} = useFetchGifs( category );

    // useEffect( ()=>{
    //     GetGifs(category)
    //     .then( setImages)
    // }, [ category] ) //dipara el código solo cuando se renderiza el componente por 1ª vez.

    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className='card-grid'>
            {
             images.map( ( img ) =>(
                 <GifGridItem 
                 img={img.id}
                 { ...img }
                 />
                 ))
            }
        </div>
        
        </>
    )
}
