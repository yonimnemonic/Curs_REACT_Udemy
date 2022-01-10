import { retornaArreglo } from "../../../../02-intro-javascript/src/bases/07-desestructuracion"

describe('Pruebas en desesctructuración', () => {
    test('should return a stringa and a numbrer', () => {
        
        const [letras, numeros] = retornaArreglo() //'ABC', 123

        // expect( arr ).toEqual(['ABC', 123]);
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe('string');
        
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number');

    })  
})