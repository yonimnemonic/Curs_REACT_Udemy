
const nombre = 'AGustí'
const apellido = 'Martinez'

const nombreCompleto = `${nombre}, ${apellido}`
// console.log(nombreCompleto)

export function getSaludo(nombre = 'Carlos'){
    return 'Hola ' + nombre;
}

// console.log(` Este es un texto: ${getSaludo("agusti")}`)