import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category)=>{
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{ //LOS EFECTOS NO PUEDEN SER ASYNC POQUE ESPERAN ALGO SINCRONO!!
      GetGifs(category)//recuerda que la función recoje los gifs de la API
        .then( (imgs) => {
            setState( //estan los datos que llegan de GetGifs
                {
                    data:imgs,
                    loading: false
                }
            );//
        })
    }, [category])


    return state;// data[], loading: true
}