//desestructuración
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// const {nombre, edad, clave} =  persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const userContext = ({nombre, edad, clave, rango='capitan'})=>{
    // console.log(nombre, edad, clave, rango)
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.3323,
            lng: -12.332  
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);


console.log(nombreClave, anios);

console.log(lat, lng);
