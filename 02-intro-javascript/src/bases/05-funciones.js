function saludar(nombre)
 {
     return `Hola que tal ${nombre}`
 }

 const saludar2 = (nombre)=>  `Hola, ${nombre}`;


export const getUser = ()=> ({
         uid: 'ABC123',
         username: 'PapiChulo',
});

 export const getUsuarioActivo = (nombre) => 
    ({
         uid: 'ABC54',
         username: nombre
     })
 ;
