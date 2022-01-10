//promesas
import  { getHeroesById } from './08-imp-exp'


export const getHeroeByIdAsync = ( id )=>{
    const promesa = new Promise( (resolve, reject)=>{
        setTimeout(() => {
            // console.log('2 segundo despues')
            const heroe = getHeroesById(id)
            if(heroe){
                resolve(heroe)
            }else{
                reject ('No se ha encontrado el heroe')
            }
            console.log(heroe)
        }, 1500);
    
    });
    return promesa;
}
