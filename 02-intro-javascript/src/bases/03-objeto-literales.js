
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 553383838,
        lat: 14.3232,
        lng: 34.3332
    }
};



const persona2 = {...persona};
 persona.nombre = 'peter';
 console.log(persona);
 console.log(persona2);
