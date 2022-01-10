import '@testing-library/jest-dom';
import { getSaludo } from "../../../../02-intro-javascript/src/bases/02-template-strings";


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Agustín', ()=>{
            const nombre = 'Agustín';
            const saludo = getSaludo(nombre)

            expect ( saludo ).toBe('Hola ' + nombre)
    })
})

//getSaludo debe de retornar Hola Carlos! si no hay argumento nombre


    test('getSaludo debe retornar Hola Carlos', ()=>{
            const saludo = getSaludo()

            expect ( saludo ).toBe('Hola Carlos')
    })

